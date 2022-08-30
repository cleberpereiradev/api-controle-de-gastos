import express from "express";
import DespesaController from "../controllers/despesasController.js";


const router = express.Router();

router
    .get("/despesas", DespesaController.listarDespesas)
    .post("/despesas", DespesaController.adicionarDespesas)


export default router;