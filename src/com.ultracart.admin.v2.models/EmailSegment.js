/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.EmailSegment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailSegment model module.
   * @module com.ultracart.admin.v2.models/EmailSegment
   * @version 2.4.30
   */

  /**
   * Constructs a new <code>EmailSegment</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailSegment
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>EmailSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailSegment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailSegment} The populated <code>EmailSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_dts')) {
        obj['created_dts'] = ApiClient.convertToType(data['created_dts'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('email_segment_uuid')) {
        obj['email_segment_uuid'] = ApiClient.convertToType(data['email_segment_uuid'], 'String');
      }
      if (data.hasOwnProperty('filter_profile_equation_json')) {
        obj['filter_profile_equation_json'] = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
      }
      if (data.hasOwnProperty('member_count')) {
        obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
      }
      if (data.hasOwnProperty('merchant_id')) {
        obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rebuild_required')) {
        obj['rebuild_required'] = ApiClient.convertToType(data['rebuild_required'], 'Boolean');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Created date
   * @member {String} created_dts
   */
  exports.prototype['created_dts'] = undefined;
  /**
   * True if this campaign was deleted
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * Email segment UUID
   * @member {String} email_segment_uuid
   */
  exports.prototype['email_segment_uuid'] = undefined;
  /**
   * File profile equation json
   * @member {String} filter_profile_equation_json
   */
  exports.prototype['filter_profile_equation_json'] = undefined;
  /**
   * Count of members in this segment
   * @member {Number} member_count
   */
  exports.prototype['member_count'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * Name of email segment
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * True if a rebuild is required because some part of the segment has changed
   * @member {Boolean} rebuild_required
   */
  exports.prototype['rebuild_required'] = undefined;
  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;



  return exports;
}));


