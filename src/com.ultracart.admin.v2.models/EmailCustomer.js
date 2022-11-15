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
    root.UltraCartRestApiV2.EmailCustomer = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCustomer model module.
   * @module com.ultracart.admin.v2.models/EmailCustomer
   * @version 3.10.65
   */

  /**
   * Constructs a new <code>EmailCustomer</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCustomer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCustomer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCustomer} The populated <code>EmailCustomer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('email_customer_uuid'))
        obj.email_customer_uuid = ApiClient.convertToType(data['email_customer_uuid'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.first_name = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('global_unsubscribe'))
        obj.global_unsubscribe = ApiClient.convertToType(data['global_unsubscribe'], 'Boolean');
      if (data.hasOwnProperty('last_interaction_dts'))
        obj.last_interaction_dts = ApiClient.convertToType(data['last_interaction_dts'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.last_name = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('list_uuids'))
        obj.list_uuids = ApiClient.convertToType(data['list_uuids'], ['String']);
    }
    return obj;
  }

  /**
   * True if the customer is flagged as active within StoreFront Communications
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

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
   * First name
   * @member {String} first_name
   */
  exports.prototype.first_name = undefined;

  /**
   * True if the customer has globally unsubscribed from all communication.
   * @member {Boolean} global_unsubscribe
   */
  exports.prototype.global_unsubscribe = undefined;

  /**
   * Last interaction
   * @member {String} last_interaction_dts
   */
  exports.prototype.last_interaction_dts = undefined;

  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype.last_name = undefined;

  /**
   * UUIDs of the lists they are subscribed to
   * @member {Array.<String>} list_uuids
   */
  exports.prototype.list_uuids = undefined;

  return exports;

}));
