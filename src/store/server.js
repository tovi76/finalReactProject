import axios from 'axios';
import dataStore from './store.js';
import MeetingStor from './MeetingStor.js';

export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    dataStore.setServices(services.data);
}

export async function addService(service) {
   try{ const res = await axios.post('http://localhost:8787/service', { ...service, id: service.id });
    if (res.status === 200) {
        dataStore.addService(service);
        return 'success';
    }}
    catch (e) {
        return 'failed';
    }
}
export async function updateService(service) {
    try{const res = await axios.put('http://localhost:8787/service', service);
    if (res.status === 200) {
        dataStore.updateService(service);
        return 'success';
    }}
    catch (e) {
        return 'failed';
    }
}

export async function addMeeting(meeting) {
    try {const res = await axios.post('http://localhost:8787/appointment', meeting)
     if(res.status === 200) {
        MeetingStor.addMeeting(meeting);
        
        alert("הפגישה נקבעה בהצלחה");

    }}
    catch (e){
        alert("המועד תפוס, קבע מועד אחר");
    }


}

export async function getMeeting() {
    try {
        const meetingList = await axios.get('http://localhost:8787/appointments');
    console.log("getMeeting"+meetingList);
    MeetingStor.setMeeting(meetingList.data);
}
    catch (e){
        alert("שגיאה");
    }
}

export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("http://localhost:8787/login", { name, password });
        console.log("+++++++++++++++" + isValid)
        if (isValid.status === 200) {
            dataStore.setIsLogin(true);
        }
        else{
            alert('user name or password not correct');
        }
    }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
        }
        else {
            alert('server failed');
        }
    }
}


export const BusinessDetails = async () => {
    const response = await axios.get("http://localhost:8787/businessData");
    const data = response.data;
    BusinessDetailsStore.setBusiness(data)
  };
  
  export async function UpdateBusiness(meeting) {
    try {
     
  
      const Meeting = await axios.put("http://localhost:8787/businessData", meeting);
      console.log(Meeting.status);
      if (Meeting.status === 200) {
        alert("הבקשה נשלחה לאישור");
  
        BusinessDetailsStore.setBusiness(meeting);
      }
    }
    catch (e){
        alert("שגיאה");
    }

}
  
  
  
  

