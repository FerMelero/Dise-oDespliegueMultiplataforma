import expect from "expect";
import Auth from "./Auth";
const auth = new Auth();

it("Exist an Auth component", () => {
	expect(auth).toBeDefined();	
	expect(auth).toBeInstanceOf(Auth);
});

it("Authenticates", () => {
	auth.authenticate("","");
	expect(auth.isAuthenticated()).toBe(false);	
	
	auth.authenticate("falken","josua");
	expect(auth.isAuthenticated()).toBe(true);	
});
