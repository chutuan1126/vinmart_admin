export const styles = () => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    height: 'calc(100vh - 64px)'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto'
  }
});