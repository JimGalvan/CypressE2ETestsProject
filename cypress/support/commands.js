// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Constant representing the Google Maps API request URL.
 * @type {string}
 */
const GOOGLE_MAPS_API_REQUEST = "https://maps.googleapis.com/maps/api/mapsjs/*";

/**
 * Cypress custom command to intercept Google Maps API requests and delay the response.
 */
Cypress.Commands.add('interceptGoogleMapsAPIRequest', () => {
    /**
     * Intercept Google Maps API request and delay the response.
     */
    cy.intercept(GOOGLE_MAPS_API_REQUEST, (req) =>
        Cypress.Promise.delay(Cypress.config('defaultCommandTimeout')).then(() => req.continue())
    ).as('gmapsApiRequest');
});

/**
 * Cypress custom command to wait for the Google Maps API request.
 */
Cypress.Commands.add('waitForGMapsApiRequest', () => {
    /**
     * Wait for the Google Maps API request.
     */
    cy.wait('@gmapsApiRequest');
});


