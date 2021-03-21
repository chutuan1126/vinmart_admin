import React from 'react';
import { useTranslation } from "react-i18next";
import { styles } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(styles);

function LangList({ open, options, className, handleOnClick }) {
  const { t } = useTranslation(["auth", "header"]);
  
  const classes = useStyles();

  if(!open) return null;
  return (
    <List disablePadding className={classes.langList}>
      {options.map(option => (
        <ListItem
          key={option.id}
          className={classes.langItem}
          onClick={() => handleOnClick(option)}
        >
          <img alt={option.name} src={option.avatar} />
          {t(`header:${option.name}`)}
        </ListItem>
      ))}
    </List>
  )
}

export default LangList;
