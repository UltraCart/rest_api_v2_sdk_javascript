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
    root.UltraCartRestApiV2.OrderEdi = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderEdi model module.
   * @module com.ultracart.admin.v2.models/OrderEdi
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>OrderEdi</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderEdi
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderEdi</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderEdi} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderEdi} The populated <code>OrderEdi</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bill_to_edi_code'))
        obj.bill_to_edi_code = ApiClient.convertToType(data['bill_to_edi_code'], 'String');
      if (data.hasOwnProperty('edi_department'))
        obj.edi_department = ApiClient.convertToType(data['edi_department'], 'String');
      if (data.hasOwnProperty('edi_internal_vendor_number'))
        obj.edi_internal_vendor_number = ApiClient.convertToType(data['edi_internal_vendor_number'], 'String');
      if (data.hasOwnProperty('ship_to_edi_code'))
        obj.ship_to_edi_code = ApiClient.convertToType(data['ship_to_edi_code'], 'String');
    }
    return obj;
  }

  /**
   * Billing address identification code from the EDI order.  Typically DUNS or DUNS+4
   * @member {String} bill_to_edi_code
   */
  exports.prototype.bill_to_edi_code = undefined;

  /**
   * Department number associated with this EDI order
   * @member {String} edi_department
   */
  exports.prototype.edi_department = undefined;

  /**
   * Internal vendor number associated with this EDI order
   * @member {String} edi_internal_vendor_number
   */
  exports.prototype.edi_internal_vendor_number = undefined;

  /**
   * Shipping address identification code from the EDI order.  Typically DUNS or DUNS+4
   * @member {String} ship_to_edi_code
   */
  exports.prototype.ship_to_edi_code = undefined;

  return exports;

}));
