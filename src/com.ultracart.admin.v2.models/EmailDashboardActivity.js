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
    root.UltraCartRestApiV2.EmailDashboardActivity = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailDashboardActivity model module.
   * @module com.ultracart.admin.v2.models/EmailDashboardActivity
   * @version 3.10.98
   */

  /**
   * Constructs a new <code>EmailDashboardActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailDashboardActivity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailDashboardActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailDashboardActivity} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailDashboardActivity} The populated <code>EmailDashboardActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('activity_dts'))
        obj.activity_dts = ApiClient.convertToType(data['activity_dts'], 'String');
      if (data.hasOwnProperty('destination_name'))
        obj.destination_name = ApiClient.convertToType(data['destination_name'], 'String');
      if (data.hasOwnProperty('destination_uuid'))
        obj.destination_uuid = ApiClient.convertToType(data['destination_uuid'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('is_list'))
        obj.is_list = ApiClient.convertToType(data['is_list'], 'Boolean');
      if (data.hasOwnProperty('is_segment'))
        obj.is_segment = ApiClient.convertToType(data['is_segment'], 'Boolean');
    }
    return obj;
  }

  /**
   * Type of action such as add, remove, subscribe, unsubscribe
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * Date/time of the activity
   * @member {String} activity_dts
   */
  exports.prototype.activity_dts = undefined;

  /**
   * List or segment name
   * @member {String} destination_name
   */
  exports.prototype.destination_name = undefined;

  /**
   * List or segment uuid
   * @member {String} destination_uuid
   */
  exports.prototype.destination_uuid = undefined;

  /**
   * Email address
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * true if activity is related to list
   * @member {Boolean} is_list
   */
  exports.prototype.is_list = undefined;

  /**
   * true if activity is related to segment
   * @member {Boolean} is_segment
   */
  exports.prototype.is_segment = undefined;

  return exports;

}));
