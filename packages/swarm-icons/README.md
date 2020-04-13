# Swarm Icons

## Build process
Pass the family to be built to `build.js`

There are three icon families in `@meetup/swarm-icons`
+ solid
+ line
+ large

example of building the line icon set
`./src/build.js --f=line`


## Adding an Icon
Add the `.svg` file to `src/icons`
Run `yarn build` 


## Using Icons
Import whole sets
```jsx
import * as SolidIcons from '@meetup/swarm-icons/lib/components/solid';
import * as LineIcons from '@meetup/swarm-icons/lib/components/line';
import * as LargeIcons from '@meetup/swarm-icons/lib/components/large';
```

Or individual Icons
```jsx
import { ArrowDown } from '@meetup/swarm-icons/lib/components/solid';
import { ArrowDown } from '@meetup/swarm-icons/lib/components/line';
import { ArrowDown } from '@meetup/swarm-icons/lib/components/large';
```
