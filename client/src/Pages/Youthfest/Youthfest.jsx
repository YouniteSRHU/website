import React from 'react'
import EventSlider from '../../components/EventSlider/EventSlider'
import EventHeader from '../../components/EventHeader/EventHeader'
import { useQuery } from "react-query";
import { getFest } from '../../utils/api'
import { PuffLoader } from "react-spinners";
import './Youthfest.css'
const Youthfest = () => {
  const { data, isLoading, isError } = useQuery(["fest"], () =>
        getFest()
    );
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        );
    }
    const images = data.events[0].images
    const flagshipData = data?.events.filter(event=>event.fest_identifier === 'F')
    const nonFlagshipData = data?.events.filter(event=>event.fest_identifier === 'B')
  return (
    <div className='youth-container'>
      <EventHeader eh_imageURl={images} eh_heading={data?.fest_name} eh_desc={data?.fest_desc} display_prop={"none"}/>
      <p className="festDate">{data?.fest_date}</p>
      <EventSlider eventType={"Flagship Events"} data={flagshipData}/>
      <EventSlider eventType={"non Flagship Events"}  data={nonFlagshipData}/>
    </div>
  )
}

export default Youthfest