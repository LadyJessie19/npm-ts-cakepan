/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";
import { facSomethingRoute } from "../app/services/factories";
import { SomethingCon } from "../app/controllers";

const Routes = Router()
const Domain = facSomethingRoute()

Routes.post('/route', Domain.createCon.bind(SomethingCon))

Routes.get('/route', (req:Request, res:Response) => {
  return Domain.findAllCon(req, res)
})

Routes.get('/route/:id', (req:Request, res:Response) => {

})

Routes.post('/route', async (req: Request, res: Response) => {
   
  })

Routes.put('/route/:id', async (req: Request, res: Response) => {
   
  })
Routes.patch('/route/:id', async (req: Request, res: Response) => {
   
  })

Routes.delete('/route/:id', async (req: Request, res: Response) => {
   
  })

  export { Routes }

  //eof