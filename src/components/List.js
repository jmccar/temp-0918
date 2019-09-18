import React from 'react';

import Deal from './Deal';

export default function List({ deals }) {
  return (
    <div className="deals-list">
      {deals.map(deal => {
        return <Deal key={deal.key} id={deal.key} deal={deal} />;
      })}
    </div>
  );
}
