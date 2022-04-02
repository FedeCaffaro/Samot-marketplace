import React from 'react';
import { useState, useEffect } from 'react';
import { Button} from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { approve, buy, checkAllowance, buySuccessRender, approveSuccessRender, approveErrorRender, buyErrorRender } from './utils';
import 'react-toastify/dist/ReactToastify.css';



export const Transactions = () => {
  
  const cost = "1";

  
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
  }, [account]);

  const [isApproved, setIsApproved] = useState(false);

 const renderAndGetData =
    (aFunction, callBefore = () => {}) =>
    (result) => {
      callBefore();
      return aFunction(result?.data);
    };

  const approveTransfer = () =>{
      if(active){
          toast.promise(approve(), {
            pending: 'Approving...',
            success: {render: renderAndGetData(approveSuccessRender)},
              error: { render: renderAndGetData(approveErrorRender) }
          });
        } else {
            console.log("Please install metamask");
        }
    }

  const purchase = async(totalCost) =>{
        if(active){
          toast.promise(buy(totalCost), {
            pending: 'Buying...',
            success: {render:  renderAndGetData(buySuccessRender)},
            error: {render: renderAndGetData(buyErrorRender)},
            });
        } else {
            console.log("Please install metamask");
        }
    }


    return(
      <>
        {active? (
          <div>
          {isApproved? 
          (<Button variant="outlined" onClick={() => purchase(cost)}> Purchase </Button>) :
          (<Button variant="outlined" onClick={() => approveTransfer()}> Approve </Button>)
          } 
          </div>
          ) :
          (
            <div>
            <p className="font-bold">
              {" "}
              <b>You must be connected to MetaMask to buy.{" "}</b>
            </p>
          </div>
          )
      }

      </>
    );
}