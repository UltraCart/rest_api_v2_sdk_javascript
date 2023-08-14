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
    root.UltraCartRestApiV2.Warning = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Warning model module.
   * @module com.ultracart.admin.v2.models/Warning
   * @version 3.10.154
   */

  /**
   * Constructs a new <code>Warning</code>.
   * @alias module:com.ultracart.admin.v2.models/Warning
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Warning} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Warning} The populated <code>Warning</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('more_info'))
        obj.more_info = ApiClient.convertToType(data['more_info'], 'String');
      if (data.hasOwnProperty('warning_message'))
        obj.warning_message = ApiClient.convertToType(data['warning_message'], 'String');
    }
    return obj;
  }

  /**
   * Additional information often a link to additional documentation
   * @member {String} more_info
   */
  exports.prototype.more_info = undefined;

  /**
   * A technical message meant to be read by a developer
   * @member {String} warning_message
   */
  exports.prototype.warning_message = undefined;

  return exports;

}));
