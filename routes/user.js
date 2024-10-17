import express from "express";
import {
  acceptFriendRequest,
  getMyFriends,
  getMyNotifications,
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
  sendFriendRequest,
} from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

// After here user must be logged in to access the routes
app.use(isAuthenticated);

app.get("/me", getMyProfile);
app.get("/logout", logout);

app.get("/search", searchUser);

app.put(
  "/sendrequest",

  sendFriendRequest
);

app.put(
  "/acceptrequest",

  acceptFriendRequest
);

app.get("/notifications", getMyNotifications);

app.get("/friends", getMyFriends);

export default app;
