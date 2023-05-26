/* This is the layer that takes care of all the surface from the database */
/* Requisitions, for instance */

import { SomethingSer } from "../services"
import { Request, Response } from "express"

export class SomethingCon{
    service: SomethingSer
    constructor(service: SomethingSer){
        this.service = service
    }
    async createCon(req:Request, res:Response){
        const { body } = req
        const result = await this.service.createSer(body)
        res.status(201).json({ data: result })
    }
    async findAllCon(req:Request, res:Response){
        const result = await (await this.service.findAllSer()).toArray()
        res.status(200).json({data: result})
    }
}