import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";


const stripe = loadStripe('pk_test_sw7YSpxcZaXpmUjnuA6lD30m00XiWQTBta');


function Checkout() {
    const payment = useStripe();
    const element = useElements();

    const [clientKey, SetClientKey] = useState();

    

    const handlePayment =async ()=>{

        const apidata = await fetch('http://localhost:5001/api/payment/charge-payment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                price: 2000
            })
        });

        const jsonData = await apidata.json();
        SetClientKey(jsonData.client_secret);
        console.log(clientKey);

        const {err,data}  = await payment.confirmCardPayment(
            clientKey,
            {
                payment_method:{
                    card: element.getElement(CardElement)
                }
            }
        );

        if(err){
            alert('Issue');
        }else{
            alert('Payment succes');
        }
        
    }


    return (
        <div>
            <div className="bg-light d-block mx-auto w-50">
                <CardElement />
            </div>
            <button onClick={handlePayment}>Pay</button>

        </div>
    );
}



export default function Payment (){

    return(
        <div>
            <Elements stripe={stripe}>
                <Checkout />
            </Elements>

        </div>
    );
}