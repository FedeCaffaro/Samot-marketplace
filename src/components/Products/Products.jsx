import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import banner from '../../assets/banner.png';
import arrivals from '../../assets/arrivals.png';
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
        <Box
          component="img"
          alt="ARRIVAL$"
          src={arrivals}
          width={350}
          alignSelf="center"
        />
      {/* <div className={classes.toolbar} /> */}
      <Grid container justify="flex-start" spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
  console.log(products);
};

export default Products;

