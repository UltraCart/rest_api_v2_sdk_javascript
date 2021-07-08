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
    root.UltraCartRestApiV2.AccountsReceivableRetryDayActivity = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountsReceivableRetryDayActivity model module.
   * @module com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
   * @version 3.2.10
   */

  /**
   * Constructs a new <code>AccountsReceivableRetryDayActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsReceivableRetryDayActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} The populated <code>AccountsReceivableRetryDayActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('charge'))
        obj.charge = ApiClient.convertToType(data['charge'], 'Boolean');
      if (data.hasOwnProperty('coupon_code'))
        obj.coupon_code = ApiClient.convertToType(data['coupon_code'], 'String');
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], 'Number');
    }
    return obj;
  }

  /**
   * True if a charge attempt should be made on this day.  False means the order should be rejected on this day.
   * @member {Boolean} charge
   */
  exports.prototype.charge = undefined;

  /**
   * The coupon code that should be applied to this order.
   * @member {String} coupon_code
   */
  exports.prototype.coupon_code = undefined;

  /**
   * The number of days since the order placed in Accounts Receivable
   * @member {Number} day
   */
  exports.prototype.day = undefined;

  return exports;

}));
