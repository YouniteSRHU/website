import React from 'react'
import EventSlider from '../../components/EventSlider/EventSlider'
import EventHeader from '../../components/EventHeader/EventHeader'
import { useQuery } from "react-query";
import { getFest } from '../../utils/api'
import { PuffLoader } from "react-spinners";
import { images } from '../../components/Gallery/images';
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
    console.log(images)
  return (
    <div className='youth-container'>
      <EventHeader eh_imageURl={images} eh_heading={data?.fest_name} eh_desc={data?.fest_desc} display_prop={"none"}/>
      <EventSlider eventType={"Flagship Events"} />
      <EventSlider eventType={"non Flagship Events"} />
    </div>
  )
}

export default Youthfest