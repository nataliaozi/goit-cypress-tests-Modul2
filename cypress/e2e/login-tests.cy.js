//dane testowe
const user1 = {
  email: "user888@gmail.com",
  password: "1234567890",
};

const user2 = {
  email: "testowyqa@qa.team",
  password: "QA!automation-1",
};

describe("Login and logout tests", () => {
  //grupowanie testów
  beforeEach(() => {
    //funkcja beforeEach uruchomi się przed każdym it -> czyli przed każdym testem
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Login and logout as user1", () => {
    cy.get("#user_email").type(user1.email);
    cy.get('input[type="password"]').type(user1.password);
    cy.get(".eckniwg2").click();

    cy.get("#open-navigation-menu-mobile").should("be.visible").click(); //kliknięcie na rozwijane menu w prawym górnym rogu; dodałam asercję .should("be.visible")
    cy.get(":nth-child(8) > .next-bve2vl").should("be.visible").click(); //kliknięcie przycisku wylogowania z should, gdyby pojawił się ten przycisk z opoźnieniem
  });

  it("Login and logout as user2", () => {
    cy.get("#user_email").type(user2.email);
    cy.get('input[type="password"]').type(user2.password);
    cy.get(".eckniwg2").should("be.visible").click();

    cy.get("#open-navigation-menu-mobile").should("be.visible").click();
    cy.contains("Log out").should("be.visible").click(); // tu zastosowałam polecenie cy.contains bo po skopiowaniu tej linijki     cy.get(":nth-child(8) > .next-bve2vl").click() z user1 w Cypress cały czas pojawiał mi sie błąd
  });
});

//przed niektórymi poleceniami .click() zastosowałam asercje .should("be.visible") w razie ewentualnych opóźnień w ładowaniu
