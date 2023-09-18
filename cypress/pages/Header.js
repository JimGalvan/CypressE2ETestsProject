/**
 * Class representing the header with methods to access header-related elements.
 */
class Header {
    /**
     * Gets the username input element.
     *
     * @returns {Object} The username input element.
     */
    get username() {
        const usernameElement = cy.get('input[name="userName"]');
        console.log('Retrieved username input element.');
        return usernameElement;
    }

    /**
     * Gets the password input element.
     *
     * @returns {Object} The password input element.
     */
    get password() {
        const passwordElement = cy.get('input[name="password"]');
        console.log('Retrieved password input element.');
        return passwordElement;
    }

    /**
     * Gets the submit button element.
     *
     * @returns {Object} The submit button element.
     */
    get submit() {
        const submitButtonElement = cy.get('input[name="submit"]');
        console.log('Retrieved submit button element.');
        return submitButtonElement;
    }

    /**
     * Gets the success text element.
     *
     * @returns {Object} The success text element.
     */
    get successText() {
        const successTextElement = cy.get('h3');
        console.log('Retrieved success text element.');
        return successTextElement;
    }

    /**
     * Gets the error text element.
     *
     * @returns {Object} The error text element.
     */
    get errorText() {
        const errorTextElement = cy.get('span');
        console.log('Retrieved error text element.');
        return errorTextElement;
    }
}

export default Header;
