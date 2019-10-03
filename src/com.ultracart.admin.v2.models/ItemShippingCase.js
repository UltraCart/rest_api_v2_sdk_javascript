/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.ItemShippingCase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemShippingCase model module.
   * @module com.ultracart.admin.v2.models/ItemShippingCase
   * @version 2.4.40
   */

  /**
   * Constructs a new <code>ItemShippingCase</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingCase
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ItemShippingCase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShippingCase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShippingCase} The populated <code>ItemShippingCase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case_label')) {
        obj['case_label'] = ApiClient.convertToType(data['case_label'], 'String');
      }
      if (data.hasOwnProperty('case_merchant_item_id')) {
        obj['case_merchant_item_id'] = ApiClient.convertToType(data['case_merchant_item_id'], 'String');
      }
      if (data.hasOwnProperty('case_merchant_item_oid')) {
        obj['case_merchant_item_oid'] = ApiClient.convertToType(data['case_merchant_item_oid'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Case label
   * @member {String} case_label
   */
  exports.prototype['case_label'] = undefined;
  /**
   * Case item id
   * @member {String} case_merchant_item_id
   */
  exports.prototype['case_merchant_item_id'] = undefined;
  /**
   * Case item object identifier
   * @member {Number} case_merchant_item_oid
   */
  exports.prototype['case_merchant_item_oid'] = undefined;
  /**
   * Case quantity
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


