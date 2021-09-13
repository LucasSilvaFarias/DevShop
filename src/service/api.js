import Axios from 'axios';
import { toast } from 'react-toastify';

const api = Axios.create({
    baseURL: 'http://localhost:3032'
})


export default class Api {
    async Listar(){
        let r = await api.get('/produto');
        return r.data;
    }

    async Inserir( nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem ){
        let r = await api.post('/produto', { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem });
        return r.data;
    }

    async Alterar(id, nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem){
        let r = await api.put('/produto/' + id, { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem} );
        return r.data;
    }

    async Remover(id){
        let r = await api.delete('/produto/' + id);
        return r.data;
    }

    async ProdutoRepetido(nome) {
        let r = await api.post('/produto', { nome });
        if(nome != nome) {
            return r.data;
        } else {
            toast.error("Este produto já existe!")
        }
    }
}