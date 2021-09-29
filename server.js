const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

app.use(history());
app.use(express.static(path.join(__dirname + "/dist")));

app.get("/", function (req, res) {
  res.render(path.join(__dirname + "/dist/index.html"));
});

const server = app.listen(process.env.PORT || 8081, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
