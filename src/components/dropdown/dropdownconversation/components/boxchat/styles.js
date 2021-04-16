import { colors, boxShadows } from 'styles/theme';

export const styles = theme => ({
  messageWrapper: {
    overflow: 'hidden',
    width: 325,
    height: 450,
    borderRadius: 10,
    backgroundColor: colors.white,
    boxShadow: `0px 4px 16px 0px ${boxShadows.baseLight}`,
    '& + &': {
      marginLeft: 16
    }
  },
  messageListContainer: {
    height: 'calc(100% - 116px)',
    paddingLeft: 10,
    paddingRight: 5,
    overflowY: 'scroll',
  },
  timestamp: {
    display: "flex",
    justifyContent: "center",
    color: colors.grayDim,
    fontWeight: 600,
    fontSize: 12,
    margin: "10px 0px",
    textTransform: "uppercase"
  },
  message: {
    display: "flex",
    flexDirection: "column",
    ['& .bubbleContainer']: {
      display: "flex",
      fontSize: 14,
      ['& .bubble']: {
        overflow: 'hidden',
        wordBreak: 'break-word',
        margin: "1px 0px",
        background: colors.bgColor,
        padding: "10px 15px",
        borderRadius: 20,
        maxWidth: "75%",
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }
    },
    ['&.mine .bubbleContainer']: {
      justifyContent: "flex-end"
    },
    ['&.mine .bubbleContainer .bubble']: {
      background: colors.blue,
      color: colors.white,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
    },
    ['&.start .bubbleContainer .bubble']: {
      justifyContent: "flex-end"
    },
    ['&.end .bubbleContainer .bubble']: {
      borderBottomLeftRadius: 20,
    },
    ['&.mine.start .bubbleContainer .bubble']: {
      marginTop: 10,
      borderTopRightRadius: 20,
    },
    ['&.mine.end .bubbleContainer .bubble']: {
      borderBottomRightRadius: 20,
      marginBottom: 10
    },
  },
  toolbarButton: {
    color: "#007aff",
    fontSize: 28,
    transition: "all 0.1s",
    '&:hover': {
      cursor: "pointer",
      color: "#0063ce"
    },
    '&:active': {
      color: "#007aff",
      opacity: 0.25
    },
    '& + &': {
      marginRight: 12
    }
  },
  toolbar: {
    position: "sticky",
    display: "flex",
    top: 0,
    fontWeight: 500,
    padding: '0 10px',
    alignItems: "center",
    backgroundColor: colors.white,
    borderBottom: "1px solid #eeeef1",
  },
  toolbarTitle: {
    paddingLeft: 8,
    margin: 0,
    fontSize: 16,
    fontWeight: 800
  },
  rightItems: {
    display: "flex",
    flex: 1,
    padding: '10px 0 10px 10px',
    flexDirection: "row-reverse"
  },
  avatar: {
    width: 32,
    height: 32,
    fontSize: 16
  },
  compose: {
    position: "sticky",
    display: "flex",
    bottom: 0,
    padding: 10,
    alignItems: "center",
    background: colors.white,
    borderTop: "1px solid #eeeef1",
  },
  composeInput: {
    display: 'flex',
    height: 32,
    paddingRight: 6,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  styleInput: {
    width: '100%',
    height: 32,
    border: "none",
    outline: "none",
    fontSize: "14px",
    borderRadius: 16,
    padding: '0 16px',
    background: "none",
    '&::placeholder': {
      opacity: 0.3
    }
  },
  toolbarCompose: {
    display: "flex",
    paddingLeft: 10,
    width: "max-content",
    flexDirection: "row-reverse"
  },
  soundWave: {
    display: 'none',
    width: '100%',
    padding: '0 10px',
    width: 'calc(100% - 48px)'
  },
  showMic: {
    display: 'block',
  },
  timeRecord: {
    fontSize: 12,
    color: '#494949'
  }
});