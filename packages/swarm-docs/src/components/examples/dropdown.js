import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@meetup/swarm-components';

export let name = "Basic";
// eslint-disable-next-line react/display-name
const WrappedItem = React.forwardRef((props, ref) => {
  return <MenuItem data-swarm-item ref={ref} {...props} />;
});

const Example = () => (
  <Menu>
    <MenuButton>
      Actions <span aria-hidden="true">▾</span>
    </MenuButton>
    <MenuList focusableChildrenTypes={[MenuItem, WrappedItem]}>
      <WrappedItem onSelect={() => alert("Download")}>Download</WrappedItem>
      <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
      <MenuItem onSelect={() => alert("Mark as Draft")}>Mark as Draft</MenuItem>
      <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>
    </MenuList>
  </Menu>
);

export default Example;
