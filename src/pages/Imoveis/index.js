import React from "react";
import "../../assets/sass/imoveis.css";
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';

export default function Imoveis(){
    const navigate = useNavigate()

    return(
        <div id="Imoveis">
            <h1>
                Hello World
            </h1>
        </div>
    )
}