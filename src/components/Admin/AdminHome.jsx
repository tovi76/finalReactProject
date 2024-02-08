import React, { useState } from "react";
import { observer } from "mobx-react";
import { TextField, Button, Typography, Container } from "@mui/material";
import MeetingStor from "../../store/MeetingStor";
import DataStore from "../../store/store"
import MeetingList2 from "../Meeting/MeetingList2";
import EditButton from "./EditButton"

import "./AdminHome.css"
import Logo from "../BusinessData/Logo";
import AddService from "../Services/AddService";
import ServiceList from "../Services/ServicesList";
import ButtonAdmin from "../BusinessData/ButtonAdmin";
import { Outlet } from "react-router-dom";

const AdminHome = observer(() => {
  const [title, setTitle] = useState(MeetingStor.title);
  const [address, setAddress] = useState(MeetingStor.address);
  const [phone, setPhone] = useState(MeetingStor.phone);
  const [owner, setowner] = useState(MeetingStor.owner);
  const [description, setdescription] = useState(MeetingStor.description);
  // const [logo, setlogo] = useState(MeetingStor.logo);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    MeetingStor.updateTitleAndPhone(title, phone);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(MeetingStor.title);
    setAddress(MeetingStor.address);
    setPhone(MeetingStor.phone);
    setowner(MeetingStor.owner);
    setdescription(MeetingStor.description);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOwnerChange = (e) => {
    setowner(e.target.value);
  };

  const handleDescriptioneChange = (e) => {
    setdescription(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    
    <Container className="AdminHome" maxWidth="sm">
    <Logo></Logo>
      <div className="title-container"></div>

      <div className="line"></div>
      <Typography className="title" variant="h3" align="center" gutterBottom>
        {isEditing ? ( <TextField label="Title" variant="outlined" fullWidth
            value={title} onChange={handleTitleChange} margin="normal" /> ) : ( title )}
      </Typography>
      <div className="line"></div>

      <Typography variant="h6" align="center" gutterBottom>
        {isEditing ? ( <TextField label="address" variant="outlined" fullWidth
            value={address}
            onChange={handleAddressChange}
            margin="normal"
          /> ) : ( `address: ${address}` )}
      </Typography>
      <Typography variant="h3" align="center" gutterBottom>
        {isEditing ? ( <TextField label="owner" variant="outlined" fullWidth
            value={owner}
            onChange={handleOwnerChange}
            margin="normal"
          /> ) :  (owner) }
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {isEditing ? ( <TextField label="Phone" variant="outlined" fullWidth
            value={phone}
            onChange={handlePhoneChange}
            margin="normal"
          /> ) : ( `Phone: ${phone}` )}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {isEditing ? ( <TextField label="description" variant="outlined" fullWidth
            value={description}
            onChange={handleDescriptioneChange}
            margin="normal"
          /> ) : ( description)}
      </Typography>
      <Typography align="center" gutterBottom>
        {DataStore.IsLogin ? (
          isEditing ? (
            <>
              <Button variant="contained" onClick={handleSave} color="primary">
                Save
              </Button>
              <Button variant="contained" onClick={handleCancel} color="secondary">
                Cancel
              </Button>
            </>
          ) : (
          // <EditButton ></EditButton>
            <Button variant="contained" onClick={handleEdit} color="primary">
              Edit
            </Button>
          )        ) : null}
<br></br>
<br></br>
{DataStore.IsLogin ? <AddService/> :null}
<br></br>
<br></br>
{DataStore.IsLogin ?<ButtonAdmin></ButtonAdmin>:null}
{/* <ServiceList/> */}
      </Typography>
    </Container>
  );   
  <Outlet></Outlet>
  //  <MeetingList2></MeetingList2>
});

export default AdminHome;
