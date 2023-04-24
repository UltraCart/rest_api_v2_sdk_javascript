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
    root.UltraCartRestApiV2.EmailListSegmentMembership = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailListSegmentMembership model module.
   * @module com.ultracart.admin.v2.models/EmailListSegmentMembership
   * @version 3.10.134
   */

  /**
   * Constructs a new <code>EmailListSegmentMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListSegmentMembership
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailListSegmentMembership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} The populated <code>EmailListSegmentMembership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_list_uuid'))
        obj.email_list_uuid = ApiClient.convertToType(data['email_list_uuid'], 'String');
      if (data.hasOwnProperty('email_segment_uuid'))
        obj.email_segment_uuid = ApiClient.convertToType(data['email_segment_uuid'], 'String');
      if (data.hasOwnProperty('exclude'))
        obj.exclude = ApiClient.convertToType(data['exclude'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * UUID identifying this email list or null if this is a segment
   * @member {String} email_list_uuid
   */
  exports.prototype.email_list_uuid = undefined;

  /**
   * UUID identifying this email segment or null if this is a list
   * @member {String} email_segment_uuid
   */
  exports.prototype.email_segment_uuid = undefined;

  /**
   * true if customers from this list/segment is excluded from membership
   * @member {Boolean} exclude
   */
  exports.prototype.exclude = undefined;

  /**
   * Name of this email list or segment
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
