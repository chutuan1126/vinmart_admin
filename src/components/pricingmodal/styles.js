import { colors } from '@material-ui/core';

export const styles = theme => ({
  root: {
    width: 960
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    maxWidth: 720,
    margin: '0 auto'
  },
  product: {
    overflow: 'unset',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  options: {
    lineHeight: '26px'
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: `${theme.palette.white} !important`
    }
  },
  contact: {
    margin: theme.spacing(3, 0)
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  startButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
});