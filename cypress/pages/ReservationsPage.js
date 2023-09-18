/**
 * Class representing the Reservations page with methods related to selecting random lot information.
 */
export default class ReservationsPage {

    /**
     * Selects random lot information from the lots displayed on the page and logs the selected information.
     */
    selectRandomLotInfo() {
        cy.get(".lotSection").then((lots) => {

            const randomIndex = Math.floor(Math.random() * lots.length)

            const randomLot = lots[randomIndex]

            cy.wrap(randomLot).find(".infoName").invoke("text").then((text) => {
                cy.wrap(text).as("lotName")
                cy.log(`Selected lot name: ${text}`);
            })

            cy.wrap(randomLot).find(".infoAddress").invoke("text").then((text) => {
                cy.wrap(text).as("lotAddress")
                cy.log(`Selected lot address: ${text}`);
            })

            cy.wrap(randomLot).find(".infoRate").invoke("text").then((text) => {
                cy.wrap(text).as("lotRate")
                cy.log(`Selected lot rate: ${text}`);
            })

            cy.wrap(randomLot).contains('BOOK NOW').click()
        })
    }

}
