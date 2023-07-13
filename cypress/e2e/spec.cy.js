
const actions = require('../e2e/actions/commands')
const locators = require('../e2e/locators/search-locators')

describe('Automating DuckDuckGo Search', () => {
  it('Searches value and checks the first search result', () => {
    cy.visit('https://duckduckgo.com')
    actions.webSearch('The dev-friendly football API')
    actions.getFirstResult()
    actions.verifyResult()
  })
})