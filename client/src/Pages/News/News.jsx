import React from 'react'
import Warning from '../../components/Warning/Warning'
import EventHeader from '../../components/EventHeader/EventHeader'
import LatestNews from '../../components/LatestNews/LatestNews'
import useNews from '../../Hooks/useNews'
import { Triangle } from "react-loader-spinner";

const News = () => {
    const {data, isError, isLoading} = useNews()
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <Triangle/>
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
    const headerData={
        eh_heading:"News Corner",
        eh_desc:"Hello visitor! This is the news corner. Here you will get the latest updates related to the events. Also make sure to follow us on instagram 😉",
        instalink:"https://www.instagram.com/younite_srhu/",
        images :[
            {
                "image_src":"https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/NewsPage/LatestNews2024-02-24-1.jpeg.jpg"
            },
            {
                "image_src":"https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/NewsPage/LatestNews2024-02-24-2.jpeg.png"
            },
            {
                "image_src":"https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/NewsPage/LatestNews2024-02-24-3.jpeg.png"
            }
        ],

    }
    return (
        <>
            <Warning message={"Do pay mind to event specific whatsapp groups also."}/>
            <EventHeader 
            eh_imageURl={headerData.images} 
            eh_heading={headerData.eh_heading}
            eh_desc={headerData.eh_desc} 
            regLink={headerData.instalink}
            bgColor="transparent"
            buttonText="Instagram Link"
            border= "2px solid white"
            />
            <LatestNews updates={data}/>
        </>
    )
}

export default News
