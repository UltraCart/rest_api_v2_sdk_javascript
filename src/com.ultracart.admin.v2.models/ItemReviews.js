/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.ItemReviews = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemReviews model module.
   * @module com.ultracart.admin.v2.models/ItemReviews
   * @version 2.4.87
   */

  /**
   * Constructs a new <code>ItemReviews</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReviews
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ItemReviews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemReviews} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemReviews} The populated <code>ItemReviews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('has_approved_review')) {
        obj['has_approved_review'] = ApiClient.convertToType(data['has_approved_review'], 'Boolean');
      }
      if (data.hasOwnProperty('has_review')) {
        obj['has_review'] = ApiClient.convertToType(data['has_review'], 'Boolean');
      }
      if (data.hasOwnProperty('review_count')) {
        obj['review_count'] = ApiClient.convertToType(data['review_count'], 'Number');
      }
      if (data.hasOwnProperty('review_overall')) {
        obj['review_overall'] = ApiClient.convertToType(data['review_overall'], 'Number');
      }
      if (data.hasOwnProperty('review_template_name')) {
        obj['review_template_name'] = ApiClient.convertToType(data['review_template_name'], 'String');
      }
      if (data.hasOwnProperty('review_template_oid')) {
        obj['review_template_oid'] = ApiClient.convertToType(data['review_template_oid'], 'Number');
      }
      if (data.hasOwnProperty('reviewable')) {
        obj['reviewable'] = ApiClient.convertToType(data['reviewable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * True if the item has an approved review
   * @member {Boolean} has_approved_review
   */
  exports.prototype['has_approved_review'] = undefined;
  /**
   * True if the item has a review
   * @member {Boolean} has_review
   */
  exports.prototype['has_review'] = undefined;
  /**
   * Number of approved reviews
   * @member {Number} review_count
   */
  exports.prototype['review_count'] = undefined;
  /**
   * Overall score of reviews
   * @member {Number} review_overall
   */
  exports.prototype['review_overall'] = undefined;
  /**
   * Review template name
   * @member {String} review_template_name
   */
  exports.prototype['review_template_name'] = undefined;
  /**
   * Review template object identifier
   * @member {Number} review_template_oid
   */
  exports.prototype['review_template_oid'] = undefined;
  /**
   * True if the item is reviewable
   * @member {Boolean} reviewable
   */
  exports.prototype['reviewable'] = undefined;



  return exports;
}));


