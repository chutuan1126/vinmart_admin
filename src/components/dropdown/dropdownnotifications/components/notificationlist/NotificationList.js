import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import CodeIcon from '@material-ui/icons/Code';
import StoreIcon from '@material-ui/icons/Store';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const NotificationList = ({ options }) => {
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
    <List disablePadding className={classes.notiList}>
      {options.map((option, i) => (
        <ListItem
          to="#"
          key={option.id}
          component={RouterLink}
          className={classes.listItem}
          divider={i < options.length - 1}
        >
          <ListItemAvatar>{avatars[option.type]}</ListItemAvatar>
          <ListItemText
            primary={option.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={moment(option.created_at).fromNow()}
          />
        </ListItem>
      ))}
    </List>
  );
};

NotificationList.propTypes = {
  options: PropTypes.array.isRequired
};

export default NotificationList;
