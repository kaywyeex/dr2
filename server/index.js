import http from 'http';
import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import {renderToString} from 'react-dom/server';
import {matchPath, StaticRouter} from 'react-router-dom';

import App from '../src/App.js';

const PORT = process.env.NODE_PORT || 9000;
const HOST = process.env.NODE_HOST || 'localhost';

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());
app.use(express.static('build'));

app.post('/render', (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.body.url} context={context}>
      <App />
    </StaticRouter>,
  );

  res.json(html);
});

server.listen(PORT, HOST, () =>
  console.log(`Render server available @ http://${HOST}:${PORT}/render`),
);
