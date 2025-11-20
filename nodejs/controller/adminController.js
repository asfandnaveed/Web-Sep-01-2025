import db from '../config/database.js';
import jwt from 'jsonwebtoken';


export const adminLogin = (req , res)=>{

    const {email , pass} = req.body;

    const query = "SELECT * FROM admins WHERE email=? AND `password`=?";

    db.query(query , [email,pass] , (err , result)=>{

        if(err){
            res.status(500).json({
                status:false,
                message:"Server Error !!"
            });
        }
        else{

            const token = jwt.sign(
                {
                    id:result[0].id,
                    email:result[0].email
                } ,
                process.env.JSONTOKEN,
                {
                    expiresIn:'1h'
                }
            );

            res.json({
                status:true,
                message:"Admin Logged In !!!",
                token:token,
                admin: result[0]
            });
        }
    });

};