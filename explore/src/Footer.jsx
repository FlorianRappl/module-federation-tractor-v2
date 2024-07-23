import * as React from 'react';
import './css/index.css';

const Footer = () => {
  return (
    <footer className="e_Footer" data-boundary="explore">
      <div className="e_Footer__cutter">
        <div className="e_Footer__inner">
          <div className="e_Footer__initiative">
            <img
              src="https://blueprint.the-tractor.store/cdn/img/neulandlogo.svg"
              alt="neuland - Büro für Informatik"
              width="45"
              height="40"
            />
            <p>
              based on{' '}
              <a href="https://micro-frontends.org/tractor-store/" target="_blank">
                the tractor store 2.0
              </a>
              <br />a{' '}
              <a href="https://neuland-bfi.de" target="_blank">
                neuland
              </a>{' '}
              project
            </p>
          </div>

          <div className="e_Footer__credits">
            <h3>techstack</h3>
            <p>SPA, Module Federation, React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
