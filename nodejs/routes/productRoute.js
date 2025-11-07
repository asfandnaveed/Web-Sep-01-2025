import { Router } from "express";
import { addProduct, getAllProducts } from "../controller/productController.js";
import verifyToken from "../middleware/verfiyToken.js";


const routes = Router();

routes.get('/',getAllProducts);
routes.post('/addproduct', verifyToken , addProduct);


export default routes;