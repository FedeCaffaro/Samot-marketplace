import React from 'react';
import { Typography, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid  } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart}) => {

  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className={classes.cartItem}>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Grid>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h5">{item.line_total.formatted} $SAMOT</Typography>
        </Grid>
      </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}><Typography className={classes.buttons}>-</Typography></Button>
              <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}><Typography className={classes.buttons}>+</Typography></Button>
          </div>
          <Button variant="contained" type="button" className={classes.checkoutButton} onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  );
};

export default CartItem;
