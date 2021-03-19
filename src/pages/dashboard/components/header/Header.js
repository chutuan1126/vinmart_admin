/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Badge, Button, IconButton, Toolbar, Hidden, Input } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { styles } from './styles';

import useRouter from 'hooks/useRouter';
import AuthActions from 'redux/AuthRedux';

import { PricingModal, NotificationsPopover } from 'components';

const useStyles = makeStyles(styles);

const list_notis = [
  {
    id: 1,
    type: "order",
    title: "Your order is placed",
    created_at: new Date(),
  },
  {
    id: 2,
    type: "user",
    title: "New message received",
    created_at:  new Date(),
  },
  {
    id: 3,
    type: "project",
    title: "Your item is shipped",
    created_at:  new Date(),
  },
  {
    id: 4,
    type: "feature",
    title: "New message received",
    created_at:  new Date(),
  }
]

function Header({ onOpenNavBarMobile, className }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = useRouter();
  const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState(list_notis);
  const [openNotifications, setOpenNotifications] = useState(false);

  const handleLogout = () => {
    dispatch(AuthActions.signOutFirebaseRequest('logout'));
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  return (
    <AppBar color="primary" className={classNames(classes.root, className)} >
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="https://react-material-kit.devias.io/static/logo.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <div ref={searchRef} className={classes.search} >
            <SearchIcon className={classes.searchIcon} />
            <Input
              disableUnderline
              value={searchValue}
              onChange={handleSearchChange}
              placeholder={'Search people & places'}
              classes={{ root: classes.searchInput, focused: classes.focused }}
            />
          </div>
        </Hidden>
        <Hidden mdDown>
          <IconButton
            color="inherit"
            ref={notificationsRef}
            className={classes.notificationsButton}
            onClick={handleNotificationsOpen}
          >
            <Badge
              variant="dot"
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button color="inherit" className={classes.logoutButton} onClick={handleLogout} >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile} >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <PricingModal open={pricingModalOpen} onClose={handlePricingClose} />
      <NotificationsPopover
        open={openNotifications}
        notifications={notifications}
        onClose={handleNotificationsClose}
        anchorEl={notificationsRef.current}
      />
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default Header;