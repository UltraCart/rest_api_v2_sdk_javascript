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
    root.UltraCartRestApiV2.Activity = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Activity model module.
   * @module com.ultracart.admin.v2.models/Activity
   * @version 3.0.39
   */

  /**
   * Constructs a new <code>Activity</code>.
   * @alias module:com.ultracart.admin.v2.models/Activity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Activity} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Activity} The populated <code>Activity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('metric'))
        obj.metric = ApiClient.convertToType(data['metric'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('ts'))
        obj.ts = ApiClient.convertToType(data['ts'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * @member {String} metric
   */
  exports.prototype.metric = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {Number} ts
   */
  exports.prototype.ts = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  return exports;

}));
