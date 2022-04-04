import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundColor: '#191919',
    outline: ''
  },
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  productTitle: {
    [theme.breakpoints.up('xs')]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "2em",
    },
  },
  productPrice: {
    [theme.breakpoints.up('xs')]: {
      fontSize: "1.25em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1.75em",
    },
  },
  media: {
    height: 350,
    //paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    //backgroundColor: "#0e0e0e"
  },
  cardContent: {
    //display: 'flex',
    //justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: '#191919',
    color: 'white',
  },
  cartIcon: {
    color: 'white',
  },
}));
