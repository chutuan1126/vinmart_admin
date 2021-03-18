import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, Paper, Avatar, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { styles } from './styles';

import useRouter from 'hooks/useRouter';
import { Navigation } from 'components/navigation';
import navigationConfig from './navigationConfig';

const useStyles = makeStyles(styles);

function NavBar({ openMobile, onMobileClose, className, ...rest }) {
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
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={user.photoURL}
          to="/profile/1/timeline"
        />
        <Typography
          className={classes.name}
          variant="h4"
        >
          {user.displayName}
        </Typography>
        {/* <Typography variant="body2">{user.bio}</Typography> */}
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  ) : null;

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div
            {...rest}
            className={classNames(classes.root, className)}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={classNames(classes.root, className)}
          elevation={1}
          square
        >
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;