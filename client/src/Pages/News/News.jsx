import React from 'react'
import Warning from '../../components/Warning/Warning'
import EventHeader from '../../components/EventHeader/EventHeader'
import LatestNews from '../../components/LatestNews/LatestNews'


const News = () => {
    const updates =[
        {
            id:2,
            title:"nth update",
            content:"aritenoiarestnorsietaroisnt sreti nrsiet seit rient nrsi tesrin iesrni tirsn eires nsrie eitsr iensri isenir nern eireni rinse iensrintirnsinerst niestrniet nisreniesrtniesreni enisreni srin isrsrti inesr streninstrniesrtenistrsrieninsrienstriiirstesetn enes enstenImportant note: Regularly check the specific whatsapp groups also.",
            time:"13 may 2024, 10am"
        },
        {
            id:1,
            title:"nth-1 update",
            content:"aritenoiarestnorsietaroisnt sreti nrsiet seit rient nrsi tesrin iesrni tirsn eires nsrie eitsr iensri isenir nern eireni rinse iensrintirnsinerst niestrniet nisreniesrtniesreni enisreni srin isrsrti inesr streninstrniesrtenistrsrieninsrienstriiirstesetn enes enstenImportant note: Regularly check the specific whatsapp groups also.",
            time:"13 may 2024, 10am"
        },
        {
            id:3,
            title:"nth-2 update",
            content:"aritenoiarestnorsietaroisnt sreti nrsiet seit rient nrsi tesrin iesrni tirsn eires nsrie eitsr iensri isenir nern eireni rinse iensrintirnsinerst niestrniet nisreniesrtniesreni enisreni srin isrsrti inesr streninstrniesrtenistrsrieninsrienstriiirstesetn enes enstenImportant note: Regularly check the specific whatsapp groups also.",
            time:"13 may 2024, 10am"
        },
        {
            id:4,
            title:"latest",
            content:"aritenoiarestnorsietaroisnt sreti nrsiet seit rient nrsi tesrin iesrni tirsn eires nsrie eitsr iensri isenir nern eireni rinse iensrintirnsinerst niestrniet nisreniesrtniesreni enisreni srin isrsrti inesr streninstrniesrtenistrsrieninsrienstriiirstesetn enes enstenImportant note: Regularly check the specific whatsapp groups also.",
            time:"13 may 2024, 10am"
        }
        
    ]
    return (
        <>
            <Warning message={"Do pay mind to event specific groups also."}/>
            {/* <EventHeader/> */}
            <LatestNews updates={updates}/>
        </>
    )
}

export default News