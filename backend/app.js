// server/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/userRoutes");
const cors = require("cors");
const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use(express.json());
app.use("/", routes);

console.log("post something");


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
