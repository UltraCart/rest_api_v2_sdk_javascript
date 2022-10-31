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
 * The CustomerTaxCodes model module.
 * @module com.ultracart.admin.v2.models/CustomerTaxCodes
 * @version 4.0.76-RC
 */
var CustomerTaxCodes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerTaxCodes</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerTaxCodes
   */
  function CustomerTaxCodes() {
    _classCallCheck(this, CustomerTaxCodes);

    CustomerTaxCodes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerTaxCodes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerTaxCodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerTaxCodes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerTaxCodes} The populated <code>CustomerTaxCodes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerTaxCodes();

        if (data.hasOwnProperty('avalara_customer_code')) {
          obj['avalara_customer_code'] = _ApiClient["default"].convertToType(data['avalara_customer_code'], 'String');
        }

        if (data.hasOwnProperty('avalara_entity_use_code')) {
          obj['avalara_entity_use_code'] = _ApiClient["default"].convertToType(data['avalara_entity_use_code'], 'String');
        }

        if (data.hasOwnProperty('sovos_customer_code')) {
          obj['sovos_customer_code'] = _ApiClient["default"].convertToType(data['sovos_customer_code'], 'String');
        }

        if (data.hasOwnProperty('taxjar_customer_id')) {
          obj['taxjar_customer_id'] = _ApiClient["default"].convertToType(data['taxjar_customer_id'], 'String');
        }

        if (data.hasOwnProperty('taxjar_exemption_type')) {
          obj['taxjar_exemption_type'] = _ApiClient["default"].convertToType(data['taxjar_exemption_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerTaxCodes;
}();
/**
 * Avalara customer code
 * @member {String} avalara_customer_code
 */


CustomerTaxCodes.prototype['avalara_customer_code'] = undefined;
/**
 * Avalara entity use code
 * @member {String} avalara_entity_use_code
 */

CustomerTaxCodes.prototype['avalara_entity_use_code'] = undefined;
/**
 * Sovos customer code
 * @member {String} sovos_customer_code
 */

CustomerTaxCodes.prototype['sovos_customer_code'] = undefined;
/**
 * TaxJar customer id
 * @member {String} taxjar_customer_id
 */

CustomerTaxCodes.prototype['taxjar_customer_id'] = undefined;
/**
 * TaxJar exemption type
 * @member {String} taxjar_exemption_type
 */

CustomerTaxCodes.prototype['taxjar_exemption_type'] = undefined;
var _default = CustomerTaxCodes;
exports["default"] = _default;