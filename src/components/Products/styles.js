import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#0e0e0e',
    padding: theme.spacing(3),
  },
  banner: {
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  root: {
    flexGrow: 1,
  },
}));
