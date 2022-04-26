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
    root.UltraCartRestApiV2.ScreenRecordingHeatmap = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingHeatmap model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmap
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>ScreenRecordingHeatmap</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingHeatmap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmap} The populated <code>ScreenRecordingHeatmap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('large_click_thumbnail_url'))
        obj.large_click_thumbnail_url = ApiClient.convertToType(data['large_click_thumbnail_url'], 'String');
      if (data.hasOwnProperty('large_click_url'))
        obj.large_click_url = ApiClient.convertToType(data['large_click_url'], 'String');
      if (data.hasOwnProperty('large_movement_thumbnail_url'))
        obj.large_movement_thumbnail_url = ApiClient.convertToType(data['large_movement_thumbnail_url'], 'String');
      if (data.hasOwnProperty('large_movement_url'))
        obj.large_movement_url = ApiClient.convertToType(data['large_movement_url'], 'String');
      if (data.hasOwnProperty('large_regular_thumbnail_url'))
        obj.large_regular_thumbnail_url = ApiClient.convertToType(data['large_regular_thumbnail_url'], 'String');
      if (data.hasOwnProperty('large_regular_url'))
        obj.large_regular_url = ApiClient.convertToType(data['large_regular_url'], 'String');
      if (data.hasOwnProperty('large_scroll_thumbnail_url'))
        obj.large_scroll_thumbnail_url = ApiClient.convertToType(data['large_scroll_thumbnail_url'], 'String');
      if (data.hasOwnProperty('large_scroll_url'))
        obj.large_scroll_url = ApiClient.convertToType(data['large_scroll_url'], 'String');
      if (data.hasOwnProperty('medium_click_thumbnail_url'))
        obj.medium_click_thumbnail_url = ApiClient.convertToType(data['medium_click_thumbnail_url'], 'String');
      if (data.hasOwnProperty('medium_click_url'))
        obj.medium_click_url = ApiClient.convertToType(data['medium_click_url'], 'String');
      if (data.hasOwnProperty('medium_movement_thumbnail_url'))
        obj.medium_movement_thumbnail_url = ApiClient.convertToType(data['medium_movement_thumbnail_url'], 'String');
      if (data.hasOwnProperty('medium_movement_url'))
        obj.medium_movement_url = ApiClient.convertToType(data['medium_movement_url'], 'String');
      if (data.hasOwnProperty('medium_regular_thumbnail_url'))
        obj.medium_regular_thumbnail_url = ApiClient.convertToType(data['medium_regular_thumbnail_url'], 'String');
      if (data.hasOwnProperty('medium_regular_url'))
        obj.medium_regular_url = ApiClient.convertToType(data['medium_regular_url'], 'String');
      if (data.hasOwnProperty('medium_scroll_thumbnail_url'))
        obj.medium_scroll_thumbnail_url = ApiClient.convertToType(data['medium_scroll_thumbnail_url'], 'String');
      if (data.hasOwnProperty('medium_scroll_url'))
        obj.medium_scroll_url = ApiClient.convertToType(data['medium_scroll_url'], 'String');
      if (data.hasOwnProperty('small_click_thumbnail_url'))
        obj.small_click_thumbnail_url = ApiClient.convertToType(data['small_click_thumbnail_url'], 'String');
      if (data.hasOwnProperty('small_click_url'))
        obj.small_click_url = ApiClient.convertToType(data['small_click_url'], 'String');
      if (data.hasOwnProperty('small_movement_thumbnail_url'))
        obj.small_movement_thumbnail_url = ApiClient.convertToType(data['small_movement_thumbnail_url'], 'String');
      if (data.hasOwnProperty('small_movement_url'))
        obj.small_movement_url = ApiClient.convertToType(data['small_movement_url'], 'String');
      if (data.hasOwnProperty('small_regular_thumbnail_url'))
        obj.small_regular_thumbnail_url = ApiClient.convertToType(data['small_regular_thumbnail_url'], 'String');
      if (data.hasOwnProperty('small_regular_url'))
        obj.small_regular_url = ApiClient.convertToType(data['small_regular_url'], 'String');
      if (data.hasOwnProperty('small_scroll_thumbnail_url'))
        obj.small_scroll_thumbnail_url = ApiClient.convertToType(data['small_scroll_thumbnail_url'], 'String');
      if (data.hasOwnProperty('small_scroll_url'))
        obj.small_scroll_url = ApiClient.convertToType(data['small_scroll_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} large_click_thumbnail_url
   */
  exports.prototype.large_click_thumbnail_url = undefined;

  /**
   * @member {String} large_click_url
   */
  exports.prototype.large_click_url = undefined;

  /**
   * @member {String} large_movement_thumbnail_url
   */
  exports.prototype.large_movement_thumbnail_url = undefined;

  /**
   * @member {String} large_movement_url
   */
  exports.prototype.large_movement_url = undefined;

  /**
   * @member {String} large_regular_thumbnail_url
   */
  exports.prototype.large_regular_thumbnail_url = undefined;

  /**
   * @member {String} large_regular_url
   */
  exports.prototype.large_regular_url = undefined;

  /**
   * @member {String} large_scroll_thumbnail_url
   */
  exports.prototype.large_scroll_thumbnail_url = undefined;

  /**
   * @member {String} large_scroll_url
   */
  exports.prototype.large_scroll_url = undefined;

  /**
   * @member {String} medium_click_thumbnail_url
   */
  exports.prototype.medium_click_thumbnail_url = undefined;

  /**
   * @member {String} medium_click_url
   */
  exports.prototype.medium_click_url = undefined;

  /**
   * @member {String} medium_movement_thumbnail_url
   */
  exports.prototype.medium_movement_thumbnail_url = undefined;

  /**
   * @member {String} medium_movement_url
   */
  exports.prototype.medium_movement_url = undefined;

  /**
   * @member {String} medium_regular_thumbnail_url
   */
  exports.prototype.medium_regular_thumbnail_url = undefined;

  /**
   * @member {String} medium_regular_url
   */
  exports.prototype.medium_regular_url = undefined;

  /**
   * @member {String} medium_scroll_thumbnail_url
   */
  exports.prototype.medium_scroll_thumbnail_url = undefined;

  /**
   * @member {String} medium_scroll_url
   */
  exports.prototype.medium_scroll_url = undefined;

  /**
   * @member {String} small_click_thumbnail_url
   */
  exports.prototype.small_click_thumbnail_url = undefined;

  /**
   * @member {String} small_click_url
   */
  exports.prototype.small_click_url = undefined;

  /**
   * @member {String} small_movement_thumbnail_url
   */
  exports.prototype.small_movement_thumbnail_url = undefined;

  /**
   * @member {String} small_movement_url
   */
  exports.prototype.small_movement_url = undefined;

  /**
   * @member {String} small_regular_thumbnail_url
   */
  exports.prototype.small_regular_thumbnail_url = undefined;

  /**
   * @member {String} small_regular_url
   */
  exports.prototype.small_regular_url = undefined;

  /**
   * @member {String} small_scroll_thumbnail_url
   */
  exports.prototype.small_scroll_thumbnail_url = undefined;

  /**
   * @member {String} small_scroll_url
   */
  exports.prototype.small_scroll_url = undefined;

  return exports;

}));
