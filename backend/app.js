// server/app.js
import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
import routes from "./routes/userRoutes";
import cors from "cors";
const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use(json());
app.use("/", routes);

console.log("post something");


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
