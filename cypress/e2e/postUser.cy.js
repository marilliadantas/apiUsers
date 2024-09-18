describe("/users POST", () => {
  it("Deve obter os usuários", () => {
    const user = {
      firstname: "Victor",
      lastname: "Oliveira",
      email: "jao@gmail.com",
      password: "1234Teste",
    };

    cy.postUser(user).then((response) => {
      expect(response.status).to.eql(201);
      expect(response.body.msg).to.eql("Usuário cadastrado com sucesso!");
      expect(response.body.user.id).to.not.be.empty;
    });
  });
});