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
    root.UltraCartRestApiV2.CityStateZip = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CityStateZip model module.
   * @module com.ultracart.admin.v2.models/CityStateZip
   * @version 3.0.64
   */

  /**
   * Constructs a new <code>CityStateZip</code>.
   * @alias module:com.ultracart.admin.v2.models/CityStateZip
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CityStateZip</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CityStateZip} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CityStateZip} The populated <code>CityStateZip</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('validZip'))
        obj.validZip = ApiClient.convertToType(data['validZip'], 'Boolean');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * @member {Boolean} validZip
   */
  exports.prototype.validZip = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype.zip = undefined;

  return exports;

}));
