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
 * The CustomerSoftwareEntitlement model module.
 * @module com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
 * @version 4.0.180
 */
var CustomerSoftwareEntitlement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerSoftwareEntitlement</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
   */
  function CustomerSoftwareEntitlement() {
    _classCallCheck(this, CustomerSoftwareEntitlement);

    CustomerSoftwareEntitlement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerSoftwareEntitlement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerSoftwareEntitlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} The populated <code>CustomerSoftwareEntitlement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerSoftwareEntitlement();

        if (data.hasOwnProperty('activation_code')) {
          obj['activation_code'] = _ApiClient["default"].convertToType(data['activation_code'], 'String');
        }

        if (data.hasOwnProperty('activation_dts')) {
          obj['activation_dts'] = _ApiClient["default"].convertToType(data['activation_dts'], 'String');
        }

        if (data.hasOwnProperty('customer_software_entitlement_oid')) {
          obj['customer_software_entitlement_oid'] = _ApiClient["default"].convertToType(data['customer_software_entitlement_oid'], 'Number');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('purchased_via_item_description')) {
          obj['purchased_via_item_description'] = _ApiClient["default"].convertToType(data['purchased_via_item_description'], 'String');
        }

        if (data.hasOwnProperty('purchased_via_item_id')) {
          obj['purchased_via_item_id'] = _ApiClient["default"].convertToType(data['purchased_via_item_id'], 'String');
        }

        if (data.hasOwnProperty('purchased_via_order_id')) {
          obj['purchased_via_order_id'] = _ApiClient["default"].convertToType(data['purchased_via_order_id'], 'String');
        }

        if (data.hasOwnProperty('software_sku')) {
          obj['software_sku'] = _ApiClient["default"].convertToType(data['software_sku'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerSoftwareEntitlement;
}();
/**
 * Activation Code Associated with the software
 * @member {String} activation_code
 */


CustomerSoftwareEntitlement.prototype['activation_code'] = undefined;
/**
 * Date/time when the activation code was created
 * @member {String} activation_dts
 */

CustomerSoftwareEntitlement.prototype['activation_dts'] = undefined;
/**
 * Customer profile software entitlement object identifier
 * @member {Number} customer_software_entitlement_oid
 */

CustomerSoftwareEntitlement.prototype['customer_software_entitlement_oid'] = undefined;
/**
 * Date/time when the activation code will expire
 * @member {String} expiration_dts
 */

CustomerSoftwareEntitlement.prototype['expiration_dts'] = undefined;
/**
 * Item description used to purchase this software.
 * @member {String} purchased_via_item_description
 */

CustomerSoftwareEntitlement.prototype['purchased_via_item_description'] = undefined;
/**
 * Item ID used to purchase this software.
 * @member {String} purchased_via_item_id
 */

CustomerSoftwareEntitlement.prototype['purchased_via_item_id'] = undefined;
/**
 * Order ID used to purchase this software.
 * @member {String} purchased_via_order_id
 */

CustomerSoftwareEntitlement.prototype['purchased_via_order_id'] = undefined;
/**
 * SKU of the software
 * @member {String} software_sku
 */

CustomerSoftwareEntitlement.prototype['software_sku'] = undefined;
var _default = CustomerSoftwareEntitlement;
exports["default"] = _default;