import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Auth/AuthProvider";
import './CheekOutForm.css'
import { toast } from "react-toastify";

const CheeckOutForm = ({price,data}) => {
  console.log(data._id);
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const {user}=useContext(authContext)
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.clientSecret);
        setClientSecret(data.clientSecret)
      });
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("paymentMethod", paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );
    if (confirmError) {
        console.log(confirmError);
    }
    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);}
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price:data?.price,
        serviceID:data?.serviceID,
        servicetitle:data?.servicetitle,
        serviceimage:data?.serviceimage,
        date: new Date(),
    }
    fetch(`http://localhost:5000/payments/${data?._id}`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(payment)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      // console.log(data.insertResult.insertedId)
      // console.log(data.deleteResult.deletedCount)
      if(data.insertResult.insertedId && data.deleteResult.deletedCount>0){
        toast.success('Payment Succesfully')
      }
      else{
        toast.error('payment Failed')
      }
    })
  };
  return (
    <>
      <form className="w-2/3 mx-auto " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info btn-sm mt-5 mx-auto text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500 text-sm text-center my-5">{cardError}*</p>
        
      }
      {transactionId && <p className="text-green-500 text-sm text-center my-5">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheeckOutForm;
