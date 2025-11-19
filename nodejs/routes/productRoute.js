import { Router } from "express";
import { addProduct, getAllProducts, updateImage } from "../controller/productController.js";
import verifyToken from "../middleware/verfiyToken.js";
import { upload } from "../middleware/uploadProductImage.js";


const routes = Router();

routes.get('/',getAllProducts);
routes.post('/addproduct', verifyToken , addProduct);
routes.post('/addImage', upload.single('productImage'), updateImage);


export default routes;