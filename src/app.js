import express from "express";


const app = express();

app.use(express.json());

const receitas = [
    {
        "id": 1,
        "descrição": "Salário",
        "valor": 1500
    },
    {
        "id": 2,
        "descrição": "Freela",
        "valor": 500
    }
];

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
app.put('receitas/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    receitas[index].valor = (req.body.id);
    res.json(receitas);
})

//função de procurar indíce no array

function buscaReceita(id){
    return receitas.findIndex(receita => receita.id == id)
}

export default app;