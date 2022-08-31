import { Response, Router, Request } from 'express';
import Controllers from "../../domain/useCases/index";

const AdminRoutes = Router();

 AdminRoutes.get('/',(request: Request, response: Response) => {
    Controllers.getUserController.execute(request,response);
 });


export {AdminRoutes};