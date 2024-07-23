import * as React from 'react';

export default ({ filters }) => {
  return (
    <div className="e_Filter">
      Filter:
      <ul>
        {filters.map((f, i) =>
          f.active ? (
            <li key={i} className="e_Filter__filter--active">{f.name}</li>
          ) : (
            <li key={i}>
              <a href={f.url}>{f.name}</a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
