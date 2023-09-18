import HomePage from '../pages/HomePage'
import ReservationsPage from '../pages/ReservationsPage'
import CartPage from '../pages/CartPage'

/**
IMPORTANT:
This test case serves as a demonstration of my skills in JavaScript and Cypress,
showcasing my ability to conduct functional tests on a live website (space.aceparking.com).
It's important to clarify that no private information or sensitive resources are being 
accessed or utilized during this testing process. The test is a straightforward case, 
aiming to confirm that a guest user can add a reservation to the cart seamlessly. The 
actions involve selecting dates, specifying a leave-by time, and verifying reservation 
and cart functionality.

In addition, we intercept and manage Google Maps API requests to ensure a controlled and 
reliable testing environment. By intercepting the Google Maps API, we effectively wait for
its responses, mitigating potential timing issues and ensuring that the test runs smoothly
and accurately. This proactive approach helps maintain consistency and reliability in the
test results.
 */
describe('Guest user test cases', () => {

  beforeEach(() => {
    cy.once('uncaught:exception', () => false);
    cy.interceptGoogleMapsAPIRequest()
  })

  it('Test guest user can add reservation to the Cart', () => {

    const offsetDate = 7
    const leaveByTime = "23:00"

    const homePage = new HomePage()
    const reservationsPage = new ReservationsPage()
    const cartPage = new CartPage()

    homePage.open()

    // wait for gmaps to avoid timing issues
    cy.waitForGMapsApiRequest() 

    homePage.arriveAfterInput.click()
    homePage.selectDayOfCalendar(offsetDate)
    homePage.leaveByTimePicker.type(leaveByTime)
    homePage.searchButton.click()

    reservationsPage.selectRandomLotInfo()

    cy.get("@lotName").then((lotName) => {
      cartPage.table.invoke('text').should("contain", lotName)
    })

    cy.get("@lotRate").then((lotRate) => {
      cartPage.summary.invoke('text').should("contain", lotRate)
    })
  })
})