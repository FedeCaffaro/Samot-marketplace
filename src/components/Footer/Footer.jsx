import React from 'react';
import { Container, Grid, Typography, Link } from "@material-ui/core";
import Social from "./Social/Social";
import useStyles from './styles';
import { routes } from "./Routes";

const path = routes;
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Grid container spacing={3} justify="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                //   style={{
                //     fontWeight: router.pathname === link && "bold",
                //     borderBottom:
                //       router.pathname === link && "1px solid #757ce8",
                //   }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
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
                href="https://samot.club"
                justify="center"
                style={{
                    textDecoration: "none",
                }}
            >
            <Typography className={classes.copylight}>
                &copy;SAMOT CLUB
            </Typography>
            </Grid>
        </Container>
        </footer>
  );
};

export default Footer;