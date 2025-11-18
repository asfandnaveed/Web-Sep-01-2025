import { Router } from "express";
import { addToCart } from "../controller/cartController.js";
import verifyToken from "../middleware/verfiyToken.js";


const routes = Router();

routes.post('/addtocart',verifyToken , addToCart);
routes.post('/getcartitems',verifyToken , addToCart);

export default routes;