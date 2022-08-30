import mongoose from "mongoose";


mongoose.connect("mongodb+srv://cleberpereiradev:teste123@api-controle.epp2dw3.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;