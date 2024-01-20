"use client";

import {handleLogout} from "@/lib/actions";
import Link from "next/link";
import React from "react";

const NavLinks = ({session}) => {
	return (
		<>
			<ul className="hidden md:flex space-x-6">
				<li>
					<Link href="/" className="text-white hover:text-gray-200">
						Home
					</Link>
				</li>
				{session ? (
					<>
						<li>
							<Link href="/history" className="text-white hover:text-gray-200">
								History
							</Link>
						</li>
						<li>
							<form action={handleLogout}>
								<button type="submit" className="text-white hover:text-gray-200 border-2 rounded-md px-2">
									Logout
								</button>
							</form>
						</li>
					</>
				) : (
					<>
						<li>
							<Link href="/login" className="text-white hover:text-gray-200">
								Login
							</Link>
						</li>
						<li>
							<Link href="/login" className="text-white border-2 rounded-md px-2 py-1 hover:text-gray-200">
								Create Account
							</Link>
						</li>
					</>
				)}
			</ul>
		</>
	);
};

export default NavLinks;
