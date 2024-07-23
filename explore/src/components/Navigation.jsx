import * as React from 'react';

export default () => {
  return (
    <nav className="e_Navigation">
      <ul className="e_Navigation__list">
        <li className="e_Navigation__item">
          <a href="/products">Machines</a>
        </li>
        <li className="e_Navigation__item">
          <a href="/stores">Stores</a>
        </li>
      </ul>
    </nav>
  );
};
