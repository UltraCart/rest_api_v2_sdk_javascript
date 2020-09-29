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
    root.UltraCartRestApiV2.EmailStepStatRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailStepStatRequest model module.
   * @module com.ultracart.admin.v2.models/EmailStepStatRequest
   * @version 3.0.27
   */

  /**
   * Constructs a new <code>EmailStepStatRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStepStatRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailStepStatRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailStepStatRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailStepStatRequest} The populated <code>EmailStepStatRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('commseq_step_uuids'))
        obj.commseq_step_uuids = ApiClient.convertToType(data['commseq_step_uuids'], ['String']);
      if (data.hasOwnProperty('days'))
        obj.days = ApiClient.convertToType(data['days'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Array.<String>} commseq_step_uuids
   */
  exports.prototype.commseq_step_uuids = undefined;

  /**
   * @member {Number} days
   */
  exports.prototype.days = undefined;

  return exports;

}));
