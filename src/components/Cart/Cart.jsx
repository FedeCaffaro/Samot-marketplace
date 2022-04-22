import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { approve, checkAllowance, approveSuccessRender, approveErrorRender } from '../Blockchain/utils';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

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
  }, [account]);

  const renderAndGetDataApproval =
    (aFunction, callBefore = () => {}) =>
    (result) => {
      callBefore();
      setIsApproved(true);
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
            success: {render: renderAndGetDataApproval(approveSuccessRender)},
              error: {render: renderAndGetError(approveErrorRender)}
          });
        } else {
            console.log("Please install metamask");
        }
    }
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Grid className = {classes.container}>
      <Typography variant="h4" className={classes.regularText}>You still haven't picked up any merch.
      <Typography variant="title" noWrap>&nbsp;</Typography>
      <Link className={classes.link} to="/">Start adding some!</Link>
      </Typography>
    </Grid>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
    <Grid className={classes.container}>
    <Typography className={classes.samotSubtitle}>YOUR CART</Typography>
      <Paper className={classes.yellowPaper}>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={3} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" gutterBottom >Subtotal: {cart.subtotal.formatted} $SAMOT</Typography>
        <div className={classes.cartButtons}>
          <Button className={classes.emptyButton} size="large" type="button" variant="outlined" onClick={handleEmptyCart}>
            <Typography className={classes.subtitle}>Empty cart</Typography>
          </Button>
          {isApproved?
          (<Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained">
            <Typography className={classes.title}>Checkout</Typography>
          </Button>):
          (<Button className={classes.disconnectButton} variant="outlined" type="button" onClick={() =>approveTransfer()}> 
          <Typography variant="subtitle2" className={classes.subtitle}>Approve before checkout</Typography>
          </Button>)
        }
        </div>
      </div>
      </Paper>
      </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
