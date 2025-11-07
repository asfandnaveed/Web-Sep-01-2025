import { Router } from "express";
import { userLogin, userRegister } from "../controller/userController.js";




const routes = Router();

routes.post('/user-register' , userRegister);
routes.post('/user-login' , userLogin);


export default routes;