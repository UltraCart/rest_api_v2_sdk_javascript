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
    root.UltraCartRestApiV2.CouponRestriction = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponRestriction model module.
   * @module com.ultracart.admin.v2.models/CouponRestriction
   * @version 3.1.25
   */

  /**
   * Constructs a new <code>CouponRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponRestriction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponRestriction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponRestriction} The populated <code>CouponRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('invalidForThis'))
        obj.invalidForThis = ApiClient.convertToType(data['invalidForThis'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('validForThis'))
        obj.validForThis = ApiClient.convertToType(data['validForThis'], 'Boolean');
      if (data.hasOwnProperty('validOnlyForThis'))
        obj.validOnlyForThis = ApiClient.convertToType(data['validOnlyForThis'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} invalidForThis
   */
  exports.prototype.invalidForThis = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} validForThis
   */
  exports.prototype.validForThis = undefined;

  /**
   * @member {Boolean} validOnlyForThis
   */
  exports.prototype.validOnlyForThis = undefined;

  return exports;

}));
