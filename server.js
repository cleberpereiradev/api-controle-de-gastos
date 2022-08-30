import express from "express";
import app from "./src/app.js"

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
});