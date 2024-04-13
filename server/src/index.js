require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
var a = 22;
console.log(b)
const app = express();
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
