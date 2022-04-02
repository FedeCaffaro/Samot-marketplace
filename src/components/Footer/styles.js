import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
      backgroundColor: '#191919',
      width: '100vw',
      // position: "relative",
      overflow: "hidden",
      padding: "2em 0 ",
      position: 'relative',
          left: 0,
          bottom: 0,
          right: 0,
    },
    link: {
      fontSize: "1.25em",
      color: "#fff",
      "&:hover": {
        color: theme.palette.info.main,
      },
    },
    copylight: {
      color: "#fff",
      fontSize: "1em",
      "&:hover": {
        color: theme.palette.info.main,
      },
    },
  }));
  