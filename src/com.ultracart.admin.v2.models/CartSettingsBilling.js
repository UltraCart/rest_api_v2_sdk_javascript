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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartSettingsProvince'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartSettingsProvince'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsBilling = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartSettingsProvince);
  }
}(this, function(ApiClient, CartSettingsProvince) {
  'use strict';




  /**
   * The CartSettingsBilling model module.
   * @module com.ultracart.admin.v2.models/CartSettingsBilling
   * @version 2.4.12
   */

  /**
   * Constructs a new <code>CartSettingsBilling</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsBilling
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CartSettingsBilling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsBilling} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsBilling} The populated <code>CartSettingsBilling</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('provinces')) {
        obj['provinces'] = ApiClient.convertToType(data['provinces'], [CartSettingsProvince]);
      }
    }
    return obj;
  }

  /**
   * Provinces
   * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsProvince>} provinces
   */
  exports.prototype['provinces'] = undefined;



  return exports;
}));


