import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, Paper, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { styles } from './styles';

import useRouter from 'hooks/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';

const useStyles = makeStyles(styles);

function NavBar({ openMobile, onMobileClose, className }) {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useSelector(state => state.auth.contents);

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }
  }, [router.location.pathname]);

  const navbarContent = user ? (
    <div className={classes.content}>
      <div className={classes.profile}>
        <img alt="Logo" src="https://react-material-kit.devias.io/static/logo.svg" />
        <Typography className={classes.name} variant="h5">
          {'Thiên Long Soft'}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation key={list.title} pages={list.pages} title={list.title} />
        ))}
      </nav>
    </div>
  ) : null;

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          open={openMobile}
          onClose={onMobileClose}
        >
          <div className={classes.root}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper square elevation={1} className={classes.root}>
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  openMobile: PropTypes.bool,
  onMobileClose: PropTypes.func,
};

export default NavBar;