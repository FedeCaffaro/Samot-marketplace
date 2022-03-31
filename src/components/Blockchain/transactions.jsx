import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import Shop from "../../Constants/Shop.json"
import Token from "../../Constants/Token.json"

import { ethers , BigNumber} from "ethers";

const tokenAddress = Token.address;
const tokenAbi = Token.abi;
const contractAbi = Shop.abi;
const tokenAllowance = ethers.utils.parseEther("00000");

const etherscanUrl = 'https://rinkeby.etherscan.io';
const contractAddress = Shop.address;

export const Transactions = () => {

    const [transactionUrl, setTransactionUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {
        active,
        account,
        library:provider,
      } = useWeb3React();

    async function approveBuy(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try{
            const approveTxn = await tokenContract.approve(contractAddress,BigNumber.from(tokenAllowance));
            return approveTxn;
  
        } catch(error){
            return error;
            }
    }
  
    async function checkAllowance(){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
            try {
                const allowanceAmount = await tokenContract.allowance(account,contractAddress);
                return allowanceAmount;
            } catch(error){
                console.log(error);
            }
    }
  
    async function buy(totalCost){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
            const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
            if (checkAllowance() >= ethers.utils.parseEther("1000") ){
                try {
                    const buyTxn = await contract.buyItems(ethers.utils.parseEther(totalCost));
                    return buyTxn;
                } catch (error) {
                    return error;
                }
            } else{
                const approveTxn = await tokenContract.approve(contractAddress,tokenAllowance);
                const buyTxn = await contract.buyItems(1);
                return approveTxn , buyTxn ;
            }
        }



    const purchase = async(purchaseTotal) =>{
        if(active){
            setLoading(true);
            const result = await buy(purchaseTotal)
            if (result.error) {
            setError(result.error)
            } else {
            setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
            }
        } else {
            console.log("Please install metamask");
        }
    }

    return(
      <>
        <Button variant="outlined" onClick={purchase("1")}> Purchase </Button>
      </>
    )
}
