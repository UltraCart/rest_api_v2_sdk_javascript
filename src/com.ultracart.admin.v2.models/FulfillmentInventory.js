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
    root.UltraCartRestApiV2.FulfillmentInventory = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FulfillmentInventory model module.
   * @module com.ultracart.admin.v2.models/FulfillmentInventory
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>FulfillmentInventory</code>.
   * @alias module:com.ultracart.admin.v2.models/FulfillmentInventory
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FulfillmentInventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/FulfillmentInventory} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/FulfillmentInventory} The populated <code>FulfillmentInventory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


