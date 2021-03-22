import React from 'react';
import { useTranslation } from "react-i18next";
import { styles } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(styles);

function UserList({ open, handleOnClick }) {
  const { t } = useTranslation(["auth", "header"]);

  const classes = useStyles();

  if (!open) return null;
  return (
    <List disablePadding className={classes.userList}>
      <ListItem className={classes.userIteminfo}>
        <span className={classes.font18}>Chu Tuân</span>
        <span className={classes.font14}>chutuan1126@fmail.com</span>
      </ListItem>
      <ListItem className={classes.userItem}>
        <PersonIcon />
        <span>{t('header:profile')}</span>
      </ListItem>
      <ListItem className={classes.userItem}>
        <SettingsIcon />
        <span>{t('header:settings')}</span>
      </ListItem>
      <ListItem className={classes.userItemLogout} onClick={() => handleOnClick('logout')}>
        <Button className={classes.userItemButtonLogout}>{t('header:logout')}</Button>
      </ListItem>
    </List>
  )
}

export default UserList;
