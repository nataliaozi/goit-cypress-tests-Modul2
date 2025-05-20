export class HomePage {
  navigate() {
    cy.visit("https://www.edu.goit.global/");
  }

  checkWelcomeText() {
    cy.contains("GoIT LMS is a platform for IT courses").should("be.visible");
  }

  checkRegisterButton() {
    cy.contains("To register").should("be.visible");
  }

  checkLoginButton() {
    cy.contains("I already have an account").should("be.visible");
  }
}
