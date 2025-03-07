const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/users", (req, res) => {
  return fs.readFile(
    path.join(__dirname, "../data/users.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const users = JSON.parse(data);
      res.send(users);
    }
  );
});

router.get("/users/:id", (req, res) => {
  return fs.readFile(
    path.join(__dirname, "../data/users.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.id);

      if (!user) {
        res.status(404);
        res.send({ message: "User ID not found" });
        return;
      }

      res.send(user);
    }
  );
});

module.exports = router;
