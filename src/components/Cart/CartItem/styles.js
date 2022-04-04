import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartItem: {
    backgroundColor: '#191919',
  },
  media: {
    height: 200,
  },
  checkoutButton: {
    minWidth: '70px',
    alignItems: 'center',
    backgroundColor: "#ffc107",
    borderRadius: 7,
    justifyContent: 'flex-end',
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
