import React, { useState, useRef, useEffect, useContext } from "react";
import "../../assets/sass/fotos.css";
import Button from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/auth';

export default function Fotos() {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const { uid } = useParams();
    const [buttonControl, setButtonControl] = useState(true);
    const { addFotos } = useContext(AuthContext);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length > 12) {
            toast.warning("Você pode selecionar no máximo 12 imagens.");
            return;
        }

        // Ler os arquivos como base64 e atualizar o estado
        Promise.all(files.slice(0, 12).map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    resolve(event.target.result);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(file);
            });
        })).then(base64Images => {
            setImages(base64Images);
        });
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        // Controlar o estado do botão com base na quantidade de imagens
        setButtonControl(images.length === 0);
    }, [images]);

    return (
        <div id='Fotos'>
            <div className='aside cards'>
                <h1>Obrigado pela confiança</h1>
                <div className="cards-container">
                    <div className="card">
                        Preenchimento dos dados
                    </div>
                    <div className="card">
                        Selecione algumas <br/> imagens
                    </div>
                    <div className="card">
                        Agora é com a gente!
                    </div>
                </div>
            </div>
            <form className='aside'>
                <div className="images-container">
                    {images.map((base64String, index) => (
                        <img
                            key={index}
                            src={base64String}
                            alt={`Imagem ${index}`}
                        />
                    ))}
                </div>
                <span>
                    <input
                        ref={fileInputRef}
                        className="custom-file-input"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange} 
                    />
                    <label className="custom-file-label" onClick={handleClick}>
                        Escolha as imagens
                    </label>
                    <Button
                        text='Enviar'
                        buttonType='button'
                        buttonDisabled={buttonControl}
                        onClick={() => addFotos(images, uid)}
                    />
                </span>
            </form>
        </div>
    )
}
