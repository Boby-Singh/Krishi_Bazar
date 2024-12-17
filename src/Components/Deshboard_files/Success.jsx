import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Success.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
const Success = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/orders', {
      withCredentials: true,
    })
      .then(res => {
        if (res.data.status === true) {
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const handlePaymentSuccess = async () => {
      try {    
        const maxOrderId = data.reduce((max, order) => {
          return order.order_id > max ? order.order_id : max;
        }, -Infinity);

        const currentOrder = data.find(order => order.order_id === maxOrderId);
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const userId = authToken ? jwtDecode(authToken).user_id : null; 

        if (currentOrder && currentOrder.session_id && userId) {
          const response = await axios.post('http://localhost:3000/user/payment_success', {
            paymentIntentId: currentOrder.session_id,
            userId:userId
          });
          if (response.data.status === true) {
            setLoading(false);
          } else {
            console.error('Error updating payment status:', response.data.error);
          }
        } 
      } catch (error) {
        console.error('Error updating payment status:', error);
      } finally {
        setLoading(false);
      }
    };

    handlePaymentSuccess();
  }, [data]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='success_container'>
          <img src="src/tick.png" alt="Success Tick" width={"50px"} />
          <h2 style={{ color: 'green' }}>Payment Successful!</h2>
          <Link to='/'>Go Home</Link>
        </div>
      )}
    </div>
  )
}

export default Success;
