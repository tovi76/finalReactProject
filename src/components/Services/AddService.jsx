import { Button } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { addService } from '../../store/server.js';
import FormPopup from './FormPopup.jsx';

const AddService = (observer(() => {
    const [name, setName] = useState('');
    const [EditService, setEditService]=useState(false);

    
    return (
       <>

            <Button variant="contained" onClick={() => setEditService(true)}>Add Service</Button>
            <FormPopup open={EditService} onClose={()=>setEditService(false)}>nbn</FormPopup>

        </>
    )
}))

export default AddService
