# Torc-web-automated-test

# Cypress Test Automation

This repository contains a test automation created using the Cypress framework to test the search flow on the DuckDuckGo website and verify if the first search result redirects to the correct URL.

## Prerequisites

Before running the tests, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (version 14 or higher)
- [Cypress](https://www.cypress.io) (installed globally or locally)

## Running the Tests

To run the tests, follow the steps below:

1. Clone this repository to your local machine:

```https://github.com/RaianDamaceno/Torc-web-automated-test.git```

2. Navigate to the project directory:

```cd Torc-web-automated-test/cypress```

3. Install the project dependencies:

```npm install```

4. Run the command to open the Cypress Test Runner:

```npx cypress open```

5. In the Cypress Test Runner, click on the `search.spec.js` test file to start executing the tests.

## Test Description

The automated tests were created following the following requirements:

### Search Tests

1. Open the URL `https://duckduckgo.com`.
2. Enter the phrase `The dev-friendly football API` in the search box.
3. Perform the search.
4. Click on the first search result.
5. Check if the URL is `https://www.football-data.org/`.

The tests are written in JavaScript using the Cypress framework and can be found in the `cypress/integration/search.spec.js` file. Each step of the test flow is represented by an individual test, making it modular and easy to understand.

### API Tests

To test the Football Data API, the following test cases were created:

1. Retrieve team details and verify the response code is 200 OK.
2. Attempt to retrieve team details without proper authorization and verify the response code is 401 Unauthorized.
3. Send a conditional request with a valid cache header and verify the response code is 304 Not Modified.

The API tests are written in JavaScript using the Cypress framework and can be found in the `cypress/integration/api.spec.js` file. Each test case verifies a specific HTTP response code.

## Project Structure

The project structure is organized as follows:

- `cypress/e2e`: Contains the test files written in Cypress.
- `cypress/support`: Contains support files for the tests, such as custom commands and configuration files.
- `cypress/fixtures`: Contains test data files, if necessary.

## Test Reports

The tests are executed in the Cypress Test Runner, which displays real-time results during the execution. 
