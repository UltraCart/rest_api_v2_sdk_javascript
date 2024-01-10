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
    root.UltraCartRestApiV2.ItemReview = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemReview model module.
   * @module com.ultracart.admin.v2.models/ItemReview
   * @version 3.10.179
   */

  /**
   * Constructs a new <code>ItemReview</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReview
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemReview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemReview} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemReview} The populated <code>ItemReview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('featured'))
        obj.featured = ApiClient.convertToType(data['featured'], 'Boolean');
      if (data.hasOwnProperty('helperful_no_votes'))
        obj.helperful_no_votes = ApiClient.convertToType(data['helperful_no_votes'], 'Number');
      if (data.hasOwnProperty('helpful_yes_votes'))
        obj.helpful_yes_votes = ApiClient.convertToType(data['helpful_yes_votes'], 'Number');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('rating_name1'))
        obj.rating_name1 = ApiClient.convertToType(data['rating_name1'], 'String');
      if (data.hasOwnProperty('rating_name10'))
        obj.rating_name10 = ApiClient.convertToType(data['rating_name10'], 'String');
      if (data.hasOwnProperty('rating_name2'))
        obj.rating_name2 = ApiClient.convertToType(data['rating_name2'], 'String');
      if (data.hasOwnProperty('rating_name3'))
        obj.rating_name3 = ApiClient.convertToType(data['rating_name3'], 'String');
      if (data.hasOwnProperty('rating_name4'))
        obj.rating_name4 = ApiClient.convertToType(data['rating_name4'], 'String');
      if (data.hasOwnProperty('rating_name5'))
        obj.rating_name5 = ApiClient.convertToType(data['rating_name5'], 'String');
      if (data.hasOwnProperty('rating_name6'))
        obj.rating_name6 = ApiClient.convertToType(data['rating_name6'], 'String');
      if (data.hasOwnProperty('rating_name7'))
        obj.rating_name7 = ApiClient.convertToType(data['rating_name7'], 'String');
      if (data.hasOwnProperty('rating_name8'))
        obj.rating_name8 = ApiClient.convertToType(data['rating_name8'], 'String');
      if (data.hasOwnProperty('rating_name9'))
        obj.rating_name9 = ApiClient.convertToType(data['rating_name9'], 'String');
      if (data.hasOwnProperty('rating_score1'))
        obj.rating_score1 = ApiClient.convertToType(data['rating_score1'], 'Number');
      if (data.hasOwnProperty('rating_score10'))
        obj.rating_score10 = ApiClient.convertToType(data['rating_score10'], 'Number');
      if (data.hasOwnProperty('rating_score2'))
        obj.rating_score2 = ApiClient.convertToType(data['rating_score2'], 'Number');
      if (data.hasOwnProperty('rating_score3'))
        obj.rating_score3 = ApiClient.convertToType(data['rating_score3'], 'Number');
      if (data.hasOwnProperty('rating_score4'))
        obj.rating_score4 = ApiClient.convertToType(data['rating_score4'], 'Number');
      if (data.hasOwnProperty('rating_score5'))
        obj.rating_score5 = ApiClient.convertToType(data['rating_score5'], 'Number');
      if (data.hasOwnProperty('rating_score6'))
        obj.rating_score6 = ApiClient.convertToType(data['rating_score6'], 'Number');
      if (data.hasOwnProperty('rating_score7'))
        obj.rating_score7 = ApiClient.convertToType(data['rating_score7'], 'Number');
      if (data.hasOwnProperty('rating_score8'))
        obj.rating_score8 = ApiClient.convertToType(data['rating_score8'], 'Number');
      if (data.hasOwnProperty('rating_score9'))
        obj.rating_score9 = ApiClient.convertToType(data['rating_score9'], 'Number');
      if (data.hasOwnProperty('recommend_store_to_friend'))
        obj.recommend_store_to_friend = ApiClient.convertToType(data['recommend_store_to_friend'], 'Number');
      if (data.hasOwnProperty('recommend_to_friend'))
        obj.recommend_to_friend = ApiClient.convertToType(data['recommend_to_friend'], 'Boolean');
      if (data.hasOwnProperty('review'))
        obj.review = ApiClient.convertToType(data['review'], 'String');
      if (data.hasOwnProperty('review_oid'))
        obj.review_oid = ApiClient.convertToType(data['review_oid'], 'Number');
      if (data.hasOwnProperty('reviewed_nickname'))
        obj.reviewed_nickname = ApiClient.convertToType(data['reviewed_nickname'], 'String');
      if (data.hasOwnProperty('reviewer_email'))
        obj.reviewer_email = ApiClient.convertToType(data['reviewer_email'], 'String');
      if (data.hasOwnProperty('reviewer_location'))
        obj.reviewer_location = ApiClient.convertToType(data['reviewer_location'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('store_feedback'))
        obj.store_feedback = ApiClient.convertToType(data['store_feedback'], 'String');
      if (data.hasOwnProperty('submitted_dts'))
        obj.submitted_dts = ApiClient.convertToType(data['submitted_dts'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * @member {Boolean} featured
   */
  exports.prototype.featured = undefined;

  /**
   * @member {Number} helperful_no_votes
   */
  exports.prototype.helperful_no_votes = undefined;

  /**
   * @member {Number} helpful_yes_votes
   */
  exports.prototype.helpful_yes_votes = undefined;

  /**
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {Number} overall
   */
  exports.prototype.overall = undefined;

  /**
   * Rating Name 1
   * @member {String} rating_name1
   */
  exports.prototype.rating_name1 = undefined;

  /**
   * Rating Name 10
   * @member {String} rating_name10
   */
  exports.prototype.rating_name10 = undefined;

  /**
   * Rating Name 2
   * @member {String} rating_name2
   */
  exports.prototype.rating_name2 = undefined;

  /**
   * Rating Name 3
   * @member {String} rating_name3
   */
  exports.prototype.rating_name3 = undefined;

  /**
   * Rating Name 4
   * @member {String} rating_name4
   */
  exports.prototype.rating_name4 = undefined;

  /**
   * Rating Name 5
   * @member {String} rating_name5
   */
  exports.prototype.rating_name5 = undefined;

  /**
   * Rating Name 6
   * @member {String} rating_name6
   */
  exports.prototype.rating_name6 = undefined;

  /**
   * Rating Name 7
   * @member {String} rating_name7
   */
  exports.prototype.rating_name7 = undefined;

  /**
   * Rating Name 8
   * @member {String} rating_name8
   */
  exports.prototype.rating_name8 = undefined;

  /**
   * Rating Name 9
   * @member {String} rating_name9
   */
  exports.prototype.rating_name9 = undefined;

  /**
   * @member {Number} rating_score1
   */
  exports.prototype.rating_score1 = undefined;

  /**
   * @member {Number} rating_score10
   */
  exports.prototype.rating_score10 = undefined;

  /**
   * @member {Number} rating_score2
   */
  exports.prototype.rating_score2 = undefined;

  /**
   * @member {Number} rating_score3
   */
  exports.prototype.rating_score3 = undefined;

  /**
   * @member {Number} rating_score4
   */
  exports.prototype.rating_score4 = undefined;

  /**
   * @member {Number} rating_score5
   */
  exports.prototype.rating_score5 = undefined;

  /**
   * @member {Number} rating_score6
   */
  exports.prototype.rating_score6 = undefined;

  /**
   * @member {Number} rating_score7
   */
  exports.prototype.rating_score7 = undefined;

  /**
   * @member {Number} rating_score8
   */
  exports.prototype.rating_score8 = undefined;

  /**
   * @member {Number} rating_score9
   */
  exports.prototype.rating_score9 = undefined;

  /**
   * @member {Number} recommend_store_to_friend
   */
  exports.prototype.recommend_store_to_friend = undefined;

  /**
   * @member {Boolean} recommend_to_friend
   */
  exports.prototype.recommend_to_friend = undefined;

  /**
   * Review
   * @member {String} review
   */
  exports.prototype.review = undefined;

  /**
   * @member {Number} review_oid
   */
  exports.prototype.review_oid = undefined;

  /**
   * Nickname
   * @member {String} reviewed_nickname
   */
  exports.prototype.reviewed_nickname = undefined;

  /**
   * Reviewer Email
   * @member {String} reviewer_email
   */
  exports.prototype.reviewer_email = undefined;

  /**
   * Location
   * @member {String} reviewer_location
   */
  exports.prototype.reviewer_location = undefined;

  /**
   * Status of the review
   * @member {module:com.ultracart.admin.v2.models/ItemReview.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Store Feedback
   * @member {String} store_feedback
   */
  exports.prototype.store_feedback = undefined;

  /**
   * Date/time of review submission
   * @member {String} submitted_dts
   */
  exports.prototype.submitted_dts = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype.title = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "approved"
     * @const
     */
    approved: "approved",

    /**
     * value: "unapproved"
     * @const
     */
    unapproved: "unapproved",

    /**
     * value: "rejected"
     * @const
     */
    rejected: "rejected",

    /**
     * value: "multimedia processing"
     * @const
     */
    multimedia_processing: "multimedia processing"
  };

  return exports;

}));
