import React, { Suspense, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { styles } from './styles';

import Loading from 'components/loading';

import { Header, NavBar } from './components';

const useStyles = makeStyles(styles);

const Dashboard = ({ route }) => {
  const classes = useStyles();
  const history = useHistory();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  const { fetching, contents } = useSelector(state => state.auth);

  useEffect(() => {
    if(!contents.token) {
      history.push('/auth');
    }
  }, [contents.token]);

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

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
