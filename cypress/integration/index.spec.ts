/// <reference types="cypress" />

context("/ - Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("ページが表示されている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/");
    cy.get("[data-cy=welcome]").contains("Welcome to Next.js!");
  });
});
