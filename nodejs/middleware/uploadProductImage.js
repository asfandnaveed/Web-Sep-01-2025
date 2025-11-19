import multer from "multer";
import path from 'path';



const storage  = multer.diskStorage({
    destination: (req, file , cb )=>{
        cb(null , 'uploads/products/');
    } ,
    filename: (req ,file , cb)=>{
        cb(null , Date.now() + path.extname(file.originalname));
    }
});

const filter = (req , file , cb)=>{

    const filetype = ['image/jpg' , 'image/png', 'image/jpeg'];

    if(filetype.includes(file.mimetype)){

        cb(null , true);
    }else{

        cb(new Error("file Type not Allowed !") , false);
    }

};


export const upload =  multer({
    storage:storage,
    fileFilter:filter,
    
});