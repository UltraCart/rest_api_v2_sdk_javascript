"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaxPostalCode = _interopRequireDefault(require("./TaxPostalCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaxCity model module.
 * @module com.ultracart.admin.v2.models/TaxCity
 * @version 4.0.84-RC
 */
var TaxCity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxCity</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCity
   */
  function TaxCity() {
    _classCallCheck(this, TaxCity);

    TaxCity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaxCity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaxCity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxCity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxCity} The populated <code>TaxCity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxCity();

        if (data.hasOwnProperty('accounting_code')) {
          obj['accounting_code'] = _ApiClient["default"].convertToType(data['accounting_code'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('city_oid')) {
          obj['city_oid'] = _ApiClient["default"].convertToType(data['city_oid'], 'Number');
        }

        if (data.hasOwnProperty('county_oid')) {
          obj['county_oid'] = _ApiClient["default"].convertToType(data['county_oid'], 'Number');
        }

        if (data.hasOwnProperty('dont_collect_city')) {
          obj['dont_collect_city'] = _ApiClient["default"].convertToType(data['dont_collect_city'], 'Boolean');
        }

        if (data.hasOwnProperty('dont_collect_postal_code')) {
          obj['dont_collect_postal_code'] = _ApiClient["default"].convertToType(data['dont_collect_postal_code'], 'Boolean');
        }

        if (data.hasOwnProperty('postal_codes')) {
          obj['postal_codes'] = _ApiClient["default"].convertToType(data['postal_codes'], [_TaxPostalCode["default"]]);
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

  return TaxCity;
}();
/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */


TaxCity.prototype['accounting_code'] = undefined;
/**
 * City
 * @member {String} city
 */

TaxCity.prototype['city'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} city_oid
 */

TaxCity.prototype['city_oid'] = undefined;
/**
 * Tax record object identifier used internally by database
 * @member {Number} county_oid
 */

TaxCity.prototype['county_oid'] = undefined;
/**
 * Flag instructing engine to not collect city tax for this city
 * @member {Boolean} dont_collect_city
 */

TaxCity.prototype['dont_collect_city'] = undefined;
/**
 * Flag instructing engine to not collect postal code tax for this city
 * @member {Boolean} dont_collect_postal_code
 */

TaxCity.prototype['dont_collect_postal_code'] = undefined;
/**
 * Postal Codes within this city
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxPostalCode>} postal_codes
 */

TaxCity.prototype['postal_codes'] = undefined;
/**
 * Tax Rate
 * @member {Number} tax_rate
 */

TaxCity.prototype['tax_rate'] = undefined;
/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */

TaxCity.prototype['tax_rate_formatted'] = undefined;
var _default = TaxCity;
exports["default"] = _default;