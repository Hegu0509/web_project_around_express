const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const { PORT = 3000 } = process.env;

mongoose
  .connect("mongodb://localhost:27017/aroundb", {})
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos", error);
  });

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "67dcacd683140d331f6d8d83",
  };

  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
