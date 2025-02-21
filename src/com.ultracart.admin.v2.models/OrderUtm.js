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
    root.UltraCartRestApiV2.OrderUtm = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderUtm model module.
   * @module com.ultracart.admin.v2.models/OrderUtm
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>OrderUtm</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderUtm
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderUtm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderUtm} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderUtm} The populated <code>OrderUtm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attribution_first_click_subtotal'))
        obj.attribution_first_click_subtotal = ApiClient.convertToType(data['attribution_first_click_subtotal'], 'Number');
      if (data.hasOwnProperty('attribution_first_click_total'))
        obj.attribution_first_click_total = ApiClient.convertToType(data['attribution_first_click_total'], 'Number');
      if (data.hasOwnProperty('attribution_last_click_subtotal'))
        obj.attribution_last_click_subtotal = ApiClient.convertToType(data['attribution_last_click_subtotal'], 'Number');
      if (data.hasOwnProperty('attribution_last_click_total'))
        obj.attribution_last_click_total = ApiClient.convertToType(data['attribution_last_click_total'], 'Number');
      if (data.hasOwnProperty('attribution_linear_subtotal'))
        obj.attribution_linear_subtotal = ApiClient.convertToType(data['attribution_linear_subtotal'], 'Number');
      if (data.hasOwnProperty('attribution_linear_total'))
        obj.attribution_linear_total = ApiClient.convertToType(data['attribution_linear_total'], 'Number');
      if (data.hasOwnProperty('attribution_position_based_subtotal'))
        obj.attribution_position_based_subtotal = ApiClient.convertToType(data['attribution_position_based_subtotal'], 'Number');
      if (data.hasOwnProperty('attribution_position_based_total'))
        obj.attribution_position_based_total = ApiClient.convertToType(data['attribution_position_based_total'], 'Number');
      if (data.hasOwnProperty('click_dts'))
        obj.click_dts = ApiClient.convertToType(data['click_dts'], 'String');
      if (data.hasOwnProperty('facebook_ad_id'))
        obj.facebook_ad_id = ApiClient.convertToType(data['facebook_ad_id'], 'String');
      if (data.hasOwnProperty('fbclid'))
        obj.fbclid = ApiClient.convertToType(data['fbclid'], 'String');
      if (data.hasOwnProperty('gbraid'))
        obj.gbraid = ApiClient.convertToType(data['gbraid'], 'String');
      if (data.hasOwnProperty('glcid'))
        obj.glcid = ApiClient.convertToType(data['glcid'], 'String');
      if (data.hasOwnProperty('itm_campaign'))
        obj.itm_campaign = ApiClient.convertToType(data['itm_campaign'], 'String');
      if (data.hasOwnProperty('itm_content'))
        obj.itm_content = ApiClient.convertToType(data['itm_content'], 'String');
      if (data.hasOwnProperty('itm_id'))
        obj.itm_id = ApiClient.convertToType(data['itm_id'], 'String');
      if (data.hasOwnProperty('itm_medium'))
        obj.itm_medium = ApiClient.convertToType(data['itm_medium'], 'String');
      if (data.hasOwnProperty('itm_source'))
        obj.itm_source = ApiClient.convertToType(data['itm_source'], 'String');
      if (data.hasOwnProperty('itm_term'))
        obj.itm_term = ApiClient.convertToType(data['itm_term'], 'String');
      if (data.hasOwnProperty('msclkid'))
        obj.msclkid = ApiClient.convertToType(data['msclkid'], 'String');
      if (data.hasOwnProperty('short_code'))
        obj.short_code = ApiClient.convertToType(data['short_code'], 'String');
      if (data.hasOwnProperty('short_code_backup'))
        obj.short_code_backup = ApiClient.convertToType(data['short_code_backup'], 'Boolean');
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
   * @member {Number} attribution_first_click_subtotal
   */
  exports.prototype.attribution_first_click_subtotal = undefined;

  /**
   * @member {Number} attribution_first_click_total
   */
  exports.prototype.attribution_first_click_total = undefined;

  /**
   * @member {Number} attribution_last_click_subtotal
   */
  exports.prototype.attribution_last_click_subtotal = undefined;

  /**
   * @member {Number} attribution_last_click_total
   */
  exports.prototype.attribution_last_click_total = undefined;

  /**
   * @member {Number} attribution_linear_subtotal
   */
  exports.prototype.attribution_linear_subtotal = undefined;

  /**
   * @member {Number} attribution_linear_total
   */
  exports.prototype.attribution_linear_total = undefined;

  /**
   * @member {Number} attribution_position_based_subtotal
   */
  exports.prototype.attribution_position_based_subtotal = undefined;

  /**
   * @member {Number} attribution_position_based_total
   */
  exports.prototype.attribution_position_based_total = undefined;

  /**
   * Date/time that the click happened
   * @member {String} click_dts
   */
  exports.prototype.click_dts = undefined;

  /**
   * @member {String} facebook_ad_id
   */
  exports.prototype.facebook_ad_id = undefined;

  /**
   * @member {String} fbclid
   */
  exports.prototype.fbclid = undefined;

  /**
   * @member {String} gbraid
   */
  exports.prototype.gbraid = undefined;

  /**
   * @member {String} glcid
   */
  exports.prototype.glcid = undefined;

  /**
   * @member {String} itm_campaign
   */
  exports.prototype.itm_campaign = undefined;

  /**
   * @member {String} itm_content
   */
  exports.prototype.itm_content = undefined;

  /**
   * @member {String} itm_id
   */
  exports.prototype.itm_id = undefined;

  /**
   * @member {String} itm_medium
   */
  exports.prototype.itm_medium = undefined;

  /**
   * @member {String} itm_source
   */
  exports.prototype.itm_source = undefined;

  /**
   * @member {String} itm_term
   */
  exports.prototype.itm_term = undefined;

  /**
   * @member {String} msclkid
   */
  exports.prototype.msclkid = undefined;

  /**
   * @member {String} short_code
   */
  exports.prototype.short_code = undefined;

  /**
   * @member {Boolean} short_code_backup
   */
  exports.prototype.short_code_backup = undefined;

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
