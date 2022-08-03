"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxState = _interopRequireDefault(require("./TaxState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxCountry model module.
 * @module com.ultracart.admin.v2.models/TaxCountry
 * @version 4.0.49-RC
 */
var TaxCountry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxCountry</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCountry
   */
  function TaxCountry() {
    _classCallCheck(this, TaxCountry);

    TaxCountry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxCountry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCountry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCountry} The populated <code>TaxCountry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxCountry();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('country_oid')) {
          obj['country_oid'] = _ApiClient["default"].convertToType(data['country_oid'], 'Number');
        }

        if (data.hasOwnProperty('states')) {
          obj['states'] = _ApiClient["default"].convertToType(data['states'], [_TaxState["default"]]);
        }

        if (data.hasOwnProperty('tax_gift_charge')) {
          obj['tax_gift_charge'] = _ApiClient["default"].convertToType(data['tax_gift_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_gift_wrap')) {
          obj['tax_gift_wrap'] = _ApiClient["default"].convertToType(data['tax_gift_wrap'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_rate')) {
          obj['tax_rate'] = _ApiClient["default"].convertToType(data['tax_rate'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_formatted')) {
          obj['tax_rate_formatted'] = _ApiClient["default"].convertToType(data['tax_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('tax_shipping')) {
          obj['tax_shipping'] = _ApiClient["default"].convertToType(data['tax_shipping'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TaxCountry;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxCountry.prototype['accounting_code'] = undefined;
/**
 * Country code (2 characters
 * @member {String} country_code
 */

TaxCountry.prototype['country_code'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} country_oid
 */

TaxCountry.prototype['country_oid'] = undefined;
/**
 * States (or regions or territories) within this country
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxState>} states
 */

TaxCountry.prototype['states'] = undefined;
/**
 * True if taxation within this jurisdiction should charge tax on gift charge
 * @member {Boolean} tax_gift_charge
 */

TaxCountry.prototype['tax_gift_charge'] = undefined;
/**
 * True if taxation within this jurisdiction should charge tax on gift wrap
 * @member {Boolean} tax_gift_wrap
 */

TaxCountry.prototype['tax_gift_wrap'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxCountry.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxCountry.prototype['tax_rate_formatted'] = undefined;
/**
 * True if taxation within this jurisdiction should charge tax on shipping
 * @member {Boolean} tax_shipping
 */

TaxCountry.prototype['tax_shipping'] = undefined;
var _default = TaxCountry;
exports["default"] = _default;