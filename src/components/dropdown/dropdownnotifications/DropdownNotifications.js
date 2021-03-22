import React from 'react';
import { styles } from './styles';
import useClickOutside from 'hooks/useClickOutside';

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

import { NotificationList, EmptyList } from './components';
import { list_notis } from 'mock';

const useStyles = makeStyles(styles);

function DropdownNotifications() {
  const classes = useStyles();

  const [ref, isOpen, setisOpen] = useClickOutside(false);

  const renderDropdownNotifications = () => {
    if (!isOpen) return null;
    return list_notis.length ? <NotificationList options={list_notis} /> : <EmptyList />;
  }

  return (
    <div ref={ref} className={classes.root}>
      <IconButton color="inherit" className={classes.notiButton} onClick={() => setisOpen(!isOpen)}>
        <Badge variant="dot" classes={{ badge: classes.notiBadge }}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {renderDropdownNotifications()}
    </div>
  )
}

export default DropdownNotifications;
