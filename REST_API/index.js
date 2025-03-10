const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const port = 8080;
app.listen(port, (req, res) => {
  console.log("Server is created on port " + port);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users
      .map(
        (user) => `<li>
        ${user.first_name}</li>`
      )
      .join("")}
    </ul>
    `;

  return res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
