import React from 'react';
import { CardActionArea, Card, CardMedia, Box, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import Carousel from './Carousel/Carousel';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <CardActionArea className={classes.actionArea}>
    <Card className={classes.root}>
      <Carousel product={product} />
      <CardContent className={classes.cardContent}>
          <Typography className={classes.productTitle} variant="h5" component="h2">{product.name}</Typography>
          {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" /> */}
          <Grid>
          <Typography className={classes.productPrice} variant="h6" component="h2">{product.price.formatted} $SAMOT</Typography>
          </Grid>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart} className={classes.cartIcon}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </CardActionArea>
  );
};

export default Product;

