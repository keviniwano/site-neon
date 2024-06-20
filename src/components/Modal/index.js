import React from "react"
import '../../assets/sass/modal.css'

function Modal(props){
    
    return(
        <section id="modal" onClick={
            ()=>{
                props.func(false)
                localStorage.setItem("isModalOpen", false)
            }
            }>
            <div id="dialog">
                <img src={props.img} alt="Imagem: Um coração dentro de uma carta"/>
                <h1>{props.tittle}</h1>
                <p>{props.description}</p>
            </div>
        </section>
    ) 
}

export default Modal