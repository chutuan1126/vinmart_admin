import { colors, boxShadows } from 'styles/theme';
import { buildGradient } from 'utils/StyleUtils';

export const styles = theme => ({
  notiList: {
    position: 'absolute',
    right: '-100%',
    top: 48,
    zIndex: 10,
    borderRadius: 8,
    width: 'max-content',
    color: colors.primary,
    backgroundColor: colors.white,
    boxShadow: `0px 4px 16px 0px ${boxShadows.baseLight}`,
    overflow: 'hidden',
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  avatarBlue: {
    backgroundImage: buildGradient(colors.blueLight, colors.blue)
  },
  avatarGreen: {
    backgroundImage: buildGradient(colors.greenLight, colors.green)
  },
  avatarOrange: {
    backgroundImage: buildGradient(colors.orangeLight, colors.orange)
  },
  avatarIndigo: {
    backgroundImage: buildGradient(colors.purpleLight, colors.purple)
  },
  arrowForwardIcon: {
    color: theme.palette.icon
  }
});