import { Request, Response, Router } from "express";
import Controllers from "../../useCases/index";

const AdminRoutes = Router();

 AdminRoutes.get('/', Controllers.createUserController.test);


export {AdminRoutes};