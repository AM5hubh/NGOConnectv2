const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/v1/googleauth/auth/google/callback",
      passReqToCallback: true,
    },

    function (request, accessToken, refreshToken, profile, done) {
      console.log("request- " + request);
      console.log("accessToken- " + accessToken);
      console.log("refreshToken- " + refreshToken);
      console.log("profile- " + profile);
      console.log("done- " + done);
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("serializeUser- " + user);

  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("deserializeUser- " + user);

  done(null, user);
});
