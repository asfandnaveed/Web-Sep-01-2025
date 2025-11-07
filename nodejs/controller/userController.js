import db from '../config/database.js'



export const userRegister = (req , res)=>{

    const {name , email , pass , dob , gender, phone ,address} = req.body;

    const query = "INSERT INTO users (email , name, address , gender ,`password` , phone_no , dob ,created_at) VALUE (?,?,?,?,?,?,?, NOW())";

    db.query(query , [email , name , address , gender , pass , phone ,dob ] , (err , result)=>{


        if(err){
            res.json({
                status:false,
                message:"Sonething went wrong !!"
            });
        }
        else{
            res.json({
                status:true,
                message:"User Registered !! "
            });
        }

    });
} 


export const userLogin = (req , res)=>{

    const {email , pass} = req.body;

    const query = "SELECT * FROM users WHERE email = ? AND `password` = ?";

    db.query(query ,[email , pass] , (err , result)=>{

        if(result.length > 0){
            res.json({
                status:true,
                message: "User Logged In",
                user:result[0],
            });
        }
        else{
            res.json({
                status:false,
                message:"Invalid Email / Password"
            });
        }

    } );

}