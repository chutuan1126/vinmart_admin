import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, colors } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const Label = ({ className, variant, color, shape, children, style, ...rest }) => {
  const classes = useStyles();

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.rounded]: shape === 'rounded'
    },
    className
  );

  const finalStyle = { ...style };

  if (variant === 'contained') {
    finalStyle.backgroundColor = color;
    finalStyle.color = '#FFF';
  } else {
    finalStyle.border = `1px solid ${color}`;
    finalStyle.color = color;
  }

  return (
    <Typography
      {...rest}
      variant="overline"
      style={finalStyle}
      className={rootClassName}
    >
      {children}
    </Typography>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'rounded']),
  style: PropTypes.object,
  variant: PropTypes.oneOf(['contained', 'outlined'])
};

Label.defaultProps = {
  style: {},
  color: colors.grey[600],
  variant: 'contained',
  shape: 'square'
};

export default Label;
