import { colors } from '@material-ui/core';
import { buildGradient } from 'utils/StyleUtils';

export const styles = theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  avatarBlue: {
    backgroundImage: buildGradient(colors.blue[700], colors.blue[900])
  },
  avatarGreen: {
    backgroundImage: buildGradient(colors.green[400], colors.green[600])
  },
  avatarOrange: {
    backgroundImage: buildGradient(colors.orange[400], colors.orange[700])
  },
  avatarIndigo: {
    backgroundImage: buildGradient(colors.indigo[400], colors.indigo[600])
  },
  arrowForwardIcon: {
    color: theme.palette.icon
  }
});