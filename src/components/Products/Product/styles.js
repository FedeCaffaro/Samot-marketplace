import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
