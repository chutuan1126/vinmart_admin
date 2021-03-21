export const styles = theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    display: 'flex',
    height: 32,
    marginRight: 8,
    flexBasis: 300,
    borderRadius: 4,
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    backgroundColor: 'rgba(255,255,255, 0.1)',
  },
  searchIcon: {
    marginRight: 4,
    color: 'inherit',
  },
  searchInput: {
    width: 260,
    flexGrow: 1,
    color: 'inherit',
    padding: '0 4px',
    transition: '300ms',
    fontSize: 14,
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  focused: {
    width: 390,
  }
});