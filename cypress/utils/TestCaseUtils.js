/**
 * Calculates the date in the future based on the given offset in days.
 *
 * @param {number} offset - The number of days to offset from the current date.
 * @returns {string} A string representing the future date in the format 'YYYY-MM-DD'.
 */
const getDateInFuture = (offset) => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + offset);

    const year = futureDate.getFullYear();
    const month = (futureDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = futureDate.getDate().toString().padStart(2, '0');

    const futureDateString = `${year}-${month}-${day}`;
    console.log(`Future date ${offset} days from now: ${futureDateString}`);

    return futureDateString;
}
