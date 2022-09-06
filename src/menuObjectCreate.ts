import { fishes } from "./controllers/pageController";

type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'; // Defino o tipo de dado informando que só posso ter as opções setadas nele "all ou dog ou cat..." assim eu 'blindo' a função de por qualquer motivo, encontrar um dado que não planejei.

export const createMenuObject = (activeMenu: MenuOptions)=>{ // A Função receberá como parametro o menu que está ativo, que será indicado no nosso controller (vide), informando qual das opções abaixo (dog, cat...) receberá true no nosso if.
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu != ''){ // Validamos que o menu atual não é vazio, ou seja, é válido.
        returnObject[activeMenu] = true; // Setamos como true o activeMenu que nossa função trouxe.
    } 

    return returnObject; // Retorna o objeto e o true no menu que o nossa função encontrou.
}