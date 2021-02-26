const express = require('express');

const app = express();
app.use(express.static('public'));
app.listen(17888, () => {
  console.log(`Webserver listening at http://localhost:17888...`);
});
