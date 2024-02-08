import { observer } from "mobx-react"
import Store from "../../store/store"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { CheckLogin } from '../../store/server.js';




const Logo = () => {


    return (
        <>
            <div className="logo">
                
            <img src="/images/logo_black.png" alt="Logo" />


            </div>
        </>
    )
}
export default Logo
