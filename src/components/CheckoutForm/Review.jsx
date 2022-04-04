import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.raw} $SAMOT</Typography>
        </ListItem>
      ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary={checkoutToken.live.shipping.available_options[0].description} />
          <Typography variant="body2">{checkoutToken.live.shipping.available_options[0].price.raw} $SAMOT</Typography>
        </ListItem>
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.raw + checkoutToken.live.shipping.available_options[0].price.raw} $SAMOT
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
