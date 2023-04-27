"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SimpleValue model module.
 * @module com.ultracart.admin.v2.models/SimpleValue
 * @version 4.0.151
 */
var SimpleValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleValue</code>.
   * @alias module:com.ultracart.admin.v2.models/SimpleValue
   */
  function SimpleValue() {
    _classCallCheck(this, SimpleValue);

    SimpleValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimpleValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SimpleValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SimpleValue} The populated <code>SimpleValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleValue();

        if (data.hasOwnProperty('display')) {
          obj['display'] = _ApiClient["default"].convertToType(data['display'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SimpleValue;
}();
/**
 * A friendly display of this value suitable for human reading
 * @member {String} display
 */


SimpleValue.prototype['display'] = undefined;
/**
 * The actual value
 * @member {String} value
 */

SimpleValue.prototype['value'] = undefined;
var _default = SimpleValue;
exports["default"] = _default;