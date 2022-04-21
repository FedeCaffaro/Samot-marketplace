import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundColor: '#191919',
    outline: '',
    [theme.breakpoints.up('xs')]: {
      height: 385,
    },
    [theme.breakpoints.up('sm')]: {
      height: 550,
    },
    [theme.breakpoints.up('lg')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 700,
    },
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
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.75em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "2em",
    },
  },
  productPrice: {
    [theme.breakpoints.up('xs')]: {
      fontSize: "1.25em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.50em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1.75em",
    },
  },
  media: {
    [theme.breakpoints.up('xs')]: {
      height: 200,
    },
    [theme.breakpoints.up('sm')]: {
      height: 370,
    },
    [theme.breakpoints.up('lg')]: {
      height: 400,
    },
    [theme.breakpoints.up('xl')]: {
      height: 500,
    },
    //paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //backgroundColor: "#0e0e0e"
  },
  cardContent: {
    //display: 'flex',
    //justifyContent: 'space-between',
    padding: '0px',
    textAlign: 'center',
    backgroundColor: '#191919',
    color: 'white',
  },
  cartIcon: {
    color: 'white',
  },
}));
