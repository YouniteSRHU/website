import React from 'react'
const urlImage = "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg"

const EventsCard = () => {
    return (


        <div className="max-w-sm border
            border-gray-200 rounded-lg shadow-gray-950 shadow-3xl hover:shadow-3xl bg-[#1F4E79] dark:border-gray-700 hover:scale-125 duration-1000 ">
            <a href="#">
                <img className="rounded-t-lg  " src={urlImage} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default EventsCard