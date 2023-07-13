
const locators = require('../locators/search-locators')

export function webSearch(value) {
    cy.get(locators.input_search_homepage)
        .clear()
        .type(value)
        .type('{enter}');


    cy.get(locators.btn_submit_search)
        .click()

    cy.get(locators.element_first_search_result);
}

export function getFirstResult(website) {
    cy.get(locators.element_first_search_result)
        .first()
        .click()

    cy.location('href')
        .should('contains', website);
}

export function verifyResult(website_url) {
    cy.url()
        .should('contains', website_url)
}