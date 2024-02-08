import { observer } from "mobx-react"
import Store from "../../store/store"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { CheckLogin } from '../../store/server.js';
import AdminPage from "./AdminPage.jsx";



const Login = (observer(() => {
const [Name,setName]=useState("")
const [Password,setPassword]=useState("")

    return (
        <>
            <div>
                

                <TextField id="name"  type='text' label="Enter the name" variant="filled" value={Name}  onChange={name=>setName(name.target.value)} />
                <br />
                <br />
                <TextField id="Password" type='password' label="Password" variant="filled" value={Password} onChange={pas=>setPassword(pas.target.value)} />

                <br />
                <br />
                <Button variant="contained" onClick={() => {
                    CheckLogin(Name,Password)}}>login</Button>
             

            </div>
        </>
    )
}))

export default Login
