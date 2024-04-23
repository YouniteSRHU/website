import React from 'react'
import Warning from '../../components/Warning/Warning'
import EventHeader from '../../components/EventHeader/EventHeader'
import LatestNews from '../../components/LatestNews/LatestNews'
import {useNews} from '../../Hooks/useNews'
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
                "image_src":"https://res.cloudinary.com/dbnzslhl1/image/upload/v1713803012/Designer_lgupd4.jpg"
            },
            {
                "image_src":"https://res.cloudinary.com/dbnzslhl1/image/upload/v1713803013/younite_srhut_a6f8my.png"
            },
            {
                "image_src":"https://res.cloudinary.com/dbnzslhl1/image/upload/v1713803016/younite_srhut_1_artaih.png"
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