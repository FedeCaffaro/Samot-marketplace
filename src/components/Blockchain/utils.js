import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { contractAbi, contractAddress,tokenAbi,tokenAddress,tokenAllowance } from '../../Constants/constants';

const { account, active, library:provider } = useWeb3React();

async function approveBuy(){
    if (active) {
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try{
            const approveTxn = await tokenContract.approve(contractAddress,tokenAllowance);
            return {data: approveTxn, status:"ok"};

        } catch(error){
            return { data: error, status:"error"}
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
            const allowanceAmount = await tokenContract.allowance(signer,contractAddress);
            return { data: allowanceAmount, status:"ok"};
        } catch(error){
            return { data: error, status:"error"}
        }
    } else {
        console.log("Please install Metamask");
    }
}

export const buy = async  (purchaseTotal) =>{
    if (active) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        if (checkAllowance() >= 1000 ){
            try {
                const buyTxn = await contract.buyItems(purchaseTotal);
                return { data: buyTxn, status:"ok" };
            } catch (error) {
                return { data: error, status:"error" }
            }
        } else{
            const approveTxn = await tokenContract.approve(contractAddress,tokenAllowance);
            const buyTxn = await contract.buyItems(purchaseTotal);
            return approveTxn , buyTxn ;
        }

        } else {
            console.log('Please install MetaMask');
        }
    }

module.exports = {buy, approveBuy,checkAllowance};