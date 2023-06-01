/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facSomethingRoute } from "../app/services/factories";

const Routes = Router()
const Domain = facSomethingRoute()

/* url-testing: http://localhost:3333/routes */

const path = '/routes'
const pathId = '/routes/:id'

Routes.post(path, async (req:Request, res:Response) => {
  return await Domain.createCon(req, res)
})

Routes.get(path, async (req:Request, res:Response) => {
  return await Domain.findAllCon(req, res)
})

Routes.get(pathId, async (req:Request, res:Response) => {
  return await Domain.findOneCon(req, res)
})

Routes.patch(pathId, async (req: Request, res: Response) => {
  return await Domain.updateOneCon(req, res)
  })

Routes.delete(pathId, async (req: Request, res: Response) => {
  return await Domain.deleteOneCon(req, res)
  })

/* ----- EXTRAS ------ */

Routes.post(path, async (req: Request, res: Response) => {
  return await Domain.findAllCon(req, res)
  })

Routes.put(pathId, async (req: Request, res: Response) => {
  return await Domain.findAllCon(req, res)
  })

  export { Routes }

  //eof