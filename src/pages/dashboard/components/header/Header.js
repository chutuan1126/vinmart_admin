import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      color="primary"
      className={classes.root}
    >
      <Toolbar>
        <Link to="/">
          <img
            alt="Logo"
            src="https://react-material-kit.devias.io/static/logo.svg"
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
