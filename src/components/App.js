import React from 'react';
import Context from '../context';

import List from './List';

export function App({ initialData }) {
  const [activeDealId, setActiveDealId] = React.useState(
    initialData.activeDealId
  );

  const handleActiveDealChange = dealId => {
    history.pushState({}, null, '/' + dealId);
    setActiveDealId(dealId);
  };

  return (
    <Context.Provider value={{ activeDealId, handleActiveDealChange }}>
      <List deals={initialData.deals} />
    </Context.Provider>
  );
}
