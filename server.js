//1. bring express server in
const express = require('express');

//2. initiallise app variable
const app = express();

//5. single end-point, just to test out
//get request to /
//callback with req, res, to send data to the browser
app.get('/', (req, res) => res.send('API Running'));

//4. will look for env called port, so when deployed to heroku, will find this, if cannot find, go to default 5000
const PORT = process.env.PORT || 5000;
//3. let app listen to port, do a callback, so when we want sth to happen when it connects,
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
