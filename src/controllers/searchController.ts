import { Request, Response } from "express";
import { createMenuObject } from "../menuObjectCreate";
import { pets } from "../models/pets";

export const search = (req:Request, res:Response)=> {
    // Nossa url recebe o que foi digitado pelo usuário, sendo assim, para filtrar de acordo com o que foi pesquisado, basta requisitar da url.
    
    let query: string = req.query.q as string;
    let list = pets.getFromName(query);
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query // Enviando de volta o valor de query pra atribuí-lo ao 'value' do input.
    })
}