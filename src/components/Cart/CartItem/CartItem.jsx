import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid  } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

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
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
  // return (
  //   <>
  //     <NoSsr>
  //       <GoogleFontLoader
  //         fonts={[
  //           { font: 'Spartan', weights: [300] },
  //           { font: 'Montserrat', weights: [200, 400, 700] },
  //         ]}
  //       />
  //     </NoSsr>
  //     <Card className={styles.card}>
  //       <CardMedia
  //         classes={mediaStyles}
  //         image={item.image.url} alt={item.name}
  //       />
  //       <Box py={3} px={2} className={styles.content}>
  //         <Info useStyles={useGalaxyInfoStyles}>
  //           <InfoSubtitle>Galaxy</InfoSubtitle>
  //           <InfoTitle>Buds 2019</InfoTitle>
  //           <InfoCaption>Perfect for everyone</InfoCaption>
  //         </Info>
  //       </Box>
  //       <CardActions>
  //        <div>
  //          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
  //          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
  //          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
  //        </div>
  //        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
  //      </CardActions>
  //     </Card>
  //   </>
  // );
};

export default CartItem;
