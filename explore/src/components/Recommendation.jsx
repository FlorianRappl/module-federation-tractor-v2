import * as React from 'react';
import { src, srcset } from '../js/utils';

export default ({ image, url, name }) => {
  return (
    <li className="e_Recommendation">
      <a className="e_Recommendation_link" href={url}>
        <img
          className="e_Recommendation_image"
          src={src(image, 200)}
          srcSet={srcset(image, [200, 400])}
          alt=""
          sizes="200px"
          width="200"
          height="200"
        />
        <span className="e_Recommendation_name">{name}</span>
      </a>
    </li>
  );
};
