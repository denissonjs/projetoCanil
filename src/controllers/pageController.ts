import { Request, Response } from "express";

export const home = (req:Request, res:Response)=> {
    res.send('Pagina Home do Controller')
}
export const dogs = (req:Request, res:Response)=> {
    res.send('Pagina DOGS do Controller')
}
export const cats = (req:Request, res:Response)=> {
    
}
export const fishes = (req:Request, res:Response)=> {
    
}
