"use client";

import {handleLogout} from "@/lib/actions";
import Link from "next/link";
import React from "react";

const NavLinks = ({session}) => {
	return (
		<ul className="flex space-x-6">
			{session ? (
				<>
					<li>
						<Link href="/history" className="text-white">
							History
						</Link>
					</li>
					<li>
						<form action={handleLogout}>
							<button type="submit" className="text-white border-2 rounded-md px-2">
								Logout
							</button>
						</form>
					</li>
				</>
			) : (
				<>
					<li>
						<Link href="/login" className="text-white">
							Login
						</Link>
					</li>
					<li>
						<Link href="/login" className="text-white border-2 rounded-md px-2 py-1">
							Create Account
						</Link>
					</li>
				</>
			)}
		</ul>
	);
};

export default NavLinks;
