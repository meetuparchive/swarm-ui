// @flow
import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
    files: Array<Object>
};

const transformFiles = (files: Array<Object>) => {
    const nav = [];
    files.forEach(file => {
        const folder = {};
        file.nodes.forEach(node => {
            const value = (folder[node.relativeDirectory] || []);
            value.push(node.name);
            folder[node.relativeDirectory] = value;
        });
        nav.push(folder);
    });
    return nav;
};

const Nav = (props: Props): React.Element<'div'> => {
    const navStructure = transformFiles(props.files);
    const navItems = navStructure.map(subdir => {
        const folder = Object.keys(subdir)[0];
        const files = subdir[folder];
        return (
            <li key={folder}>
                <ul>
                {folder}
                    {files.map(file => <li style={{paddingLeft: 16}} key={file}><Link to={`/${folder}/${file}`} className="text--link">{file}</Link></li>)}
                </ul>
            </li>
        );
    });
    return (
        <div className="left-nav">
            <Link to="/">
                <img className="swarm-logo" src="/docs-images/swarm-logo.png" width="64" height="62" />
            </Link>
            <ul> {navItems} </ul>
        </div>
    );
};

export default Nav;
