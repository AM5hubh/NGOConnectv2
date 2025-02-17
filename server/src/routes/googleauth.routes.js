//passport start
import passport from "passport";
import express from "express";
import { Router } from "express";
const router = Router();
const app = express();
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


router.route("/").get((req, res) => {
  res.send(
    '<a href="/api/v1/googleauth/auth/google">Authenticate with Google</a>'
  );
});

router
  .route("/auth/google")
  .get(passport.authenticate("google", { scope: ["email", "profile"] }));

router.route(`/auth/google/callback`).get(
  passport.authenticate("google", {
    successRedirect: "/api/v1/googleauth/protected",
    failureRedirect: "/api/v1/googleauth/auth/google/failure",
  })
);

router.route("/protected").get(isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

router.route("/logout").get((req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pass error to Express error handler
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.send("Goodbye!");
    });
  });
});

router.route("/profile").get((req, res) => {
  if (!req.user) {
    return res.status(401).send("Not logged in");
  }

  res.json({
    id: req.user.id,
    name: req.user.displayName,
    email: req.user.email,
    picture: req.user.picture,
  });
});

router.route("/auth/google/failure").get((req, res) => {
  res.send("Failed to authenticate..");
});

//passport end
export default router;
