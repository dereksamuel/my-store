require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index");

// MIDDLEWARES
const { logErrors, handleError, handleBoomError } = require("./middlewares/error.handler");
const { validatorHandler } = require("./middlewares/validator.handler");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const whiteList = [
  "https://platzi.com",
  "https://jw.org"
];
const options = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error("Access no granted"));
    }
  },
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hello express");
});

routerApi(app);

app.use(validatorHandler);
app.use(logErrors);
app.use(handleBoomError);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
