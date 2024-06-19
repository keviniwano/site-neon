import React, { useState, useEffect } from 'react';
import Button from '../../components/Button'
import Banner from '../../assets/images/banner.jpg';
import '../../assets/sass/home.css'
import logo from  '../../assets/images/logo.png';
import { MdOutlineWbIncandescent } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";

export default function Home(){

    const [trabalhos, setTrabalhos] = useState()

    function backgroundAnim(param) {
        switch (parseInt(param)){
            case 1:
                trabalhos.className = "b1"
                tittleController(param)
                break;
            case 2: 
                trabalhos.className = "b2"
                tittleController(param)
                break;
            case 3:
                trabalhos.className = "b3"
                tittleController(param)
                break;
            case 4:
                trabalhos.className = "b4"
                tittleController(param)
                break;
            case 5: 
                trabalhos.className = "b5"
                tittleController(param)
                break;
            case 6:
                trabalhos.className = "b6"
                tittleController(param)
                break;
            default:
                break;
        }
    }

    function tittleController(param){
        const works = []
        works[0] = null;
        works.push(...document.querySelectorAll('.work'));

        for(let i = 1; i <= 6; i++){
            if(i !== param){
                const span = works[i].querySelector('span');
                if(span){
                    span.style.display = 'none';
                }
            } else {
                let span = 0
                param <= 6 ? span = works[param].querySelector('span') : span = works[param].querySelector('span');
                span.style.display = 'flex';
            }
        }
    }

    useEffect(() =>{
        setTrabalhos(document.getElementById("Trabalhos"))
    }, [])

    return(
        <div id="Home">
            <div className='banner'>
                <div className='content'>
                    <img src={logo} className="logo" alt="logo"/>
                    <span className='tittle'>
                        <h1>Unindo tradição à inovação!</h1>
                        <span className='subtittle'>Transformando sonhos em lares!</span>

                        <div className='message'>
                            Transformando sonhos em realidade com imóveis de alta qualidade e atendimento personalizado. A Neon se dedica a encontrar o lar perfeito para você, com foco em conforto, segurança e modernidade.
                        </div>
                        <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                        />
                    </span>
                </div>
            </div>

            <div className='content-cards message-container'>

                    <div className='content-message'>
                        <h1>Encontre o Lar dos Seus Sonhos com a Neon</h1>
                        <span>
                            Na Neon, entendemos que encontrar o imóvel perfeito é mais do que uma simples compra — é a realização de um sonho. Sabemos que cada pessoa tem um desejo único e especial quando se trata de seu lar, e por isso, estamos comprometidos em proporcionar a melhor experiência imobiliária possível, desde o primeiro contato até a entrega das chaves e além.
                        </span>
                        <span>
                            Nosso objetivo é fazer com que o processo de compra, venda ou aluguel de imóveis seja o mais tranquilo, transparente e satisfatório possível. Acreditamos que cada cliente merece um atendimento excepcional, personalizado e dedicado, pois sabemos que um imóvel não é apenas um lugar para morar, mas um refúgio, um espaço onde se constroem memórias e se vive plenamente.
                        </span>
                    </div>
            </div>

            <div className='divisor'><h1>Destaques</h1></div>

            <div id="Trabalhos">
                <div className='image-container'>
                    <div className="work" onMouseOver={()=> backgroundAnim(1)}>
                        <div>
                            <h1>Araxá - MG</h1>
                            <span>Situada no topo de uma colina envolta por névoa, a Casa das Sombras é uma mansão gótica antiga com torres pontiagudas e janelas de vitrais coloridos. Seu interior é repleto de corredores labirínticos, salas secretas e móveis antigos que parecem sussurrar histórias do passado.
                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                    </div>
                    <div className="work" onMouseOver={()=> backgroundAnim(2)}>
                    <div>
                            <h1>Patos de Minas - MG</h1>
                            <span>Estamos sempre atentos ao mercado, buscando soluções inovadoras na administração, compra e venda de imóveis, além de garantir os melhores investimentos aos nossos clientes.
                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                    </div>
                    <div className="work" onMouseOver={()=> backgroundAnim(3)}>
                    <div>
                            <h1>Uberlândia - MG</h1>
                            <span>Oculta por muros cobertos de hera, a Casa do Jardim Secreto é um refúgio encantador em meio à cidade. Ao atravessar o portão de ferro forjado, revela-se um exuberante jardim com fontes, trilhas de pedras e uma variedade de plantas e flores exóticas. A casa em si é uma construção de estilo vitoriano com grandes janelas e uma varanda acolhedora. O interior é decorado com móveis antigos e uma vasta coleção de livros e artefatos curiosos.
                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                <div className="work" onMouseOver={()=> backgroundAnim(4)}>
                    <div>
                            <h1>Araçatuba - SP</h1>
                            <span>Escondida no coração de uma floresta mágica, esta casa é feita de madeira entalhada com padrões intrincados. Trepadeiras florescentes cobrem suas paredes, e a luz do sol filtra-se pelas copas das árvores, criando um ambiente místico. Dentro, móveis rústicos e decorações naturais harmonizam-se com o som constante da natureza.


                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                </div>
                <div className="work" onMouseOver={()=> backgroundAnim(5)}>
                    <div>
                            <h1>Mogi das Cruzes - SP</h1>
                            <span>Ancorada em um lago cristalino, a Casa Flutuante é um retiro sereno cercado por água. Construída em plataformas de madeira sustentadas por flutuadores, ela balança suavemente com as ondas. Grandes janelas panorâmicas oferecem vistas deslumbrantes do lago, e uma varanda espaçosa permite acesso direto à água.
                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                </div>
                <div className="work" onMouseOver={()=> backgroundAnim(6)}>
                    <div>
                            <h1>Vitória - ES</h1>
                            <span>Empoleirada no alto de um penhasco à beira-mar, a Casa dos Ventos é constantemente acariciada pela brisa oceânica. Feita de materiais leves e resistentes, possui amplas varandas e janelas que capturam a vista do mar e o som das ondas quebrando nas rochas. O interior é arejado e decorado com tons de azul e branco, refletindo o ambiente costeiro.
                            <Button
                            text='Ver Detalhes'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                            />
                        </span>
                        </div>
                </div>
                </div>
            </div>

            <div className='content-cards card-container'>

                    <div className='cards'>
                        <h1>Nossos diferenciais</h1>
                        <div className='container'>
                            <div className='card'>
                                <MdOutlineWbIncandescent size={50} color='#fff'/>
                                <h2>Inovação</h2>
                                <span>  
                                    Estamos sempre atentos ao mercado, buscando soluções inovadoras na administração, compra e venda de imóveis, além de garantir os melhores investimentos aos nossos clientes.
                                </span>
                            </div>
                            <div className='card'>
                                <RiTeamLine size={50} color='#fff'/>
                                <h2>Equipe</h2>
                                <span>
                                    Equipe voltada para excelência no atendimento, visando proporcionar a melhor experiência ao cliente.
                                </span>
                            </div>
                            <div className='card'>
                                <GrTechnology size={50} color='#fff'/>
                                <h2>Tecnologia</h2>
                                <span>
                                    Aproveite as vantagens da tecnologia com a Neon. Oferecemos tour virtual 360°, plataforma online intuitiva e consultoria online para facilitar sua busca pelo imóvel ideal.
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
            
            

        </div>
    )
}