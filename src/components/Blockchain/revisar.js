import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { contractAbi, contractAddress,tokenAbi,tokenAddress,tokenAllowance,etherscanUrl } from '../../Constants/constants';

const { account,active, library:provider } = useWeb3React();
const [transactionUrl, setTransactionUrl] = useState("");
const [loading, setLoading] = useState(false);

async function approveBuy(){
    if (active) {
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try{
            setLoading(true);
            setPending(true);
            const result = await tokenContract.approve(contractAddress,tokenAllowance);
            setAllowanceAmount(result);
            setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
        } catch(error){
            console.log(error);
            }
    } else {
        console.log("Please install Metamask");
    }
}

async function checkAllowance(){
    if (active){
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try {
            const result = await tokenContract.allowance(signer,contractAddress);
            return result;
        } catch(error){
            console.log(error);
        }
    } else {
        console.log("Please install Metamask");
    }
}

async function buy() {
    if (active) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        if (checkAllowance() >= 1000 ){
            try {
                setPending(true);
                setLoading(true);
                const resutl = await contract.buyItems();
                setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
            } catch (error) {
                console.log(error);
            }
        } else{
            setPending(true);
            setLoading(true);
            const allowanceAmount =await tokenContract.approve(contractAddress,tokenAllowance);
            setAllowanceAmount(allowanceAmount);
            const result = await contract.buyItems(totalPurchase);
            setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
        }

        } else {
            console.log('Please install MetaMask');
        }
    }

module.exports = {buy, approveBuy,checkAllowance};