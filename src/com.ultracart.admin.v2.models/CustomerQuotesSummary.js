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
    root.UltraCartRestApiV2.CustomerQuotesSummary = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerQuotesSummary model module.
   * @module com.ultracart.admin.v2.models/CustomerQuotesSummary
   * @version 2.4.40
   */

  /**
   * Constructs a new <code>CustomerQuotesSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerQuotesSummary
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CustomerQuotesSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} The populated <code>CustomerQuotesSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('first_quote_dts')) {
        obj['first_quote_dts'] = ApiClient.convertToType(data['first_quote_dts'], 'String');
      }
      if (data.hasOwnProperty('last_quote_dts')) {
        obj['last_quote_dts'] = ApiClient.convertToType(data['last_quote_dts'], 'String');
      }
      if (data.hasOwnProperty('quote_count')) {
        obj['quote_count'] = ApiClient.convertToType(data['quote_count'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * First quote date
   * @member {String} first_quote_dts
   */
  exports.prototype['first_quote_dts'] = undefined;
  /**
   * Last quote date
   * @member {String} last_quote_dts
   */
  exports.prototype['last_quote_dts'] = undefined;
  /**
   * Total number of quote
   * @member {Number} quote_count
   */
  exports.prototype['quote_count'] = undefined;
  /**
   * Total amount associated with the quotes
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


