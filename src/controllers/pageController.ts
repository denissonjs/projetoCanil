import { Request, Response } from "express";

// Declarando e exportando os Controllers
export const home = (req:Request, res:Response)=> {
    // Chamando o renderizador
    res.render('pages/page')
}
export const dogs = (req:Request, res:Response)=> {
    res.send('DOGS')
}
export const cats = (req:Request, res:Response)=> {
    res.send('CATS')
}
export const fishes = (req:Request, res:Response)=> {
    res.send('FISHES')
}
