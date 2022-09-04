import express from "express";
import dotenv from "dotenv";
import mustache from 'mustache-express';
import path from "path";
import mainRoutes from './routes/index'

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

// Definindo Rota do Servidor
server.use(mainRoutes)

// Definindo 404-not found
server.use((req, res)=>{
    res.send('Pagina Não encontrada')
})

// Rodar servidor
server.listen(process.env.PORT);


