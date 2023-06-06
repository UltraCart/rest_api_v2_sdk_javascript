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
    root.UltraCartRestApiV2.EmailPlanAdditional = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailPlanAdditional model module.
   * @module com.ultracart.admin.v2.models/EmailPlanAdditional
   * @version 3.10.140
   */

  /**
   * Constructs a new <code>EmailPlanAdditional</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPlanAdditional
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPlanAdditional</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPlanAdditional} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPlanAdditional} The populated <code>EmailPlanAdditional</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('can_downgrade'))
        obj.can_downgrade = ApiClient.convertToType(data['can_downgrade'], 'Boolean');
      if (data.hasOwnProperty('can_upgrade'))
        obj.can_upgrade = ApiClient.convertToType(data['can_upgrade'], 'Boolean');
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('cost_change'))
        obj.cost_change = ApiClient.convertToType(data['cost_change'], 'Number');
      if (data.hasOwnProperty('cost_change_formatted'))
        obj.cost_change_formatted = ApiClient.convertToType(data['cost_change_formatted'], 'String');
      if (data.hasOwnProperty('cost_formatted'))
        obj.cost_formatted = ApiClient.convertToType(data['cost_formatted'], 'String');
      if (data.hasOwnProperty('customers'))
        obj.customers = ApiClient.convertToType(data['customers'], 'Number');
      if (data.hasOwnProperty('emails'))
        obj.emails = ApiClient.convertToType(data['emails'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {Boolean} can_downgrade
   */
  exports.prototype.can_downgrade = undefined;

  /**
   * @member {Boolean} can_upgrade
   */
  exports.prototype.can_upgrade = undefined;

  /**
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * @member {Number} cost_change
   */
  exports.prototype.cost_change = undefined;

  /**
   * @member {String} cost_change_formatted
   */
  exports.prototype.cost_change_formatted = undefined;

  /**
   * @member {String} cost_formatted
   */
  exports.prototype.cost_formatted = undefined;

  /**
   * @member {Number} customers
   */
  exports.prototype.customers = undefined;

  /**
   * @member {Number} emails
   */
  exports.prototype.emails = undefined;

  return exports;

}));
