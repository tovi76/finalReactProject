import { observer } from 'mobx-react';
import { CardActionArea, CardContent, CardActions, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Meeting from './Meeting'
import MeetingStor from '../../store/MeetingStor.js';
import './SingleMeeting.css';
import { getMeeting, getServices } from '../../store/server.js'
import "./MeetingList2.css"




const MeetingList2 = (observer(() => {
  useEffect(()=>{
    getMeeting();
    

  },[]);

  // const [view, setView] = useState(false);
  
  // const [valueToEdit, setValueToEdit] = useState({})
  


  const getMeetingColor = (dateTime) =>
  {
     const today = new Date();
     const meetingDate = new Date(dateTime);
     const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
     const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(  diffDays<0) 
     return 'non'
 else
     if (diffDays===1) {
       return 'red'; // היום
     } else if (diffDays <= 7) {
       return 'orange'; //השבוע
     } 
     else if (diffDays >=7) 
     {
       return 'green'; // עתיד
     
     }
  
   };  
   const getTime = (dateTime) =>
   {
   const date = new Date(dateTime);
const formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
}).format(date);
return formattedDate;}
  //  MeetingStor.sortMeetings(MeetingStor.meetingList);

  return (
    <>
    
     <div className="scrollable-component">
      <div className='card1'>
        {MeetingStor.meetingList.map((m, index) => {
          return <div key={index}  className='SingleMeeting'>
            <div className={`SingleMeeting-date ${getMeetingColor(m.dateTime)}`}>

            <div className='firstName'>השירות  הנבחר:<br></br>{m.selectedService} </div>
            
          <div className='firstName'>{m.firstName}  {m.lastName}</div>
          <div className='Phone'>{m.Phone||<br/>}</div>
          <div className='Email'>{m.Email||<br/>}</div>
          <div className='Email'>{getTime(m.dateTime)||<br/>}</div>
            </div>

        </div>
      

        
        })}
        {/* {view && <Meeting open={view} onClose={() => setView(false)} service1={valueToEdit} isAdd={true}>nbn</Meeting>} */}
        <hr />
      </div> 
       </div>
    </>
  )
}))

export default MeetingList2
