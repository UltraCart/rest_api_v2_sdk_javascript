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
    define(['ApiClient', 'com.ultracart.admin.v2.models/HitPageViewMetaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HitPageViewMetaData'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.HitPageView = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.HitPageViewMetaData);
  }
}(this, function(ApiClient, HitPageViewMetaData) {
  'use strict';

  /**
   * The HitPageView model module.
   * @module com.ultracart.admin.v2.models/HitPageView
   * @version 3.10.179
   */

  /**
   * Constructs a new <code>HitPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/HitPageView
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>HitPageView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/HitPageView} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/HitPageView} The populated <code>HitPageView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bounce'))
        obj.bounce = ApiClient.convertToType(data['bounce'], 'Boolean');
      if (data.hasOwnProperty('meta_data'))
        obj.meta_data = ApiClient.convertToType(data['meta_data'], [HitPageViewMetaData]);
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('prefetch'))
        obj.prefetch = ApiClient.convertToType(data['prefetch'], 'Boolean');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('recording'))
        obj.recording = ApiClient.convertToType(data['recording'], 'Boolean');
      if (data.hasOwnProperty('redirect'))
        obj.redirect = ApiClient.convertToType(data['redirect'], 'Boolean');
      if (data.hasOwnProperty('referrer'))
        obj.referrer = ApiClient.convertToType(data['referrer'], 'String');
      if (data.hasOwnProperty('time_on_page'))
        obj.time_on_page = ApiClient.convertToType(data['time_on_page'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} bounce
   */
  exports.prototype.bounce = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/HitPageViewMetaData>} meta_data
   */
  exports.prototype.meta_data = undefined;

  /**
   * @member {String} method
   */
  exports.prototype.method = undefined;

  /**
   * @member {Boolean} prefetch
   */
  exports.prototype.prefetch = undefined;

  /**
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * @member {Boolean} recording
   */
  exports.prototype.recording = undefined;

  /**
   * @member {Boolean} redirect
   */
  exports.prototype.redirect = undefined;

  /**
   * @member {String} referrer
   */
  exports.prototype.referrer = undefined;

  /**
   * @member {Number} time_on_page
   */
  exports.prototype.time_on_page = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
