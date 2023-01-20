context("Home Page", () => {
  it("Renders the calculator correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 570);

    cy.contains("Simule sua Antecipação");
  });

  it("Shows calculator response", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 570);

    cy.get("input[name=amount]").type("15000");
    cy.get("input[name=installments]").type("3");
    cy.get("input[name=mdr]").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("Amanhã: R$ 13267,00");
    cy.contains("Em 15 dias: R$ 13536,00");
    cy.contains("Em 30 dias: R$ 13824,00");
    cy.contains("Em 90 dias: R$ 14400,00");
  });

  it("Shows errors when inputs are wrong", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 570);

    cy.get("input[name=amount]").type("500");
    cy.get("input[name=installments]").type("-3");
    cy.get("button[type=submit]").click();

    cy.contains("Deve ser um número maior ou igual a 1000");
    cy.contains("Deve ser um número positivo");
    cy.contains("Campo Obrigatório");

    cy.get("input[name=installments]").clear();
    cy.get("input[name=installments]").type("20");
    cy.get("button[type=submit]").click();

    cy.contains("Máximo de 12 parcelas");
  });
});
