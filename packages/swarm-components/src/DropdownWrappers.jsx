import React from 'react';
import {
	Menu as SMenu,
	MenuButton as SMenuButton,
	MenuItem as SMenuItem,
	MenuList as SMenuList,
	MenuLink as SMenuLink,
} from './Dropdown';

const Menu = props => <SMenu data-swarm-menu {...props} />;
const MenuButton = props => <SMenuButton data-swarm-menu-button {...props} />;
const MenuItem = props => <SMenuItem data-swarm-menu-item {...props} />;
const MenuList = props => <SMenuList data-swarm-menu-list {...props} />;
const MenuLink = props => <SMenuLink data-swarm-menu-link {...props} />;

export { Menu, MenuButton, MenuItem, MenuList, MenuLink };
