"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumericalInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var getStatus = function getStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var NumericalInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NumericalInput, _React$Component);

  function NumericalInput() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, NumericalInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(NumericalInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fauxInputEl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "decrementBtnEl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "incrementBtnEl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.value || _this.props.value === 0 ? _this.props.value : null,
      isFieldFocused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateValueByStep", function (isIncreasing) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var currentVal = _this.state.value || min || 0;
      var newValue = isIncreasing ? currentVal + step : currentVal - step;
      var minConstrained = Math.max(newValue, _this.props.min || -Infinity);
      return Math.min(minConstrained, max || Infinity);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateValue", function (value) {
      _this.setState(function () {
        return {
          value: value
        };
      });

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var newValue = e.target.value ? parseInt(e.target.value, 10) : null;

      if (Number.isNaN(newValue)) {
        return;
      }

      _this._updateValue(newValue);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function (e) {
      _this.setState(function () {
        return {
          isFieldFocused: true
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown", function (e) {
      // Disable the 'e' or 'E' values because we don't
      // support scientific notation at the moment
      if (e.key.toLowerCase() === 'e') {
        e.preventDefault();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "incrementAction", function (e) {
      e.preventDefault();

      _this._updateValue(_this._updateValueByStep(true));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "decrementAction", function (e) {
      e.preventDefault();

      _this._updateValue(_this._updateValueByStep(false));
    });
    return _this;
  }

  (0, _createClass2["default"])(NumericalInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          onChange = _this$props2.onChange,
          onBlur = _this$props2.onBlur,
          value = _this$props2.value,
          other = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "onChange", "onBlur", "value"]);
      return React.createElement("div", {
        "data-swarm-number-input": getStatus(this.props),
        className: className
      }, React.createElement("input", (0, _extends2["default"])({
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
(0, _defineProperty2["default"])(NumericalInput, "defaultProps", {
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