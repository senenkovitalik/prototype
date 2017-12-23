import express from 'express';
const app = express();
const path = require('path');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { collectInitial } from 'node-style-loader/collect';
import { StaticRouter } from 'react-router';
import AppContainer from '../../client/src/components/app/AppContainer';

import api from './routes/api';

app.use('/api', api);

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.use((req, res) => {

  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <AppContainer />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    const initialStyleTag = collectInitial();
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>GuitarShop</title>
          ${initialStyleTag}
        </head>
        <body>
          <div id="app">${html}</div>
          <script type="text/javascript" src='/bundle.js'></script>
        </body>
      </html>
    `);
    res.end();
  }
});

app.listen(80, (req, res) => {
  console.log("Server is running at http://127.0.0.1:80");
});
