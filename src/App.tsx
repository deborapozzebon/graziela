import logo from './assets/logo.png'
import instagram from './assets/instagram.svg'
import whatsapp from './assets/whatsapp.svg'
import './App.css';

function App() {
    return (
        <div className="principal">
            <img src={logo} alt="imagem de logo" className='logo' />
            <h1>Site em construção!</h1>

            Enquanto ele não fica pronto, entre em contato e tire suas dúvidas pelo meu whatsapp ou instagram.

            <div className='redes-sociais'>
                <a href='https://www.instagram.com/grazielamatana/' target='_blank'>
                    <img src={instagram} alt="imagem de logo" />
                </a>
                <a href='https://api.whatsapp.com/send?phone=54992032963'>
                    <img src={whatsapp} alt="imagem de logo" />
                </a>
            </div>

        </div>
    );
}

export default App;
