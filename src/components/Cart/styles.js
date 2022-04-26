import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    [theme.breakpoints.up('xl')]: {
      minHeight: `calc(100vh - 80px -  60px)`,
    },
    [theme.breakpoints.up('xs')]: {
      minHeight: `calc(100vh - 120px)`,
    },
  },
  yellowPaper: {
    backgroundColor: "#000000",
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    borderRadius: 7,
    backgroundColor: "#000000",
    borderWidth: '2px solid',
    borderColor: '#ffc107',
  },
  
  cartButtons: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  checkoutButton: {
    minWidth: '150px',
    alignItems: 'center',
    backgroundColor: "#ffc107",
    borderRadius: 7,
  },
  samotSubtitle: {
    color: "#ffc107",
    [theme.breakpoints.up('xs')]: {
      fontSize: "3em",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "4em",
    },
  },
  link: {
    textDecoration: 'none',
    color: '#ffc107',
  },
  cardDetails: {
    display: 'flex',
    //marginTop: '1%',
    paddingTop: '30px',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  connectButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#ffc107",
    borderRadius: 7,
  },
  disconnectButton: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: "#000000",
    borderWidth: '2px solid',
    borderColor: '#ffc107',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'medium',
  },
  regularText: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'medium',
    paddingTop: '100px',
  },
  subtitle: {
    flexGrow: 1,
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'medium',
    justifyContent: 'space-between',
  }
}));
