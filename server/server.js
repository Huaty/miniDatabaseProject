const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/students");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
