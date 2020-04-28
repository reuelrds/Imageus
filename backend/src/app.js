const app = require("./config/express.config");

const db = require("./config/mongoose.config");

const imageRoute = require("./routes/image.route");


// Routing requests according to their specified endpoints
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/photos", imageRoute);
// app.use("/api/email", emailRoute);

module.exports = app;