"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getIconShape = exports.MEDIA_SIZES = exports.ICON_CIRCLED_CLASS = exports.SVG_THIN_STYLE = exports.ICON_CLASS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shapeConstants = require("swarm-icons/dist/js/shapeConstants");

var ICON_CLASS = 'svg';
exports.ICON_CLASS = ICON_CLASS;
var SVG_THIN_STYLE = '--small';
exports.SVG_THIN_STYLE = SVG_THIN_STYLE;
var ICON_CIRCLED_CLASS = 'svg--circled';
exports.ICON_CIRCLED_CLASS = ICON_CIRCLED_CLASS;
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

var SMALL_ICON_VARIANT_WHITELIST = _shapeConstants.VALID_SHAPES.filter(function (s) {
  return !s.startsWith('external') && !s.startsWith('meetup');
} // no third party icons // logos use same path for `xs`
);
/**
 * @param {String} shape - icon shape
 * @param {String} size - icon size
 * @returns {String} icon name (with or without suffix)
 */


var getIconShape = function getIconShape(shape, size) {
  if (!SMALL_ICON_VARIANT_WHITELIST.includes(shape)) {
    return shape;
  }

  var suffix = size === 'xxs' || size === 'xs' || size === 's' ? SVG_THIN_STYLE : '';
  return "".concat(shape).concat(suffix);
};

exports.getIconShape = getIconShape;

/**
 * Icon component used to insert an svg icon into a component or page
 *
 * **Accessibility** If an Icon is used on its own without supporting
 * text to explain what it is/does, be a good citizen and pass in an
 * `aria-label` attribute describing what the icon represents
 *
 * @module Icon
 */
var Icon = function Icon(props) {
  var className = props.className,
      shape = props.shape,
      size = props.size,
      color = props.color,
      style = props.style,
      circle = props.circle,
      other = (0, _objectWithoutProperties2["default"])(props, ["className", "shape", "size", "color", "style", "circle"]);
  var classNames = (0, _classnames["default"])(ICON_CLASS, "svg--".concat(shape), (0, _defineProperty2["default"])({}, ICON_CIRCLED_CLASS, circle), className, 'svg-icon', 'valign--middle');
  var sizeVal = MEDIA_SIZES[size];
  var allStyles = style || {};

  if (color) {
    allStyles.fill = color;
  }

  return _react["default"].createElement("svg", (0, _extends2["default"])({
    preserveAspectRatio: "xMinYMin meet",
    width: sizeVal,
    height: sizeVal,
    viewBox: "0 0 ".concat(sizeVal, " ").concat(sizeVal),
    className: classNames,
    role: "img",
    style: allStyles
  }, other), _react["default"].createElement("use", {
    xlinkHref: "#icon-".concat(getIconShape(shape, size))
  }));
};

Icon.defaultProps = {
  size: 's'
};
var _default = Icon;
exports["default"] = _default;
Icon.__docgenInfo = {
  "description": "Icon component used to insert an svg icon into a component or page\n\n**Accessibility** If an Icon is used on its own without supporting\ntext to explain what it is/does, be a good citizen and pass in an\n`aria-label` attribute describing what the icon represents\n\n@module Icon",
  "methods": [],
  "displayName": "Icon",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Which of our media sizes to render the icon at"
    },
    "shape": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "The name of the icon shape to render"
    },
    "circle": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the icon is outlined with a circle"
    },
    "color": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "What color the icon should be filled with"
    },
    "className": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Class applied to svg tag"
    },
    "style": {
      "required": false,
      "flowType": {
        "name": "signature",
        "type": "object",
        "raw": "{}",
        "signature": {
          "properties": []
        }
      },
      "description": "Object of css styles"
    }
  }
};