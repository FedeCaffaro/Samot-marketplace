import {buy, approveBuy,checkAllowance} from './utils';
import { useState, useEffect } from 'react';
import { etherscanUrl } from '../../Constants/constants';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';

const Transactions = () => {

    const [transactionUrl, setTransactionUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [allowanceAmount, setAllowanceAmount] = useState(0);
    const [error, setError] = useState(false);


    const purchase = async() =>{
        setLoading(true);
        const result = await buy(wallet.account, numberOfTokens, price)
        if (result.error) {
          setError(result.error)
        } else {
          setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
        }
    }




}