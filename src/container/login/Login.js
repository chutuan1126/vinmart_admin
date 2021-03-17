import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography, Divider, Link } from '@material-ui/core';

import { LoginForm } from './components';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3" > Sign in </Typography>
          <Typography variant="subtitle2"> Sign in on the internal platform </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            underline="always"
            variant="subtitle2"
            to="/auth/register"
            component={RouterLink}
          >
            Don't have an account?
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;