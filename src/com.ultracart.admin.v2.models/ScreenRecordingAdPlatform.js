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
    root.UltraCartRestApiV2.ScreenRecordingAdPlatform = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingAdPlatform model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingAdPlatform
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ScreenRecordingAdPlatform</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingAdPlatform</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} The populated <code>ScreenRecordingAdPlatform</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fbc'))
        obj.fbc = ApiClient.convertToType(data['fbc'], 'String');
      if (data.hasOwnProperty('fbclid'))
        obj.fbclid = ApiClient.convertToType(data['fbclid'], 'String');
      if (data.hasOwnProperty('fbp'))
        obj.fbp = ApiClient.convertToType(data['fbp'], 'String');
      if (data.hasOwnProperty('gacid'))
        obj.gacid = ApiClient.convertToType(data['gacid'], 'String');
      if (data.hasOwnProperty('glcid'))
        obj.glcid = ApiClient.convertToType(data['glcid'], 'String');
      if (data.hasOwnProperty('msclkid'))
        obj.msclkid = ApiClient.convertToType(data['msclkid'], 'String');
      if (data.hasOwnProperty('ttclid'))
        obj.ttclid = ApiClient.convertToType(data['ttclid'], 'String');
    }
    return obj;
  }

  /**
   * Facebook Click Id (Cookie)
   * @member {String} fbc
   */
  exports.prototype.fbc = undefined;

  /**
   * Facebook Click Id Parameter (Parameter)
   * @member {String} fbclid
   */
  exports.prototype.fbclid = undefined;

  /**
   * Facebook Browser Id (Cookie)
   * @member {String} fbp
   */
  exports.prototype.fbp = undefined;

  /**
   * Google Analytics CID (Cookie)
   * @member {String} gacid
   */
  exports.prototype.gacid = undefined;

  /**
   * Google Adwords Click Id (Parameter)
   * @member {String} glcid
   */
  exports.prototype.glcid = undefined;

  /**
   * Bing Click Id (Parameter
   * @member {String} msclkid
   */
  exports.prototype.msclkid = undefined;

  /**
   * TikTok Click Id (Parameter
   * @member {String} ttclid
   */
  exports.prototype.ttclid = undefined;

  return exports;

}));
