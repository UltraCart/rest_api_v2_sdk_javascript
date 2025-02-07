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
    root.UltraCartRestApiV2.EmailListCustomer = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailListCustomer model module.
   * @module com.ultracart.admin.v2.models/EmailListCustomer
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>EmailListCustomer</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListCustomer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailListCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailListCustomer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailListCustomer} The populated <code>EmailListCustomer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_dts'))
        obj.add_dts = ApiClient.convertToType(data['add_dts'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('email_customer_uuid'))
        obj.email_customer_uuid = ApiClient.convertToType(data['email_customer_uuid'], 'String');
      if (data.hasOwnProperty('email_list_member_uuid'))
        obj.email_list_member_uuid = ApiClient.convertToType(data['email_list_member_uuid'], 'String');
    }
    return obj;
  }

  /**
   * Added timestamp
   * @member {String} add_dts
   */
  exports.prototype.add_dts = undefined;

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Email customer UUID
   * @member {String} email_customer_uuid
   */
  exports.prototype.email_customer_uuid = undefined;

  /**
   * Email list member UUID
   * @member {String} email_list_member_uuid
   */
  exports.prototype.email_list_member_uuid = undefined;

  return exports;

}));
