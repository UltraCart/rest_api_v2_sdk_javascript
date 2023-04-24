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
    root.UltraCartRestApiV2.ScreenRecordingStoreFront = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingStoreFront model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingStoreFront
   * @version 3.10.134
   */

  /**
   * Constructs a new <code>ScreenRecordingStoreFront</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingStoreFront</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} The populated <code>ScreenRecordingStoreFront</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storefront_host_name'))
        obj.storefront_host_name = ApiClient.convertToType(data['storefront_host_name'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} storefront_host_name
   */
  exports.prototype.storefront_host_name = undefined;

  /**
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
