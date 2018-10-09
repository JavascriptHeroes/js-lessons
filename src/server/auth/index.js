import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// model
import Users from "server/model/Users";

const router = express.Router();

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      Users.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        /*
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        */

        return done(null, user);
      });
    }
  )
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.json({
        success: false
      });
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json({
        success: true,
        payload: {
          redirect: "/app"
        }
      });
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

export default router;
