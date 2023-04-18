import React, { useState } from 'react';
import Razorpay from 'razorpay';

const rzp = new Razorpay({
  key_id: 'rzp_test_83Qp7U8h99eaMm',
  key_secret: 'kbzsdDqUSvhwolalTCvOElox',
});

const PaymentForm = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const amount = '100';  // replace with your order amount
    const response = await fetch('/orders/create_order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': '{{ csrf_token }}',  // replace with your own CSRF token
      },
      body: new URLSearchParams({
        'amount': amount,
      }).toString(),
    });
    const data = await response.json();
    console.log(data);  // debug: log the order ID
    rzp.order_payment(data.order_id);  // initiate Razorpay payment
  };

  rzp.on('payment.failed', function (response) {
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    setErrorMessage('Payment Failed. Please try again.');
  });

  rzp.on('payment.success', function (response) {
    console.log(response.razorpay_payment_id);
    console.log(response.razorpay_order_id);
    console.log(response.razorpay_signature);
    fetch('/orders/verify_payment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': '{{ csrf_token }}',  // replace with your own CSRF token
      },
      body: new URLSearchParams({
        'razorpay_payment_id': response.razorpay_payment_id,
        'razorpay_order_id': response.razorpay_order_id,
        'razorpay_signature': response.razorpay_signature,
      }).toString(),
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data.status);  // debug: log the payment status
      setPaymentStatus(data.status);
    });
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Pay Now</button>
      </form>
      {paymentStatus && <div>Payment Successful!</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default PaymentForm;

