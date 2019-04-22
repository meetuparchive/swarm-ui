"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _jestImageSnapshot = require("jest-image-snapshot");

var _screenRenderer = _interopRequireDefault(require("./testUtils/screenRenderer"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

expect.extend({
  toMatchImageSnapshot: _jestImageSnapshot.toMatchImageSnapshot
});
describe('Checkbox', function () {
  var renderer; // This is ran when the suite starts up.

  beforeAll(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _screenRenderer["default"])({
              viewport: {
                width: 200,
                height: 100
              },
              staticPath: '../../../swarm-styles/dist',
              stylesheets: ['global.css', 'main.css'] // verbose: true,

            });

          case 2:
            renderer = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))); // This is ran when the suite is done - stop the renderer.

  afterAll(function () {
    // comment next line out if you want to open it in your browser for debugging
    return renderer.stop();
  });
  it('Default',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = expect;
            _context2.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Checkbox["default"], null, "Check me"));

          case 3:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)(_context2.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});