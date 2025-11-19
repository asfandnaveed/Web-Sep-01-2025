import db from '../config/database.js';


export const getAllProducts = (req, res) => {

    const query = "SELECT * FROM products";

    db.query(query, (err, result) => {


        if (err) {
            res.json({
                status: false,
                message: "Something went wrong!",
            });
        } else {
            res.json({
                status: true,
                message: "All Products Data",
                products: result,
            });
        }


    });

}


export const addProduct = (req, res) => {

    const { name, price, description, stock, sku, img } = req.body;

    const query = "INSERT INTO products (name , price , description , stock , sku , image_url , created_at ) VALUE (? ,? ,?, ?, ? ,? ,NOW())";

    db.query(query, [name, price, description, stock, sku, img], (err, result) => {

        if (err) {
            res.status(500).json({
                status: false,
                message: "Server Error !"
            });
        }
        else {
            res.json({
                status: true,
                message: "Product Added !"
            });
        }




    });
};


export const updateImage = (req ,res)=>{

    const {productId} = req.body;

    const image ='uploads/products/'+ req.file.filename;

    const query = "UPDATE products SET image_url = ? WHERE id = ?";

    db.query(query , [image , productId] , (err , result)=>{


        if(err){
            console.log(err);
        }else{

            res.json({
                status:true,
                message:"Image Uploaded !",
            });

        }
    })

}