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
    root.UltraCartRestApiV2.ApiUserApplicationProfile = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiUserApplicationProfile model module.
   * @module com.ultracart.admin.v2.models/ApiUserApplicationProfile
   * @version 2.4.27
   */

  /**
   * Constructs a new <code>ApiUserApplicationProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/ApiUserApplicationProfile
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ApiUserApplicationProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ApiUserApplicationProfile} The populated <code>ApiUserApplicationProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('api_application_logo_url')) {
        obj['api_application_logo_url'] = ApiClient.convertToType(data['api_application_logo_url'], 'String');
      }
      if (data.hasOwnProperty('application_description')) {
        obj['application_description'] = ApiClient.convertToType(data['application_description'], 'String');
      }
      if (data.hasOwnProperty('application_name')) {
        obj['application_name'] = ApiClient.convertToType(data['application_name'], 'String');
      }
      if (data.hasOwnProperty('developer_name')) {
        obj['developer_name'] = ApiClient.convertToType(data['developer_name'], 'String');
      }
      if (data.hasOwnProperty('developer_website')) {
        obj['developer_website'] = ApiClient.convertToType(data['developer_website'], 'String');
      }
    }
    return obj;
  }

  /**
   * Application logo URL
   * @member {String} api_application_logo_url
   */
  exports.prototype['api_application_logo_url'] = undefined;
  /**
   * Application description
   * @member {String} application_description
   */
  exports.prototype['application_description'] = undefined;
  /**
   * Application name
   * @member {String} application_name
   */
  exports.prototype['application_name'] = undefined;
  /**
   * Developer name
   * @member {String} developer_name
   */
  exports.prototype['developer_name'] = undefined;
  /**
   * Developer website
   * @member {String} developer_website
   */
  exports.prototype['developer_website'] = undefined;



  return exports;
}));


