import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography, Divider, Link } from '@material-ui/core';

import { RegisterForm } from './components';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const Register = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3" > Sign up </Typography>
          <Typography variant="subtitle2"> Sign up on the internal platform </Typography>
          <RegisterForm className={classes.registerForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            to="/auth/login"
            underline="always"
            variant="subtitle2"
            component={RouterLink}
          >
            Have an account?
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
};

export default Register;