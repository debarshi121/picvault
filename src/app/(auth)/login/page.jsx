import {handleGithubLogin} from "@/lib/actions";

const LoginPage = () => {
	return (
		<div className="">
			<div className="">
				<form action={handleGithubLogin}>
					<button className="">Login with Github</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
