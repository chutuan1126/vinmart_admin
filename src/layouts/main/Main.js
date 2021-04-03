import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AuthActions from 'redux/AuthRedux';

function Main({ children }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthActions.loadingActionRequest('token'));
  }, []);

  return (<Fragment>{children}</Fragment>);
}

export default Main;
