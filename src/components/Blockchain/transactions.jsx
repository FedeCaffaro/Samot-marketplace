import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import Shop from "../../Constants/Shop.json"
import Token from "../../Constants/Token.json"
import { ethers , BigNumber} from "ethers";

const tokenAddress = Token.address;
const tokenAbi = Token.abi;
const contractAbi = Shop.abi;
const tokenAllowance = ethers.utils.parseEther("100000");
const cost = "1";


const etherscanUrl = 'https://rinkeby.etherscan.io';
const contractAddress = Shop.address;

export const Transactions = () => {

    const [transactionUrl, setTransactionUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showError, setErrorShow] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    const handleErrorClose = () => setErrorShow(false);


    const {
        active,
        account,
      } = useWeb3React();

    async function approve(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try{
            const approveTxn = await tokenContract.approve(contractAddress,BigNumber.from(tokenAllowance));
            return {data: approveTxn, status:"ok"};  
        } catch(error){
            return { data: error, status:"error"}
            }
    }
    

    async function buy(totalCost){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
                try {
                    const buyTxn = await contract.buyItems(ethers.utils.parseEther(totalCost));
                    return {data: buyTxn, status:"ok"};  
                } catch (error) {
                    return { data: error, status:"error"}
                }
        }

    async function checkAllowance(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenAddress,tokenAbi,signer);
        try {
            const allowanceAmount = await tokenContract.allowance(account,contractAddress);
            return allowanceAmount > ethers.utils.parseEther("10000");
        } catch(error){
            console.log(error);
        }
    }

    const approveTransfer = async() =>{
        if(active){
            // setLoading(true);
            const result = await approve();
            if (result.error) {
            setError(result.error);
            } else {
                setIsApproved(true);
            }
        } else {
            console.log("Please install metamask");
        }
    }

    const purchase = async(totalCost) =>{
        if(active){
            // setLoading(true);
            const result = await buy(totalCost)
            if (result.error) {
            setError(result.error)
            } else {
            setTransactionUrl(`${etherscanUrl}/tx/${result.transactionHash}`)
            }
        } else {
            console.log("Please install metamask");
        }
    }

    const checkApprove = () => {
        return checkAllowance()
          .then((result) => {
            setIsApproved(result);
          })
      };
    
      useEffect(() => {
        if (active) {
          checkApprove();
        }
      }, [account]);

    return(
      <>
        {isApproved?  (
        <Button variant="outlined" onClick={() =>purchase(cost)}> Purchase </Button>) :
        (<Button variant="outlined" onClick={() => approveTransfer()}> Approve </Button>)
        }
        {/* {transactionUrl && (
            <Button target="_blank" size="lg" href={transactionUrl}>
                View Transaction
            </Button>
        )} */}
        {/* {error && (
        <Modal show={showError} onHide={handleErrorClose} centered>
          <Modal.Header>
            <Modal.Title >Purchase error</Modal.Title>
            <div onClick={handleErrorClose}>
              <AiOutlineClose />
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>{error}</p>
          </Modal.Body>
        </Modal>
      )} */}
      </>
    )
}
