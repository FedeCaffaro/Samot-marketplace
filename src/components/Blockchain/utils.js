import React from 'react';
import Shop from "./Shop.json"
import Token from "./Token.json"
import { ethers , BigNumber} from "ethers";


const ETHERSCAN_URL = 'https://rinkeby.etherscan.io';
const tokenAddress = Token.address;
const tokenAbi = Token.abi;
const contractAbi = Shop.abi;
const tokenAllowance = ethers.utils.parseEther("100000");
const contractAddress = Shop.address;

const getTransactionLink = (hash) => `${ETHERSCAN_URL}/tx/${hash}`;

const successMessageWithLink = (text, hash) => (
    <>
      <span>{text}</span>
      <a style={{ 'text-decoration': 'underline' }} href={getTransactionLink(hash) } target="_blank" rel="noopener noreferrer">
      See transaction
      </a>
    </>
  );

export const approve = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
    const approveTxn = await tokenContract.approve(contractAddress,BigNumber.from(tokenAllowance));
    return approveTxn;

}


export const buy = async (totalCost) =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const buyTxn = await contract.buyItems(ethers.utils.parseEther(totalCost))
        return buyTxn;
    }

export const checkAllowance =  async(_account) =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
    try {
        const allowanceAmount = await tokenContract.allowance(_account,contractAddress);
        return allowanceAmount > ethers.utils.parseEther("10000");
    } catch(error){
        console.log(error);
    }
}

export const buySuccessRender = ({ hash }) =>
  successMessageWithLink("Purchase successful: " ,hash);

export const buyErrorRender = (error) => {
  return (error.message.length > 100 ? "Error" : error.message);
};

export const approveSuccessRender = ({ hash }) =>
  successMessageWithLink('Approval successful: ', hash);

export const approveErrorRender = (error) => {
  return (error.message.length > 100 ? "Error" : error.message);
};


