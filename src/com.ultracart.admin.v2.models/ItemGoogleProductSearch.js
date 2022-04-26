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
    root.UltraCartRestApiV2.ItemGoogleProductSearch = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemGoogleProductSearch model module.
   * @module com.ultracart.admin.v2.models/ItemGoogleProductSearch
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>ItemGoogleProductSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemGoogleProductSearch
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemGoogleProductSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} The populated <code>ItemGoogleProductSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adwords_grouping'))
        obj.adwords_grouping = ApiClient.convertToType(data['adwords_grouping'], 'String');
      if (data.hasOwnProperty('adwords_label1'))
        obj.adwords_label1 = ApiClient.convertToType(data['adwords_label1'], 'String');
      if (data.hasOwnProperty('adwords_label2'))
        obj.adwords_label2 = ApiClient.convertToType(data['adwords_label2'], 'String');
      if (data.hasOwnProperty('adwords_label3'))
        obj.adwords_label3 = ApiClient.convertToType(data['adwords_label3'], 'String');
      if (data.hasOwnProperty('adwords_label4'))
        obj.adwords_label4 = ApiClient.convertToType(data['adwords_label4'], 'String');
      if (data.hasOwnProperty('adwords_label5'))
        obj.adwords_label5 = ApiClient.convertToType(data['adwords_label5'], 'String');
      if (data.hasOwnProperty('age_group'))
        obj.age_group = ApiClient.convertToType(data['age_group'], 'String');
      if (data.hasOwnProperty('available_at_physical_store'))
        obj.available_at_physical_store = ApiClient.convertToType(data['available_at_physical_store'], 'Boolean');
      if (data.hasOwnProperty('book_author'))
        obj.book_author = ApiClient.convertToType(data['book_author'], 'String');
      if (data.hasOwnProperty('book_format'))
        obj.book_format = ApiClient.convertToType(data['book_format'], 'String');
      if (data.hasOwnProperty('book_isbn'))
        obj.book_isbn = ApiClient.convertToType(data['book_isbn'], 'String');
      if (data.hasOwnProperty('book_publisher'))
        obj.book_publisher = ApiClient.convertToType(data['book_publisher'], 'String');
      if (data.hasOwnProperty('category_description'))
        obj.category_description = ApiClient.convertToType(data['category_description'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('condition'))
        obj.condition = ApiClient.convertToType(data['condition'], 'String');
      if (data.hasOwnProperty('custom_label0'))
        obj.custom_label0 = ApiClient.convertToType(data['custom_label0'], 'String');
      if (data.hasOwnProperty('custom_label1'))
        obj.custom_label1 = ApiClient.convertToType(data['custom_label1'], 'String');
      if (data.hasOwnProperty('custom_label2'))
        obj.custom_label2 = ApiClient.convertToType(data['custom_label2'], 'String');
      if (data.hasOwnProperty('custom_label3'))
        obj.custom_label3 = ApiClient.convertToType(data['custom_label3'], 'String');
      if (data.hasOwnProperty('custom_label4'))
        obj.custom_label4 = ApiClient.convertToType(data['custom_label4'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('google_product_category'))
        obj.google_product_category = ApiClient.convertToType(data['google_product_category'], 'String');
      if (data.hasOwnProperty('music_artist'))
        obj.music_artist = ApiClient.convertToType(data['music_artist'], 'String');
      if (data.hasOwnProperty('music_format'))
        obj.music_format = ApiClient.convertToType(data['music_format'], 'String');
      if (data.hasOwnProperty('music_release_date'))
        obj.music_release_date = ApiClient.convertToType(data['music_release_date'], 'String');
      if (data.hasOwnProperty('omit_from_feed'))
        obj.omit_from_feed = ApiClient.convertToType(data['omit_from_feed'], 'Boolean');
      if (data.hasOwnProperty('product_type'))
        obj.product_type = ApiClient.convertToType(data['product_type'], 'String');
      if (data.hasOwnProperty('promotion_id1'))
        obj.promotion_id1 = ApiClient.convertToType(data['promotion_id1'], 'String');
      if (data.hasOwnProperty('promotion_id10'))
        obj.promotion_id10 = ApiClient.convertToType(data['promotion_id10'], 'String');
      if (data.hasOwnProperty('promotion_id2'))
        obj.promotion_id2 = ApiClient.convertToType(data['promotion_id2'], 'String');
      if (data.hasOwnProperty('promotion_id3'))
        obj.promotion_id3 = ApiClient.convertToType(data['promotion_id3'], 'String');
      if (data.hasOwnProperty('promotion_id4'))
        obj.promotion_id4 = ApiClient.convertToType(data['promotion_id4'], 'String');
      if (data.hasOwnProperty('promotion_id5'))
        obj.promotion_id5 = ApiClient.convertToType(data['promotion_id5'], 'String');
      if (data.hasOwnProperty('promotion_id6'))
        obj.promotion_id6 = ApiClient.convertToType(data['promotion_id6'], 'String');
      if (data.hasOwnProperty('promotion_id7'))
        obj.promotion_id7 = ApiClient.convertToType(data['promotion_id7'], 'String');
      if (data.hasOwnProperty('promotion_id8'))
        obj.promotion_id8 = ApiClient.convertToType(data['promotion_id8'], 'String');
      if (data.hasOwnProperty('promotion_id9'))
        obj.promotion_id9 = ApiClient.convertToType(data['promotion_id9'], 'String');
      if (data.hasOwnProperty('search_dts'))
        obj.search_dts = ApiClient.convertToType(data['search_dts'], 'String');
      if (data.hasOwnProperty('search_lowest_price'))
        obj.search_lowest_price = ApiClient.convertToType(data['search_lowest_price'], 'Number');
      if (data.hasOwnProperty('search_lowest_url'))
        obj.search_lowest_url = ApiClient.convertToType(data['search_lowest_url'], 'String');
      if (data.hasOwnProperty('search_position'))
        obj.search_position = ApiClient.convertToType(data['search_position'], 'Number');
      if (data.hasOwnProperty('shippingLabel'))
        obj.shippingLabel = ApiClient.convertToType(data['shippingLabel'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'String');
      if (data.hasOwnProperty('video_director'))
        obj.video_director = ApiClient.convertToType(data['video_director'], 'String');
      if (data.hasOwnProperty('video_format'))
        obj.video_format = ApiClient.convertToType(data['video_format'], 'String');
      if (data.hasOwnProperty('video_rating'))
        obj.video_rating = ApiClient.convertToType(data['video_rating'], 'String');
      if (data.hasOwnProperty('video_release_date'))
        obj.video_release_date = ApiClient.convertToType(data['video_release_date'], 'String');
      if (data.hasOwnProperty('video_starring'))
        obj.video_starring = ApiClient.convertToType(data['video_starring'], 'String');
    }
    return obj;
  }

  /**
   * Adwords grouping
   * @member {String} adwords_grouping
   */
  exports.prototype.adwords_grouping = undefined;

  /**
   * Adwords label 1
   * @member {String} adwords_label1
   */
  exports.prototype.adwords_label1 = undefined;

  /**
   * Adwords label 2
   * @member {String} adwords_label2
   */
  exports.prototype.adwords_label2 = undefined;

  /**
   * Adwords label 3
   * @member {String} adwords_label3
   */
  exports.prototype.adwords_label3 = undefined;

  /**
   * Adwords label 4
   * @member {String} adwords_label4
   */
  exports.prototype.adwords_label4 = undefined;

  /**
   * Adwords label 5
   * @member {String} adwords_label5
   */
  exports.prototype.adwords_label5 = undefined;

  /**
   * Age group
   * @member {String} age_group
   */
  exports.prototype.age_group = undefined;

  /**
   * Available at physical store
   * @member {Boolean} available_at_physical_store
   */
  exports.prototype.available_at_physical_store = undefined;

  /**
   * Book - author
   * @member {String} book_author
   */
  exports.prototype.book_author = undefined;

  /**
   * Book - format
   * @member {String} book_format
   */
  exports.prototype.book_format = undefined;

  /**
   * Bood - ISBN
   * @member {String} book_isbn
   */
  exports.prototype.book_isbn = undefined;

  /**
   * Book - publisher
   * @member {String} book_publisher
   */
  exports.prototype.book_publisher = undefined;

  /**
   * Category description
   * @member {String} category_description
   */
  exports.prototype.category_description = undefined;

  /**
   * Color
   * @member {String} color
   */
  exports.prototype.color = undefined;

  /**
   * Condition
   * @member {String} condition
   */
  exports.prototype.condition = undefined;

  /**
   * Custom label 0
   * @member {String} custom_label0
   */
  exports.prototype.custom_label0 = undefined;

  /**
   * Custom label 1
   * @member {String} custom_label1
   */
  exports.prototype.custom_label1 = undefined;

  /**
   * Custom label 2
   * @member {String} custom_label2
   */
  exports.prototype.custom_label2 = undefined;

  /**
   * Custom label 3
   * @member {String} custom_label3
   */
  exports.prototype.custom_label3 = undefined;

  /**
   * Custom label 4
   * @member {String} custom_label4
   */
  exports.prototype.custom_label4 = undefined;

  /**
   * Gender
   * @member {String} gender
   */
  exports.prototype.gender = undefined;

  /**
   * Google product category
   * @member {String} google_product_category
   */
  exports.prototype.google_product_category = undefined;

  /**
   * Music - artist
   * @member {String} music_artist
   */
  exports.prototype.music_artist = undefined;

  /**
   * Music - format
   * @member {String} music_format
   */
  exports.prototype.music_format = undefined;

  /**
   * Music - release date
   * @member {String} music_release_date
   */
  exports.prototype.music_release_date = undefined;

  /**
   * Omit from feed
   * @member {Boolean} omit_from_feed
   */
  exports.prototype.omit_from_feed = undefined;

  /**
   * Product type
   * @member {String} product_type
   */
  exports.prototype.product_type = undefined;

  /**
   * Promotion ID 1
   * @member {String} promotion_id1
   */
  exports.prototype.promotion_id1 = undefined;

  /**
   * Promotion ID 10
   * @member {String} promotion_id10
   */
  exports.prototype.promotion_id10 = undefined;

  /**
   * Promotion ID 2
   * @member {String} promotion_id2
   */
  exports.prototype.promotion_id2 = undefined;

  /**
   * Promotion ID 3
   * @member {String} promotion_id3
   */
  exports.prototype.promotion_id3 = undefined;

  /**
   * Promotion ID 4
   * @member {String} promotion_id4
   */
  exports.prototype.promotion_id4 = undefined;

  /**
   * Promotion ID 5
   * @member {String} promotion_id5
   */
  exports.prototype.promotion_id5 = undefined;

  /**
   * Promotion ID 6
   * @member {String} promotion_id6
   */
  exports.prototype.promotion_id6 = undefined;

  /**
   * Promotion ID 7
   * @member {String} promotion_id7
   */
  exports.prototype.promotion_id7 = undefined;

  /**
   * Promotion ID 8
   * @member {String} promotion_id8
   */
  exports.prototype.promotion_id8 = undefined;

  /**
   * Promotion ID 9
   * @member {String} promotion_id9
   */
  exports.prototype.promotion_id9 = undefined;

  /**
   * Search date/time
   * @member {String} search_dts
   */
  exports.prototype.search_dts = undefined;

  /**
   * Search lowest price
   * @member {Number} search_lowest_price
   */
  exports.prototype.search_lowest_price = undefined;

  /**
   * Search lowest URL
   * @member {String} search_lowest_url
   */
  exports.prototype.search_lowest_url = undefined;

  /**
   * Search position
   * @member {Number} search_position
   */
  exports.prototype.search_position = undefined;

  /**
   * @member {String} shippingLabel
   */
  exports.prototype.shippingLabel = undefined;

  /**
   * Size
   * @member {String} size
   */
  exports.prototype.size = undefined;

  /**
   * Video - director
   * @member {String} video_director
   */
  exports.prototype.video_director = undefined;

  /**
   * Video - format
   * @member {String} video_format
   */
  exports.prototype.video_format = undefined;

  /**
   * Video - rating
   * @member {String} video_rating
   */
  exports.prototype.video_rating = undefined;

  /**
   * Video - release date
   * @member {String} video_release_date
   */
  exports.prototype.video_release_date = undefined;

  /**
   * Video - starring
   * @member {String} video_starring
   */
  exports.prototype.video_starring = undefined;

  return exports;

}));
