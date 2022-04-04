import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: theme.spacing(3),
  },
  banner: {
    boxShadow: 'none',
    [theme.breakpoints.up('xs')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop: '20px', 
    },
  },
  arrivalsBanner: {
    alignItems: 'center',
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
  root: {
    flexGrow: 1,
  },
}));
