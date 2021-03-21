import React, { useState } from 'react';
import { styles } from './styles';
import i18n from 'assets/i18n';
import useClickOutside from 'hooks/useClickOutside';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import { LanguegeList } from './components';
import { list_langs } from 'mock';

const useStyles = makeStyles(styles);

function DropdownLanguage() {
  const classes = useStyles();
  
  const [ref, isOpen, setisOpen] = useClickOutside(false);
  const [languege, setLanguege] = useState(list_langs[0]);

  const handleOnClick = (value) => {
    setisOpen(false);
    setLanguege(value);
    i18n.changeLanguage(value.id);
  }

  return (
    <div ref={ref} className={classes.root}>
      <IconButton color="inherit" onClick={() => setisOpen(!isOpen)} className={classes.langIcons}>
        <img alt={languege.name} src={languege.avatar} />
      </IconButton>
      <LanguegeList open={isOpen} options={list_langs} handleOnClick={handleOnClick} />
    </div>
  )
};

export default DropdownLanguage;
