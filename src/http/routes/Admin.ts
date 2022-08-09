import {  Router } from "express";
import Controllers from "../../domain/useCases/index";

const AdminRoutes = Router();

 AdminRoutes.get('/', Controllers.createUserController.test);


export {AdminRoutes};