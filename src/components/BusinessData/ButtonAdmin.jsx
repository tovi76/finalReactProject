import React, { useState } from 'react';

import ServiceList from '../Services/ServicesList';
import MeetingList2 from '../Meeting/MeetingList2';
import { Link,Navigate, Outlet } from 'react-router-dom';

const ButtonAdmin = () => {
  const [showMeetingComponent, setShowMeetingComponent] = useState(false);
  const [showServiceComponent, setShowServiceComponent] = useState(false);

  const handleMeetingButtonClick = () => {
    setShowMeetingComponent(true);
    setShowServiceComponent(false);
  };

  const handleServiceButtonClick = () => {
    setShowMeetingComponent(false);
    setShowServiceComponent(true);
  };

  return (
    <div>
   

  <Link to='meeting'  className="button" onClick={handleMeetingButtonClick}>Meetings</Link><div></div>
      <Link to='services' onClick={handleServiceButtonClick}>Services</Link>
      {showMeetingComponent && <MeetingList2 />}
      {showServiceComponent && <ServiceList />}
    </div>
  );
};

export default ButtonAdmin;
