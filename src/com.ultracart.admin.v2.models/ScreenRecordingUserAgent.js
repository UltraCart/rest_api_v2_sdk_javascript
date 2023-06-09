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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice', 'com.ultracart.admin.v2.models/ScreenRecordingUserAgentOS'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingUserAgentDevice'), require('./ScreenRecordingUserAgentOS'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingUserAgent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingUserAgentDevice, root.UltraCartRestApiV2.ScreenRecordingUserAgentOS);
  }
}(this, function(ApiClient, ScreenRecordingUserAgentDevice, ScreenRecordingUserAgentOS) {
  'use strict';

  /**
   * The ScreenRecordingUserAgent model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingUserAgent
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>ScreenRecordingUserAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} The populated <code>ScreenRecordingUserAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('device'))
        obj.device = ScreenRecordingUserAgentDevice.constructFromObject(data['device']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('original'))
        obj.original = ApiClient.convertToType(data['original'], 'String');
      if (data.hasOwnProperty('os'))
        obj.os = ScreenRecordingUserAgentOS.constructFromObject(data['os']);
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} device
   */
  exports.prototype.device = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} original
   */
  exports.prototype.original = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentOS} os
   */
  exports.prototype.os = undefined;

  /**
   * @member {String} version
   */
  exports.prototype.version = undefined;

  return exports;

}));
