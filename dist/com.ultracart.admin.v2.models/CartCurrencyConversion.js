"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartCurrencyConversion model module.
 * @module com.ultracart.admin.v2.models/CartCurrencyConversion
 * @version 4.0.56-RC
 */
var CartCurrencyConversion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartCurrencyConversion</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCurrencyConversion
   */
  function CartCurrencyConversion() {
    _classCallCheck(this, CartCurrencyConversion);

    CartCurrencyConversion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartCurrencyConversion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartCurrencyConversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCurrencyConversion} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCurrencyConversion} The populated <code>CartCurrencyConversion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartCurrencyConversion();

        if (data.hasOwnProperty('base_currency_Code')) {
          obj['base_currency_Code'] = _ApiClient["default"].convertToType(data['base_currency_Code'], 'String');
        }

        if (data.hasOwnProperty('currencies')) {
          obj['currencies'] = _ApiClient["default"].convertToType(data['currencies'], [_Currency["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CartCurrencyConversion;
}();
/**
 * Base currency code for this merchant
 * @member {String} base_currency_Code
 */


CartCurrencyConversion.prototype['base_currency_Code'] = undefined;
/**
 * Conversion information for 1 unit of base currency to target currencies
 * @member {Array.<module:com.ultracart.admin.v2.models/Currency>} currencies
 */

CartCurrencyConversion.prototype['currencies'] = undefined;
var _default = CartCurrencyConversion;
exports["default"] = _default;