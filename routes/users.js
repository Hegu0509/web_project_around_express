const usersRouter = require("express").Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controller/users");

usersRouter.get("/", getUsers);
usersRouter.get("/:userId", getUserById);
usersRouter.post("/", createUser);
usersRouter.patch("/me", updateProfile);
usersRouter.patch("/me/avatar", updateAvatar);

module.exports = usersRouter;
