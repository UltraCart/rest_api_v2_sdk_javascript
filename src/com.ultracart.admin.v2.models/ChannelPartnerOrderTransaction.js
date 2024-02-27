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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelPartnerOrderTransactionDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChannelPartnerOrderTransaction = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartnerOrderTransactionDetail);
  }
}(this, function(ApiClient, ChannelPartnerOrderTransactionDetail) {
  'use strict';

  /**
   * The ChannelPartnerOrderTransaction model module.
   * @module com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>ChannelPartnerOrderTransaction</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartnerOrderTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} The populated <code>ChannelPartnerOrderTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [ChannelPartnerOrderTransactionDetail]);
      if (data.hasOwnProperty('successful'))
        obj.successful = ApiClient.convertToType(data['successful'], 'Boolean');
    }
    return obj;
  }

  /**
   * Transaction gateway details
   * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail>} details
   */
  exports.prototype.details = undefined;

  /**
   * True if the transaction was successfully charged
   * @member {Boolean} successful
   */
  exports.prototype.successful = undefined;

  return exports;

}));
