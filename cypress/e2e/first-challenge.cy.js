
const actions = require('./actions/commands')

describe('Automating DuckDuckGo Search', () => {
  it('Searches value and checks the first search result', () => {
    cy.visit('https://duckduckgo.com')
    actions.webSearch('The dev-friendly football API')
    actions.getFirstResult('https://www.football-data.org/')
    actions.verifyResult('https://www.football-data.org/')
  })
})