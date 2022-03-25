import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '15%',
    marginBottom: '10%',
    paddingRight: '20%',
    paddingLeft: '0',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2%',
      paddingRight: '2%',
      paddingLeft: '2%',
    },
  },
  orangeColor: {
    color: 'hsl(26, 100%, 55%)',
  },
  bold: {
    fontWeight: '700',
  },
  company: {
    fontSize: '12px',
    letterSpacing: '.1rem',
  },
  title: {
    marginTop: '2%',
    color: 'hsl(220, 13%, 13%)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  description: {
    marginTop: '5%',
    color: 'hsl(219, 9%, 45%)',
  },
  price: {
    color: 'hsl(220, 13%, 13%)',
    fontSize: '25px',
  },
  discount: {
    margin: '6px 15px',
    width: '40px',
    height: '22px',
    borderRadius: '4px',
    padding: '2px 4px',
    backgroundColor: 'hsl(25, 100%, 94%)',
  },
  oldPrice: {
    fontSize: '15px',
    color: 'hsl(220, 14%, 75%)',
    textDecoration: 'line-through',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  amount: {
    marginLeft: '50%',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '200%',
    },
  },
  orderBtn: {
    height: '43px',
    width: theme.spacing(18),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: '8px',
    backgroundColor: 'hsl(223, 64%, 98%)',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'hsl(223, 64%, 98%)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      paddingTop: '2.5%',
      paddingBottom: '2.5%',
    },
  },
  addBtn: {
    marginLeft: theme.spacing(2),
    backgroundColor: 'hsl(26, 100%, 55%)',
    borderRadius: '8px',
    textTransform: 'none',
    width: '50%',
    '&:hover': {
      backgroundColor: 'hsl(26, 100%, 70%)',
      boxShadow: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: '4%',
      marginLeft: '0',
      paddingTop: '2.5%',
      paddingBottom: '2.5%',
    },
  },
  cart: {
    color: 'white',
  },
  cartText: {
    marginLeft: '5%',
    color: 'white',
  },
  add: {
    marginLeft: '50%',
    '&:hover': {
      color: 'hsl(26, 100%, 70%)',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '200%',
    },
  },
  remove: {
    marginLeft: '-50%',
    '&:hover': {
      color: 'hsl(26, 100%, 70%)',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-200%',
    },
  },
  oldPriceSm: {
    marginLeft: '35%',
    marginTop: '2%',
    fontSize: '15px',
    color: 'hsl(220, 14%, 75%)',
    textDecoration: 'line-through',
  },
}))
