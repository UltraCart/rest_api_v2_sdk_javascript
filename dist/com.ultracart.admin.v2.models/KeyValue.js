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
 * The KeyValue model module.
 * @module com.ultracart.admin.v2.models/KeyValue
 * @version 4.0.168
 */
var KeyValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KeyValue</code>.
   * @alias module:com.ultracart.admin.v2.models/KeyValue
   */
  function KeyValue() {
    _classCallCheck(this, KeyValue);

    KeyValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(KeyValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>KeyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/KeyValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/KeyValue} The populated <code>KeyValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KeyValue();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return KeyValue;
}();
/**
 * Optional description of the lookup value
 * @member {String} description
 */


KeyValue.prototype['description'] = undefined;
/**
 * The key or id of this lookup value
 * @member {String} key
 */

KeyValue.prototype['key'] = undefined;
/**
 * The value of this lookup value
 * @member {String} value
 */

KeyValue.prototype['value'] = undefined;
var _default = KeyValue;
exports["default"] = _default;