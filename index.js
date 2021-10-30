require("dotenv").config();

const express = require("express");
const { logErrors, handleError, handleBoomError } = require("./middlewares/error.handler");
const routerApi = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello express");
});

routerApi(app);

app.use(logErrors);
app.use(handleBoomError);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
