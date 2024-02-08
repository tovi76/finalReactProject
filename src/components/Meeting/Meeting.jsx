import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import DateTimePicker from './DateTimePicker.jsx';
import MeetingStor from '../../store/MeetingStor.js';
import { addMeeting } from '../../store/server.js';
import SelectServices from './SelectServices.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import SelectImage from '../../SelectImage.jsx';
// import SelectImage from './SelectImage.jsx';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
  
      colorPrimary: '#ab003c'
    
    
  },
});

const Meeting = (observer((M) => {
  const [open, setOpen] = useState(false);
  const [meeting, setMeeting] = useState({});
  const [formCounter, setFormCounter] = useState(0);
  const [selectedService, setSelectedService] = useState("");


  useEffect(()=>{
    setMeeting({ ...meeting, 'selectedService': selectedService });
  },[selectedService]);

  const handlesetMeeting = (event) => {
    setMeeting({ ...meeting, [event.target.id]: event.target.value });
  };
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [dateTime, setDateTime] = useState(null);
  // const [meetings, setMeetings] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setTime = (e) => {
    console.log("setTime" + e.target)
    setDateTime(e.target.value)
    // setMeetingTime(dataTime.format('YYYY-MM-DDTHH:mm:ss'))
    // handlesetMeeting(e)
  }

  const handleSubmit = () => {
    console.log(meeting)
    // console.log(dataTime)
    console.log(formCounter + "formId")
    console.log(dateTime)
    addMeeting({
      ...formCounter,
      ...meeting,
      
      dateTime:dateTime.toISOString(),
    });

    // MeetingStor.addMeeting({
    //   meeting
    // });

    setMeeting({ firstName: '', lastName: '', Phone: '', Email: '',selectedService:'',  dateTime: null})
    setFormCounter(formCounter + 1);
    // setMeetingTime(null);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        לקביעת פגישה
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Meeting</DialogTitle>
        <DialogContent>

          <TextField autoFocus margin="dense" id="firstName" label="First Name" value={meeting.firstName} type="text" required
            onChange={handlesetMeeting}

          />
          <TextField margin="dense" id="lastName" label="Last Name" value={meeting.lastName} type="text" required
            onChange={handlesetMeeting}

          />
          <TextField margin="dense" id="Phone" label="Phone" value={meeting.Phone} type="phone"
            onChange={handlesetMeeting}

          />
          <TextField margin="dense" id="Email" label="Email" value={meeting.Email} type="Email"
            onChange={handlesetMeeting}
            fullWidth
          />
          <SelectServices 
           selectedService={selectedService} setSelectedService={setSelectedService}

          // value={service.image} setService={setService} serv={service}
          ></SelectServices>

          <DateTimePicker
            value={ dateTime}
            // meetingTime={
            //   // dataTime
            //   meeting.dateTime } 
              setTime={setTime}
          />

          {/* <SelectImage></SelectImage> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}));

export default Meeting;

