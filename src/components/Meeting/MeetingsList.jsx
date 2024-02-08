import { observer } from 'mobx-react';
import { CardActionArea, CardContent, CardActions, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import dataStore from '../../store/store.js';
import { useState } from 'react';
import Meeting from './Meeting'



const MeetingsList = (observer(() => {

  const [view, setView] = useState(false);
  const [valueToEdit, setValueToEdit] = useState({})
  return (
    <>
      
      <div className='card1'>
        {dataStore.services.map((service, index) => {
          return <div key={index}>
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" width="200" image={service.image} alt={service.name}     
                     sx={{ height: 150, width: 350 }}
 />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"> {service.name} </Typography>
                  <Typography variant="body2" color="text.secondary"> {service.description} </Typography>
                </CardContent>
              </CardActionArea>

       
            </Card>
          </div>
        })}
        {view && <Meeting open={view} onClose={() => setView(false)} service1={valueToEdit} isAdd={true}>1</Meeting>}
        <Meeting></Meeting>
      </div>
    </>
  )
}))

export default MeetingsList
