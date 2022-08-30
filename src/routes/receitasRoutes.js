import express from "express";
import ReceitaController from "../controllers/receitasController.js";

const router = express.Router();

router
    .get("/receitas", ReceitaController.listarReceitas)
    .get("/receitas/:id", ReceitaController.listarReceitasPorId)
    .post("/receitas", ReceitaController.criarReceitas)
    .put("/receitas/:id", ReceitaController.atualizarReceitas)
    .delete("/receitas/:id", ReceitaController.excluirReceitas)


export default router;