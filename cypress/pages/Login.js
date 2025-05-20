export class LoginPage {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }
  fillEmail(email) {
    cy.get("#user_email").type(email);
  }
  fillPassword(password) {
    //mertoda przujmuje hasło jako argument i wpisuje je do pola hasła tak jak w metodzie na górze z email
    cy.get('input[type="password"]').type(password);
  }
  clickLoginButton() {
    //metoda przycisku logowania się , zanim zostanie wciśniety ma być tez widoczny
    cy.get(".eckniwg2").should("be.visible").click();
  }
  openUserMenu() {
    //menu w prawym górnym rogu po zalogowaniu na główną stronę
    cy.get("#open-navigation-menu-mobile").should("be.visible").click();
  }
  logout() {
    //dodaję do klasy Loginpage metodę wylogowywania ze strony głównej
    cy.get("#open-navigation-menu-mobile").should("be.visible").click();
    cy.wait(1000);
    cy.get(":nth-child(8) > .next-bve2vl").should("be.visible").click();
  }
}
