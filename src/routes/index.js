import express from "express";
import receitas from './receitasRoutes.js';
import despesas from "./despesasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Bem vindo a API de controle de gastos"});
    })

    app.use(
        express.json(),
        receitas,
        despesas
    )
}


export default routes;