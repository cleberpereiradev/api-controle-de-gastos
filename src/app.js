import express, { json } from "express";
import db from './config/dbConnect.js';

db.on("error", console.log.bind("Conexão com o BD falhou!"));
db.once("open", () =>{
    console.log("Conexão com o BD bem sucedida!");
} )


const app = express();

app.use(express.json());


//array de teste
// const receitas = [
//     {
//         "id": 1,
//         "descrição": "Salário",
//         "valor": 1500
//     },
//     {
//         "id": 2,
//         "descrição": "Freela",
//         "valor": 500
//     }
// ];



//acessando a primeira pagina

app.get('/', (req, res) => {
    res.status(200).send("Bem vindo! API de controle de gastos");
})

//pesquisa tudo
app.get('/receitas', (req, res) => {;
    res.json(receitas);
})

//adicionando itens

app.post('/receitas', (req, res) => {
    receitas.push(req.body);
    res.status(200).send("Receita adicionada com sucesso");
})

//pesquisa pelo id

app.get('/receitas/:id', (req, res) => {
    let index = buscaReceita(req.params.id);
    res.json(receitas[index]);
})

//alterar atributos
app.put('/receitas/:id', (req, res) => {
    let index = buscaReceita(req.params.id);
    receitas[index].valor = req.body.valor;
    res.json(receitas);
})

//deletar itens por id

app.delete('/receitas/:id', (req, res) =>{
    let {id} = req.params;
    let index = buscaReceita(id);
    receitas.splice(index,1);
    res.send(`O item com id ${id}, foi removido com sucesso`);

})

//função de procurar indíce no array

function buscaReceita(id){
    return receitas.findIndex(receita => receita.id == id);
}





const despesas = [
    {
        "id": 3,
        "descricao": "conta de agua",
        "valor": 120
    },
    {
        "id": 4,
        "descricao": "conta de luz",
        "valor": 150
    }
];

app.get('/despesas/', (req, res) => {

    res.json(despesas);

})

app.get('/despesas/:id', (req, res) => {
    let index = buscaDespesa(req.params.id);
    res.json(despesas[index]);
})

app.post('/despesas', (req, res) => {
    despesas.push(req.body);
    res.status(200).send('Despesa adicionada com sucesso');

})

app.delete('/despesas/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaDespesa(id);
    despesas.splice(index,1);
    res.send(`O item com ${id}, foi removido com sucesso`);
})

app.put('/despesas/:id', (req, res) => {
    let index = buscaDespesa(req.params.id);
    despesas[index].valor = req.body.valor;
    res.json(despesas);
})


function buscaDespesa(id){
    return despesas.findIndex(despesa => despesa.id == id);
}

export default app;