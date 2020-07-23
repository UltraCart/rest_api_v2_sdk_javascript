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
    root.UltraCartRestApiV2.ItemChargebackAdjustmentRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemChargebackAdjustmentRequest model module.
   * @module com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ItemChargebackAdjustmentRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemChargebackAdjustmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} The populated <code>ItemChargebackAdjustmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chargeback_adjustment_request_oid'))
        obj.chargeback_adjustment_request_oid = ApiClient.convertToType(data['chargeback_adjustment_request_oid'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('reason_code'))
        obj.reason_code = ApiClient.convertToType(data['reason_code'], 'String');
    }
    return obj;
  }

  /**
   * Chargeback adjustment request object identifier
   * @member {Number} chargeback_adjustment_request_oid
   */
  exports.prototype.chargeback_adjustment_request_oid = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Reason code
   * @member {String} reason_code
   */
  exports.prototype.reason_code = undefined;

  return exports;

}));
