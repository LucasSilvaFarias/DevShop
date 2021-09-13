import Fotop from '../../assets/img/mdm.png';
import Atualizar from '../../assets/img/atualizar.svg';
import Sair from '../../assets/img/sair.svg';


import { Container } from './styled';

export default function Menu() {
    return (
        <Container>
            <div className="usuario">
              <div className="msg-usu">
                <div className="img-1"><img src={Fotop} alt="Foto de perfil" /></div>
                <div class="absolute">3</div>
              </div>
                <div className="texto-1">Olá, <b>Lionel Messi</b></div>
            </div>
            <div className="botoes">
                <button><img src={Atualizar} alt="" /></button>
                <button className="bt"><img src={Sair} alt="" /></button>
            </div>
        </Container>
    )
}