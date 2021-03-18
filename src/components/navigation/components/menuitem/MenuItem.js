/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Button, Collapse } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }} >
    <RouterLink {...props} />
  </div>
));

function MenuItem({ title, href, depth, children, icon: Icon, open: openProp, label: Label }) {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);
  const style = { paddingLeft: depth === 0 ? 8 : 32 + 8 * depth };

  const handleToggle = () => {
    setOpen(open => !open);
  };


  if (children) {
    return (
      <ListItem disableGutters className={classes.item} >
        <Button
          style={style}
          className={classes.button}
          onClick={handleToggle}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open
            ? (<ExpandLess className={classes.expandIcon} color="inherit" />)
            : (<ExpandMore className={classes.expandIcon} color="inherit" />)
          }
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem disableGutters className={classNames(classes.item, classes.itemLeaf)} >
      <Button
        exact
        to={href}
        style={style}
        component={CustomRouterLink}
        activeClassName={classes.active}
        className={classNames(classes.button, classes.buttonLeaf, `depth-${depth}`)}
      >
        {Icon && <Icon className={classes.icon} />}
        {title}
        {Label && (<span className={classes.label}> <Label /> </span>)}
      </Button>
    </ListItem>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
  depth: 0,
  open: false
};

export default MenuItem;