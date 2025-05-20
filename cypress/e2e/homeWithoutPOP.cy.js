describe("Simple HomePage test without POP", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/");
  });

  it("should display the welcome text", () => {
    cy.contains("GoIT LMS is a platform for IT courses").should("be.visible");
  });

  it("should display the orange 'To register' button", () => {
    cy.contains("To register").should("be.visible");
  });

  it("should display the white 'I already have an account' button", () => {
    cy.contains("I already have an account").should("be.visible");
  });
});
