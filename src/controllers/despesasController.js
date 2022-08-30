import mongoose from "mongoose";
import despesas from "../models/Despesa.js";

class DespesaController{

    static listarDespesas = (req, res) => {
        despesas.find((err) => {
            if(err){
                res.status(400).send({message: `${err.message}`})
            } else {
                res.status(200).json(despesas);
            }
        })
    }
    static listarDespesasPorId = (req, res) => {
        const id = req.params.id;

        despesas.findById(id, (err) => {
            if(err){
                res.status(400).send({message: `${err.message} - Nenhum item correspondente ao ID inserido!`});
            } else {
                res.status(200).send(despesas);
            }
        })
    }
    static adicionarDespesas = (req, res) => {
        let despesa = new despesas(req.body);


        despesa.save((err) => {
            if(err){
                res.status(500).send(`${err.message} - Falha ao adicionar despesa!`);
            } else {
                res.status(201).send(despesa.toJSON());
            }
        })
    }
    static alterarDespesas = (req, res) => {
        const id = req.params.id;

        despesas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({message: "Alteração realizada com sucesso!"});
            }
        })
    }
    static removerDespesas = (req, res) => {
        const id = req.params.id;

        despesas.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao remover despesa!`});
            } else {
                res.status(200).send({message: "Despesa removida com sucesso!"});
            }
        })
    }

}


export default DespesaController;