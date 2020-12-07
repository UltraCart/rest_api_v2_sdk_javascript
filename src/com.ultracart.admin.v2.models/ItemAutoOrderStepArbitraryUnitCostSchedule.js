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
    root.UltraCartRestApiV2.ItemAutoOrderStepArbitraryUnitCostSchedule = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemAutoOrderStepArbitraryUnitCostSchedule model module.
   * @module com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
   * @version 3.0.48
   */

  /**
   * Constructs a new <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} The populated <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('retry_days'))
        obj.retry_days = ApiClient.convertToType(data['retry_days'], 'Number');
    }
    return obj;
  }

  /**
   * Arbitrary unit cost
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * Retry days
   * @member {Number} retry_days
   */
  exports.prototype.retry_days = undefined;

  return exports;

}));
