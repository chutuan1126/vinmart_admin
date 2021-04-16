import { colors, boxShadows } from 'styles/theme';

export const styles = theme => ({
  root: {
    position: 'absolute',
    right: '-100%',
    top: 48,
    width: 375,
    zIndex: 10,
    paddingLeft: 8,
    borderRadius: 8,
    color: colors.primary,
    backgroundColor: colors.white,
    boxShadow: `0px 4px 16px 0px ${boxShadows.baseLight}`,
    overflow: 'hidden',
  },
  conversationList: {
    overflowY: 'scroll',
    maxHeight: 565,
  },
  conversationItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: 8,
    '&:hover': {
      cursor: "pointer",
      backgroundColor: theme.palette.background.default
    }
  },
  conversationPhoto: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px"
  },
  conversationTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "0"
  },
  conversationSnippet: {
    margin: "0",
    color: "#888",
    fontSize: "14px",
  }
});