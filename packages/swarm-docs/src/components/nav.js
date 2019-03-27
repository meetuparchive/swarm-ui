// @flow
import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
    fileNames: Array<string>
};

const Nav = (props: Props): React.Element<'div'> => {
    const navItems = props.fileNames.map((name) => (
        <li key={name}><Link to={`/${name}`} className="text--link">{name}</Link></li>
    ));
    return (
        <div className="left-nav">
            <Link to="/">
                <img className="swarm-logo" src="/docs-images/swarm-logo.png" width="64" height="62" />
            </Link>
            <ul>{navItems}</ul>
        </div>
    )
};

export default Nav;
