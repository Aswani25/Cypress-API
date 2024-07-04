describe("intercept with example", () => {
  it("test api with simple intercept", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept({
      path: "/posts",
    }).as("posts");
    cy.get("tr td").eq(0).should("contain", "posts").click();
    cy.wait("@posts").then((inter) => {
      cy.log(JSON.stringify(inter));
      console.log(JSON.stringify(inter));
      expect(inter.response.body).to.have.length(100);
    });
  });

  it("mocking with intercept test with static response", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { totalpost: 5, name: "Aswani" }).as(
      "mockedPosts"
    );
    cy.get("tr td").eq(0).should("contain", "posts").click();
    cy.wait("@mockedPosts");
  });

  it("mocking with intercept test with dynamic fixture", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { fixture: "example.json" }).as(
      "mockedPosts"
    );
    cy.get("tr td").eq(0).should("contain", "posts").click();
    cy.wait("@mockedPosts");
  });
});
