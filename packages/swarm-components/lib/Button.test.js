"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _jestImageSnapshot = require("jest-image-snapshot");

var _screenRenderer = _interopRequireDefault(require("./screenRenderer"));

var _Button = _interopRequireDefault(require("./Button"));

expect.extend({
  toMatchImageSnapshot: _jestImageSnapshot.toMatchImageSnapshot
});
describe('👀 components are visually the same', function () {
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
              port: 4000,
              viewport: {
                width: 200,
                height: 100
              },
              staticPath: '../../swarm-styles/dist',
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
  describe('Button', function () {
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
              return renderer.screenshot(_react["default"].createElement(_Button["default"], null, "Press me"));

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
    it('Disabled',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = expect;
              _context3.next = 3;
              return renderer.screenshot(_react["default"].createElement(_Button["default"], {
                disabled: true
              }, "Can't press me"));

            case 3:
              _context3.t1 = _context3.sent;
              (0, _context3.t0)(_context3.t1).toMatchImageSnapshot();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('Primary',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = expect;
              _context4.next = 3;
              return renderer.screenshot(_react["default"].createElement(_Button["default"], {
                primary: true
              }, "Must press me"));

            case 3:
              _context4.t1 = _context4.sent;
              (0, _context4.t0)(_context4.t1).toMatchImageSnapshot();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});