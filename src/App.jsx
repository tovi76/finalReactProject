import './App.css'
import AdminPage from './components/Admin/AdminPage'
import ButtonAppBar from './components/Admin/NuvBar'

import Login from './components/Admin/Login'
// import ButtonAppBar from './components/Admin/ButtonAppBar'
// import PrimarySearchAppBar from './components/Admin/ButtonAppBar'
// import MeetingList from './components/Meeting/Meeting'
 import AddService from './components/Services/AddService'

import MultipleSelectChip from './components/Services/SelectImage'
import ServiceList from './components/Services/ServicesList'
import { getMeeting, getServices } from './store/server'
import PrimarySearchAppBar from './components/Admin/NuvBar'
 import MeetingsList from './components/Meeting/MeetingsList'
 import DateTimePicker from './components/Meeting/DateTimePicker'
 import EditButton from './components/Admin/EditButton'
import AdminHome from './components/Admin/AdminHome'
import MeetingList2 from './components/Meeting/MeetingList2'
import { useEffect } from 'react'
import ButtonAdmin from './components/BusinessData/ButtonAdmin.jsx'
import Logo from './components/BusinessData/Logo.jsx'



// import FormPopup from './components/Services/FormPopup'


function App() {

  useEffect(()=>{
    getServices();
    getMeeting();
  },[]);


  return (
    <>
   <PrimarySearchAppBar></PrimarySearchAppBar>
<AdminHome></AdminHome>
{/* <EditButton></EditButton> */}
 {/* <Meeting  open={true}></Meeting> */}
   {/* <AddService></AddService>  */}
   {/* <ServiceList ></ServiceList> */}
       <MeetingsList></MeetingsList>
      {/* <MeetingList2></MeetingList2>  */}
{/* <ButtonAdmin></ButtonAdmin> */}
 {/* <FormPopup open={true}>nbn</FormPopup> 
  */}

      {/* <Login></Login> */}
      {/* <AdminPage></AdminPage> */}
    </>
  )
}

export default App
