
const locators = require('../locators/search-locators')

export function webSearch(value) {
    cy.get(locators.input_search_homepage)
        .focus()
        .type(value)
        .type('{esc}');


    cy.get(locators.btn_submit_search)
        .click()
}

export function getFirstResult() {
    cy.get(locators.element_first_search_result)
        .first()
        .click()
}

export function verifyResult() {
    cy.url()
        .should('contains', 'https://www.football-data.org/')
}