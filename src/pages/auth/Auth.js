import React, { Suspense, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

import AuthActions from 'redux/AuthRedux';

import Loading from 'components/loading';

const useStyles = makeStyles(styles);

function Auth({ route }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { contents, fetching } = useSelector(state => state.auth);

  console.log(contents.token);

  useEffect(() => {
    dispatch(AuthActions.loadingActionRequest('token'));
  }, []);

  useEffect(() => {
    if(contents.token) {
      history.push('/');
    }
  }, [contents.token]);

  if(fetching['user']) return <Loading />;

  return (
    <main className={classes.content}>
      <Suspense fallback={<Loading />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </main>
  )
}

export default Auth;
