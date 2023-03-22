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
    root.UltraCartRestApiV2.OrderPaymentInsurance = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderPaymentInsurance model module.
   * @module com.ultracart.admin.v2.models/OrderPaymentInsurance
   * @version 3.10.125
   */

  /**
   * Constructs a new <code>OrderPaymentInsurance</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentInsurance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderPaymentInsurance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} The populated <code>OrderPaymentInsurance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('application_id'))
        obj.application_id = ApiClient.convertToType(data['application_id'], 'String');
      if (data.hasOwnProperty('claim_id'))
        obj.claim_id = ApiClient.convertToType(data['claim_id'], 'String');
      if (data.hasOwnProperty('insurance_type'))
        obj.insurance_type = ApiClient.convertToType(data['insurance_type'], 'String');
      if (data.hasOwnProperty('refund_claim_id'))
        obj.refund_claim_id = ApiClient.convertToType(data['refund_claim_id'], 'String');
    }
    return obj;
  }

  /**
   * application id
   * @member {String} application_id
   */
  exports.prototype.application_id = undefined;

  /**
   * claim id
   * @member {String} claim_id
   */
  exports.prototype.claim_id = undefined;

  /**
   * insurance type
   * @member {String} insurance_type
   */
  exports.prototype.insurance_type = undefined;

  /**
   * refund claim id
   * @member {String} refund_claim_id
   */
  exports.prototype.refund_claim_id = undefined;

  return exports;

}));
