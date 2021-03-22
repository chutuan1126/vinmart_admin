import React from 'react';
import { useDispatch } from 'react-redux';
import useClickOutside from 'hooks/useClickOutside';
import { styles } from './styles';

import AuthActions from 'redux/AuthRedux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { UserList } from './components';

const useStyles = makeStyles(styles);

function DropdownUsers() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [ref, isOpen, setisOpen] = useClickOutside(false);

  const handleLogout = () => {
    dispatch(AuthActions.signOutFirebaseRequest('logout'));
  };

  const handleOnClick = (type) => {
    switch(type) {
      case 'logout':
        setisOpen(false);
        handleLogout();
        break;
      case 'profile':
        setisOpen(false);
        break;
      default: break;
    }
  }

  return (
    <div ref={ref} className={classes.root}>
      <IconButton color="inherit" onClick={() => setisOpen(!isOpen)} className={classes.avatarButton}>
        <Avatar colorDefault={'#2323'} className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg">T</Avatar>
      </IconButton>
      <UserList open={isOpen} handleOnClick={handleOnClick} />
    </div>
  )
}

export default DropdownUsers;
