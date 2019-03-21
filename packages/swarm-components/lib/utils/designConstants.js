"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIA_SIZES = exports.MEDIA_QUERIES = void 0;

var _constants = require("swarm-constants/dist/js/constants.js");

var MEDIA_QUERIES = {
  small: "screen and (min-width: ".concat(_constants.BREAKPOINT_S, ")"),
  medium: "screen and (min-width: ".concat(_constants.BREAKPOINT_M, ")"),
  large: "screen and (min-width: ".concat(_constants.BREAKPOINT_L, ")"),
  huge: "screen and (min-width: ".concat(_constants.BREAKPOINT_XL, ")")
}; //
// TODO: we should import these from swarm-constants,
// but since these are responsive values, we don't
// export them to the JS dist in swarm-constants.
//
// A fine solution would be to export the default
// sizes (which are currently the same as below)
// to JS and not worry about the sizes for viewports
// larger than mobile.
//

exports.MEDIA_QUERIES = MEDIA_QUERIES;
var MEDIA_SIZES = {
  xxs: '12',
  xs: '16',
  s: '24',
  m: '36',
  l: '48',
  xl: '72',
  xxl: '120'
};
exports.MEDIA_SIZES = MEDIA_SIZES;