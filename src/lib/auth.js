import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import {connectToDb} from "./utils";
import {User} from "./models";
import {authConfig} from "./auth.config";

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
	],
	callbacks: {
		async signIn({user, account, profile}) {
			if (account.provider === "github") {
				console.log(profile);
				connectToDb();
				try {
					const user = await User.findOne({email: profile.email});

					if (!user) {
						const newUser = new User({
							name: profile.login,
							email: profile.email,
							image: profile.avatar_url,
						});

						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});
