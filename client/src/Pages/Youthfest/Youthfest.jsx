import React from 'react'
import EventSlider from '../../components/EventSlider/EventSlider'
import EventHeader from '../../components/EventHeader/EventHeader'

const Youthfest = () => {
  const festHeaderData =
  {
    eh_imageURl: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqeYZ4TOaVvd2HyEAYQarcyS46oE3ZYyQgA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjAHWlKYFQMo6hUy0_4OfBWdJMvPIx6AD6A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yRTz71bOmM4fs9NqSZARVDHvyxQ4X4_Jqw&s"],
    eh_heading: "Youthfest",
    eh_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  }

  return (
    <div className='youth-container'>
      <EventHeader eh_imageURl={festHeaderData.eh_imageURl} eh_heading={festHeaderData.eh_heading} eh_desc={festHeaderData.eh_desc} display_prop={"none"}/>
      <EventSlider eventType={"Flagship Events"} />
      <EventSlider eventType={"non Flagship Events"} />
    </div>
  )
}

export default Youthfest