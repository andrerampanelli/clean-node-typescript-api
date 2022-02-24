import { Request, RequestHandler, Response } from 'express'
import { IHttpRequest, IController } from '../../presentation/protocols'

export const adaptRoute = (controller: IController): RequestHandler => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
