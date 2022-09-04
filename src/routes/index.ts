import { Router } from "express";

// Declarando gerenciador de Rotas
const router = Router()

//Definindo rota da pagina principal
router.get('/', (req, res)=>{
    res.send('home')
});

// Exportando rotas
export default router


