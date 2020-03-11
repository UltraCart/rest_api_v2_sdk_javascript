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
    root.UltraCartRestApiV2.OrderQuote = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderQuote model module.
   * @module com.ultracart.admin.v2.models/OrderQuote
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>OrderQuote</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderQuote
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OrderQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderQuote} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderQuote} The populated <code>OrderQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('quote_expiration_dts')) {
        obj['quote_expiration_dts'] = ApiClient.convertToType(data['quote_expiration_dts'], 'String');
      }
      if (data.hasOwnProperty('quoted_by')) {
        obj['quoted_by'] = ApiClient.convertToType(data['quoted_by'], 'String');
      }
      if (data.hasOwnProperty('quoted_dts')) {
        obj['quoted_dts'] = ApiClient.convertToType(data['quoted_dts'], 'String');
      }
    }
    return obj;
  }

  /**
   * Expiration of quote at date/time
   * @member {String} quote_expiration_dts
   */
  exports.prototype['quote_expiration_dts'] = undefined;
  /**
   * Quoted by user
   * @member {String} quoted_by
   */
  exports.prototype['quoted_by'] = undefined;
  /**
   * Quoted on date/time
   * @member {String} quoted_dts
   */
  exports.prototype['quoted_dts'] = undefined;



  return exports;
}));


