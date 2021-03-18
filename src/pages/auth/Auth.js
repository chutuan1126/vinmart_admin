import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { Container, LinearProgress } from '@material-ui/core';
import { styles } from './styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function Auth({ route }) {
  const classes = useStyles();
  const { contents } = useSelector(state => state.auth);
  const [user, setUser] = useState(null);

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
        {!user ? renderRoutes(route.routes) : <div>Login Success</div>}
      </Suspense>
    </main>
  )
}

export default Auth;
