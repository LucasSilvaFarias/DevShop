import Menu from '../../componentes/menu/index.js';
import Cabecalho from '../../componentes/cabecalho/index.js';
import Linha from '../../assets/img/linha-sep.png';
import BarraT from '../../assets/img/barra-titulos.png';
import Alterar from '../../assets/img/alterar.svg';
import Apagar from '../../assets/img/lixeira.svg';
import Tenis from '../../assets/img/tenis.jpg';

import { Container, Parteprincipal, Bloco1, Bloco2 } from './styled'
 
export default function PagPrincipal() {
    return(
        <Container>
           <div className="parte1">
             <Menu />
           </div>

           <div className="parte2">
             <Cabecalho />
             <div className="linha"> <img src={Linha} alt=""/> </div>

             <Parteprincipal>
               <Bloco1>
                <div className="titulo">
                    <div className="barra"><img src={BarraT} alt="" /></div>
                    <div className="texto1">Novo Produto</div>
                </div>

                <div className="inputs">

                    <div className="linha1">
                        <div className="inp1">Nome:   <input type="text"></input></div>
                        <div className="inp">Preço de:   <input type="text"></input></div>
                    </div>

                    <div className="linha1">
                        <div className="inp2">Categoria:   <input type="text"></input></div>
                        <div className="inp">Preço por:   <input type="text"></input></div>
                    </div>

                    <div className="linha1">
                        <div className="inp3">Avaliação:   <input type="text"></input></div>
                        <div className="inp">Estoque:   <input type="text"></input></div>
                    </div>

                    <div className="linha1">
                        <div className="inp-d">Link Imagem:   <input type="text"></input></div>
                    </div>

                    <div className="linha-d">
                        <div className="texto">Descrição:</div>
                        <div className="text">  <textarea type="text"></textarea></div>
                        <div className="btn"><button>Cadastrar</button></div>
                    </div>
                </div>
               </Bloco1>

               <Bloco2>
                   <div className="titulo">
                        <div className="barra"><img src={BarraT} alt="" /></div>
                        <div className="texto1">Produtos Cadastrados</div>
                   </div>

                   <table> 
                      <thead>
                        <tr>
                          <th></th>
                          <th>ID</th>
                          <th>Produto</th>
                          <th>Categoria</th>
                          <th>Preço</th>
                          <th>Estoque</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src={Tenis} alt="" style={{width: '45px', height: '45px'}}/></td>
                          <td>1</td>
                          <td>Tênis da Nike</td>
                          <td>Sapatos</td>
                          <td>R$150,00</td>
                          <td>120</td>
                          <td><button><img src={Alterar} alt=""/></button></td>
                          <td><button><img src={Apagar} alt="" /></button></td>
                        </tr>

                        <tr className="linha-alternada">
                          <td><img src={Tenis} alt="" style={{width: '45px', height: '45px'}}/></td>
                          <td>1</td>
                          <td>Tênis da Nike</td>
                          <td>Sapatos</td>
                          <td>R$150,00</td>
                          <td>120</td>
                          <td><button><img src={Alterar} alt="" /></button></td>
                          <td><button><img src={Apagar} alt="" /></button></td>
                        </tr>

                        <tr>
                          <td><img src={Tenis} alt="" style={{width: '45px', height: '45px'}}/></td>
                          <td>1</td>
                          <td>Tênis da Nike</td>
                          <td>Sapatos</td>
                          <td>R$150,00</td>
                          <td>120</td>
                          <td><button><img src={Alterar} alt="" /></button></td>
                          <td><button><img src={Apagar} alt="" /></button></td>
                        </tr>
                      </tbody> 
                    </table>
               </Bloco2>
             </Parteprincipal>
            </div>
        </Container>

    )
}