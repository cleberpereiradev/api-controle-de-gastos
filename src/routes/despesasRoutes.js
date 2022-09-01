import express from "express";
import DespesaController from "../controllers/despesasController.js";


const router = express.Router();

router
    .get("/despesas", DespesaController.listarDespesas)
    .get("/despesas/:id", DespesaController.listarDespesasPorId)
    .post("/despesas", DespesaController.adicionarDespesas)
    .put("/despesas/:id", DespesaController.alterarDespesas)
    .delete("/despesas/:id", DespesaController.removerDespesas)


export default router;