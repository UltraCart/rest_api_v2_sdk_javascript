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
    root.UltraCartRestApiV2.HitSessionStart = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HitSessionStart model module.
   * @module com.ultracart.admin.v2.models/HitSessionStart
   * @version 3.10.145
   */

  /**
   * Constructs a new <code>HitSessionStart</code>.
   * @alias module:com.ultracart.admin.v2.models/HitSessionStart
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>HitSessionStart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/HitSessionStart} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/HitSessionStart} The populated <code>HitSessionStart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bot'))
        obj.bot = ApiClient.convertToType(data['bot'], 'Boolean');
      if (data.hasOwnProperty('bounce'))
        obj.bounce = ApiClient.convertToType(data['bounce'], 'Boolean');
      if (data.hasOwnProperty('channel'))
        obj.channel = ApiClient.convertToType(data['channel'], 'String');
      if (data.hasOwnProperty('device_switch_detected'))
        obj.device_switch_detected = ApiClient.convertToType(data['device_switch_detected'], 'Boolean');
      if (data.hasOwnProperty('fake_bot'))
        obj.fake_bot = ApiClient.convertToType(data['fake_bot'], 'Boolean');
      if (data.hasOwnProperty('geolocation_country'))
        obj.geolocation_country = ApiClient.convertToType(data['geolocation_country'], 'String');
      if (data.hasOwnProperty('geolocation_latitude'))
        obj.geolocation_latitude = ApiClient.convertToType(data['geolocation_latitude'], 'Number');
      if (data.hasOwnProperty('geolocation_longitude'))
        obj.geolocation_longitude = ApiClient.convertToType(data['geolocation_longitude'], 'Number');
      if (data.hasOwnProperty('geolocation_province'))
        obj.geolocation_province = ApiClient.convertToType(data['geolocation_province'], 'String');
      if (data.hasOwnProperty('no_cookie_support'))
        obj.no_cookie_support = ApiClient.convertToType(data['no_cookie_support'], 'Boolean');
      if (data.hasOwnProperty('prefetch'))
        obj.prefetch = ApiClient.convertToType(data['prefetch'], 'Boolean');
      if (data.hasOwnProperty('referrer'))
        obj.referrer = ApiClient.convertToType(data['referrer'], 'String');
      if (data.hasOwnProperty('screen_height'))
        obj.screen_height = ApiClient.convertToType(data['screen_height'], 'Number');
      if (data.hasOwnProperty('screen_width'))
        obj.screen_width = ApiClient.convertToType(data['screen_width'], 'Number');
      if (data.hasOwnProperty('time_on_Site'))
        obj.time_on_Site = ApiClient.convertToType(data['time_on_Site'], 'Number');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ApiClient.convertToType(data['user_agent'], 'String');
      if (data.hasOwnProperty('user_ip'))
        obj.user_ip = ApiClient.convertToType(data['user_ip'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} bot
   */
  exports.prototype.bot = undefined;

  /**
   * @member {Boolean} bounce
   */
  exports.prototype.bounce = undefined;

  /**
   * @member {String} channel
   */
  exports.prototype.channel = undefined;

  /**
   * @member {Boolean} device_switch_detected
   */
  exports.prototype.device_switch_detected = undefined;

  /**
   * @member {Boolean} fake_bot
   */
  exports.prototype.fake_bot = undefined;

  /**
   * @member {String} geolocation_country
   */
  exports.prototype.geolocation_country = undefined;

  /**
   * @member {Number} geolocation_latitude
   */
  exports.prototype.geolocation_latitude = undefined;

  /**
   * @member {Number} geolocation_longitude
   */
  exports.prototype.geolocation_longitude = undefined;

  /**
   * @member {String} geolocation_province
   */
  exports.prototype.geolocation_province = undefined;

  /**
   * @member {Boolean} no_cookie_support
   */
  exports.prototype.no_cookie_support = undefined;

  /**
   * @member {Boolean} prefetch
   */
  exports.prototype.prefetch = undefined;

  /**
   * @member {String} referrer
   */
  exports.prototype.referrer = undefined;

  /**
   * @member {Number} screen_height
   */
  exports.prototype.screen_height = undefined;

  /**
   * @member {Number} screen_width
   */
  exports.prototype.screen_width = undefined;

  /**
   * @member {Number} time_on_Site
   */
  exports.prototype.time_on_Site = undefined;

  /**
   * @member {String} user_agent
   */
  exports.prototype.user_agent = undefined;

  /**
   * @member {String} user_ip
   */
  exports.prototype.user_ip = undefined;

  return exports;

}));
