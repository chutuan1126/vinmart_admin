import { colors, boxShadows } from 'styles/theme';

export const styles = theme => ({
  langList: {
    position: 'absolute',
    overflow: 'hidden',
    top: 40,
    zIndex: 10,
    borderRadius: 8,
    width: 'max-content',
    color: colors.primary,
    backgroundColor: colors.white,
    boxShadow: `0px 4px 16px 0px ${boxShadows.baseLight}`
  },
  langItem: {
    cursor: 'pointer',
    '& img': {
      width: 32,
      marginRight: 16
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  }
});