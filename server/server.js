require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/error-handler");
const morgan = require("morgan");

/* PASSPORT  */
require("./passport");
app.use(passport.initialize());
/* -------------------------> */

app.use(cookieParser());
const corsOption = {
  credentials: true,
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3001;
app.use(express.json({ limit: "8mb" }));
app.use(morgan("common"));
app.use(router);

// HEALTH CHECK
app.get('/',(req,res) => {
  res.send('api is healthy')
})

/* ===== Error handler ===== */
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((e) => {
    console.log(e);
  });
