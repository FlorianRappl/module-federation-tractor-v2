import * as React from 'react';
import { src, srcset, fmtprice } from '../js/utils';

export default ({ name, url, image, startPrice }) => {
  return (
    <li className="e_Product">
      <a className="e_Product_link" href={url}>
        <img
          className="e_Product_image"
          src={src(image, 200)}
          srcSet={srcset(image, [200, 400, 800])}
          sizes="300px"
          width="200"
          height="200"
        />
        <span className="e_Product_name">{name}</span>
        <span className="e_Product_price">{fmtprice(startPrice)}</span>
      </a>
    </li>
  );
};
