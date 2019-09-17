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
    root.UltraCartRestApiV2.OrderItemEdiIdentification = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderItemEdiIdentification model module.
   * @module com.ultracart.admin.v2.models/OrderItemEdiIdentification
   * @version 2.4.32
   */

  /**
   * Constructs a new <code>OrderItemEdiIdentification</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemEdiIdentification
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OrderItemEdiIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderItemEdiIdentification} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderItemEdiIdentification} The populated <code>OrderItemEdiIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('identification')) {
        obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Identification value
   * @member {String} identification
   */
  exports.prototype['identification'] = undefined;
  /**
   * Quantity associated with this identifier
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


