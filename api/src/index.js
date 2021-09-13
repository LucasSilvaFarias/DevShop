import db from './bd.js';
import cors from 'cors'
import express from 'express'
import Sequelize  from 'sequelize';


const app = express();
app.use(cors());
app.use(express.json());



app.get('/produto', async (req, resp) => {
    try {
        let l = await db.tb_produto.findAll({order: [['id_produto', 'desc']]});
        resp.send(l);
    } catch (e) {
        resp.send({ erro: 'Deu erro no GET!' })
    }
}) 


app.post('/produto', async (req, resp) => {
    try {
        let { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem, ativo, dtinclusao } = req.body;

        let consulta = await db.tb_produto.findOne({where: {nm_produto: nome}});
        
        if(consulta != null){
            resp.send({erro: "Produto já existe"})
        } else {
            if(nome == "" ||categoria == "" ||precopor == "" ||avaliacao == "" ||descricao == "" ||qtdestoque == "" ||imagem == "" ||ativo == "" ||dtinclusao == "" ||precode == ""){
                resp.send({ erro: "Algum campo está nulo"})
            } else {
                let i = await db.tb_produto.create({ 
                    nm_produto: nome, 
                    ds_categoria: categoria, 
                    vl_preco_de: precode,
                    vl_preco_por: precopor,
                    vl_avaliacao: avaliacao, 
                    ds_produto: descricao,
                    qtd_estoque: qtdestoque,
                    img_produto: imagem,
                    bt_ativo: ativo,
                    dt_inclusao: dtinclusao
                })
                resp.send(i);
            }
        }
        
    } catch (e) {
        resp.send({ erro: 'Deu erro no POST!' })
    }
}) 


app.put('/produto/:id', async (req, resp) => {
    try {
        let { nome, categoria, precode, precopor, avaliacao, descricao, qtdestoque, imagem } = req.body;
        let { id } = req.params;

        await db.tb_produto.update(
            {
            nm_produto: nome, 
            ds_categoria: categoria, 
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao, 
            ds_produto: descricao,
            qtd_estoque: qtdestoque,
            img_produto: imagem,
            },
            {
                where: {id_produto: id }
        })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: 'Deu erro no POST!' })
    }
}) 


app.delete('/produto/:id', async (req, resp) => {
    try {
        let {id} = req.params;

        await db.tb_produto.destroy({ where: { id_produto: id }})
        resp.send(200);
    } catch (e) {
        resp.send({ erro: 'Deu erro no Delete!' })
    }
}) 


app.listen(process.env.PORT,
            x => console.log(`Subiu API ${process.env.PORT}`))