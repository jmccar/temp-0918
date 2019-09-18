import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { App } from 'components/App';

export async function serverRenderer({ activeDealId }) {
  const resp = await axios('https://bakesaleforgood.com/api/deals');

  const initialData = {
    appName: 'Reactful',
    deals: resp.data,
    activeDealId,
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };

  return {
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  };
}
