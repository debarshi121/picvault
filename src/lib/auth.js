import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import {connectToDb} from "./utils";
import {User} from "./models";
import {authConfig} from "./auth.config";

const saveUser = async (name, email, image) => {
	connectToDb();
	try {
		const user = await User.findOne({email});
		if (!user) {
			const newUser = new User({name, email, image});
			await newUser.save();
		}
	} catch (err) {
		throw err;
	}
};

export const {
	handlers: {GET, POST},
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
		Facebook({
			clientId: process.env.AUTH_FACEBOOK_ID,
			clientSecret: process.env.AUTH_FACEBOOK_SECRET,
		}),
	],
	callbacks: {
		async signIn({user, account, profile}) {
			if (account.provider === "github") {
				try {
					await saveUser(profile.login, profile.email, profile.avatar_url);
				} catch (error) {
					return false;
				}
			}
			if (account.provider === "google") {
				try {
					await saveUser(profile.name, profile.email, profile.picture);
				} catch (error) {
					return false;
				}
			}
			if (account.provider === "facebook") {
				try {
					await saveUser(profile.name, profile.email, profile.picture.url);
				} catch (error) {
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});
