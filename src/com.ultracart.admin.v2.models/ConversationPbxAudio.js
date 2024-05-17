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
    root.UltraCartRestApiV2.ConversationPbxAudio = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxAudio model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxAudio
   * @version 3.10.205
   */

  /**
   * Constructs a new <code>ConversationPbxAudio</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxAudio
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudio} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxAudio} The populated <code>ConversationPbxAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('audio_s3_listing_key'))
        obj.audio_s3_listing_key = ApiClient.convertToType(data['audio_s3_listing_key'], 'String');
      if (data.hasOwnProperty('conversation_pbx_audio_uuid'))
        obj.conversation_pbx_audio_uuid = ApiClient.convertToType(data['conversation_pbx_audio_uuid'], 'String');
      if (data.hasOwnProperty('default_hold_music'))
        obj.default_hold_music = ApiClient.convertToType(data['default_hold_music'], 'Boolean');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mime_type = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
    }
    return obj;
  }

  /**
   * Audio S3 Listing Key
   * @member {String} audio_s3_listing_key
   */
  exports.prototype.audio_s3_listing_key = undefined;

  /**
   * Conversation Pbx Audio UUID
   * @member {String} conversation_pbx_audio_uuid
   */
  exports.prototype.conversation_pbx_audio_uuid = undefined;

  /**
   * If true, this will be the default hold music
   * @member {Boolean} default_hold_music
   */
  exports.prototype.default_hold_music = undefined;

  /**
   * Description of this audio
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Filename
   * @member {String} filename
   */
  exports.prototype.filename = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Mime Type
   * @member {String} mime_type
   */
  exports.prototype.mime_type = undefined;

  /**
   * URL
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * User Id
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  /**
   * Version
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  return exports;

}));
