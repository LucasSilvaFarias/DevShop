import Logo from '../../assets/img/logo.png';
import Seta from '../../assets/img/seta.png';
import Barra from '../../assets/img/barra.png';

import { Container } from './styled';



export default function Menu() {
    return (
        <Container>
            <div className="logo">
                <div className="logo-img"><img src={Logo} alt="" /></div>
                <div className="logo-titulo"> <span>Dev</span>Store </div>
            </div>

            <div className="separacao"></div>

            <div className="opcoes">
                <div className="parte1">
                    <div className="texto-1">Gerenciamento</div> 
                    <div className="img-1"><img src={Seta} alt="" /></div>
                </div>
                <div className="parte2"> 
                    <div className="img-2"><img src={Barra} alt="" /> </div>
                    <div className="texto-2">Produtos</div>
                </div>
            </div>
        </Container>
    )
}