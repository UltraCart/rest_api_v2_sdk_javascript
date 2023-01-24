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
    define(['ApiClient', 'com.ultracart.admin.v2.models/BrowserDevice', 'com.ultracart.admin.v2.models/BrowserOS', 'com.ultracart.admin.v2.models/BrowserUserAgent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrowserDevice'), require('./BrowserOS'), require('./BrowserUserAgent'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Browser = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.BrowserDevice, root.UltraCartRestApiV2.BrowserOS, root.UltraCartRestApiV2.BrowserUserAgent);
  }
}(this, function(ApiClient, BrowserDevice, BrowserOS, BrowserUserAgent) {
  'use strict';

  /**
   * The Browser model module.
   * @module com.ultracart.admin.v2.models/Browser
   * @version 3.10.105
   */

  /**
   * Constructs a new <code>Browser</code>.
   * @alias module:com.ultracart.admin.v2.models/Browser
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Browser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Browser} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Browser} The populated <code>Browser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('device'))
        obj.device = BrowserDevice.constructFromObject(data['device']);
      if (data.hasOwnProperty('os'))
        obj.os = BrowserOS.constructFromObject(data['os']);
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = BrowserUserAgent.constructFromObject(data['user_agent']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/BrowserDevice} device
   */
  exports.prototype.device = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/BrowserOS} os
   */
  exports.prototype.os = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/BrowserUserAgent} user_agent
   */
  exports.prototype.user_agent = undefined;

  return exports;

}));
