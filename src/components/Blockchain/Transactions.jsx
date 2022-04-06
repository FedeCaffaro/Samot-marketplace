import React from 'react';
import { useState, useEffect } from 'react';
import { Button} from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { approve, buy, checkAllowance, buySuccessRender, approveSuccessRender, approveErrorRender, buyErrorRender } from './utils';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


export const Transactions = ({ checkoutToken, shippingData, handleSubmit, handleEmptyCart }) => {
  
  const productCost = checkoutToken.live.subtotal.raw;
  const shippingCost = checkoutToken.live.shipping.available_options[0].price.raw;
  const cost = (productCost + shippingCost).toString();
  const [isApproved, setIsApproved] = useState(false);

  
  const {
    active,
    account,
  } = useWeb3React();
  
  const checkApprove = async() => {
    return checkAllowance(account)
      .then((result) => {
        setIsApproved(result);
      })
  };

  useEffect(() => {
    if (active) {
      checkApprove();
    }
  }, [isApproved]);


 const renderAndGetData =
    (aFunction, callBefore = () => {}) =>
    (result) => {
      callBefore();
      createTemplateParams();
      handleEmailSend(createTemplateParams());
      handleEmptyCart();
      handleSubmit();

      return aFunction(result?.data);
    };

  const renderAndGetDataApproval =
    (aFunction, callBefore = () => {}) =>
    (result) => {
      callBefore();
      return aFunction(result?.data);
    };
    
  const renderAndGetError =
    (aFunction, callBefore = () => {}) =>
    (result) => {
      callBefore();
      return aFunction(result?.data);
    };
  const approveTransfer = () =>{
      if(active){
          toast.promise(approve(), {
            pending: 'Approving...',
            success: {render: renderAndGetDataApproval(approveSuccessRender,checkApprove)},
              error: {render: renderAndGetError(approveErrorRender,checkApprove)}
          });
        } else {
            console.log("Please install metamask");
        }
    }

  const purchase = async(totalCost) =>{
        if(active){
          toast.promise(buy(totalCost), {
            pending: 'Buying...',
            success: {render: renderAndGetData(buySuccessRender)},
            error: {render: renderAndGetError(buyErrorRender)},
            });
        } else {
            console.log("Please install metamask");
        }
    }

  const createTemplateParams = () => {
      const line_items = checkoutToken.live.line_items;

      const splitLineItems = () => {
          let product_names = {};
          for(let i = 0; i < line_items.length; i++) {
              product_names[i] = line_items[i].product_name;
          }
          console.log("Email Sent")
          return product_names;
      }

      const splitLineItems2 = () => {
          let product_quantitys = {};
          for(let i = 0; i < line_items.length; i++) {
              product_quantitys[i] = line_items[i].quantity.toString();
          }
          return product_quantitys;
      }

      const splitLineItems3 = () => {
          let product_prices = {};
          for(let i = 0; i < line_items.length; i++) {
              product_prices[i] = line_items[i].price.formatted.toString();
          }
          return product_prices;
      }

      const product_names = splitLineItems(line_items);
      const product_quantitys = splitLineItems2(line_items);
      const product_prices = splitLineItems3(line_items);

      const templateParams = {
        id: checkoutToken.id,
        product_names: product_names,
        product_quantitys: product_quantitys,
        product_prices: product_prices,
        cart_total: checkoutToken.live.subtotal.formatted,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        transaction: { }
      };

      return templateParams
  }

  const handleEmailSend = (templateParams) => {
    emailjs.send('service_cm6fk1o','template_d11jias', templateParams, '0-hzlTXEVchQXpt3o')
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
    console.log('FAILED...', err);
    });
  }
    return(
      <>
        {active? (
          <div>
          {isApproved? 
          (<Button variant="outlined" onClick={() =>purchase(cost)}> Purchase </Button>) :
          (<Button variant="outlined" onClick={() => approveTransfer()}> Approve </Button>)
          } 
          </div>
          ) :
          (
            <div>
            <p className="font-bold">
              {" "}
              <b>You must be connected to MetaMask to purchase.{" "}</b>
            </p>
          </div>
          )
      }

      </>
    );
}
