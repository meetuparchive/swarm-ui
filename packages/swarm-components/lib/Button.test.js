"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _jestImageSnapshot = require("jest-image-snapshot");

var _screenRenderer = _interopRequireDefault(require("./testUtils/screenRenderer"));

var _Button = _interopRequireDefault(require("./Button"));

expect.extend({
  toMatchImageSnapshot: _jestImageSnapshot.toMatchImageSnapshot
});
describe('Button', function () {
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
  it('Bordered',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = expect;
            _context5.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              bordered: true
            }, "Press me"));

          case 3:
            _context5.t1 = _context5.sent;
            (0, _context5.t0)(_context5.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('Icon with text',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.t0 = expect;
            _context6.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              icon: "bolt"
            }, "Press me"));

          case 3:
            _context6.t1 = _context6.sent;
            (0, _context6.t0)(_context6.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('Icon (right) with text',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.t0 = expect;
            _context7.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              right: true,
              icon: "chevron-right"
            }, "Press me"));

          case 3:
            _context7.t1 = _context7.sent;
            (0, _context7.t0)(_context7.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('Icon without text',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8() {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.t0 = expect;
            _context8.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              icon: "bolt"
            }));

          case 3:
            _context8.t1 = _context8.sent;
            (0, _context8.t0)(_context8.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('Reset',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9() {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.t0 = expect;
            _context9.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              reset: true
            }, " Press me"));

          case 3:
            _context9.t1 = _context9.sent;
            (0, _context9.t0)(_context9.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('Inverted',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10() {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.t0 = expect;
            _context10.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              inverted: true
            }, " Press me"), {
              bodyStyle: 'background-color:powderblue;'
            });

          case 3:
            _context10.t1 = _context10.sent;
            (0, _context10.t0)(_context10.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('Neutral',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11() {
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.t0 = expect;
            _context11.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              neutral: true
            }, " Press me"));

          case 3:
            _context11.t1 = _context11.sent;
            (0, _context11.t0)(_context11.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('Small',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12() {
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.t0 = expect;
            _context12.next = 3;
            return renderer.screenshot(_react["default"].createElement(_Button["default"], {
              small: true
            }, " Press me"));

          case 3:
            _context12.t1 = _context12.sent;
            (0, _context12.t0)(_context12.t1).toMatchImageSnapshot();

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
});