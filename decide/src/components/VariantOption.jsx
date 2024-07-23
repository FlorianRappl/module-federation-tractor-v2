import * as React from 'react';

export default ({ sku, name, selected, color }) => {
  return (
    <li className="d_VariantOption" style={{ '--variant-color': color }}>
      <i className="d_VariantOption__color"></i>
      {selected ? <strong>{name}</strong> : <a href={`?sku=${sku}`}>{name}</a>}
    </li>
  );
};
