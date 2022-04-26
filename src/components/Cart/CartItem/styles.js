import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartItem: {
    backgroundColor: '#191919',
    width: '100%',
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
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'baseline'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    color: "white",
  },
}));
