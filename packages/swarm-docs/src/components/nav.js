// @flow
import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
    fileNames: Array<string>
};

const Nav = (props: Props): React.Element<'div'> => {
    const navItems = props.fileNames.map((name) => (
        <div key={name}><Link to={`/${name}`} >{name}</Link></div>
    ));
    return <div className="left-nav"><div>{navItems}</div></div>;
};

export default Nav;
