const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
const router = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
