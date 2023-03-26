const express = require("express");
const cors = require("cors");
const { connection } = require("./server");

require("dotenv").config();

const { usersRouter } = require("./Controller/routes/userRouter");
const { todoRouter } = require("./Controller/routes/todoRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", todoRouter);
app.use("/users", usersRouter);

app.listen(8080, () => {
  connection();
});
