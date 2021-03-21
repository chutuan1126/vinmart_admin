/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Badge, IconButton, Toolbar, Hidden, Input, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { styles } from './styles';

import AuthActions from 'redux/AuthRedux';

import { list_notis } from 'mock';
import { DropdownLanguage, DropdownNotifications } from 'components/dropdown';
import { PricingModal, NotificationsPopover } from 'components';

const useStyles = makeStyles(styles);

function Header({ onOpenNavBarMobile, className }) {
  const { t } = useTranslation(["auth", "header"]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const handleLogout = () => {
    dispatch(AuthActions.signOutFirebaseRequest('logout'));
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <AppBar color="primary" className={classNames(classes.root, className)} >
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="https://react-material-kit.devias.io/static/logo.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <div ref={searchRef} className={classes.search} >
          <SearchIcon className={classes.searchIcon} />
          <Input
            disableUnderline
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={t('header:search_people_and_places')}
            classes={{ root: classes.searchInput, focused: classes.focused }}
          />
        </div>
        <DropdownLanguage />
        <DropdownNotifications />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile} >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <IconButton color="inherit" onClick={() => { }} className={classes.avatar} >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">T</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default Header;