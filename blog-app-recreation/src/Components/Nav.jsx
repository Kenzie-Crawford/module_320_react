import React from 'react';

function Nav({ links, className }) {

  return (

    <nav>

      <ul className={className}>

        {links.map((link, index) => (

          <li key={index}>
            <a href="#">{link}</a>
          </li>

        ))}

      </ul>

    </nav>

  );

}

export default Nav;