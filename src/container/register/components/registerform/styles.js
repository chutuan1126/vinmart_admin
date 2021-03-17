import { colors } from 'styles/theme';
import { getShadowStyle } from 'utils/StyleUtils';

export const styles = theme => ({
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  submitButton: {
    width: '100%',
    backgroundColor: colors.blue,
    marginTop: theme.spacing(2),
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.blue,
        ...getShadowStyle({ color: colors.blue }),
    },
  }
});