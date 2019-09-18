import React from 'react';

import Context from '../context';

export default function Deal({ id, deal }) {
  const { activeDealId, handleActiveDealChange } = React.useContext(Context);

  const handleClick = React.useCallback(() => {
    handleActiveDealChange(id);
  }, [id, handleActiveDealChange]);

  return (
    <div className="one-deal" onClick={handleClick}>
      {deal.title}
      <div
        style={{
          display: activeDealId === id ? 'block' : 'none',
        }}
      >
        ${deal.price / 100}
        <div>
          {deal.media.map(url => (
            <img key={url} src={url} width={100} />
          ))}
        </div>
      </div>
    </div>
  );
}
