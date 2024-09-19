const passport = require ("passport");
const dotenv = require ("dotenv");
const  GitHubStrategy  = require("passport-github2").Strategy;
const User = require('../models/userM');

dotenv.config();

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:5000/api/auth/github/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			const user = await User.findOne({ username: profile.username });
			// signup
			if (!user) {
				const newUser = new User({
					name: profile.displayName,
					username: profile.username,
					profileUrl: profile.profileUrl,
					avatarUrl: profile.photos[0].value,
					likedProfiles: [],
					likedBy: [],
				});
				await newUser.save();
				done(null, newUser);
			}
			// login  
			else {
				done(null, user);
			}
		}
	)
);