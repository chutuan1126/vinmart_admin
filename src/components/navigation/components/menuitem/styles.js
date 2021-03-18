
import { colors } from 'styles/theme';
import { getShadowStyle } from 'utils/StyleUtils';

export const styles = theme => {
console.log("🚀 ~ file: styles.js ~ line 4 ~ theme", theme)
  return ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    '& + &': {
      marginTop: 8
    }
  },
  itemLeaf: {
    display: 'flex',
  },
  button: {
    color: colors.primary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    borderRadius: 8
  },
  buttonLeaf: {
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  active: {
    color: colors.white,
    backgroundColor: colors.blue,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: colors.white,
    },
    '&:hover': {
      backgroundColor: colors.blue,
      ...getShadowStyle({ color: colors.blue }),
    }
  }
})};