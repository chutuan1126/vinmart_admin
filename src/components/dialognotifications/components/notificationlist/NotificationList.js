import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import CodeIcon from '@material-ui/icons/Code';
import StoreIcon from '@material-ui/icons/Store';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const NotificationList = ({ notifications }) => {
  const classes = useStyles();

  const avatars = {
    order: (
      <Avatar className={classes.avatarBlue}>
        <PaymentIcon />
      </Avatar>
    ),
    user: (
      <Avatar className={classes.avatarOrange}>
        <PeopleIcon />
      </Avatar>
    ),
    project: (
      <Avatar className={classes.avatarGreen}>
        <StoreIcon />
      </Avatar>
    ),
    feature: (
      <Avatar className={classes.avatarIndigo}>
        <CodeIcon />
      </Avatar>
    )
  };

  return (
    <List disablePadding >
      {notifications.map((notification, i) => (
        <ListItem
          to="#"
          key={notification.id}
          component={RouterLink}
          className={classes.listItem}
          divider={i < notifications.length - 1}
        >
          <ListItemAvatar>{avatars[notification.type]}</ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={moment(notification.created_at).fromNow()}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
};

NotificationList.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired
};

export default NotificationList;
