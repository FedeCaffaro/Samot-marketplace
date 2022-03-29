import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box, Grid  } from '@material-ui/core';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { Info, InfoCaption, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import useStyles from './styles';

// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => ({
//   card: {
//     borderRadius: '1rem',
//     boxShadow: 'none',
//     position: 'relative',
//     minWidth: 100,
//     minHeight: 180,
//     '&:after': {
//       content: '""',
//       display: 'block',
//       position: 'absolute',
//       width: '100%',
//       height: '64%',
//       bottom: 0,
//       zIndex: 1,
//       background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
//     },
//   },
//   content: {
//     position: 'absolute',
//     zIndex: 2,
//     bottom: 0,
//     width: '100%',
//   },
// }));

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  //const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
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
