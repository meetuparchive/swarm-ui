"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _hapi = _interopRequireDefault(require("hapi"));

var _path = _interopRequireDefault(require("path"));

var _inert = _interopRequireDefault(require("inert"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _server = _interopRequireDefault(require("react-dom/server"));

var screenRenderer =
/*#__PURE__*/
function () {
  function screenRenderer(config) {
    (0, _classCallCheck2["default"])(this, screenRenderer);
    this.config = (0, _objectSpread2["default"])({
      viewport: {
        width: 800,
        height: 600
      },
      verbose: false,
      port: 4000,
      padding: '1em'
    }, config);
    this.routeIndex = 0;
  }

  (0, _createClass2["default"])(screenRenderer, [{
    key: "log",
    value: function log() {
      if (this.config.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this$config, port, staticPath;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$config = this.config, port = _this$config.port, staticPath = _this$config.staticPath;
                _context.next = 3;
                return _puppeteer["default"].launch();

              case 3:
                this.browser = _context.sent;
                this.log('Browser is running');
                this.server = _hapi["default"].server({
                  port: port
                });
                _context.next = 8;
                return this.server.register(_inert["default"]);

              case 8:
                // serving static files
                this.server.route({
                  method: 'GET',
                  path: '/static/{param*}',
                  handler: {
                    directory: {
                      path: _path["default"].join(__dirname, staticPath)
                    }
                  }
                });
                _context.next = 11;
                return this.server.start();

              case 11:
                this.log('Server running on %s', this.server.info.uri);
                return _context.abrupt("return", this);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createRoute",
    value: function createRoute(slug, element) {
      var _this = this;

      var links = this.config.stylesheets.map(function (stylesheet) {
        return "<link\n\t\t\t\t\t\trel=\"stylesheet\"\n\t\t\t\t\t\ttype=\"text/css\"\n\t\t\t\t\t\thref=\"/static/".concat(stylesheet, "\" />");
      }).join('\n');
      return {
        method: 'GET',
        path: "/".concat(slug),
        handler: function handler() {
          return "<html>\n\t\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t\t".concat(links, "\n\t\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t\t<body style=\"padding: ").concat(_this.config.padding, "\">\n\t\t\t\t\t\t\t\t").concat(_server["default"].renderToStaticMarkup(element), "\n\t\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t</html>");
        }
      };
    }
  }, {
    key: "stop",
    value: function () {
      var _stop = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.browser.close();

              case 2:
                return _context2.abrupt("return", this.server.stop());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function stop() {
        return _stop.apply(this, arguments);
      }

      return stop;
    }()
  }, {
    key: "screenshot",
    value: function () {
      var _screenshot = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(element, screenshotConfig) {
        var page, slug, testUrl;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.browser.newPage();

              case 2:
                page = _context3.sent;
                page.setViewport(screenshotConfig && screenshotConfig.viewport || this.config.viewport);
                slug = "route-".concat(this.routeIndex++);
                this.server.route(this.createRoute(slug, element));
                testUrl = "".concat(this.server.info.uri, "/").concat(slug);
                this.log("Testing: ".concat(testUrl));
                _context3.next = 10;
                return page["goto"](testUrl);

              case 10:
                return _context3.abrupt("return", page.screenshot());

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function screenshot(_x, _x2) {
        return _screenshot.apply(this, arguments);
      }

      return screenshot;
    }()
  }]);
  return screenRenderer;
}();

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(config) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new screenRenderer(config).init());

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;