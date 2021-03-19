import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, CardHeader, CardActions, Divider, Button } from '@material-ui/core';
import { styles } from './styles';

import { NotificationList, EmptyList } from './components';

const useStyles = makeStyles(styles);

const NotificationsPopover = ({ notifications, anchorEl, ...rest }) => {
  const classes = useStyles();

  return (
    <Popover anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} {...rest} >
      <div className={classes.root}>
        <CardHeader title="Notifications" />
        <Divider />
        {notifications.length > 0
          ? (<NotificationList notifications={notifications} />)
          : (<EmptyList />)
        }
        <Divider />
        <CardActions className={classes.actions}>
          <Button to="#" size="small" component={RouterLink} >See all</Button>
        </CardActions>
      </div>
    </Popover>
  );
};

NotificationsPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

export default NotificationsPopover;
