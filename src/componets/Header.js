import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/app';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector(state => ({
    isSidebarOpen: state.app.isSidebarOpen
  }));
  const handleDrawer = () => {
    dispatch(toggleSidebar());
  };
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <IconButton
          className={clsx(isSidebarOpen && classes.hide)}
          onClick={handleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  hide: theme.sidebar.hide
}));

export default Header;
