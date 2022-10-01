const express = require('express');
const app = express();
const app = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{

});