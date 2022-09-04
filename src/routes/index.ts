import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';


// Declarando gerenciador de Rotas
const router = Router()

//Definindo rotas da pagina principal

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)
// Exportando rotas
export default router


