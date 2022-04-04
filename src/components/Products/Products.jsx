import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import banner from '../../assets/banner.jpg';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
        <Box className={classes.banner}
          component="img"
          alt="$AMOT OR NOT"
          src={banner}
        />
        <Typography className={classes.samotSubtitle}>NEW ARRIVALS</Typography>
        <Grid container justify="flex-start" spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

