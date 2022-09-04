import express from "express";
import dotenv from "dotenv";
import mustache from 'mustache-express';
import path from "path";

//Chamando dotEnv
dotenv.config();

// Declarando servidor
const server = express();

// Definindo template engine
server.set('view engine', 'mustache');

// Definindo pasta de visualização do projeto
server.set('views', path.join(__dirname, 'views'));

// Chamando o mustache
server.engine('mustache', mustache());

// Definindo pasta de arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

// Rodar servidor
server.listen(process.env.PORT);


