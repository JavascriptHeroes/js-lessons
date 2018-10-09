import express from "express";

// handlers
import users from "./users";

const router = express.Router();

router.use("/users", users);

/*
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "email@email.cz" && password === "tajneheslo") {
    res.json({
      success: true,
      payload: {
        redirect: "/protected"
      }
    });
  } else {
    res.json({
      success: false,
      payload: {
        message: "Chybné přihlašovací údaje"
      }
    });
  }
});*/

export default router;
