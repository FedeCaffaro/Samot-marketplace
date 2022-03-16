import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button, Grid } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers";
import { injected } from "../Wallet/connectors"

import logo from '../../assets/logo.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isConnected,setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer,setSigner] = useState(undefined);
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  // useEffect(()=>{
  //   if( typeof window.ethereum !== "undefined") {
  //     setHasMetamask(true);
  //   }
  // });

  // useEffect(() => {
  //   const connectWalletOnPageLoad = async () => {
  //     if (localStorage?.getItem('isWalletConnected') === 'true') {
  //       try {
  //         await window.ethereum.request({ method: "eth_requestAccounts" });
  //         setIsConnected(true);
  //         const provider = new ethers.providers.Web3Provider(window.ethereum);
  //         setSigner(provider.getSigner());
  //         localStorage.setItem('isWalletConnected', true)
  //       } catch (ex) {
  //         console.log(ex)
  //       }
  //     }
  //   }
  //   connectWalletOnPageLoad()
  // }, [])

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  // async function connect(){
  //   if(typeof window.ethereum !== "undefined") {
  //     try{
  //     await window.ethereum.request({method: "eth_requestAccounts" });
  //     setIsConnected(true);
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     setSigner(provider.getSigner());
  //     localStorage.setItem("isWalletConnected", true);
  //   } catch(e){
  //     console.log(e);
  //   }
  // } else {
  //   setIsConnected(false);
  //   }
  // }

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="50px" className={classes.image} /> Samot Shop
          </Typography>
          <div className={classes.button}>
            <Button variant="contained" type="button" color="primary" onClick={connect}>Connect to MetaMask</Button>
              {active ? <span>Connected with<b>...{account.slice(-4)}</b></span> : <span>Not connected</span>}
            <Button variant="contained" type="button" color="secondary" onClick={disconnect}>Disconnect</Button>
          </div>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
