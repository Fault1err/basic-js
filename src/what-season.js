const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  }

  if (typeof date != 'object') {
    throw new Error('Invalid date!');
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (date instanceof Date) {
    try {
      date.getUTCFullYear();
    } catch {
      throw new Error('Invalid date!');
    }

    let month = date.getMonth();

    if (month == 2 || month == 3 || month == 4) {
      return 'spring';
    } else if (month == 5 || month == 6 || month == 7) {
      return 'summer';
    } else if (month == 8 || month == 9 || month == 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  }
}

module.exports = {
  getSeason
};
