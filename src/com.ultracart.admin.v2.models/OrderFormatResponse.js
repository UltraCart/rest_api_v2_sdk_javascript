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
    root.UltraCartRestApiV2.OrderFormatResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderFormatResponse model module.
   * @module com.ultracart.admin.v2.models/OrderFormatResponse
   * @version 3.10.73
   */

  /**
   * Constructs a new <code>OrderFormatResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderFormatResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderFormatResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderFormatResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderFormatResponse} The populated <code>OrderFormatResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('css_links'))
        obj.css_links = ApiClient.convertToType(data['css_links'], ['String']);
      if (data.hasOwnProperty('formatted_result'))
        obj.formatted_result = ApiClient.convertToType(data['formatted_result'], 'String');
    }
    return obj;
  }

  /**
   * The URLs to any stylesheets that need to be included to properly view the markup.
   * @member {Array.<String>} css_links
   */
  exports.prototype.css_links = undefined;

  /**
   * The formatted result of the order.  This will be HTML or text depending upon the requested format.
   * @member {String} formatted_result
   */
  exports.prototype.formatted_result = undefined;

  return exports;

}));
