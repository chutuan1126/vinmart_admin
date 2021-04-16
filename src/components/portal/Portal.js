import { createPortal } from 'react-dom';
import usePortal from 'hooks/usePortal';
import { styles } from './styles';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal = ({ id, children }) => {
  const classes = useStyles();

  const target = usePortal(id, classes.boxChatContainer);
  return createPortal(
    children,
    target,
  );
};

export default Portal;