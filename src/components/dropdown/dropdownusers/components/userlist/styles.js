import { colors, boxShadows } from 'styles/theme';

export const styles = theme => ({
  userList: {
    position: 'absolute',
    top: 40,
    right: -16,
    zIndex: 10,
    borderRadius: 8,
    width: 'max-content',
    color: colors.primary,
    backgroundColor: colors.white,
    boxShadow: `0px 4px 16px 0px ${boxShadows.baseLight}`
  },
  userIteminfo: {
    paddingBottom: 16,
    borderBottom: '1px solid #49494933',
    flexDirection: 'column',
    '& span': {
      width: '100%',
    }
  },
  font14: {
    opacity: 0.5,
    fontSize: 14,
  },
  font18: {
    fontSize: 18,
  },
  userItem: {
    cursor: 'pointer',
    marginTop: 8,
    '& span': {
      marginLeft: 8
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  userItemLogout: {
    cursor: 'pointer'
  },
  userItemButtonLogout: {
    width: '100%',
    height: '100%',
    color: colors.red,
    fontSize: 16,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.red
    }
  }
});