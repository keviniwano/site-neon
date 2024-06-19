import Button from '../../components/Button'
import Banner from '../../assets/images/banner.jpg';
import '../../assets/sass/home.css'
import logo from  '../../assets/images/logo.png';

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
        </div>
    )
}