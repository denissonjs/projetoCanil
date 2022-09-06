import { Request, Response } from "express";
import { createMenuObject } from "../menuObjectCreate";

// Declarando e exportando os Controllers
export const home = (req:Request, res:Response)=> {
    // Chamando o renderizador
    res.render('pages/page', { // Chamando renderizador das paginas
        banner: { // Objeto para dinamizar as paginas
            title: 'teste',
            background: 'allanimals.jpg'
        },
        /* Maneira 01 de setar o menuActive
        menu: {
            all: true,
            dog: false,
            cat: false,
            fish: false,
        }*/

        // Maneira 02 de setar o menuActive
        menu: createMenuObject('all')
        
    })
}
export const dogs = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        /*menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false,
        }*/

        menu: createMenuObject('dog')
    })
}
export const cats = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        /*menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false,
        }*/
        menu: createMenuObject('cat')
    })
}
export const fishes = (req:Request, res:Response)=> {
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        /*menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true,
        }*/
        menu: createMenuObject('fish')
    })
}
