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
    root.UltraCartRestApiV2.RegisterAffiliateClickResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RegisterAffiliateClickResponse model module.
   * @module com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
   * @version 3.2.13
   */

  /**
   * Constructs a new <code>RegisterAffiliateClickResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RegisterAffiliateClickResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} The populated <code>RegisterAffiliateClickResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cookie_max_age'))
        obj.cookie_max_age = ApiClient.convertToType(data['cookie_max_age'], 'Number');
      if (data.hasOwnProperty('cookie_names'))
        obj.cookie_names = ApiClient.convertToType(data['cookie_names'], ['String']);
      if (data.hasOwnProperty('cookie_values'))
        obj.cookie_values = ApiClient.convertToType(data['cookie_values'], ['String']);
      if (data.hasOwnProperty('registered'))
        obj.registered = ApiClient.convertToType(data['registered'], 'Boolean');
    }
    return obj;
  }

  /**
   * The cookie max age to use
   * @member {Number} cookie_max_age
   */
  exports.prototype.cookie_max_age = undefined;

  /**
   * The names of all the cookies to set on the browser
   * @member {Array.<String>} cookie_names
   */
  exports.prototype.cookie_names = undefined;

  /**
   * The values of all the cookies to set on the browser
   * @member {Array.<String>} cookie_values
   */
  exports.prototype.cookie_values = undefined;

  /**
   * True if a click was registered
   * @member {Boolean} registered
   */
  exports.prototype.registered = undefined;

  return exports;

}));
