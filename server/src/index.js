import express from 'express';
const app = express();
const path = require('path');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../../client/src/components/App';

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
      <App/>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>GuitarShop</title>
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
