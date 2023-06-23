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
 * The Currency model module.
 * @module com.ultracart.admin.v2.models/Currency
 * @version 4.0.163
 */
var Currency = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:com.ultracart.admin.v2.models/Currency
   */
  function Currency() {
    _classCallCheck(this, Currency);

    Currency.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Currency, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Currency} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Currency} The populated <code>Currency</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Currency();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('exchange_rate')) {
          obj['exchange_rate'] = _ApiClient["default"].convertToType(data['exchange_rate'], 'Number');
        }

        if (data.hasOwnProperty('localized')) {
          obj['localized'] = _ApiClient["default"].convertToType(data['localized'], 'Number');
        }

        if (data.hasOwnProperty('localized_formatted')) {
          obj['localized_formatted'] = _ApiClient["default"].convertToType(data['localized_formatted'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Currency;
}();
/**
 * Currency code of the localized value
 * @member {String} currency_code
 */


Currency.prototype['currency_code'] = undefined;
/**
 * Exchange rate used to localize
 * @member {Number} exchange_rate
 */

Currency.prototype['exchange_rate'] = undefined;
/**
 * Value localized to the customer
 * @member {Number} localized
 */

Currency.prototype['localized'] = undefined;
/**
 * Value localized and formatted for the customer
 * @member {String} localized_formatted
 */

Currency.prototype['localized_formatted'] = undefined;
/**
 * Value in base currency
 * @member {Number} value
 */

Currency.prototype['value'] = undefined;
var _default = Currency;
exports["default"] = _default;