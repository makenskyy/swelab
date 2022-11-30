const express = require("express");
const app = express();
const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");
// const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/patient", userRouter);

// Routes
// app.use("/api/users", userRouter);
module.exports = app;
