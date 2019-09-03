import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItens/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToogle/DrawerToggle';
import PropTypes from 'prop-types';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
}

export default toolbar;