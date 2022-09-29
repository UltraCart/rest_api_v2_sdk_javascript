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
 * The TaxCountryCode model module.
 * @module com.ultracart.admin.v2.models/TaxCountryCode
 * @version 4.0.69-RC
 */
var TaxCountryCode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxCountryCode</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCountryCode
   */
  function TaxCountryCode() {
    _classCallCheck(this, TaxCountryCode);

    TaxCountryCode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxCountryCode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxCountryCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCountryCode} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCountryCode} The populated <code>TaxCountryCode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxCountryCode();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('country_name')) {
          obj['country_name'] = _ApiClient["default"].convertToType(data['country_name'], 'String');
        }

        if (data.hasOwnProperty('tax_rate')) {
          obj['tax_rate'] = _ApiClient["default"].convertToType(data['tax_rate'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_formatted')) {
          obj['tax_rate_formatted'] = _ApiClient["default"].convertToType(data['tax_rate_formatted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaxCountryCode;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxCountryCode.prototype['accounting_code'] = undefined;
/**
 * Country code (2 characters
 * @member {String} country_code
 */

TaxCountryCode.prototype['country_code'] = undefined;
/**
 * Country name
 * @member {String} country_name
 */

TaxCountryCode.prototype['country_name'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxCountryCode.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxCountryCode.prototype['tax_rate_formatted'] = undefined;
var _default = TaxCountryCode;
exports["default"] = _default;