import express from "express";

// handlers
import users from "./users";

const router = express.Router();

router.use("/users", users);

export default router;
