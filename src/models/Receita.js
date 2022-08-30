import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema(
    {
    id : {type: String},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true},
    data: {type: String, required: true}    
    }
);

const receitas = mongoose.model('receitas', receitaSchema);

export default receitas;    