/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerSoftwareEntitlement = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerSoftwareEntitlement model module.
   * @module com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
   * @version 3.10.24
   */

  /**
   * Constructs a new <code>CustomerSoftwareEntitlement</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerSoftwareEntitlement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} The populated <code>CustomerSoftwareEntitlement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activation_code'))
        obj.activation_code = ApiClient.convertToType(data['activation_code'], 'String');
      if (data.hasOwnProperty('activation_dts'))
        obj.activation_dts = ApiClient.convertToType(data['activation_dts'], 'String');
      if (data.hasOwnProperty('customer_software_entitlement_oid'))
        obj.customer_software_entitlement_oid = ApiClient.convertToType(data['customer_software_entitlement_oid'], 'Number');
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('purchased_via_item_description'))
        obj.purchased_via_item_description = ApiClient.convertToType(data['purchased_via_item_description'], 'String');
      if (data.hasOwnProperty('purchased_via_item_id'))
        obj.purchased_via_item_id = ApiClient.convertToType(data['purchased_via_item_id'], 'String');
      if (data.hasOwnProperty('purchased_via_order_id'))
        obj.purchased_via_order_id = ApiClient.convertToType(data['purchased_via_order_id'], 'String');
      if (data.hasOwnProperty('software_sku'))
        obj.software_sku = ApiClient.convertToType(data['software_sku'], 'String');
    }
    return obj;
  }

  /**
   * Activation Code Associated with the software
   * @member {String} activation_code
   */
  exports.prototype.activation_code = undefined;

  /**
   * Date/time when the activation code was created
   * @member {String} activation_dts
   */
  exports.prototype.activation_dts = undefined;

  /**
   * Customer profile software entitlement object identifier
   * @member {Number} customer_software_entitlement_oid
   */
  exports.prototype.customer_software_entitlement_oid = undefined;

  /**
   * Date/time when the activation code will expire
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * Item description used to purchase this software.
   * @member {String} purchased_via_item_description
   */
  exports.prototype.purchased_via_item_description = undefined;

  /**
   * Item ID used to purchase this software.
   * @member {String} purchased_via_item_id
   */
  exports.prototype.purchased_via_item_id = undefined;

  /**
   * Order ID used to purchase this software.
   * @member {String} purchased_via_order_id
   */
  exports.prototype.purchased_via_order_id = undefined;

  /**
   * SKU of the software
   * @member {String} software_sku
   */
  exports.prototype.software_sku = undefined;

  return exports;

}));
