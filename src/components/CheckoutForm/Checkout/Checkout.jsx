import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error, handleEmptyCart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});

  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = ({checkoutToken, shippingData}) => (true ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {shippingData.firstName}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {checkoutToken.id}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? (
        <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
      ) : (
     <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} handleEmptyCart={handleEmptyCart} cart={cart} />));

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Grid className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {!checkoutToken ? (
          <div className={classes.spinner}>
                  <CircularProgress />
          </div>) : ''}
          {activeStep === steps.length ? <Confirmation checkoutToken={checkoutToken} shippingData={shippingData} /> : checkoutToken && <Form />}
        </Paper>
        </Grid>
      </main>
    </>
  );
};

export default Checkout;
