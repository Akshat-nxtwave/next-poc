describe("Navigation", () => {
  it("should navigate to the cred page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test-id="test"]').click();

    cy.url().should("include", "/api/auth");
  });

  it("should test intercepted routing in nextjs", () => {
    cy.visit("http://localhost:3000/intercepting/route1");
    cy.get('[data-test-id="test-link"]').click();
    cy.get("div").contains("INTERCEPTED");
  });
});
