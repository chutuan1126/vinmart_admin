import React, { Suspense, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

import AuthActions from 'redux/AuthRedux';

import { Loading } from 'components';

import { Header, NavBar } from './components';

const useStyles = makeStyles(styles);

const Dashboard = ({ route }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  const { fetching, contents } = useSelector(state => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    !contents.token && !token && history.push('/auth');
  }, [contents.token]);

  useEffect(() => {
    if (location.pathname !== '/') {
      const token = localStorage.getItem('token');
      !token && dispatch(AuthActions.loadingActionRequest('token'));
    }
  }, [location.pathname]);

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  if (fetching['token'] || fetching['logout']) return <Loading />;

  return (
    <div className={classes.root}>
      <Header
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Suspense fallback={<Loading />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </main>
      </div>
      {/* <ChatBar /> */}
    </div>
  );
};

export default Dashboard;
