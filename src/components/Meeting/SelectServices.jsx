import * as React from 'react';
import { useState } from 'react';

import { observer } from 'mobx-react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardMedia from '@mui/material/CardMedia';
import dataStore from '../../store/store.js';
import DataStore from '../../store/store.js';


const SelectServices = (observer(({selectedService,setSelectedService}) => {

    const handleChange = (event) => {
      console.log("selectedService"+event);
      console.log("selectedService"+event.target.value);


      setSelectedService(event.target.value);
    //  setMeeting({...meet,image:event.target.value});

  }


  return (
    <div>
        <InputLabel id="service-label">Select Service</InputLabel>
        <Select
          labelId="service-label"
          id="service"
          value={selectedService}
          label="image"
          onChange={handleChange}
        >
            {dataStore.services.map((service, i) => (
          <MenuItem key={i} value={service.name}> {service.name}<br /> {service.price}

          <CardMedia component="img" height="140" width="200" image={service.image} />
          </MenuItem>))}
          
        </Select></div>
  );
}))
export default SelectServices;