import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem';

export default makeStyles(() => ({
  cartItem: {
    backgroundColor: '#191919',
  },
  media: {
    height: 160,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color: "white",
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    color: "white",
  },
}));
