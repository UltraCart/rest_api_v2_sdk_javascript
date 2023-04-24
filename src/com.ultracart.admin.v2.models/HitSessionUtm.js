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
    root.UltraCartRestApiV2.HitSessionUtm = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HitSessionUtm model module.
   * @module com.ultracart.admin.v2.models/HitSessionUtm
   * @version 3.10.134
   */

  /**
   * Constructs a new <code>HitSessionUtm</code>.
   * @alias module:com.ultracart.admin.v2.models/HitSessionUtm
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>HitSessionUtm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/HitSessionUtm} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/HitSessionUtm} The populated <code>HitSessionUtm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fb_ad_id'))
        obj.fb_ad_id = ApiClient.convertToType(data['fb_ad_id'], 'String');
      if (data.hasOwnProperty('fbclid'))
        obj.fbclid = ApiClient.convertToType(data['fbclid'], 'String');
      if (data.hasOwnProperty('gbraid'))
        obj.gbraid = ApiClient.convertToType(data['gbraid'], 'String');
      if (data.hasOwnProperty('gclid'))
        obj.gclid = ApiClient.convertToType(data['gclid'], 'String');
      if (data.hasOwnProperty('msclkid'))
        obj.msclkid = ApiClient.convertToType(data['msclkid'], 'String');
      if (data.hasOwnProperty('ttclid'))
        obj.ttclid = ApiClient.convertToType(data['ttclid'], 'String');
      if (data.hasOwnProperty('uc_message_id'))
        obj.uc_message_id = ApiClient.convertToType(data['uc_message_id'], 'String');
      if (data.hasOwnProperty('utm_campaign'))
        obj.utm_campaign = ApiClient.convertToType(data['utm_campaign'], 'String');
      if (data.hasOwnProperty('utm_content'))
        obj.utm_content = ApiClient.convertToType(data['utm_content'], 'String');
      if (data.hasOwnProperty('utm_id'))
        obj.utm_id = ApiClient.convertToType(data['utm_id'], 'String');
      if (data.hasOwnProperty('utm_medium'))
        obj.utm_medium = ApiClient.convertToType(data['utm_medium'], 'String');
      if (data.hasOwnProperty('utm_source'))
        obj.utm_source = ApiClient.convertToType(data['utm_source'], 'String');
      if (data.hasOwnProperty('utm_term'))
        obj.utm_term = ApiClient.convertToType(data['utm_term'], 'String');
      if (data.hasOwnProperty('vmcid'))
        obj.vmcid = ApiClient.convertToType(data['vmcid'], 'String');
      if (data.hasOwnProperty('wbraid'))
        obj.wbraid = ApiClient.convertToType(data['wbraid'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} fb_ad_id
   */
  exports.prototype.fb_ad_id = undefined;

  /**
   * @member {String} fbclid
   */
  exports.prototype.fbclid = undefined;

  /**
   * @member {String} gbraid
   */
  exports.prototype.gbraid = undefined;

  /**
   * @member {String} gclid
   */
  exports.prototype.gclid = undefined;

  /**
   * @member {String} msclkid
   */
  exports.prototype.msclkid = undefined;

  /**
   * @member {String} ttclid
   */
  exports.prototype.ttclid = undefined;

  /**
   * @member {String} uc_message_id
   */
  exports.prototype.uc_message_id = undefined;

  /**
   * @member {String} utm_campaign
   */
  exports.prototype.utm_campaign = undefined;

  /**
   * @member {String} utm_content
   */
  exports.prototype.utm_content = undefined;

  /**
   * @member {String} utm_id
   */
  exports.prototype.utm_id = undefined;

  /**
   * @member {String} utm_medium
   */
  exports.prototype.utm_medium = undefined;

  /**
   * @member {String} utm_source
   */
  exports.prototype.utm_source = undefined;

  /**
   * @member {String} utm_term
   */
  exports.prototype.utm_term = undefined;

  /**
   * @member {String} vmcid
   */
  exports.prototype.vmcid = undefined;

  /**
   * @member {String} wbraid
   */
  exports.prototype.wbraid = undefined;

  return exports;

}));
