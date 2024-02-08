
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, } from '@mui/material';
import DataStore from "../../store/store"
import { addService, updateService } from '../../store/server.js';
import SelectImage from './SelectImage.jsx';


const FormPopup = ({ open, onClose ,service1={},isAdd=false}) => {
  const [service, setService] = useState(service1);
  const handleNameChange = (event) => {
    setService({ ...service, [event.target.id]: event.target.value });
  };

  const handleSubmit = () => {
   if(!isAdd)
   addService({ ...service});
  else
  updateService({ ...service });


    setService({ name: '', description: '', price: '', time: '' ,image:''})

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Form Popup</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out the form.</DialogContentText>
        <TextField
          autoFocus
          margin="normal" id="name" label="Name" type="text" required fullWidth value={service.name}
          onChange={handleNameChange}
        />
        <TextField
          margin="normal" id="description" label="description" type="text" required fullWidth
          value={service.description}
          onChange={handleNameChange}
        />
                <TextField
          margin="normal" id="price" label="price" type="text" required fullWidth
          value={service.price}
          onChange={handleNameChange}
        />
        <TextField
          margin="normal" id="time" label="time" type="text" fullWidth
          value={service.time}
          onChange={handleNameChange}
        />
        <SelectImage value={service.image} setService={setService} serv={service}></SelectImage>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary"> save </Button>
      </DialogActions>

    </Dialog>
  )

}


export default FormPopup
