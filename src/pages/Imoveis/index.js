import React, { useState, useContext, useEffect } from 'react';
import "../../assets/sass/imoveis.css";
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/auth';
import { toast } from 'react-toastify';

export default function Imoveis(){
    const [imoveis, setImoveis] = useState([])
    const { getAllProperties } = useContext(AuthContext);

    async function getProperties() {
        try {
            const properties = await getAllProperties();
            setImoveis(properties);
        } catch (error) {
            toast.error("Erro ao recuperar imóveis: ");
        }
    }

    useEffect(() => {
        getProperties();
    }, []);

    function Tipo(valor) {
        switch (valor) {
            case 0:
                return "Selecione o tipo";
            case 1:
                return "Apartamento";
            case 2:
                return "Área";
            case 3:
                return "Casa";
            case 4:
                return "Casa Comercial";
            case 5:
                return "Casa de Colônia";
            case 6:
                return "Casa em Condominio";
            case 7:
                return "Chácara";
            case 8:
                return "Cobertura";
            case 9:
                return "Condições Especiais";
            case 10:
                return "Fazenda";
            case 11:
                return "Galpão";
            case 12:
                return "Loja";
            case 13:
                return "Prédio";
            case 14:
                return "Sala";
            case 15:
                return "Studios";
            case 16:
                return "Terreno";
            case 17:
                return "Terreno em Condomínio";
            case 18:
                return "Outros";
            default:
                return "Tipo inválido";
        }
    }
    function Finalidade(valor) {
        switch (valor) {
            case 0:
                return "Selecione o finalidade";
            case 1:
                return "Venda";
            case 2:
                return "Alugar";
            default:
                return "Tipo inválido";
        }
    }

    function getLastFiveDigits(str) {
        if (str.length <= 5) {
            return str;
        }
        return str.slice(-5);
    }
    
    return(
        <div id="Imoveis">
            <h1> 
                Há {imoveis.length} imóveis cadastrados
            </h1>
            <div className="imoveis-container">
                {imoveis.map((imovel) => (
                        <div key={imovel.imovelUid} className='imoveis'>
                            <img className='image-property' src={imovel.fotos[0]} alt={imovel.nome} />
                            <span>{imovel.bairro} | {imovel.cidade}</span>
                            <span>{Tipo(parseInt(imovel.tipo))} {
                                imovel.finalidade === '1' ? 
                                ' à venda' : 
                                ' para alugar'
                                } no {imovel.bairro}</span>
                            <Button 
                                text={'Ver detalhes'}
                            />
                            <div><span>{imovel.valor}</span><span>Código: {getLastFiveDigits(imovel.imovelUid)}</span></div>
                        </div>
                ))}
            </div>
        </div>
    )
}