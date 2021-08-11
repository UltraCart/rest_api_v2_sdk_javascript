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
    root.UltraCartRestApiV2.RtgThemeRestriction = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RtgThemeRestriction model module.
   * @module com.ultracart.admin.v2.models/RtgThemeRestriction
   * @version 3.5.0
   */

  /**
   * Constructs a new <code>RtgThemeRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgThemeRestriction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgThemeRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgThemeRestriction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgThemeRestriction} The populated <code>RtgThemeRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('restriction'))
        obj.restriction = ApiClient.convertToType(data['restriction'], 'String');
      if (data.hasOwnProperty('storefront_host_name'))
        obj.storefront_host_name = ApiClient.convertToType(data['storefront_host_name'], 'String');
      if (data.hasOwnProperty('theme_code'))
        obj.theme_code = ApiClient.convertToType(data['theme_code'], 'String');
    }
    return obj;
  }

  /**
   * Any restriction for this theme
   * @member {module:com.ultracart.admin.v2.models/RtgThemeRestriction.RestrictionEnum} restriction
   */
  exports.prototype.restriction = undefined;

  /**
   * The server name for this theme.  This will not be populated for legacy (ancient) themes
   * @member {String} storefront_host_name
   */
  exports.prototype.storefront_host_name = undefined;

  /**
   * Human friendly short code for this theme
   * @member {String} theme_code
   */
  exports.prototype.theme_code = undefined;


  /**
   * Allowed values for the <code>restriction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RestrictionEnum = {
    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "valid"
     * @const
     */
    valid: "valid",

    /**
     * value: "validOnly"
     * @const
     */
    validOnly: "validOnly"
  };

  return exports;

}));
