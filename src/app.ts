/* I don't quite know, but I think in here is meant to be the express lib. */
/* Express is meant to build the data storage routes, right? */

import express from 'express'

const app = express();
const port = 3333;

app.use(express.json());

app.listen(port, () => {
    console.log(`Started! Listening port:${port}. Have a wonderful day, sweetheart!`);
  });