import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const EmptyList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.image} />
      <Typography variant="h4">There's nothing here...</Typography>
    </div>
  );
};

EmptyList.propTypes = {
  className: PropTypes.string
};

export default EmptyList;
