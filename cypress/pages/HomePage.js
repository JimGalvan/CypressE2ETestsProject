import CookiesBanner from '../pages/CookiesBanner';

/**
 * Class representing the Home page with methods related to page interaction.
 */
export default class HomePage {

    /**
     * Opens the home page, accepts cookies, and logs the action.
     */
    open() {
        cy.visit("/");
        cy.log("Navigating to home page");
        const cookiesBanner = new CookiesBanner();
        cookiesBanner.okButton.click();
    }

    /**
     * Gets the 'Arrive After' input element.
     *
     * @returns {Object} The 'Arrive After' input element.
     */
    get arriveAfterInput() {
        const inputElement = cy.get('#startdate');
        console.log('Retrieved "Arrive After" input element.');
        return inputElement;
    }

    /**
     * Gets the search button element.
     *
     * @returns {Object} The search button element.
     */
    get searchButton() {
        const buttonElement = cy.get('#find-parking');
        console.log('Retrieved search button element.');
        return buttonElement;
    }

    /**
     * Selects a day on the calendar based on the offset.
     *
     * @param {number} offset - The offset for selecting the day in the calendar.
     */
    selectDayOfCalendar(offset) {
        cy.get("#ui-datepicker-div").find("td[data-handler='selectDay']").eq(offset).click();
        console.log(`Selected day in the calendar with offset ${offset}.`);
    }

    /**
     * Gets the 'Leave By' time picker element.
     *
     * @returns {Object} The 'Leave By' time picker element.
     */
    get leaveByTimePicker(){
        const timePickerElement = cy.get("input[name='end_time']");
        console.log('Retrieved "Leave By" time picker element.');
        return timePickerElement;
    }
}
