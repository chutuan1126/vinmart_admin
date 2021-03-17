import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { Container, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  content: {
    height: '100vh',
    backgroundColor: '#f4f6f8',
  },
  linearProgress: {
    position: 'absolute',
    top: '50%',
    zIndex: 999,
    transform: 'translateY(-50%)'
  }
}));

function Auth({ route }) {
  const classes = useStyles();

  const renderLinearProgress = () => {
    return (
      <Container className={classes.linearProgress}>
        <LinearProgress />
      </Container>
    );
  }
  return (
    <main className={classes.content}>
      <Suspense fallback={renderLinearProgress()}>
        {renderRoutes(route.routes)}
      </Suspense>
    </main>
  )
}

export default Auth;
