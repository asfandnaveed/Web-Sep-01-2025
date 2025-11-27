import Stripe from "stripe";


const stripe = Stripe(process.env.STRIPE_SECRET);


export const  chargePayment =async (req , res)=>{

    const {price} = req.body;

    try{
        
        const data =await stripe.paymentIntents.create({
            amount:price,
            currency:'usd'
        });

        res.json({
            status:true,
            message:"Payment created !",
            client_secret : data.client_secret,
        });

    }catch(e){
        res.status(500).json({
            status: false,
            message:"Payment Failed !!"
        });
    }

}