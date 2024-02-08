import { observer } from 'mobx-react';
import './SingleMeeting.css';
import { useEffect } from "react";
import MeetingStor from '../../store/MeetingStor';


//קומפוננטה זו אחראית על הצגת פגישה...
const SingleMeeting = observer(({ i }) => {
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

  return (
    <>
      <div className="SingleMeeting">
        <h3>נקבעה פגישה לשירות:</h3>
        <h2 className="SingleMeeting-title">{MeetingStor.meetingList[i].m.lastName}</h2>
        {/* <h2 className="SingleMeeting-description">{MeetingStor.meetingList[i].lastName}</h2>
        <h2 className="SingleMeeting-price">{MeetingStor.meetingList[i].Phone}</h2> */}
        {/* <h3 className={`SingleMeeting-date ${getMeetingColor(MeetingStor.meetingList[i].dateTime)}`}>
          {MeetingStor.meetingList[i].dateTime}
        </h3> */}
       
      </div>
    </>
  );
});

export default SingleMeeting;
