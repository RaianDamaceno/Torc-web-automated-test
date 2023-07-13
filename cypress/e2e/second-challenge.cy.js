
const actions = require('./actions/commands')

describe('Automating Football API', () => {
  it('Code 200', () => {
    cy.request('GET', 'https://api.football-data.org/v4/matches')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('resultSet');
        expect(response.body).to.have.property('filters');
        expect(response.body).to.have.property('matches');
      });
  })
  it('Code 403', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.football-data.org/v2/teams/1',
        failOnStatusCode: false, 
      }) .then((response) => {
        expect(response.status).to.eq(403);
      });
  })
  it('Code 304', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.football-data.org/v2/teams/1',
      failOnStatusCode: false,
      headers: {
        'If-Modified-Since': 'Sat, 01 Jan 2000 00:00:00 GMT', 
      },
    }).then((response) => {
      expect(response.status).to.eq(304);
    });
  });
})