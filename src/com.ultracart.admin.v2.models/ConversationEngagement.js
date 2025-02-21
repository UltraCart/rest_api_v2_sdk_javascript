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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationEngagementEquation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationEngagementEquation'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationEngagement = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationEngagementEquation);
  }
}(this, function(ApiClient, ConversationEngagementEquation) {
  'use strict';

  /**
   * The ConversationEngagement model module.
   * @module com.ultracart.admin.v2.models/ConversationEngagement
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ConversationEngagement</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagement
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEngagement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEngagement} The populated <code>ConversationEngagement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('conversation_engagement_oid'))
        obj.conversation_engagement_oid = ApiClient.convertToType(data['conversation_engagement_oid'], 'Number');
      if (data.hasOwnProperty('customer_greeting'))
        obj.customer_greeting = ApiClient.convertToType(data['customer_greeting'], 'String');
      if (data.hasOwnProperty('customer_initiated'))
        obj.customer_initiated = ApiClient.convertToType(data['customer_initiated'], 'Boolean');
      if (data.hasOwnProperty('department_oids'))
        obj.department_oids = ApiClient.convertToType(data['department_oids'], ['Number']);
      if (data.hasOwnProperty('engagement_name'))
        obj.engagement_name = ApiClient.convertToType(data['engagement_name'], 'String');
      if (data.hasOwnProperty('equation'))
        obj.equation = ConversationEngagementEquation.constructFromObject(data['equation']);
      if (data.hasOwnProperty('time_on_page'))
        obj.time_on_page = ApiClient.convertToType(data['time_on_page'], 'Number');
      if (data.hasOwnProperty('visitor_type'))
        obj.visitor_type = ApiClient.convertToType(data['visitor_type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {Number} conversation_engagement_oid
   */
  exports.prototype.conversation_engagement_oid = undefined;

  /**
   * @member {String} customer_greeting
   */
  exports.prototype.customer_greeting = undefined;

  /**
   * @member {Boolean} customer_initiated
   */
  exports.prototype.customer_initiated = undefined;

  /**
   * @member {Array.<Number>} department_oids
   */
  exports.prototype.department_oids = undefined;

  /**
   * @member {String} engagement_name
   */
  exports.prototype.engagement_name = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquation} equation
   */
  exports.prototype.equation = undefined;

  /**
   * @member {Number} time_on_page
   */
  exports.prototype.time_on_page = undefined;

  /**
   * The type of visitor
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagement.VisitorTypeEnum} visitor_type
   */
  exports.prototype.visitor_type = undefined;


  /**
   * Allowed values for the <code>visitor_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisitorTypeEnum = {
    /**
     * value: "all"
     * @const
     */
    all: "all",

    /**
     * value: "first time"
     * @const
     */
    first_time: "first time",

    /**
     * value: "returning"
     * @const
     */
    returning: "returning"
  };

  return exports;

}));
