import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography, Divider, Link } from '@material-ui/core';

import gradients from 'utils/gradients';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    display: 'flex',
    padding: 32,
    minHeight: 400,
    paddingBottom: 24,
    flexDirection: 'column',
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h3"
            >
              Sign in
          </Typography>
            <Typography variant="subtitle2">
              Sign in on the internal platform
          </Typography>
            <LoginForm className={classes.loginForm} />
            <Divider className={classes.divider} />
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2"
            >
              Don't have an account?
          </Link>
          </CardContent>
        </Card>
    </Container>
  );
};

export default Login;