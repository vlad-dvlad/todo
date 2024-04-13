require("dotenv").config();
const express = require("express");
console.log(a)
let a = 22;
console.log('aaa')

const PORT = process.env.PORT || 3001;
const app = express();
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
