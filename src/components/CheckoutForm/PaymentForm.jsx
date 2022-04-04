import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { Transactions } from '../Blockchain/Transactions'
import Review from './Review';

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, handleEmptyCart }) => {
  
  // const sanitizedLineItems = (lineItems) => {
  //   return lineItems.reduce((data, lineItem) => {
  //     const item = data;
  //     let variantData = null;
  //     if (lineItem.selected_options.length) {
  //       variantData = {
  //         [lineItem.selected_options[0].group_id]: lineItem.selected_options[0].option_id,
  //       };
  //     }
  //     item[lineItem.id] = {
  //       quantity: lineItem.quantity,
  //       variants: variantData,
  //     };
  //   return item;
  //   }, {});
  // };

  const handleSubmit = async () => {

    // console.log(sanitizedLineItems(cart.line_items));

    // const orderData = {
    //   line_items: sanitizedLineItems(cart.line_items),
    //   customer: {
    //     firstname: shippingData.firstName,
    //     lastname: shippingData.lastName,
    //     email: shippingData.email
    //   },
    //   shipping: {
    //     name: 'International',
    //     street: shippingData.address1,
    //     town_city: shippingData.city,
    //     county_state: shippingData.shippingSubdivision,
    //     postal_zip_code: shippingData.zip,
    //     country: shippingData.shippingCountry
    //   },
    //   fulfillment: {
    //   shipping_method: shippingData.shippingOption
    //   },
    //   billing:{
    //     "name": "John Doe",
    //     "street": "234 Fake St",
    //     "town_city": "San Francisco",
    //     "county_state": "US-CA",
    //     "postal_zip_code": "94103",
    //     "country": "US"
    //   },
    //   payment: {
    //     gateway: 'manual',
    //     manual: {
    //       id: 'gtwy_zURSwkv193kOIY2bfS',
    //     },
    //   }
    // };

    // console.log(orderData);



    // onCaptureCheckout(checkoutToken.id, orderData);
    nextStep();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
          <form onSubmit={(e) => handleSubmit(e)}>
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={backStep}>Back</Button>
                <Transactions checkoutToken={checkoutToken} shippingData={shippingData} handleSubmit={handleSubmit} handleEmptyCart={handleEmptyCart} />
            </div>
          </form>
    </>
  )
};

export default PaymentForm;
