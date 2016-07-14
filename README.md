# gps-speed

[![Build Status](https://travis-ci.org/ceccode/gps-speed.svg?branch=master)](https://travis-ci.org/ceccode/gps-speed)
[![Known Vulnerabilities](https://snyk.io/test/github/ceccode/gps-speed/badge.svg)](https://snyk.io/test/github/ceccode/gps-speed)
[![https://david-dm.org/ceccode/gps-speed.svg](https://david-dm.org/ceccode/gps-speed.svg)](https://david-dm.org/ceccode/gps-speed.svg)

Convert speed in km/h from speed in 1/1000th knots

## Installation

```
npm install gps-speed
```

## Usage

```
const gpsSpeed = require('gps-speed');

const speed = 15902;
const speed_km_h = gpsSpeed.convert(speed);
console.log(speed_km_h); //29.450504
```

## API

### convert(speed)

```
const gpsSpeed = require('gps-speed');

gpsSpeed.convert(15902); //29.450504
gpsSpeed.convert(); //0
```

## Test

```
npm test
```

## Coverage

```
npm run-script test-travis
```


## License

[MIT license](LICENSE)