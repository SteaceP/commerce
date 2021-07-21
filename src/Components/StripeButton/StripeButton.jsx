import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_TOKEN;

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="Hacktive Development"
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      image="https://bn1303files.storage.live.com/y4m2UwLj_jqH--VPIm-JMFkPF-ei7M0oe94WSyaT0vX63Y2LNozel8-J6HC-_qNYp-KFZD493pPye8LB8xFMCtvE5ml9P1gSBuGLakeGSNwAyN-M5M6EylkSoQjQklPbUBN12JsXhh1Z8FNU7VXYfhPurmqe8ugNtLTmR_Z9ng-zcEj8KlhzFxFUxogVIJlTWfz?width=256&height=252&cropmode=none"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
