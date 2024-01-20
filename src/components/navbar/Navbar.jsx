import Link from "next/link";
import React from "react";
import NavLinks from "./navlinks/NavLinks";
import {auth} from "@/lib/auth";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Image from "next/image";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav className="backdrop-filter backdrop-blur-lg py-4 px-4 rounded-md border-2 border-gray-300 flex justify-between items-center font-semibold">
			<Link href="/" className="text-white">
				<Image src="/logo.png" alt="" height={150} width={150} className="w-28" />
			</Link>
			<NavLinks session={session} />
			<HamburgerMenu session={session} />
		</nav>
	);
};

export default Navbar;
