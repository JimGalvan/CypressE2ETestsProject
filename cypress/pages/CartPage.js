/**
 * Class representing the Cart page with methods to access cart-related elements.
 */
export default class CartPage {

    /**
     * Gets the cart table element.
     *
     * @returns {Object} The cart table element.
     */
    get table() {
        const tableElement = cy.get(".table.table-condensed");
        console.log('Retrieved cart table element.');
        return tableElement;
    }

    /**
     * Gets the cart summary element.
     *
     * @returns {Object} The cart summary element.
     */
    get summary() {
        const summaryElement = cy.get("#sideRightSub");
        console.log('Retrieved cart summary element.');
        return summaryElement;
    }
}
