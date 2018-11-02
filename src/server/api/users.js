import express from "express";

// models
import Users from "../model/Users";

// utilities
import handler from "server/utils/handler";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Users.find();
  console.info(req.user);

  res.json({ users });
});

router.post(
  "/",
  handler(async (req, res) => {
    const { email, name, password } = req.body;

    if (!name || !email || !password) {
      throw new Error(`Missing arguments!`);
    }

    const userTest = await Users.findOne({ email });
    if (userTest !== null) {
      throw new Error(`This email is already registered ${email}!`);
    }

    const user = await Users.create({
      email,
      name,
      password
    });

    res.json({ user });
  })
);

export default router;
