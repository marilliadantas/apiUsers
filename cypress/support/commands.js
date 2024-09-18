Cypress.Commands.add("getUser", () => {
    cy.api({
      url: `/api/Users`,
      method: "GET",
      failOnStatusCode: false,
    }).then((response) => {
      return response;
    });
  });

Cypress.Commands.add("postUser", (user) => {
  cy.api({
    url: "/api/users",
    method: "POST",
    body: user,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("deleteUserID", (userID) => {
  cy.api({
    url: `/api/users/${userID}`,
    method: "DELETE",
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});