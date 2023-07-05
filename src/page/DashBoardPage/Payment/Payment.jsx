import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheeckOutForm from './CheeckOutForm';
import { useLoaderData} from 'react-router-dom';

// 4242424242424242
// 4000056655665556
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const data = useLoaderData();
    console.log(data);

    if (!data || data.length === 0 || !data[0].price) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full min-h-screen p-5'>
            <div>
                <h2 className='text-center text-2xl font-semibold'>Payment</h2>
                <h2 className='text-center my-5'>You have to Pay $ {data[0]?.price}</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheeckOutForm price={data[0]?.price} data={data[0]} />
            </Elements>
            
        </div>
    );
};

export default Payment;