/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, IconButton, Toolbar, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from './styles';

import { SearchAnalytics, DropdownLanguage, DropdownNotifications, DropdownUsers } from 'components/dropdown';

const useStyles = makeStyles(styles);

function Header({ onOpenNavBarMobile }) {
  const classes = useStyles();

  return (
    <AppBar color="primary" className={classes.root} >
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="https://react-material-kit.devias.io/static/logo.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <SearchAnalytics />
        <DropdownLanguage />
        <DropdownNotifications />
        <DropdownUsers />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile} >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onOpenNavBarMobile: PropTypes.func
};

export default Header;