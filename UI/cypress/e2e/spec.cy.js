describe("Testes de UI (Interface) de formulário de cadastro", () => {
  beforeEach(() => {
    cy.visit("https://julianoquites.github.io/mock-formulario-de-cadastro/");
  });

  it("Formulário preenchido corretamente deve exibir mensagem de sucesso ao enviar", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("juliano@example.com");
    cy.get("#password").type("1234567A");
    cy.get("button").click();
    cy.get("#message").should("be.visible");
  });
  it("O formulário deve exibir mensagem de erro ao enviar sem preencher todos os campos", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("juliano@example.com");
    cy.get("button").click();
    cy.get('[id$="Error"]').should("exist");
  });
  it("Deve exibir mensagem de erro ao tentar enviar formulário com emails diferentes", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("julianos@example.com");
    cy.get("#password").type("1234567A");
    cy.get("button").click();
    cy.get("#confirmEmailError").should(
      "have.text",
      "Os e-mails digitados não coincidem."
    );
  });
  it("A senha deve ter no mínimo 8 caracteres", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("juliano@example.com");
    cy.get("#password").type("A234567");
    cy.get("button").click();
    cy.get("#passwordError").should(
      "have.text",
      "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."
    );
  });
  it("A senha deve ter pelo menos uma letra maiúscula", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("juliano@example.com");
    cy.get("#password").type("1234567a");
    cy.get("button").click();
    cy.get("#passwordError").should(
      "have.text",
      "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."
    );
  });
  it("A senha deve ter pelo menos um número", () => {
    cy.get("#name").type("Juliano");
    cy.get("#email").type("juliano@example.com");
    cy.get("#confirmEmail").type("juliano@example.com");
    cy.get("#password").type("Abcdefgh");
    cy.get("button").click();
    cy.get("#passwordError").should(
      "have.text",
      "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."
    );
  });
});
