import express from "express";
import db from './config/dbConnect.js';
import routes from  './routes/index.js';



db.on("error", console.log.bind("Conexão com o BD falhou!"));
db.once("open", () =>{
    console.log("Conexão com o BD bem sucedida!");
} );

const app = express();

app.use(express.json());

routes(app);


export default app;