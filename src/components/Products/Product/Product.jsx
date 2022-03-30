import React from 'react';
import { CardActionArea, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <CardActionArea className={classes.actionArea}>
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" component="h2">{product.name}</Typography>
          {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" /> */}
          <Grid>
          <Typography variant="h6" component="h2">{product.price.formatted} $SAMOT</Typography>
          </Grid>
        </div>
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

