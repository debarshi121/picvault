import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="backdrop-filter backdrop-blur-lg py-4 px-8 w-full rounded-md border-2 border-gray-400 flex justify-between font-semibold">
			<Link href="/" className="text-white">
				Homepage
			</Link>
			<ul className="flex space-x-6">
				<li>
					<a href="#" className="text-white">
						Login
					</a>
				</li>
				<li>
					<button className="text-white border-2 rounded-md px-2">Create Account</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
