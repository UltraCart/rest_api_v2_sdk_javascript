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
    root.UltraCartRestApiV2.ConversationSentiment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationSentiment model module.
   * @module com.ultracart.admin.v2.models/ConversationSentiment
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationSentiment</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSentiment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationSentiment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationSentiment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationSentiment} The populated <code>ConversationSentiment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_detect_sentiment'))
        obj.last_detect_sentiment = ApiClient.convertToType(data['last_detect_sentiment'], 'String');
      if (data.hasOwnProperty('mixed'))
        obj.mixed = ApiClient.convertToType(data['mixed'], 'Number');
      if (data.hasOwnProperty('negative'))
        obj.negative = ApiClient.convertToType(data['negative'], 'Number');
      if (data.hasOwnProperty('neutral'))
        obj.neutral = ApiClient.convertToType(data['neutral'], 'Number');
      if (data.hasOwnProperty('positive'))
        obj.positive = ApiClient.convertToType(data['positive'], 'Number');
      if (data.hasOwnProperty('sentiment'))
        obj.sentiment = ApiClient.convertToType(data['sentiment'], 'String');
    }
    return obj;
  }

  /**
   * The last time the detect sentiment was run on this conversation
   * @member {String} last_detect_sentiment
   */
  exports.prototype.last_detect_sentiment = undefined;

  /**
   * The mixed score
   * @member {Number} mixed
   */
  exports.prototype.mixed = undefined;

  /**
   * The negative score
   * @member {Number} negative
   */
  exports.prototype.negative = undefined;

  /**
   * The neutral score
   * @member {Number} neutral
   */
  exports.prototype.neutral = undefined;

  /**
   * The positive score
   * @member {Number} positive
   */
  exports.prototype.positive = undefined;

  /**
   * The overall sentiment
   * @member {module:com.ultracart.admin.v2.models/ConversationSentiment.SentimentEnum} sentiment
   */
  exports.prototype.sentiment = undefined;


  /**
   * Allowed values for the <code>sentiment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SentimentEnum = {
    /**
     * value: "POSITIVE"
     * @const
     */
    POSITIVE: "POSITIVE",

    /**
     * value: "NEUTRAL"
     * @const
     */
    NEUTRAL: "NEUTRAL",

    /**
     * value: "NEGATIVE"
     * @const
     */
    NEGATIVE: "NEGATIVE",

    /**
     * value: "MIXED"
     * @const
     */
    MIXED: "MIXED"
  };

  return exports;

}));
