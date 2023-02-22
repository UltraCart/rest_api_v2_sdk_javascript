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
 * The OrderTaxes model module.
 * @module com.ultracart.admin.v2.models/OrderTaxes
 * @version 4.0.136
 */
var OrderTaxes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderTaxes</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTaxes
   */
  function OrderTaxes() {
    _classCallCheck(this, OrderTaxes);

    OrderTaxes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderTaxes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderTaxes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTaxes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTaxes} The populated <code>OrderTaxes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderTaxes();

        if (data.hasOwnProperty('arbitrary_tax')) {
          obj['arbitrary_tax'] = _ApiClient["default"].convertToType(data['arbitrary_tax'], 'Number');
        }

        if (data.hasOwnProperty('arbitrary_tax_rate')) {
          obj['arbitrary_tax_rate'] = _ApiClient["default"].convertToType(data['arbitrary_tax_rate'], 'Number');
        }

        if (data.hasOwnProperty('arbitrary_taxable_subtotal')) {
          obj['arbitrary_taxable_subtotal'] = _ApiClient["default"].convertToType(data['arbitrary_taxable_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('tax_city_accounting_code')) {
          obj['tax_city_accounting_code'] = _ApiClient["default"].convertToType(data['tax_city_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('tax_country_accounting_code')) {
          obj['tax_country_accounting_code'] = _ApiClient["default"].convertToType(data['tax_country_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('tax_county')) {
          obj['tax_county'] = _ApiClient["default"].convertToType(data['tax_county'], 'String');
        }

        if (data.hasOwnProperty('tax_county_accounting_code')) {
          obj['tax_county_accounting_code'] = _ApiClient["default"].convertToType(data['tax_county_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('tax_gift_charge')) {
          obj['tax_gift_charge'] = _ApiClient["default"].convertToType(data['tax_gift_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_postal_code_accounting_code')) {
          obj['tax_postal_code_accounting_code'] = _ApiClient["default"].convertToType(data['tax_postal_code_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('tax_rate')) {
          obj['tax_rate'] = _ApiClient["default"].convertToType(data['tax_rate'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_city')) {
          obj['tax_rate_city'] = _ApiClient["default"].convertToType(data['tax_rate_city'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_country')) {
          obj['tax_rate_country'] = _ApiClient["default"].convertToType(data['tax_rate_country'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_county')) {
          obj['tax_rate_county'] = _ApiClient["default"].convertToType(data['tax_rate_county'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_postal_code')) {
          obj['tax_rate_postal_code'] = _ApiClient["default"].convertToType(data['tax_rate_postal_code'], 'Number');
        }

        if (data.hasOwnProperty('tax_rate_state')) {
          obj['tax_rate_state'] = _ApiClient["default"].convertToType(data['tax_rate_state'], 'Number');
        }

        if (data.hasOwnProperty('tax_shipping')) {
          obj['tax_shipping'] = _ApiClient["default"].convertToType(data['tax_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_state_accounting_code')) {
          obj['tax_state_accounting_code'] = _ApiClient["default"].convertToType(data['tax_state_accounting_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderTaxes;
}();
/**
 * Arbitrary Tax, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
 * @member {Number} arbitrary_tax
 */


OrderTaxes.prototype['arbitrary_tax'] = undefined;
/**
 * Arbitrary tax rate, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
 * @member {Number} arbitrary_tax_rate
 */

OrderTaxes.prototype['arbitrary_tax_rate'] = undefined;
/**
 * Arbitrary taxable subtotal, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
 * @member {Number} arbitrary_taxable_subtotal
 */

OrderTaxes.prototype['arbitrary_taxable_subtotal'] = undefined;
/**
 * QuickBooks tax city code
 * @member {String} tax_city_accounting_code
 */

OrderTaxes.prototype['tax_city_accounting_code'] = undefined;
/**
 * QuickBooks tax country code
 * @member {String} tax_country_accounting_code
 */

OrderTaxes.prototype['tax_country_accounting_code'] = undefined;
/**
 * County used for tax calculation purposes (only in the United States)
 * @member {String} tax_county
 */

OrderTaxes.prototype['tax_county'] = undefined;
/**
 * QuickBooks tax county code
 * @member {String} tax_county_accounting_code
 */

OrderTaxes.prototype['tax_county_accounting_code'] = undefined;
/**
 * True if gift charge is taxed
 * @member {Boolean} tax_gift_charge
 */

OrderTaxes.prototype['tax_gift_charge'] = undefined;
/**
 * QuickBooks tax postal code code
 * @member {String} tax_postal_code_accounting_code
 */

OrderTaxes.prototype['tax_postal_code_accounting_code'] = undefined;
/**
 * Tax rate, this is meaningless for updating an order.  For inserting a new order, if you need to override internal tax calculations, use the arbitrary fields.
 * @member {Number} tax_rate
 */

OrderTaxes.prototype['tax_rate'] = undefined;
/**
 * Tax rate at the city level
 * @member {Number} tax_rate_city
 */

OrderTaxes.prototype['tax_rate_city'] = undefined;
/**
 * Tax rate at the country level
 * @member {Number} tax_rate_country
 */

OrderTaxes.prototype['tax_rate_country'] = undefined;
/**
 * Tax rate at the county level
 * @member {Number} tax_rate_county
 */

OrderTaxes.prototype['tax_rate_county'] = undefined;
/**
 * Tax rate at the postal code level
 * @member {Number} tax_rate_postal_code
 */

OrderTaxes.prototype['tax_rate_postal_code'] = undefined;
/**
 * Tax rate at the state level
 * @member {Number} tax_rate_state
 */

OrderTaxes.prototype['tax_rate_state'] = undefined;
/**
 * True if shipping is taxed
 * @member {Boolean} tax_shipping
 */

OrderTaxes.prototype['tax_shipping'] = undefined;
/**
 * QuickBooks tax state code
 * @member {String} tax_state_accounting_code
 */

OrderTaxes.prototype['tax_state_accounting_code'] = undefined;
var _default = OrderTaxes;
exports["default"] = _default;