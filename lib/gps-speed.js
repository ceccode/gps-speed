"use strict";

/**
 * Convert speed in km/h from speed in 1/1000th knots
 *
 * @param speed in 1/1000th knots
 * @param unit
 * @returns {number}
 */
var convert = function (speed, unit) {
  if (!speed) {
    return 0;
  }
  return parseFloat(speed) / 1000 * 1.852;

};

module.exports = {
  convert: convert
};
