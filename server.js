const express = require("express");
const connectDB = require("./config/db");

const app = express();

// call onnect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({
    msg: "Welcom to Amjad App",
  })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startrd on port ${PORT}`));
