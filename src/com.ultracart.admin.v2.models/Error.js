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
    root.UltraCartRestApiV2.Error = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Error model module.
   * @module com.ultracart.admin.v2.models/Error
   * @version 3.10.138
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:com.ultracart.admin.v2.models/Error
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Error} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('developer_message'))
        obj.developer_message = ApiClient.convertToType(data['developer_message'], 'String');
      if (data.hasOwnProperty('error_code'))
        obj.error_code = ApiClient.convertToType(data['error_code'], 'String');
      if (data.hasOwnProperty('more_info'))
        obj.more_info = ApiClient.convertToType(data['more_info'], 'String');
      if (data.hasOwnProperty('object_id'))
        obj.object_id = ApiClient.convertToType(data['object_id'], 'String');
      if (data.hasOwnProperty('user_message'))
        obj.user_message = ApiClient.convertToType(data['user_message'], 'String');
    }
    return obj;
  }

  /**
   * A technical message meant to be read by a developer
   * @member {String} developer_message
   */
  exports.prototype.developer_message = undefined;

  /**
   * HTTP status code
   * @member {String} error_code
   */
  exports.prototype.error_code = undefined;

  /**
   * Additional information often a link to additional documentation
   * @member {String} more_info
   */
  exports.prototype.more_info = undefined;

  /**
   * Object id that the error is associated with
   * @member {String} object_id
   */
  exports.prototype.object_id = undefined;

  /**
   * An end-user friendly message suitable for display to the customer
   * @member {String} user_message
   */
  exports.prototype.user_message = undefined;

  return exports;

}));
