import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/app';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => ({
    isSidebarOpen: state.app.isSidebarOpen,
  }));
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <h3 className={classes.logo}>reactAdmin</h3>
        <IconButton onClick={closeSidebar}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: theme.sidebar.width,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRight: 'none',
    ...theme.sidebar,
  },
  drawerHeader: {
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: '1rem'
  }
}));

export default Sidebar;
