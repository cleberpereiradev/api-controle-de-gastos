import receitas from "../models/Receita.js";

class ReceitaController{

                //pesquisa tudo
    static listarReceitas = ((req,res) => {
        receitas.find((err, receitas) =>{
            res.status(200).json(receitas);
        })
    })
    static listarReceitasPorId = ((req, res) => {
        const id = req.params.id;

        receitas.findById(id, (err, receitas) => {
            if(err){
                res.status(400).send({message: `${err.message} - ID não corresponde a nenhum item cadastrado`});
            } else {
                res.status(200).send(receitas);
            }
        })
    })
    static criarReceitas = ((req, res) => {
        let receita = new receitas(req.body);
        
        receita.save((err) => {
            if(err){
                res.status(500).send(`${err.message} Falha ao adicionar receita!`);
            }else {
                res.status(201).send(receita.toJSON());
            }
        })
    })
    static atualizarReceitas = ((req, res) => {
        const id = req.params.id;

        receitas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Receita atualizada com sucesso!"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    })
    static excluirReceitas = ((req, res) => {
        const id = req.params.id;
        receitas.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Nenhum item correspondente ao ID inserido!`});
            } else {
                res.status(200).send({message: "Receita removida com sucesso!"});
            }
        })
    })
}



export default ReceitaController;