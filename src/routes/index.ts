/* This layer takes care of the routes used with express lib */

import { Request, Response, Router } from "express";

const Routes = Router()

Routes.get('/route', (req:Request, res:Response) => {

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

  export default Routes

  //eof