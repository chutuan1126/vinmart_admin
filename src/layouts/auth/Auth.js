import React, { Suspense, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

import AuthActions from 'redux/AuthRedux';

import { Loading } from 'components';

const useStyles = makeStyles(styles);

function Auth({ route }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { contents, fetching } = useSelector(state => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    contents.token && token && history.push('/');
  }, [contents.token]);

  useEffect(() => {
    if(location.pathname !=='/auth') {
      const token = localStorage.getItem('token');
      contents.token && !token && dispatch(AuthActions.loadingActionRequest('token'));
    }
  }, [location.pathname]);

  if (fetching['user'] || fetching['token']) return <Loading />;

  return (
    <main className={classes.content}>
      <Suspense fallback={<Loading />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </main>
  )
}

export default Auth;
