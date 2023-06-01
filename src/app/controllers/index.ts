/* This is the layer that takes care of all the surface from the database */
/* Requisitions, for instance */

import { SomethingSer } from "../services"
import { Request, Response } from "express"

/* Destructuring examples */
/* 
const { body } = req
const { params } = req
const { body, params: { id } } = req
const { query } = req
*/

export class SomethingCon{
    service: SomethingSer
    constructor(service: SomethingSer){
        this.service = service
    }
    async createCon(req:Request, res:Response){
        const { body } = req
        const result = await this.service.createSer(body)
        if(result){
            res.status(201).json({ message: `The item was successfully created.` })
        }
    }
    async findAllCon(req:Request, res:Response){
        const result = await this.service.findAllSer()
        if(result){
            res.status(200).json({data: result})
        }
    }
    async findOneCon(req:Request, res:Response){
        const { id } = req.params
        const result = await this.service.findOneSer(id)
        if(result){
            res.status(200).json({data: result})
        }
    }
    async updateOneCon(req:Request, res:Response){
        /* I'm choosing for now using the body to update the db item */
        const { body, params: { id } } = req
        const result = await this.service.updateOneSer(id, body)
        if(result){
            res.status(200).json({message: `Item updated!`})
        }
    }
    async deleteOneCon(req:Request, res:Response){
        const { id } = req.params
        const result = await this.service.deleteOneSer(id)
        if(result){
            res.status(200).json({message: `The item ${id} was successfully deleted.`})
        }
    }
}

