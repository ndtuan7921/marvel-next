/// <reference types="cypress" />

describe("home page test", () => {
  beforeEach(() => {
    cy.visit("/");
    const email = "tuan@gmail.com";
    const password = "abc";

    cy.get("[data-cy=email]").type(`${email}`);
    cy.get("[data-cy=password]").type(`${password}`);

    cy.get("button").click();
  });

  it("vist home page", () => {
    cy.contains("HOME PAGE");

    cy.get(".comic-link").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
  });
});
