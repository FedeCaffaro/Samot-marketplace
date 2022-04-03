import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartItem: {
    paddingTop: '30px',
    backgroundColor: '#191919',
  },
  media: {
    height: 200,
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
