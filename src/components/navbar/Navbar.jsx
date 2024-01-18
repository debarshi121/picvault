import Link from "next/link";
import React from "react";
import NavLinks from "./navlinks/NavLinks";
import {auth} from "@/lib/auth";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav className="backdrop-filter backdrop-blur-lg py-4 px-8 w-full rounded-md border-2 border-gray-300 flex justify-between font-semibold">
			<Link href="/" className="text-white">
				Homepage
			</Link>
			<NavLinks session={session} />
		</nav>
	);
};

export default Navbar;
