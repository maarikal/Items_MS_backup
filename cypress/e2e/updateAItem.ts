import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in as a registered user", () => {
    localStorage.setItem('sessionId', 'bogusSessionIdForTesting');
});

When('I am on the "Items" page', () => {
    cy.visit('http://localhost:5173/items');
});

When("I click on the {string} button next to the item I want to update", (buttonText: string) => {
    cy.visit('http://localhost:5173/items');
    cy.contains(buttonText).click();
});

When("I update the item's details", () => {
    cy.get("input[name=name]").clear().type("Updated Item");
    cy.get("input[name=description]").clear().type("This is an updated item");
    cy.get("input[name=image]").clear().type("https://shorturl.at/aijsQ");
});

When("I click the {string} button", () => {
    cy.get("button#update-item").click();
});

Then("the item details should be updated", () => {
    cy.contains("Updated Item").should("exist");
    cy.contains("This is an updated item").should("exist");
});