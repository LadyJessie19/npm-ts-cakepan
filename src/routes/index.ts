/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facSomethingRoute } from "../app/services/factories";
import { SomethingCon } from "../app/controllers";

const Routes = Router()
const Domain = facSomethingRoute()

const path = '/route'
const pathId = '/route/:id'

Routes.post(path, Domain.createCon.bind(SomethingCon))

Routes.get(path, (req:Request, res:Response) => {
  return Domain.findAllCon(req, res)
})

Routes.get(pathId, (req:Request, res:Response) => {

})

Routes.post(path, async (req: Request, res: Response) => {
   
  })

Routes.put(pathId, async (req: Request, res: Response) => {
   
  })
Routes.patch(pathId, async (req: Request, res: Response) => {
   
  })

Routes.delete(pathId, async (req: Request, res: Response) => {
   
  })

  export { Routes }

  //eof