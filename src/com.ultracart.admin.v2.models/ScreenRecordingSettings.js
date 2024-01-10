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
    root.UltraCartRestApiV2.ScreenRecordingSettings = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingSettings model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingSettings
   * @version 3.10.179
   */

  /**
   * Constructs a new <code>ScreenRecordingSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} The populated <code>ScreenRecordingSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost_per_thousand'))
        obj.cost_per_thousand = ApiClient.convertToType(data['cost_per_thousand'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('retention_interval'))
        obj.retention_interval = ApiClient.convertToType(data['retention_interval'], 'String');
      if (data.hasOwnProperty('sessions_current_billing_period'))
        obj.sessions_current_billing_period = ApiClient.convertToType(data['sessions_current_billing_period'], 'Number');
      if (data.hasOwnProperty('sessions_last_billing_period'))
        obj.sessions_last_billing_period = ApiClient.convertToType(data['sessions_last_billing_period'], 'Number');
      if (data.hasOwnProperty('sessions_trial_billing_period'))
        obj.sessions_trial_billing_period = ApiClient.convertToType(data['sessions_trial_billing_period'], 'Number');
      if (data.hasOwnProperty('trial_expiration'))
        obj.trial_expiration = ApiClient.convertToType(data['trial_expiration'], 'String');
      if (data.hasOwnProperty('trial_expired'))
        obj.trial_expired = ApiClient.convertToType(data['trial_expired'], 'Boolean');
    }
    return obj;
  }

  /**
   * Cost per one thousand sessions
   * @member {Number} cost_per_thousand
   */
  exports.prototype.cost_per_thousand = undefined;

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * How long screen recording data is retained
   * @member {String} retention_interval
   */
  exports.prototype.retention_interval = undefined;

  /**
   * @member {Number} sessions_current_billing_period
   */
  exports.prototype.sessions_current_billing_period = undefined;

  /**
   * @member {Number} sessions_last_billing_period
   */
  exports.prototype.sessions_last_billing_period = undefined;

  /**
   * @member {Number} sessions_trial_billing_period
   */
  exports.prototype.sessions_trial_billing_period = undefined;

  /**
   * @member {String} trial_expiration
   */
  exports.prototype.trial_expiration = undefined;

  /**
   * @member {Boolean} trial_expired
   */
  exports.prototype.trial_expired = undefined;

  return exports;

}));
