describe("/users DELETE", () => {
  it("Tentativa de deletar um usuário inválido", () => {
    const idInvalido = "66e18f57409f8ed43da63dcc";

    cy.deleteUserID(idInvalido).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.alert).to.equal("Usuário não encontrado.");
    });
  });
});