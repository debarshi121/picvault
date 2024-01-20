"use client";

import {handleLogout} from "@/lib/actions";
import Link from "next/link";
import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoCloseSharp} from "react-icons/io5";

const HamburgerMenu = ({session}) => {
	const [open, setOpen] = useState(false);
	const toggleHamburgerMenu = (status) => {
		setOpen(status);
	};
	return (
		<div className="md:hidden">
			<GiHamburgerMenu className="text-white cursor-pointer h-5 w-5" onClick={() => toggleHamburgerMenu(true)} />

			{open && (
				<div className="fixed top-0 left-0 flex bg-white w-full min-h-20 rounded">
					<IoCloseSharp className="text-gray-600 w-6 h-6 right-2 top-2 absolute" onClick={() => toggleHamburgerMenu(false)} />

					<ul className="p-3 space-y-5 text-left">
						<li>
							<Link href="/" className="text-gray-600 hover:text-gray-400" onClick={() => toggleHamburgerMenu(false)}>
								Home
							</Link>
						</li>
						{session ? (
							<>
								<li>
									<Link href="/history" className="text-gray-600 hover:text-gray-400" onClick={() => toggleHamburgerMenu(false)}>
										History
									</Link>
								</li>
								<li>
									<form action={handleLogout}>
										<button type="submit" className="text-red-500" onClick={() => toggleHamburgerMenu(false)}>
											Logout
										</button>
									</form>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/login" className="text-gray-600 hover:text-gray-400" onClick={() => toggleHamburgerMenu(false)}>
										Login
									</Link>
								</li>
								<li>
									<Link href="/login" className="text-gray-600 hover:text-gray-400" onClick={() => toggleHamburgerMenu(false)}>
										Create Account
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default HamburgerMenu;
