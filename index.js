const express = require("express");
const app = express();
app.use(express.static("./dist/angular-front"));
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-front/" })
);
app.listen(process.env.PORT || 8080);
