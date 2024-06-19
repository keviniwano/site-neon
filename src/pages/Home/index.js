import Button from '../../components/Button'
import Banner from '../../assets/images/banner.jpg';
import '../../assets/sass/home.css'
import logo from  '../../assets/images/logo.png';
import { MdOutlineWbIncandescent } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";

export default function Home(){
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
                            text='Anuncie aqui'
                            onClick={
                                () => {
                                    window.location.href = '/anuncie'
                                }
                            }
                        />
                    </span>
                </div>
            </div>

            <div className='content-cards'>

                    <div className='content-message'>
                        <h1>Encontre o Lar dos Seus Sonhos com a Neon</h1>
                        <span>
                            Na Neon, entendemos que encontrar o imóvel perfeito é mais do que uma simples compra — é a realização de um sonho. Sabemos que cada pessoa tem um desejo único e especial quando se trata de seu lar, e por isso, estamos comprometidos em proporcionar a melhor experiência imobiliária possível, desde o primeiro contato até a entrega das chaves e além.
                        </span>
                        <span>
                            Nosso objetivo é fazer com que o processo de compra, venda ou aluguel de imóveis seja o mais tranquilo, transparente e satisfatório possível. Acreditamos que cada cliente merece um atendimento excepcional, personalizado e dedicado, pois sabemos que um imóvel não é apenas um lugar para morar, mas um refúgio, um espaço onde se constroem memórias e se vive plenamente.
                        </span>
                    </div>

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