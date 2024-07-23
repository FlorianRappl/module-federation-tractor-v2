import * as React from 'react';

export default () => {
  return (
    <header className="c_CompactHeader">
      <div className="c_CompactHeader__inner">
        <a className="c_CompactHeader__link" href="/">
          <img
            className="c_CompactHeader__logo"
            src="https://blueprint.the-tractor.store/cdn/img/logo.svg"
            alt="Micro Frontends - Tractor Store"
          />
        </a>
      </div>
    </header>
  );
};
