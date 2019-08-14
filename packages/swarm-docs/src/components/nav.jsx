// @flow
import * as React from 'react';
import { Link } from 'gatsby';
type FileGroup = {
    nodes: Array<File>
};

type File = {
    relativeDirectory: string,
    name: string
}

type Props = {
    files: Array<FileGroup>,
};

const transformFiles = (files: Array<FileGroup>) =>
files.map(file =>
  file.nodes.reduce((folderMap, node) => {
     // initialize directory key if it doesn't exist;
    if (!folderMap[node.relativeDirectory]) {
      folderMap[node.relativeDirectory] = [];
    }
    folderMap[node.relativeDirectory] = [...folderMap[node.relativeDirectory], node.name];
    return folderMap;
  }, {})
);

const Nav = (props: Props): React.Element<'div'> => {
    const navStructure = transformFiles(props.files);
    const navItems = navStructure.map(subdir => {
        const folder = Object.keys(subdir)[0];
        const files = subdir[folder];
        return (
            <li key={folder}>
            <span style={{fontWeight: 500}}>{folder}</span>
                <ul>
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
