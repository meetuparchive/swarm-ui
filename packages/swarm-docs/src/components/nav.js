import React from 'react';
import { Link } from "gatsby";

const Nav = ({fileNames}) => {
    const navItems = fileNames.map( (name) => (<Link to={`/${name}`}>{name}</Link>));
    return <div>{navItems}</div>
}

export default Nav;