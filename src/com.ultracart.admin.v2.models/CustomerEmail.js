/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.CustomerEmail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerEmail model module.
   * @module com.ultracart.admin.v2.models/CustomerEmail
   * @version 2.4.105
   */

  /**
   * Constructs a new <code>CustomerEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEmail
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CustomerEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerEmail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerEmail} The populated <code>CustomerEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer_profile_email_oid')) {
        obj['customer_profile_email_oid'] = ApiClient.convertToType(data['customer_profile_email_oid'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('receipt_notification')) {
        obj['receipt_notification'] = ApiClient.convertToType(data['receipt_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('refund_notification')) {
        obj['refund_notification'] = ApiClient.convertToType(data['refund_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('shipment_notification')) {
        obj['shipment_notification'] = ApiClient.convertToType(data['shipment_notification'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * ID of the email
   * @member {Number} customer_profile_email_oid
   */
  exports.prototype['customer_profile_email_oid'] = undefined;
  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * CC this email on receipt notifications
   * @member {Boolean} receipt_notification
   */
  exports.prototype['receipt_notification'] = undefined;
  /**
   * CC this email on refund notifications
   * @member {Boolean} refund_notification
   */
  exports.prototype['refund_notification'] = undefined;
  /**
   * CC this email on shipment notifications
   * @member {Boolean} shipment_notification
   */
  exports.prototype['shipment_notification'] = undefined;



  return exports;
}));


