const cors = require('cors')
const express = require('express');
require('dotenv').config();


const router = require("./routes/toDoList_rou");

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);


app.listen(3002, () => {
  console.log('Server is listening on port 3002');
});



