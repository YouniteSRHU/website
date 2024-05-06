import React from 'react'
import EventHeader from '../../components/EventHeader/EventHeader'
import './SingleEvent.css'
import Warning from '../../components/Warning/Warning'
import EventInfo from '../../components/EventInfo/EventInfo'
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getEvent,getFest } from '../../utils/api'
import { Hourglass } from "react-loader-spinner";
const SingleEvent = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(-1)[0];
    const { data, isLoading, isError } = useQuery(["event", id], () =>
        getEvent(id)
    );
    const { festdata } = useQuery(["fest"], () =>
    getFest()
);
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <Hourglass />
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
    return (
        <>
            <Warning message={[`This event has same timing as ${data?.colliding_events}  `]} />
            <EventHeader eh_imageURl={data.images} eh_heading={data?.event_name} eh_desc={data?.event_desc} regLink={data?.registration_link} buttonText="Register Now!"/>
            <EventInfo
                date={data?.event_datetime}
                venue={data?.event_venue}
                guidelines={data?.guidelines}
                terms={data?.tc}
                mapImage={data?.event_map}
                phone={data?.contact_details}
                brochureLink={data?.brochure_link}
            />
        </>
    )
}

export default SingleEvent
