describe("/users GET", () => {
  it("Deve obter os usuários", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body[0].firstname).to.eql("John");
      expect(response.body[0].lastname).to.eql("Peter");
      expect(response.body[0].email).to.eql("john@gmail.com");
    });
  });
});