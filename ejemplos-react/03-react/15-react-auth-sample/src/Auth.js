class Auth {
	constructor() {
		this._isAuthenticated = false;
	}

	authenticate (username, password) {
		this._isAuthenticated = username === "falken";
	}

	isAuthenticated () {
		return this._isAuthenticated;
	}
}

export default Auth;
