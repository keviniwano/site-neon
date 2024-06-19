import React from "react";
import "../../assets/sass/error.css";
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';

export default function Error(){
    const navigate = useNavigate()

    return(
        <div id="Error">
            <h1>4O4</h1>
            <h2>Ooops... You seem to be lost</h2>
            <Button
                text={'Back home'}
                onClick={
                    ()=>{
                        navigate('/')
                    }
                }
            />
        </div>
    )
}