import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import yourcart from '../../assets/yourcart.png';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Grid className = {classes.container}>
      <Typography variant="subtitle1" className={classes.regularText}>You have no items in your shopping cart,
        <Link className={classes.link} to="/">start adding some</Link>!
      </Typography>
    </Grid>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
    <Grid className={classes.container}>
      <Box
        pb={5}
        component="img"
        alt="Your Cart"
        src={yourcart}
        width={200}
        alignSelf="center"
      />
      <Paper className={classes.yellowPaper}>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={3} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" gutterBottom >Subtotal: {cart.subtotal.formatted} $SAMOT</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="outlined" onClick={handleEmptyCart}>
            <Typography className={classes.subtitle}>Empty cart</Typography>
          </Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained">
            <Typography className={classes.title}>Checkout</Typography>
          </Button>
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
