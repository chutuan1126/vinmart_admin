/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, IconButton, Toolbar, Hidden, Input } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from './styles';

import { DropdownLanguage, DropdownNotifications, DropdownUsers } from 'components/dropdown';

const useStyles = makeStyles(styles);

function Header({ onOpenNavBarMobile, className }) {
  const { t } = useTranslation(["auth", "header"]);

  const classes = useStyles();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <AppBar color="primary" className={classes.root} >
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
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default Header;