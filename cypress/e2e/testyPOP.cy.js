import { LoginPage } from "../pages/Login";
const loginPage = new LoginPage();

const user1 = {
  email: "user888@gmail.com",
  password: "1234567890",
};

const user2 = {
  email: "testowyqa@qa.team",
  password: "QA!automation-1",
};

describe("Login and logout tests with POP", () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it("Login and logout as user1", () => {
    loginPage.fillEmail(user1.email);
    loginPage.fillPassword(user1.password);
    loginPage.clickLoginButton();
    // loginPage.openUserMenu();
    cy.wait(1000);
    loginPage.logout();
  });

  it("Login and logout as user2", () => {
    loginPage.fillEmail(user2.email);
    loginPage.fillPassword(user2.password);
    loginPage.clickLoginButton();
    // loginPage.openUserMenu();
    cy.wait(1000);
    loginPage.logout();
  });
});
