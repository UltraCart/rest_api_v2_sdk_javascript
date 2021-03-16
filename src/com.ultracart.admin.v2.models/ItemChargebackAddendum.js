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
    root.UltraCartRestApiV2.ItemChargebackAddendum = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemChargebackAddendum model module.
   * @module com.ultracart.admin.v2.models/ItemChargebackAddendum
   * @version 3.1.16
   */

  /**
   * Constructs a new <code>ItemChargebackAddendum</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChargebackAddendum
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemChargebackAddendum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} The populated <code>ItemChargebackAddendum</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chargeback_addendum_oid'))
        obj.chargeback_addendum_oid = ApiClient.convertToType(data['chargeback_addendum_oid'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('file_size'))
        obj.file_size = ApiClient.convertToType(data['file_size'], 'Number');
      if (data.hasOwnProperty('pages'))
        obj.pages = ApiClient.convertToType(data['pages'], 'Number');
    }
    return obj;
  }

  /**
   * Chargeback addendum object identifier
   * @member {Number} chargeback_addendum_oid
   */
  exports.prototype.chargeback_addendum_oid = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Size of the file
   * @member {Number} file_size
   */
  exports.prototype.file_size = undefined;

  /**
   * Number of pages
   * @member {Number} pages
   */
  exports.prototype.pages = undefined;

  return exports;

}));
