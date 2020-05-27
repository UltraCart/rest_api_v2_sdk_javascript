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
    root.UltraCartRestApiV2.ItemAccounting = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemAccounting model module.
   * @module com.ultracart.admin.v2.models/ItemAccounting
   * @version 2.4.109
   */

  /**
   * Constructs a new <code>ItemAccounting</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAccounting
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ItemAccounting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemAccounting} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemAccounting} The populated <code>ItemAccounting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounting_code')) {
        obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
      }
      if (data.hasOwnProperty('qb_class')) {
        obj['qb_class'] = ApiClient.convertToType(data['qb_class'], 'String');
      }
    }
    return obj;
  }

  /**
   * QuickBooks item name if different than the item id
   * @member {String} accounting_code
   */
  exports.prototype['accounting_code'] = undefined;
  /**
   * QuickBooks class if you are classifying items on your invoices/receipts
   * @member {String} qb_class
   */
  exports.prototype['qb_class'] = undefined;



  return exports;
}));


