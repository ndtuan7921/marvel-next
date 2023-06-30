/// <reference types="cypress" />

describe("character detail page test", () => {
  beforeEach(() => {
    cy.visit("/");

    const email = "tuan@gmail.com";
    const password = "abc";
    cy.get("[data-cy=email]").type(`${email}`);
    cy.get("[data-cy=password]").type(`${password}`);
    cy.get("button").click();
  });

  it("vist character detail page", () => {
    const id = "1017100";
    cy.visit(`/characters/${id}`);

    cy.get("[data-cy=character-id]").contains(id);

    cy.get(".comic-link").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
  });
});
