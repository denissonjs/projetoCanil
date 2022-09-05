import { Request, Response } from "express";

// Declarando e exportando os Controllers
export const home = (req:Request, res:Response)=> {
    // Chamando o renderizador
    res.render('pages/page', { // Chamando renderizador das paginas
        banner: { // Objeto para dinamizar as paginas
            title: 'teste',
            background: 'allanimals.jpg'
        }
    })
}
export const dogs = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}
export const cats = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}
export const fishes = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}
