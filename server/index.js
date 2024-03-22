import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();
const port = 9000;

app.get('/', (_, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>react-stations-kiso4</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        ${appHtml}
      </body>
    </html>
  `);
});

app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
