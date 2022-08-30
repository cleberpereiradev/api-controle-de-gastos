import mongoose from "mongoose";
import ReceitaController from "../controllers/receitasController.js";

const despesaSchema = new mongoose.Schema(
    {
        id: {type: String},
        descricao: {type: String, required: true},
        valor: {type: Number, required: true},
        data: {type: String, required: true},
        
    }
);

const despesas = mongoose.model('despesas', despesaSchema);

export default despesas;