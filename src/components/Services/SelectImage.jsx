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


const SelectImage = (observer(({setService,serv}) => {

  const [SelectImage, setSelectImage] = useState('');
  const handleChange = (event) => {

    setSelectImage(event.target.value);
     setService({...serv,image:event.target.value});
  }


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select image</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SelectImage}
          label="image"
          onChange={handleChange}
        >
          <MenuItem value={'/images/childrens1.jpg'}>
          <CardMedia component="img" height="140" width="200" image='/images/childrens1.jpg' /></MenuItem>
          <MenuItem value={'/images/childrens2.jpg'}>
          <CardMedia component="img" height="140" width="200" image='/images/childrens2.jpg' /></MenuItem>
          <MenuItem value={'/images/childrens3.jpg'}>
          <CardMedia component="img" height="140" width="200" image='/images/childrens3.jpg' /></MenuItem>
          <MenuItem value={'/images/new-born1.jpg'}>
          <CardMedia component="img" height="140" width="200" image='/images/new-born1.jpg' /></MenuItem>
          <MenuItem value={'/images/new-born2.jpg'}>
          <CardMedia component="img" height="140" width="200" image='/images/new-born2.jpg' /></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}))
export default SelectImage