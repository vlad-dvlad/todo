require("dotenv").config();
const express = require("express");
const bodyParses = require("body-parser");
const todos = require("./api/todos.js");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParses.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/todos", todos);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
