const express = require('express');
const cors = require('cors');


// can have enviorment vars
require('dotenv').config();

// exores server 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log(`Console running at ${port}`);
})
