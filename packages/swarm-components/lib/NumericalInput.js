"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumericalInput = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStatus = function getStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var NumericalInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumericalInput, _React$Component);

  function NumericalInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumericalInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumericalInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "fauxInputEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "decrementBtnEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "incrementBtnEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value || _this.props.value === 0 ? _this.props.value : null,
      isFieldFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "_updateValueByStep", function (isIncreasing) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var currentVal = _this.state.value || min || 0;
      var newValue = isIncreasing ? currentVal + step : currentVal - step;
      var minConstrained = Math.max(newValue, _this.props.min || -Infinity);
      return Math.min(minConstrained, max || Infinity);
    });

    _defineProperty(_assertThisInitialized(_this), "_updateValue", function (value) {
      _this.setState(function () {
        return {
          value: value
        };
      });

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var formControls = [_this.fauxInputEl, _this.decrementBtnEl, _this.incrementBtnEl];

      if (formControls.every(function (c) {
        return c !== document.activeElement;
      })) {
        _this.setState(function () {
          return {
            isFieldFocused: false
          };
        });

        if (_this.props.onBlur) {
          _this.props.onBlur(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var newValue = e.target.value ? parseInt(e.target.value, 10) : null;

      if (Number.isNaN(newValue)) {
        return;
      }

      _this._updateValue(newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState(function () {
        return {
          isFieldFocused: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      // Disable the 'e' or 'E' values because we don't
      // support scientific notation at the moment
      if (e.key.toLowerCase() === 'e') {
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "incrementAction", function (e) {
      e.preventDefault();

      _this._updateValue(_this._updateValueByStep(true));
    });

    _defineProperty(_assertThisInitialized(_this), "decrementAction", function (e) {
      e.preventDefault();

      _this._updateValue(_this._updateValueByStep(false));
    });

    return _this;
  }

  _createClass(NumericalInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          onChange = _this$props2.onChange,
          onBlur = _this$props2.onBlur,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["className", "onChange", "onBlur", "value"]);

      return React.createElement("div", {
        "data-swarm-number-input": getStatus(this.props),
        className: className
      }, React.createElement("input", _extends({
        "data-swarm-number-input-field": true,
        type: "number",
        pattern: "[0-9]*",
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        value: this.state.value === null ? '' : this.state.value
      }, other)), React.createElement("button", {
        "data-swarm-number-input-increment": true,
        tabIndex: "-1",
        onBlur: this.onBlur,
        onClick: this.incrementAction,
        onFocus: this.onFocus,
        ref: function ref(el) {
          return _this2.incrementBtnEl = el;
        }
      }, React.createElement(_Icon["default"], {
        shape: "plus",
        size: "xs"
      })), React.createElement("button", {
        "data-swarm-number-input-decrement": true,
        tabIndex: "-1",
        onBlur: this.onBlur,
        onClick: this.decrementAction,
        onFocus: this.onFocus,
        ref: function ref(el) {
          return _this2.decrementBtnEl = el;
        }
      }, React.createElement(_Icon["default"], {
        shape: "minus",
        size: "xs"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    // internal value updater when passed a value via props
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isNewValue = nextProps.onChange && nextProps.value !== prevState.value;
      return {
        value: isNewValue ? nextProps.value : prevState.value
      };
    }
  }]);

  return NumericalInput;
}(React.Component);

exports.NumericalInput = NumericalInput;

_defineProperty(NumericalInput, "defaultProps", {
  step: 1,
  min: 0
});

var _default = NumericalInput;
exports["default"] = _default;
NumericalInput.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getDerivedStateFromProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "nextProps",
      "type": {
        "name": "signature",
        "type": "object",
        "raw": "{\n\t/**\n\t * Classname of wrapper, specified because it is not applied with other\n\t */\n\tclassName?: string,\n    /**\n     * indicates whether the input is disabled\n     */\n    disabled?: boolean,\n    /**\n     * indicates whether there is an error on the input\n     */\n    error?: React$Node,\n    /**\n     * id of the input\n     */\n    id: string,\n    /**\n     * the maximum integer allowed\n     */\n\tmax?: number,\n    /**\n     * the minimum integer allowed\n     */\n    min?: number,\n    /**\n     * name of the input, used with labels\n     */\n    name: string,\n    /**\n     * Required change handler with Value, not event\n     */\n    onChange: Value => void,\n    /**\n     * funcitonality invoked when the form field is blurred\n     */\n    onBlur: (SyntheticInputEvent<HTMLInputElement>) => void,\n    /**\n     * The amount the input will increment or decrement when using keyboard interactions\n     */\n    step: number,\n    /**\n     * The value of the field\n     */\n\tvalue: Value,\n}",
        "signature": {
          "properties": [{
            "key": "className",
            "value": {
              "name": "string",
              "required": false
            }
          }, {
            "key": "disabled",
            "value": {
              "name": "boolean",
              "required": false
            }
          }, {
            "key": "error",
            "value": {
              "name": "React$Node",
              "required": false
            }
          }, {
            "key": "id",
            "value": {
              "name": "string",
              "required": true
            }
          }, {
            "key": "max",
            "value": {
              "name": "number",
              "required": false
            }
          }, {
            "key": "min",
            "value": {
              "name": "number",
              "required": false
            }
          }, {
            "key": "name",
            "value": {
              "name": "string",
              "required": true
            }
          }, {
            "key": "onChange",
            "value": {
              "name": "signature",
              "type": "function",
              "raw": "Value => void",
              "signature": {
                "arguments": [{
                  "name": "",
                  "type": {
                    "name": "union",
                    "raw": "number | null",
                    "elements": [{
                      "name": "number"
                    }, {
                      "name": "null"
                    }],
                    "required": true
                  }
                }],
                "return": {
                  "name": "void"
                }
              },
              "required": true
            }
          }, {
            "key": "onBlur",
            "value": {
              "name": "signature",
              "type": "function",
              "raw": "(SyntheticInputEvent<HTMLInputElement>) => void",
              "signature": {
                "arguments": [{
                  "name": "",
                  "type": {
                    "name": "SyntheticInputEvent",
                    "elements": [{
                      "name": "HTMLInputElement"
                    }],
                    "raw": "SyntheticInputEvent<HTMLInputElement>"
                  }
                }],
                "return": {
                  "name": "void"
                }
              },
              "required": true
            }
          }, {
            "key": "step",
            "value": {
              "name": "number",
              "required": true
            }
          }, {
            "key": "value",
            "value": {
              "name": "union",
              "raw": "number | null",
              "elements": [{
                "name": "number"
              }, {
                "name": "null"
              }],
              "required": true
            }
          }]
        },
        "alias": "Props"
      }
    }, {
      "name": "prevState",
      "type": {
        "name": "signature",
        "type": "object",
        "raw": "{\n\tisFieldFocused: boolean,\n\tvalue: Value,\n}",
        "signature": {
          "properties": [{
            "key": "isFieldFocused",
            "value": {
              "name": "boolean",
              "required": true
            }
          }, {
            "key": "value",
            "value": {
              "name": "union",
              "raw": "number | null",
              "elements": [{
                "name": "number"
              }, {
                "name": "null"
              }],
              "required": true
            }
          }]
        },
        "alias": "State"
      }
    }],
    "returns": null
  }, {
    "name": "_updateValueByStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isIncreasing",
      "type": {
        "name": "boolean"
      }
    }],
    "returns": null
  }, {
    "name": "_updateValue",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": {
        "name": "union",
        "raw": "number | null",
        "elements": [{
          "name": "number"
        }, {
          "name": "null"
        }],
        "alias": "Value"
      }
    }],
    "returns": null
  }, {
    "name": "onBlur",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticInputEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticInputEvent<HTMLInputElement>",
        "alias": "SyntheticInputEvent"
      }
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticInputEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticInputEvent<HTMLInputElement>",
        "alias": "SyntheticInputEvent"
      }
    }],
    "returns": null
  }, {
    "name": "onFocus",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticFocusEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticFocusEvent<HTMLInputElement>",
        "alias": "SyntheticFocusEvent"
      }
    }],
    "returns": null
  }, {
    "name": "onKeyDown",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticKeyboardEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticKeyboardEvent<HTMLInputElement>",
        "alias": "SyntheticKeyboardEvent"
      }
    }],
    "returns": null
  }, {
    "name": "incrementAction",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticInputEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticInputEvent<HTMLInputElement>",
        "alias": "SyntheticInputEvent"
      }
    }],
    "returns": null
  }, {
    "name": "decrementAction",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": {
        "name": "SyntheticInputEvent",
        "elements": [{
          "name": "HTMLInputElement"
        }],
        "raw": "SyntheticInputEvent<HTMLInputElement>",
        "alias": "SyntheticInputEvent"
      }
    }],
    "returns": null
  }],
  "displayName": "NumericalInput",
  "props": {
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "required": false,
      "flowType": {
        "name": "number"
      },
      "description": "The amount the input will increment or decrement when using keyboard interactions"
    },
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "required": false,
      "flowType": {
        "name": "number"
      },
      "description": "the minimum integer allowed"
    },
    "className": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Classname of wrapper, specified because it is not applied with other"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "indicates whether the input is disabled"
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "React$Node"
      },
      "description": "indicates whether there is an error on the input"
    },
    "id": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "id of the input"
    },
    "max": {
      "required": false,
      "flowType": {
        "name": "number"
      },
      "description": "the maximum integer allowed"
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "name of the input, used with labels"
    },
    "onChange": {
      "required": true,
      "flowType": {
        "name": "signature",
        "type": "function",
        "raw": "Value => void",
        "signature": {
          "arguments": [{
            "name": "",
            "type": {
              "name": "union",
              "raw": "number | null",
              "elements": [{
                "name": "number"
              }, {
                "name": "null"
              }]
            }
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": "Required change handler with Value, not event"
    },
    "onBlur": {
      "required": true,
      "flowType": {
        "name": "signature",
        "type": "function",
        "raw": "(SyntheticInputEvent<HTMLInputElement>) => void",
        "signature": {
          "arguments": [{
            "name": "",
            "type": {
              "name": "SyntheticInputEvent",
              "elements": [{
                "name": "HTMLInputElement"
              }],
              "raw": "SyntheticInputEvent<HTMLInputElement>"
            }
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": "funcitonality invoked when the form field is blurred"
    },
    "value": {
      "required": true,
      "flowType": {
        "name": "union",
        "raw": "number | null",
        "elements": [{
          "name": "number"
        }, {
          "name": "null"
        }]
      },
      "description": "The value of the field"
    }
  }
};