import {handleGithubLogin} from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="relative min-h-screen h-full py-16 bg-gradient-to-br from-sky-50 to-gray-200">
			<div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
				<div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
					<div className="rounded-xl bg-white shadow-xl">
						<div className="p-6 sm:p-16">
							<div className="space-y-4">
								<img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10 mx-auto" alt="tailus logo" />
								<h2 className="mb-8 text-2xl text-cyan-900 font-bold text-center">
									Sign in to unlock the <br /> best of PicVault.
								</h2>
							</div>
							<div className="mt-16 grid space-y-4">
								<button className="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
									<div className="relative flex items-center space-x-4 justify-center">
										<Image src="/google.svg" width={50} height={50} className="absolute left-0 w-5" alt="google logo" />
										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
									</div>
								</button>
								<form action={handleGithubLogin}>
									<button className="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
										<div className="relative flex items-center space-x-4 justify-center">
											<Image src="/github.svg" width={50} height={50} className="absolute left-0 w-5" alt="google logo" />
											<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
										</div>
									</button>
								</form>
								<button
									className="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
									<div className="relative flex items-center space-x-4 justify-center">
										<Image src="/facebook.svg" width={50} height={50} className="absolute left-0 w-5" alt="google logo" />
										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
									</div>
								</button>

								<Link
									href="/"
									className="h-12 px-6 rounded-full transition duration-300 text-center 
                                     hover:text-blue-400 focus:text-blue-50 active:text-blue-100">
									Back to home
								</Link>
							</div>

							<div className="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
								<p className="text-xs">
									By proceeding, you agree to our{" "}
									<a href="#" className="underline">
										Terms of Use
									</a>{" "}
									and confirm you have read our{" "}
									<a href="#" className="underline">
										Privacy and Cookie Statement
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
