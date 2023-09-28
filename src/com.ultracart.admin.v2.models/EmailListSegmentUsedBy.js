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
    root.UltraCartRestApiV2.EmailListSegmentUsedBy = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailListSegmentUsedBy model module.
   * @module com.ultracart.admin.v2.models/EmailListSegmentUsedBy
   * @version 3.10.162
   */

  /**
   * Constructs a new <code>EmailListSegmentUsedBy</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailListSegmentUsedBy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} The populated <code>EmailListSegmentUsedBy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_campaign_uuid'))
        obj.email_campaign_uuid = ApiClient.convertToType(data['email_campaign_uuid'], 'String');
      if (data.hasOwnProperty('email_flow_uuid'))
        obj.email_flow_uuid = ApiClient.convertToType(data['email_flow_uuid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * Email campaign UUID
   * @member {String} email_campaign_uuid
   */
  exports.prototype.email_campaign_uuid = undefined;

  /**
   * Email flow UUID
   * @member {String} email_flow_uuid
   */
  exports.prototype.email_flow_uuid = undefined;

  /**
   * Name of the list or segment.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
