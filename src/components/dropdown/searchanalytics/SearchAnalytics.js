import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { styles } from './styles';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(styles);

function SearchAnalytics() {
  const { t } = useTranslation(["auth", "header"]);

  const classes = useStyles();

  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div ref={searchRef} className={classes.root}>
      <SearchIcon className={classes.searchIcon} />
      <Input
        disableUnderline
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={t('header:search_people_and_places')}
        classes={{ root: classes.searchInput, focused: classes.focused }}
      />
    </div>
  )
}

export default SearchAnalytics;
