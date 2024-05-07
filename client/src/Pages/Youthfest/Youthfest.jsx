import React from 'react'
import EventSlider from '../../components/EventSlider/EventSlider'
import EventHeader from '../../components/EventHeader/EventHeader'
import { useQuery } from "react-query";
import { getFest } from '../../utils/api'
import { Hourglass, Triangle } from "react-loader-spinner";
import dayjs from 'dayjs';
import './Youthfest.css'
import Warning from '../../components/Warning/Warning';
const Youthfest = () => {
    const { data, isLoading, isError } = useQuery(["fest"], () =>
        getFest()
    );
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <Triangle />
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
    const images = [
        {
            "image_src": "https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/1/YUVOTSAV_BANNER_MOBILE.png"
        },
        {
            "image_src": "https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/1/YUVOTSAV_BANNER_MOBILE.png"
        },
        {
            "image_src": "https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/1/YUVOTSAV_BANNER_MOBILE.png"
        }
    ]
    const flagshipData = data?.events.filter(event => event.fest_identifier === 'F')
    const nonFlagshipData = data?.events.filter(event => event.fest_identifier === 'B')
    return (
        <div className='youth-container'>
            <EventHeader eh_imageURl={images} eh_heading={data?.fest_name} eh_desc={data?.fest_desc} buttonText={"Register Now!"} regLink={"https://bit.ly/m/yuvotsav24"}/>
            <p className="festDate"><span>DATE</span><span>:</span><span>{dayjs(data?.fest_date).format('DD-MM-YYYY')} TO 17-05-2024</span></p>
            <EventSlider eventType={"Flagship Events"} data={flagshipData} />
            <EventSlider eventType={"non Flagship Events"} data={nonFlagshipData} />
        </div>
    )
}

export default Youthfest
