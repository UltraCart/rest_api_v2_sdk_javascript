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
    root.UltraCartRestApiV2.CustomerPrivacy = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerPrivacy model module.
   * @module com.ultracart.admin.v2.models/CustomerPrivacy
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>CustomerPrivacy</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerPrivacy
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerPrivacy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerPrivacy} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerPrivacy} The populated <code>CustomerPrivacy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_update_dts'))
        obj.last_update_dts = ApiClient.convertToType(data['last_update_dts'], 'String');
      if (data.hasOwnProperty('marketing'))
        obj.marketing = ApiClient.convertToType(data['marketing'], 'Boolean');
      if (data.hasOwnProperty('preference'))
        obj.preference = ApiClient.convertToType(data['preference'], 'Boolean');
      if (data.hasOwnProperty('statistics'))
        obj.statistics = ApiClient.convertToType(data['statistics'], 'Boolean');
    }
    return obj;
  }

  /**
   * Last update date
   * @member {String} last_update_dts
   */
  exports.prototype.last_update_dts = undefined;

  /**
   * The customer has opted in to marketing
   * @member {Boolean} marketing
   */
  exports.prototype.marketing = undefined;

  /**
   * The customer has opted in to preference tracking
   * @member {Boolean} preference
   */
  exports.prototype.preference = undefined;

  /**
   * The customer has opted in to statistics collection
   * @member {Boolean} statistics
   */
  exports.prototype.statistics = undefined;

  return exports;

}));
