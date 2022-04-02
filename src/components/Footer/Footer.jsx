import React from 'react';
import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social/Social";
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Container maxWidth="lg">
            <Grid container direction="column" style={{ margin: "1.2em 0" }}>
            <Social />
            </Grid>
            <Grid
            item
            container
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com"
            justify="center"
            style={{
                textDecoration: "none",
            }}
            >
            <Typography className={classes.copylight}>
                &copy;Samot Club
            </Typography>
            </Grid>
        </Container>
        </footer>
  );
};

export default Footer;