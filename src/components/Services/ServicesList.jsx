import { observer } from 'mobx-react';
import { CardActionArea, CardContent, CardActions, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FormPopup from './FormPopup.jsx';
import dataStore from '../../store/store.js';
import { useState, useEffect } from 'react';
import { getMeeting, getServices } from '../../store/server'
import "../Meeting/MeetingList2.css"


const ServiceList = (observer(() => {
  useEffect(() => {
    getServices();
  }, []);

  const [view, setView] = useState(false);
  const [valueToEdit, setValueToEdit] = useState({})
  return (
    <>
      <div className="scrollable-component">
        <div className='card1'>
          {dataStore.services.map((service, index) => {
            return <div key={index} >
              <Card sx={{ maxWidth: 200, height: 300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" width="200" image={service.image}
                    alt={service.name}
                    sx={{ height: 150, width: 200 }}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div"> {service.name} </Typography>
                    <Typography variant="body2" color="text.secondary"> {service.description} </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary" onClick={() => {
                    setValueToEdit({ name: service.name, description: service.description,price:service.price, time: service.time, image: service.image });
                    setView(true); }}> Edit </Button>
                </CardActions>
              </Card>
            </div>
          })}

          {view && <FormPopup open={view} onClose={() => setView(false)} service1={valueToEdit} isAdd={true}>nbn</FormPopup>}
          <hr />
        </div>
      </div>
    </>
  )
}))

export default ServiceList
