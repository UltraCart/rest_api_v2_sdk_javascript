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
    root.UltraCartRestApiV2.CustomerReviewer = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerReviewer model module.
   * @module com.ultracart.admin.v2.models/CustomerReviewer
   * @version 3.1.24
   */

  /**
   * Constructs a new <code>CustomerReviewer</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerReviewer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerReviewer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerReviewer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerReviewer} The populated <code>CustomerReviewer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auto_approve'))
        obj.auto_approve = ApiClient.convertToType(data['auto_approve'], 'Boolean');
      if (data.hasOwnProperty('average_overall_rating'))
        obj.average_overall_rating = ApiClient.convertToType(data['average_overall_rating'], 'Number');
      if (data.hasOwnProperty('expert'))
        obj.expert = ApiClient.convertToType(data['expert'], 'Boolean');
      if (data.hasOwnProperty('first_review'))
        obj.first_review = ApiClient.convertToType(data['first_review'], 'String');
      if (data.hasOwnProperty('last_review'))
        obj.last_review = ApiClient.convertToType(data['last_review'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (data.hasOwnProperty('number_helpful_review_votes'))
        obj.number_helpful_review_votes = ApiClient.convertToType(data['number_helpful_review_votes'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('reviews_contributed'))
        obj.reviews_contributed = ApiClient.convertToType(data['reviews_contributed'], 'Number');
    }
    return obj;
  }

  /**
   * True if reviewes from this customer profile should automatically be approved
   * @member {Boolean} auto_approve
   */
  exports.prototype.auto_approve = undefined;

  /**
   * Average overall rating of items reviewed
   * @member {Number} average_overall_rating
   */
  exports.prototype.average_overall_rating = undefined;

  /**
   * True if the customer is an expert
   * @member {Boolean} expert
   */
  exports.prototype.expert = undefined;

  /**
   * First review
   * @member {String} first_review
   */
  exports.prototype.first_review = undefined;

  /**
   * Last review
   * @member {String} last_review
   */
  exports.prototype.last_review = undefined;

  /**
   * Location of the reviewer
   * @member {String} location
   */
  exports.prototype.location = undefined;

  /**
   * Nickname of the reviewer
   * @member {String} nickname
   */
  exports.prototype.nickname = undefined;

  /**
   * Number of helpful review votes
   * @member {Number} number_helpful_review_votes
   */
  exports.prototype.number_helpful_review_votes = undefined;

  /**
   * Rank of this reviewer
   * @member {Number} rank
   */
  exports.prototype.rank = undefined;

  /**
   * Number of reviews contributed
   * @member {Number} reviews_contributed
   */
  exports.prototype.reviews_contributed = undefined;

  return exports;

}));
