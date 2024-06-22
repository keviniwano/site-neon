import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../assets/sass/footer.css'

export default function Footer(){
    return(
        <div id='Rodape'>
            <div className='footer-icons'>
                <FaGithub size={40} color='#fff' />
                <FaXTwitter size={40} color='#fff' />
                <FaFacebookF size={40} color='#fff' />
                <FaInstagram size={40} color='#fff' />
                <FaLinkedinIn size={40} color='#fff' />
            </div>
            <div className='footer-text'>
                <div className='footer-text-component componentes'>
                    <p>Kevin Iwano</p>
                    <p>Anna Luiza</p>
                    <p>Arthur Ramos</p>
                    <p>Maria Clara</p>
                    <p>Marcos Martins</p>
                </div>
                <div className='footer-text-component menu'>
                    <ul>
                        <li>
                            <Link to='/' className='link'>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to='/imoveis' className='link'>
                                Buscar Imóveis
                            </Link>
                        </li>
                        <li>
                            <Link to='/anuncio' className='link'>
                                Anuncie seu Imóvel
                            </Link>
                        </li>
                        <li>
                            <a href='https://neonimobiliaria.netlify.app/#sobre' className='link'>
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href='https://neonimobiliaria.netlify.app/#contato' className='link'>
                                Fale Conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

