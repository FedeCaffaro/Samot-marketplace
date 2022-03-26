import {buy, approveBuy,checkAllowance} from './utils';
import { useState, useEffect } from 'react';
import { etherscanUrl } from '../../Constants/constants';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';

const Transactions = () => {
    const [transactionUrl, setTransactionUrl] = useState("");
    const [pending, setPending] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allowanceAmount, setAllowanceAmount] = useState(0);




}