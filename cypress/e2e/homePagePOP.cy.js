import { HomePage } from "../pages/HomePage";

const homePage = new HomePage();

describe("Home Page tests with POP - single it", () => {
  before(() => {
    homePage.navigate();
  });

  it("should display welcome text and buttons", () => {
    homePage.checkWelcomeText();
    homePage.checkRegisterButton();
    homePage.checkLoginButton();
  });
});
