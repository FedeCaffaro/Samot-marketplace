import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    background : '#000000',
    boxShadow: 'none',
    borderBottom: '2px solid rgba(15, 15, 15, 0.4)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'medium',
  },
  subtitle: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'medium',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
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
  cartIcon: {
    color: 'white',
  },
}));
