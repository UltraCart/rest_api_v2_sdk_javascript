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
    root.UltraCartRestApiV2.EmailCommseqPostcard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqPostcard model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqPostcard
   * @version 3.1.25
   */

  /**
   * Constructs a new <code>EmailCommseqPostcard</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqPostcard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} The populated <code>EmailCommseqPostcard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('edited_by_user'))
        obj.edited_by_user = ApiClient.convertToType(data['edited_by_user'], 'String');
      if (data.hasOwnProperty('email_communication_sequence_postcard_uuid'))
        obj.email_communication_sequence_postcard_uuid = ApiClient.convertToType(data['email_communication_sequence_postcard_uuid'], 'String');
      if (data.hasOwnProperty('filter_profile_equation_json'))
        obj.filter_profile_equation_json = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('postcard_back_container_cjson'))
        obj.postcard_back_container_cjson = ApiClient.convertToType(data['postcard_back_container_cjson'], 'String');
      if (data.hasOwnProperty('postcard_back_container_uuid'))
        obj.postcard_back_container_uuid = ApiClient.convertToType(data['postcard_back_container_uuid'], 'String');
      if (data.hasOwnProperty('postcard_container_cjson_last_modified_dts'))
        obj.postcard_container_cjson_last_modified_dts = ApiClient.convertToType(data['postcard_container_cjson_last_modified_dts'], 'String');
      if (data.hasOwnProperty('postcard_front_container_cjson'))
        obj.postcard_front_container_cjson = ApiClient.convertToType(data['postcard_front_container_cjson'], 'String');
      if (data.hasOwnProperty('postcard_front_container_uuid'))
        obj.postcard_front_container_uuid = ApiClient.convertToType(data['postcard_front_container_uuid'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Deleted
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * Edited by user
   * @member {String} edited_by_user
   */
  exports.prototype.edited_by_user = undefined;

  /**
   * communication sequence postcard uuid
   * @member {String} email_communication_sequence_postcard_uuid
   */
  exports.prototype.email_communication_sequence_postcard_uuid = undefined;

  /**
   * Filter profile equation json
   * @member {String} filter_profile_equation_json
   */
  exports.prototype.filter_profile_equation_json = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Postcard back container cjson
   * @member {String} postcard_back_container_cjson
   */
  exports.prototype.postcard_back_container_cjson = undefined;

  /**
   * Postcard back container uuid
   * @member {String} postcard_back_container_uuid
   */
  exports.prototype.postcard_back_container_uuid = undefined;

  /**
   * Timestamp the last time the container was modified.
   * @member {String} postcard_container_cjson_last_modified_dts
   */
  exports.prototype.postcard_container_cjson_last_modified_dts = undefined;

  /**
   * Postcard front container cjson
   * @member {String} postcard_front_container_cjson
   */
  exports.prototype.postcard_front_container_cjson = undefined;

  /**
   * Postcard front container uuid
   * @member {String} postcard_front_container_uuid
   */
  exports.prototype.postcard_front_container_uuid = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
