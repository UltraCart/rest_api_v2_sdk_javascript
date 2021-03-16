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
    root.UltraCartRestApiV2.TransactionEmailOption = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransactionEmailOption model module.
   * @module com.ultracart.admin.v2.models/TransactionEmailOption
   * @version 3.1.16
   */

  /**
   * Constructs a new <code>TransactionEmailOption</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionEmailOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TransactionEmailOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TransactionEmailOption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TransactionEmailOption} The populated <code>TransactionEmailOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('merchantEmailDeliveryOptionOid'))
        obj.merchantEmailDeliveryOptionOid = ApiClient.convertToType(data['merchantEmailDeliveryOptionOid'], 'Number');
      if (data.hasOwnProperty('merchantId'))
        obj.merchantId = ApiClient.convertToType(data['merchantId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
      if (data.hasOwnProperty('storeFrontOid'))
        obj.storeFrontOid = ApiClient.convertToType(data['storeFrontOid'], 'Number');
      if (data.hasOwnProperty('templateDisplay'))
        obj.templateDisplay = ApiClient.convertToType(data['templateDisplay'], 'String');
      if (data.hasOwnProperty('templateType'))
        obj.templateType = ApiClient.convertToType(data['templateType'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Number} merchantEmailDeliveryOptionOid
   */
  exports.prototype.merchantEmailDeliveryOptionOid = undefined;

  /**
   * @member {String} merchantId
   */
  exports.prototype.merchantId = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  /**
   * @member {Number} storeFrontOid
   */
  exports.prototype.storeFrontOid = undefined;

  /**
   * @member {String} templateDisplay
   */
  exports.prototype.templateDisplay = undefined;

  /**
   * @member {String} templateType
   */
  exports.prototype.templateType = undefined;

  return exports;

}));
