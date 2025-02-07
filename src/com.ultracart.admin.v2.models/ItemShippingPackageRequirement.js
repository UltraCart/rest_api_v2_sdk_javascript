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
    root.UltraCartRestApiV2.ItemShippingPackageRequirement = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemShippingPackageRequirement model module.
   * @module com.ultracart.admin.v2.models/ItemShippingPackageRequirement
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemShippingPackageRequirement</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemShippingPackageRequirement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShippingPackageRequirement} The populated <code>ItemShippingPackageRequirement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('package_name'))
        obj.package_name = ApiClient.convertToType(data['package_name'], 'String');
      if (data.hasOwnProperty('package_oid'))
        obj.package_oid = ApiClient.convertToType(data['package_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Package name
   * @member {String} package_name
   */
  exports.prototype.package_name = undefined;

  /**
   * Package object identifier
   * @member {Number} package_oid
   */
  exports.prototype.package_oid = undefined;

  return exports;

}));
