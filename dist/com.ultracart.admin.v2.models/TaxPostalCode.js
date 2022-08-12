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
 * The TaxPostalCode model module.
 * @module com.ultracart.admin.v2.models/TaxPostalCode
 * @version 4.0.54-RC
 */
var TaxPostalCode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxPostalCode</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxPostalCode
   */
  function TaxPostalCode() {
    _classCallCheck(this, TaxPostalCode);

    TaxPostalCode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxPostalCode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxPostalCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxPostalCode} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxPostalCode} The populated <code>TaxPostalCode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxPostalCode();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('city_oid')) {
          obj['city_oid'] = _ApiClient["default"].convertToType(data['city_oid'], 'Number');
        }

        if (data.hasOwnProperty('dont_collect_postal_code')) {
          obj['dont_collect_postal_code'] = _ApiClient["default"].convertToType(data['dont_collect_postal_code'], 'Boolean');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('postal_code_oid')) {
          obj['postal_code_oid'] = _ApiClient["default"].convertToType(data['postal_code_oid'], 'Number');
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

  return TaxPostalCode;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxPostalCode.prototype['accounting_code'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} city_oid
 */

TaxPostalCode.prototype['city_oid'] = undefined;
/**
 * Flag instructing engine to not collect postal code tax for this postal code
 * @member {Boolean} dont_collect_postal_code
 */

TaxPostalCode.prototype['dont_collect_postal_code'] = undefined;
/**
 * Postal Code (5 digits)
 * @member {String} postal_code
 */

TaxPostalCode.prototype['postal_code'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} postal_code_oid
 */

TaxPostalCode.prototype['postal_code_oid'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxPostalCode.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxPostalCode.prototype['tax_rate_formatted'] = undefined;
var _default = TaxPostalCode;
exports["default"] = _default;