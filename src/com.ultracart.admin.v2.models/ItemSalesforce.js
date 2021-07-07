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
    root.UltraCartRestApiV2.ItemSalesforce = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemSalesforce model module.
   * @module com.ultracart.admin.v2.models/ItemSalesforce
   * @version 3.2.9
   */

  /**
   * Constructs a new <code>ItemSalesforce</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemSalesforce
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemSalesforce</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemSalesforce} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemSalesforce} The populated <code>ItemSalesforce</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sfdc_pricebook_id'))
        obj.sfdc_pricebook_id = ApiClient.convertToType(data['sfdc_pricebook_id'], 'String');
      if (data.hasOwnProperty('sfdc_product_id'))
        obj.sfdc_product_id = ApiClient.convertToType(data['sfdc_product_id'], 'String');
    }
    return obj;
  }

  /**
   * Salesforce.com pricebook id
   * @member {String} sfdc_pricebook_id
   */
  exports.prototype.sfdc_pricebook_id = undefined;

  /**
   * Salesforce.com product id
   * @member {String} sfdc_product_id
   */
  exports.prototype.sfdc_product_id = undefined;

  return exports;

}));
