import {  Router } from "express";
import Controllers from "../../domain/useCases/index";

const AdminRoutes = Router();

 AdminRoutes.get('/', Controllers.getUserController.execute);


export {AdminRoutes};