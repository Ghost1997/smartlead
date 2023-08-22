import express from "express";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes";
import sequelize from "./db"; // Import the sequelize instance

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", emailRoutes);
app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is up and running");
});
sequelize.sync().then(() => {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
