export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		authorized({auth, request}) {
			const user = auth?.user;
			const isOnHistoryPage = request.nextUrl?.pathname.startsWith("/history");
			const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

			// ONLY AUTHENTICATED USERS CAN REACH THE HISTORY PAGE

			if (isOnHistoryPage && !user) {
				return false;
			}

			// ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

			if (isOnLoginPage && user) {
				return Response.redirect(new URL("/", request.nextUrl));
			}

			return true;
		},
	},
};
