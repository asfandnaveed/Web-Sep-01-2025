import db from "../config/database.js";



export const addToCart = (req , res)=>{
    const {productId , quantity} = req.body;
    const userId = req.user.id;

    const query = `INSERT INTO cart (product_id,quantity , user_id , created_at)
     VALUE (?,?,?,NOW() )`;


     db.query(query , [productId , quantity,userId] , (err , result)=>{

        if(err){
            res.status(500).json({
                status:false,
                message:"Server Error !"
            });

        }else{

            res.json({
                status:true,
                message:"Product Added to cart ! ",
            });
        }

     });
}



export  const getCartItems = (req ,res)=>{

    const userId = req.user.id;


    const query = `SELECT c.product_id , c.quantity , p.name ,p.price , p.stock , p.image_url 
    FROM cart c INNER JOIN products p ON c.product_id = p.id 
    WHERE c.user_id= ?`;


    
    
}