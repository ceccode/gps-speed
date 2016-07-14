"use strict";

const expect = require("chai").expect;
const assert = require('chai').assert;

const gpsSpeed = require("../lib/gps-speed.js");

describe("convertTo km/h", () => {
  it("should convert in km/h", () => {

    const speed = 15902;
    const result = gpsSpeed.convert(speed); //29.450504 km/h

    assert.typeOf(result, 'number');
    assert.equal(result, 29.450504);
  });
});

describe("convertTo mph", () => {
  it("should return 0 if no speed is provided", () => {

    const result = gpsSpeed.convert();

    assert.typeOf(result, 'number');
    assert.equal(result, 0);
  });
});