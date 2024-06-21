import React, { useState, useContext } from 'react';
import '../../assets/sass/anuncio.css';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/auth';

export default function Anuncio() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [finalidade, setFinalidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');

    const { RegisterProperty, setLoadingAuth } = useContext(AuthContext);

    function anunciarImovel(e) {
        e.preventDefault();
        setLoadingAuth(true)
        validateForm() && RegisterProperty(nome, telefone, email, finalidade, tipo, valor, endereco, numero, cidade, bairro, complemento)
        setLoadingAuth(false)
    }

    function handleValorChange(e) {
        const value = e.target.value.replace(/\D/g, ''); 
        if (value === '') {
            setValor('');
        } else {
            const formattedValue = new Intl.NumberFormat('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(parseFloat(value) / 100); 
            setValor(formattedValue);
        }
    }

    function validateForm() {
        let regular = true;

        if (nome.trim().length <3) {
            document.getElementById('nome').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('nome').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (telefone.trim() === '' || !/^\d{2}\s?\d{4,5}\s?\d{4}$/.test(telefone.trim())) {
            document.getElementById('telefone').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('telefone').style.border = '1px solid rgb(113, 113, 113)';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('email').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (finalidade === '' || finalidade === '0') {
            document.getElementById('finalidade').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('finalidade').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (tipo === '' || tipo === '0') {
            document.getElementById('tipo').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('tipo').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (valor.trim() === '' || valor.trim() === 0) {
            document.getElementById('valor').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('valor').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (endereco.trim() === '') {
            document.getElementById('endereco').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('endereco').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (numero.trim() === '') {
            document.getElementById('numero').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('numero').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (cidade.trim() === '') {
            document.getElementById('cidade').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('cidade').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (bairro.trim() === '') {
            document.getElementById('bairro').style.border = '1px solid red';
            regular = false;
        } else {
            document.getElementById('bairro').style.border = '1px solid rgb(113, 113, 113)';
        }

        return regular;
    }

    return (
        <div id='Anuncio'>
            <div className='aside text'>
                <h1>
                    Quer alugar ou vender o seu imóvel com rapidez e segurança? Você está no lugar certo!
                </h1>
                <p>
                    Você só precisa adicionar as informações básicas e nós cuidamos do resto. Na Neon você tem a certeza de que seu imóvel terá toda atenção necessária e logo será comercializado, afinal, a Neon se tornou a maior vitrine de imóveis recebendo diariamente um dos maiores tráfegos de clientes interessados.
                </p>
                <p>
                    Realizamos mensalmente um dos maiores investimentos do ramo imobiliário. Seu imóvel será anunciado em nosso site, anúncios patrocinados nas redes sociais e nos melhores players do segmento. Cadastre o seu imóvel com a Neon. E se tiver alguma dúvida, basta falar com a gente pelo whatsapp: 37 99987-9809
                </p>
            </div>
            <form className='aside'>
                <label htmlFor="nome">* Nome do proprietário:
                    <input type="text" id="nome" name="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                </label><br/>
                <label htmlFor="telefone">* Telefone:
                    <input type="text" id="telefone" name="telefone" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                </label>
                <label htmlFor="email">* Email:
                    <input type="text" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor='finalidade'>* Finalidade
                    <select id="finalidade" name="finalidade" onChange={(e) => setFinalidade(e.target.value)}>
                        <option value="0">Selecione a finalidade</option>
                        <option value="1">Vender</option>
                        <option value="2">Alugar</option>
                    </select>
                </label>
                <label htmlFor='tipo'>* Qual o tipo do imóvel?
                    <select id="tipo" name="tipo" onChange={(e) => setTipo(e.target.value)}>
                        <option value="0">Selecione o tipo</option>
                        <option value="1">Apartamento</option>
                        <option value="2">Área</option>
                        <option value="3">Casa</option> 
                        <option value="4">Casa Comercial</option>
                        <option value="5">Casa de Colônia</option>
                        <option value="6">Casa em Condominio</option> 
                        <option value="7">Chácara</option> 
                        <option value="8">Cobertura</option> 
                        <option value="9">Condições Especiais</option> 
                        <option value="10">Fazenda</option> 
                        <option value="11">Galpão</option> 
                        <option value="12">Loja</option> 
                        <option value="13">Prédio</option> 
                        <option value="14">Sala</option> 
                        <option value="15">Studios</option> 
                        <option value="16">Terreno</option> 
                        <option value="17">Terreno em Condomínio</option> 
                        <option value="18">Outros</option> 
                    </select>
                </label>
                <label htmlFor="valor">Valor:
                    <input type="text" id="valor" name="valor" placeholder="Digite o valor" value={valor} onChange={handleValorChange} />
                </label>
                <label htmlFor="endereco">* Endereço:
                    <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço" onChange={(e) => setEndereco(e.target.value)} />
                </label>
                <label htmlFor="numero">* Número:
                    <input type="text" id="numero" name="numero" placeholder="N°" onChange={(e) => setNumero(e.target.value)} />
                </label>
                <label htmlFor="cidade">* Cidade:
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                </label>
                <label htmlFor="bairro">* Bairro:
                    <input type="text" id="bairro" name="bairro" placeholder="Bairro" onChange={(e) => setBairro(e.target.value)} />
                </label>
                <label htmlFor="complemento">Complemento:
                    <input type="text" id="complemento" name="complemento" placeholder="Complemento" onChange={(e) => setComplemento(e.target.value)} />
                </label>
                
                <p>Ao informar meus dados, eu concordo com a <span>&nbsp;Política de Privacidade.</span></p>

                <Button
                    text='ANUNCIAR IMÓVEL'
                    buttonType='submit'
                    onClick={anunciarImovel}
                />
            </form>
        </div>
    )
}
