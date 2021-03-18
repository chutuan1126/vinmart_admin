/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';
import { styles } from './styles';

import useRouter from 'hooks/useRouter';
import { MenuItem } from './components';

const useStyles = makeStyles(styles);

const NavigationList = ({ pages, depth, router }) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {pages.reduce((items, page) => reduceChildRoutes({ items, page, depth, router }), [])}
    </List>
  );
};

const reduceChildRoutes = ({ items, page, depth, router }) => {
  const { icon, title, label, href } = page;
  if (page.children) {
    const open = matchPath(router.location.pathname, { path: page.href, exact: false });

    items.push(
      <MenuItem key={title} icon={icon} label={label} title={title} depth={depth} open={Boolean(open)} >
        <NavigationList router={router} depth={depth + 1} pages={page.children} />
      </MenuItem>
    );
  } else {
    items.push(<MenuItem key={title} href={href} icon={icon} label={label} title={title} depth={depth} />);
  }

  return items;
};

function Navigation({ title, pages }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root} >
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList depth={0} pages={pages} router={router} />
    </div>
  );
};

Navigation.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default Navigation;