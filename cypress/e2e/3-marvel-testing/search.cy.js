/// <reference types="cypress" />

describe("search page test", () => {
  beforeEach(() => {
    cy.visit("/");

    const email = "tuan@gmail.com";
    const password = "abc";
    cy.get("[data-cy=email]").type(`${email}`);
    cy.get("[data-cy=password]").type(`${password}`);

    cy.get("button").click();
    cy.wait(2000);
    cy.get(".search-link")
      .should("have.attr", "href", "/search")
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
  });

  it("vist search page", () => {
    cy.contains("SEARCH PAGE");
    cy.get("[data-cy=search-field]").should("exist");
    cy.get("button").should("have.length", 2);
  });

  it("search function test", () => {
    const searchTerm = "captain";
    cy.get("[data-cy=search-field]").type(`${searchTerm}{enter}`);
    cy.get(3000);
    cy.get(".link-result").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
  });
});
