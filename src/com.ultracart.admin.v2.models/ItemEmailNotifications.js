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
    root.UltraCartRestApiV2.ItemEmailNotifications = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemEmailNotifications model module.
   * @module com.ultracart.admin.v2.models/ItemEmailNotifications
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>ItemEmailNotifications</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEmailNotifications
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemEmailNotifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemEmailNotifications} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemEmailNotifications} The populated <code>ItemEmailNotifications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('skip_receipt'))
        obj.skip_receipt = ApiClient.convertToType(data['skip_receipt'], 'Boolean');
      if (data.hasOwnProperty('skip_shipment_notification'))
        obj.skip_shipment_notification = ApiClient.convertToType(data['skip_shipment_notification'], 'Boolean');
    }
    return obj;
  }

  /**
   * Skip receipt email to customer
   * @member {Boolean} skip_receipt
   */
  exports.prototype.skip_receipt = undefined;

  /**
   * Skip shipment notification to customer
   * @member {Boolean} skip_shipment_notification
   */
  exports.prototype.skip_shipment_notification = undefined;

  return exports;

}));
