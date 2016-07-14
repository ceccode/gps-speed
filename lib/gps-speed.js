"use strict";

var convert = function (speed, unit) {
  if (!speed) {
    return 0;
  }
  return parseFloat(speed) / 1000 * 1.852;

};

module.exports = {
  convert: convert
};
