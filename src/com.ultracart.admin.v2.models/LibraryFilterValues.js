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
    root.UltraCartRestApiV2.LibraryFilterValues = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryFilterValues model module.
   * @module com.ultracart.admin.v2.models/LibraryFilterValues
   * @version 3.10.138
   */

  /**
   * Constructs a new <code>LibraryFilterValues</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryFilterValues
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryFilterValues} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryFilterValues} The populated <code>LibraryFilterValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], ['String']);
      if (data.hasOwnProperty('industries'))
        obj.industries = ApiClient.convertToType(data['industries'], ['String']);
      if (data.hasOwnProperty('styles'))
        obj.styles = ApiClient.convertToType(data['styles'], ['String']);
      if (data.hasOwnProperty('types'))
        obj.types = ApiClient.convertToType(data['types'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} categories
   */
  exports.prototype.categories = undefined;

  /**
   * @member {Array.<String>} industries
   */
  exports.prototype.industries = undefined;

  /**
   * @member {Array.<String>} styles
   */
  exports.prototype.styles = undefined;

  /**
   * @member {Array.<String>} types
   */
  exports.prototype.types = undefined;

  return exports;

}));
