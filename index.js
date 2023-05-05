const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`✔ Running at :${port}`);
});
