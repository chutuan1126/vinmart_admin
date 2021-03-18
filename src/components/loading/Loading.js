import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, LinearProgress } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

function Loading() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.linearProgress}>
      <LinearProgress />
    </Container>
  )
}

export default Loading;
