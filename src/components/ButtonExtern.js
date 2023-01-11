// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonExtern = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  element,

}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>

<a href = {path} >
<button
        className={`btn2 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        // path = {path}
      >
        {children}
      </button>
    </a>

</>
  );
};