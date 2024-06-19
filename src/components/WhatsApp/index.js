import React from "react";
import {Link} from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import '../../assets/sass/whatsapp.css'

export default function WhatsApp(){
    return(
        <a href="https://wa.me/5537999879809" id='whatsapp-button' target="_blank">
            <IoLogoWhatsapp size={50} color='#00D757' />
        </a>
    )
}