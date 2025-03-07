const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/cards", (req, res) => {
  return fs.readFile(
    path.join(__dirname, "../data/cards.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const cards = JSON.parse(data);
      res.send(cards);
    }
  );
});

router.get("/cards/:id", (req, res) => {
  return fs.readFile(
    path.join(__dirname, "../data/cards.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const cards = JSON.parse(data);
      const card = cards.find((item) => item._id === req.params.id);

      if (!card) {
        res.status(404);
        res.send({ message: "ID de card no encontrado" });
        return;
      }

      res.send(card);
    }
  );
});

module.exports = router;
