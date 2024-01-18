"use server";

import {User} from "./models";
import {connectToDb} from "./utils";
import {signIn, signOut} from "./auth";

export const handleGithubLogin = async () => {
	await signIn("github");
};

export const handleLogout = async () => {
	await signOut();
};
