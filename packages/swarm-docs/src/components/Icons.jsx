import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Icons = ({ icons = {}, iconFamily = '' }) => {

  const [activeIcon, setActiveIcon] = useState(Object.keys(icons)[0]);

  const iconList = Object.keys(icons).map((icon, idx) => {
    const Icon = icons[icon];

    return (
      <button className='icon-wrapper' onClick={() => setActiveIcon(icon)} key={`${icon}-${iconFamily}`}>
        <Icon />
      </button>
    );
  });

  return (
    <div>
      <pre className="pre-static">
        {`import { ${activeIcon} } from '@meetup/swarm-icons/lib/components/${iconFamily}';`}
      </pre>
      <pre className="pre-static">
        {`<${activeIcon} />`}
      </pre>
      {iconList}
    </div>
  );
};

Icons.propTypes = {
  icons: PropTypes.object,
  iconFamily: PropTypes.string
};

export default Icons;
