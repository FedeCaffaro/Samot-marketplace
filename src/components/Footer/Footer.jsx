import React from 'react';
//import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from "@material-ui/core";
//import { routes } from "./Routes";
import Social from "./Social/Social";
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    //const path = routes;
    return (
        <footer className={classes.footer}>
        <Container maxWidth="lg">
            {/* <Grid container spacing={3} justify="center">
            {path.map(({ name, link }) => (
                <Grid item key={link}>
                <Link href={link}>
                    <Typography
                    className={classes.link}
                    // style={{
                    //     fontWeight: router.pathname === link && "bold",
                    //     borderBottom:
                    //     router.pathname === link && "1px solid #757ce8",
                    // }}
                    >
                    {name}
                    </Typography>
                </Link>
                </Grid>
            ))}
            </Grid> */}
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