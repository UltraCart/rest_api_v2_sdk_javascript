"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemGoogleProductSearch model module.
 * @module com.ultracart.admin.v2.models/ItemGoogleProductSearch
 * @version 4.0.25-RC
 */
var ItemGoogleProductSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemGoogleProductSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemGoogleProductSearch
   */
  function ItemGoogleProductSearch() {
    _classCallCheck(this, ItemGoogleProductSearch);

    ItemGoogleProductSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemGoogleProductSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemGoogleProductSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} The populated <code>ItemGoogleProductSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemGoogleProductSearch();

        if (data.hasOwnProperty('adwords_grouping')) {
          obj['adwords_grouping'] = _ApiClient["default"].convertToType(data['adwords_grouping'], 'String');
        }

        if (data.hasOwnProperty('adwords_label1')) {
          obj['adwords_label1'] = _ApiClient["default"].convertToType(data['adwords_label1'], 'String');
        }

        if (data.hasOwnProperty('adwords_label2')) {
          obj['adwords_label2'] = _ApiClient["default"].convertToType(data['adwords_label2'], 'String');
        }

        if (data.hasOwnProperty('adwords_label3')) {
          obj['adwords_label3'] = _ApiClient["default"].convertToType(data['adwords_label3'], 'String');
        }

        if (data.hasOwnProperty('adwords_label4')) {
          obj['adwords_label4'] = _ApiClient["default"].convertToType(data['adwords_label4'], 'String');
        }

        if (data.hasOwnProperty('adwords_label5')) {
          obj['adwords_label5'] = _ApiClient["default"].convertToType(data['adwords_label5'], 'String');
        }

        if (data.hasOwnProperty('age_group')) {
          obj['age_group'] = _ApiClient["default"].convertToType(data['age_group'], 'String');
        }

        if (data.hasOwnProperty('available_at_physical_store')) {
          obj['available_at_physical_store'] = _ApiClient["default"].convertToType(data['available_at_physical_store'], 'Boolean');
        }

        if (data.hasOwnProperty('book_author')) {
          obj['book_author'] = _ApiClient["default"].convertToType(data['book_author'], 'String');
        }

        if (data.hasOwnProperty('book_format')) {
          obj['book_format'] = _ApiClient["default"].convertToType(data['book_format'], 'String');
        }

        if (data.hasOwnProperty('book_isbn')) {
          obj['book_isbn'] = _ApiClient["default"].convertToType(data['book_isbn'], 'String');
        }

        if (data.hasOwnProperty('book_publisher')) {
          obj['book_publisher'] = _ApiClient["default"].convertToType(data['book_publisher'], 'String');
        }

        if (data.hasOwnProperty('category_description')) {
          obj['category_description'] = _ApiClient["default"].convertToType(data['category_description'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], 'String');
        }

        if (data.hasOwnProperty('custom_label0')) {
          obj['custom_label0'] = _ApiClient["default"].convertToType(data['custom_label0'], 'String');
        }

        if (data.hasOwnProperty('custom_label1')) {
          obj['custom_label1'] = _ApiClient["default"].convertToType(data['custom_label1'], 'String');
        }

        if (data.hasOwnProperty('custom_label2')) {
          obj['custom_label2'] = _ApiClient["default"].convertToType(data['custom_label2'], 'String');
        }

        if (data.hasOwnProperty('custom_label3')) {
          obj['custom_label3'] = _ApiClient["default"].convertToType(data['custom_label3'], 'String');
        }

        if (data.hasOwnProperty('custom_label4')) {
          obj['custom_label4'] = _ApiClient["default"].convertToType(data['custom_label4'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], 'String');
        }

        if (data.hasOwnProperty('google_product_category')) {
          obj['google_product_category'] = _ApiClient["default"].convertToType(data['google_product_category'], 'String');
        }

        if (data.hasOwnProperty('music_artist')) {
          obj['music_artist'] = _ApiClient["default"].convertToType(data['music_artist'], 'String');
        }

        if (data.hasOwnProperty('music_format')) {
          obj['music_format'] = _ApiClient["default"].convertToType(data['music_format'], 'String');
        }

        if (data.hasOwnProperty('music_release_date')) {
          obj['music_release_date'] = _ApiClient["default"].convertToType(data['music_release_date'], 'String');
        }

        if (data.hasOwnProperty('omit_from_feed')) {
          obj['omit_from_feed'] = _ApiClient["default"].convertToType(data['omit_from_feed'], 'Boolean');
        }

        if (data.hasOwnProperty('product_type')) {
          obj['product_type'] = _ApiClient["default"].convertToType(data['product_type'], 'String');
        }

        if (data.hasOwnProperty('promotion_id1')) {
          obj['promotion_id1'] = _ApiClient["default"].convertToType(data['promotion_id1'], 'String');
        }

        if (data.hasOwnProperty('promotion_id10')) {
          obj['promotion_id10'] = _ApiClient["default"].convertToType(data['promotion_id10'], 'String');
        }

        if (data.hasOwnProperty('promotion_id2')) {
          obj['promotion_id2'] = _ApiClient["default"].convertToType(data['promotion_id2'], 'String');
        }

        if (data.hasOwnProperty('promotion_id3')) {
          obj['promotion_id3'] = _ApiClient["default"].convertToType(data['promotion_id3'], 'String');
        }

        if (data.hasOwnProperty('promotion_id4')) {
          obj['promotion_id4'] = _ApiClient["default"].convertToType(data['promotion_id4'], 'String');
        }

        if (data.hasOwnProperty('promotion_id5')) {
          obj['promotion_id5'] = _ApiClient["default"].convertToType(data['promotion_id5'], 'String');
        }

        if (data.hasOwnProperty('promotion_id6')) {
          obj['promotion_id6'] = _ApiClient["default"].convertToType(data['promotion_id6'], 'String');
        }

        if (data.hasOwnProperty('promotion_id7')) {
          obj['promotion_id7'] = _ApiClient["default"].convertToType(data['promotion_id7'], 'String');
        }

        if (data.hasOwnProperty('promotion_id8')) {
          obj['promotion_id8'] = _ApiClient["default"].convertToType(data['promotion_id8'], 'String');
        }

        if (data.hasOwnProperty('promotion_id9')) {
          obj['promotion_id9'] = _ApiClient["default"].convertToType(data['promotion_id9'], 'String');
        }

        if (data.hasOwnProperty('search_dts')) {
          obj['search_dts'] = _ApiClient["default"].convertToType(data['search_dts'], 'String');
        }

        if (data.hasOwnProperty('search_lowest_price')) {
          obj['search_lowest_price'] = _ApiClient["default"].convertToType(data['search_lowest_price'], 'Number');
        }

        if (data.hasOwnProperty('search_lowest_url')) {
          obj['search_lowest_url'] = _ApiClient["default"].convertToType(data['search_lowest_url'], 'String');
        }

        if (data.hasOwnProperty('search_position')) {
          obj['search_position'] = _ApiClient["default"].convertToType(data['search_position'], 'Number');
        }

        if (data.hasOwnProperty('shippingLabel')) {
          obj['shippingLabel'] = _ApiClient["default"].convertToType(data['shippingLabel'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }

        if (data.hasOwnProperty('video_director')) {
          obj['video_director'] = _ApiClient["default"].convertToType(data['video_director'], 'String');
        }

        if (data.hasOwnProperty('video_format')) {
          obj['video_format'] = _ApiClient["default"].convertToType(data['video_format'], 'String');
        }

        if (data.hasOwnProperty('video_rating')) {
          obj['video_rating'] = _ApiClient["default"].convertToType(data['video_rating'], 'String');
        }

        if (data.hasOwnProperty('video_release_date')) {
          obj['video_release_date'] = _ApiClient["default"].convertToType(data['video_release_date'], 'String');
        }

        if (data.hasOwnProperty('video_starring')) {
          obj['video_starring'] = _ApiClient["default"].convertToType(data['video_starring'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemGoogleProductSearch;
}();
/**
 * Adwords grouping
 * @member {String} adwords_grouping
 */


ItemGoogleProductSearch.prototype['adwords_grouping'] = undefined;
/**
 * Adwords label 1
 * @member {String} adwords_label1
 */

ItemGoogleProductSearch.prototype['adwords_label1'] = undefined;
/**
 * Adwords label 2
 * @member {String} adwords_label2
 */

ItemGoogleProductSearch.prototype['adwords_label2'] = undefined;
/**
 * Adwords label 3
 * @member {String} adwords_label3
 */

ItemGoogleProductSearch.prototype['adwords_label3'] = undefined;
/**
 * Adwords label 4
 * @member {String} adwords_label4
 */

ItemGoogleProductSearch.prototype['adwords_label4'] = undefined;
/**
 * Adwords label 5
 * @member {String} adwords_label5
 */

ItemGoogleProductSearch.prototype['adwords_label5'] = undefined;
/**
 * Age group
 * @member {String} age_group
 */

ItemGoogleProductSearch.prototype['age_group'] = undefined;
/**
 * Available at physical store
 * @member {Boolean} available_at_physical_store
 */

ItemGoogleProductSearch.prototype['available_at_physical_store'] = undefined;
/**
 * Book - author
 * @member {String} book_author
 */

ItemGoogleProductSearch.prototype['book_author'] = undefined;
/**
 * Book - format
 * @member {String} book_format
 */

ItemGoogleProductSearch.prototype['book_format'] = undefined;
/**
 * Bood - ISBN
 * @member {String} book_isbn
 */

ItemGoogleProductSearch.prototype['book_isbn'] = undefined;
/**
 * Book - publisher
 * @member {String} book_publisher
 */

ItemGoogleProductSearch.prototype['book_publisher'] = undefined;
/**
 * Category description
 * @member {String} category_description
 */

ItemGoogleProductSearch.prototype['category_description'] = undefined;
/**
 * Color
 * @member {String} color
 */

ItemGoogleProductSearch.prototype['color'] = undefined;
/**
 * Condition
 * @member {String} condition
 */

ItemGoogleProductSearch.prototype['condition'] = undefined;
/**
 * Custom label 0
 * @member {String} custom_label0
 */

ItemGoogleProductSearch.prototype['custom_label0'] = undefined;
/**
 * Custom label 1
 * @member {String} custom_label1
 */

ItemGoogleProductSearch.prototype['custom_label1'] = undefined;
/**
 * Custom label 2
 * @member {String} custom_label2
 */

ItemGoogleProductSearch.prototype['custom_label2'] = undefined;
/**
 * Custom label 3
 * @member {String} custom_label3
 */

ItemGoogleProductSearch.prototype['custom_label3'] = undefined;
/**
 * Custom label 4
 * @member {String} custom_label4
 */

ItemGoogleProductSearch.prototype['custom_label4'] = undefined;
/**
 * Gender
 * @member {String} gender
 */

ItemGoogleProductSearch.prototype['gender'] = undefined;
/**
 * Google product category
 * @member {String} google_product_category
 */

ItemGoogleProductSearch.prototype['google_product_category'] = undefined;
/**
 * Music - artist
 * @member {String} music_artist
 */

ItemGoogleProductSearch.prototype['music_artist'] = undefined;
/**
 * Music - format
 * @member {String} music_format
 */

ItemGoogleProductSearch.prototype['music_format'] = undefined;
/**
 * Music - release date
 * @member {String} music_release_date
 */

ItemGoogleProductSearch.prototype['music_release_date'] = undefined;
/**
 * Omit from feed
 * @member {Boolean} omit_from_feed
 */

ItemGoogleProductSearch.prototype['omit_from_feed'] = undefined;
/**
 * Product type
 * @member {String} product_type
 */

ItemGoogleProductSearch.prototype['product_type'] = undefined;
/**
 * Promotion ID 1
 * @member {String} promotion_id1
 */

ItemGoogleProductSearch.prototype['promotion_id1'] = undefined;
/**
 * Promotion ID 10
 * @member {String} promotion_id10
 */

ItemGoogleProductSearch.prototype['promotion_id10'] = undefined;
/**
 * Promotion ID 2
 * @member {String} promotion_id2
 */

ItemGoogleProductSearch.prototype['promotion_id2'] = undefined;
/**
 * Promotion ID 3
 * @member {String} promotion_id3
 */

ItemGoogleProductSearch.prototype['promotion_id3'] = undefined;
/**
 * Promotion ID 4
 * @member {String} promotion_id4
 */

ItemGoogleProductSearch.prototype['promotion_id4'] = undefined;
/**
 * Promotion ID 5
 * @member {String} promotion_id5
 */

ItemGoogleProductSearch.prototype['promotion_id5'] = undefined;
/**
 * Promotion ID 6
 * @member {String} promotion_id6
 */

ItemGoogleProductSearch.prototype['promotion_id6'] = undefined;
/**
 * Promotion ID 7
 * @member {String} promotion_id7
 */

ItemGoogleProductSearch.prototype['promotion_id7'] = undefined;
/**
 * Promotion ID 8
 * @member {String} promotion_id8
 */

ItemGoogleProductSearch.prototype['promotion_id8'] = undefined;
/**
 * Promotion ID 9
 * @member {String} promotion_id9
 */

ItemGoogleProductSearch.prototype['promotion_id9'] = undefined;
/**
 * Search date/time
 * @member {String} search_dts
 */

ItemGoogleProductSearch.prototype['search_dts'] = undefined;
/**
 * Search lowest price
 * @member {Number} search_lowest_price
 */

ItemGoogleProductSearch.prototype['search_lowest_price'] = undefined;
/**
 * Search lowest URL
 * @member {String} search_lowest_url
 */

ItemGoogleProductSearch.prototype['search_lowest_url'] = undefined;
/**
 * Search position
 * @member {Number} search_position
 */

ItemGoogleProductSearch.prototype['search_position'] = undefined;
/**
 * @member {String} shippingLabel
 */

ItemGoogleProductSearch.prototype['shippingLabel'] = undefined;
/**
 * Size
 * @member {String} size
 */

ItemGoogleProductSearch.prototype['size'] = undefined;
/**
 * Video - director
 * @member {String} video_director
 */

ItemGoogleProductSearch.prototype['video_director'] = undefined;
/**
 * Video - format
 * @member {String} video_format
 */

ItemGoogleProductSearch.prototype['video_format'] = undefined;
/**
 * Video - rating
 * @member {String} video_rating
 */

ItemGoogleProductSearch.prototype['video_rating'] = undefined;
/**
 * Video - release date
 * @member {String} video_release_date
 */

ItemGoogleProductSearch.prototype['video_release_date'] = undefined;
/**
 * Video - starring
 * @member {String} video_starring
 */

ItemGoogleProductSearch.prototype['video_starring'] = undefined;
var _default = ItemGoogleProductSearch;
exports["default"] = _default;