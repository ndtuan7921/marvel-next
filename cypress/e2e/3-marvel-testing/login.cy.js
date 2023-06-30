/// <reference types="cypress" />

describe("login page test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("vist login page", () => {
    cy.contains("Login to continue");
    cy.get("input").should("have.length", 2);
    cy.get("button").should("have.length", 1);
  });

  it("login failed", () => {
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);

    const email = "email@gmail.com";
    const password = "password";

    cy.get("[data-cy=email]").type(`${email}`);
    cy.get("[data-cy=password]").type(`${password}`);

    cy.get("button").click();

    cy.get("@alertShown").should("have.been.calledOnceWith", "try again");
  });

  it.only("login success", () => {
    const email = "tuan@gmail.com";
    const password = "abc";

    cy.get("[data-cy=email]").type(`${email}`);
    cy.get("[data-cy=password]").type(`${password}`);

    cy.get("button").click();

    cy.wait(2000);
    cy.url().should("eq", "http://localhost:3000/");
  });
});
