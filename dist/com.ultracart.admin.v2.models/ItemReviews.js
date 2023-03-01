"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemReview = _interopRequireDefault(require("./ItemReview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemReviews model module.
 * @module com.ultracart.admin.v2.models/ItemReviews
 * @version 4.0.137
 */
var ItemReviews = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemReviews</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReviews
   */
  function ItemReviews() {
    _classCallCheck(this, ItemReviews);

    ItemReviews.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemReviews, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemReviews</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemReviews} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemReviews} The populated <code>ItemReviews</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemReviews();

        if (data.hasOwnProperty('has_approved_review')) {
          obj['has_approved_review'] = _ApiClient["default"].convertToType(data['has_approved_review'], 'Boolean');
        }

        if (data.hasOwnProperty('has_review')) {
          obj['has_review'] = _ApiClient["default"].convertToType(data['has_review'], 'Boolean');
        }

        if (data.hasOwnProperty('individual_reviews')) {
          obj['individual_reviews'] = _ApiClient["default"].convertToType(data['individual_reviews'], [_ItemReview["default"]]);
        }

        if (data.hasOwnProperty('review_count')) {
          obj['review_count'] = _ApiClient["default"].convertToType(data['review_count'], 'Number');
        }

        if (data.hasOwnProperty('review_overall')) {
          obj['review_overall'] = _ApiClient["default"].convertToType(data['review_overall'], 'Number');
        }

        if (data.hasOwnProperty('review_template_name')) {
          obj['review_template_name'] = _ApiClient["default"].convertToType(data['review_template_name'], 'String');
        }

        if (data.hasOwnProperty('review_template_oid')) {
          obj['review_template_oid'] = _ApiClient["default"].convertToType(data['review_template_oid'], 'Number');
        }

        if (data.hasOwnProperty('reviewable')) {
          obj['reviewable'] = _ApiClient["default"].convertToType(data['reviewable'], 'Boolean');
        }

        if (data.hasOwnProperty('share_reviews_with_merchant_item_id')) {
          obj['share_reviews_with_merchant_item_id'] = _ApiClient["default"].convertToType(data['share_reviews_with_merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('share_reviews_with_merchant_item_oid')) {
          obj['share_reviews_with_merchant_item_oid'] = _ApiClient["default"].convertToType(data['share_reviews_with_merchant_item_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemReviews;
}();
/**
 * True if the item has an approved review
 * @member {Boolean} has_approved_review
 */


ItemReviews.prototype['has_approved_review'] = undefined;
/**
 * True if the item has a review
 * @member {Boolean} has_review
 */

ItemReviews.prototype['has_review'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemReview>} individual_reviews
 */

ItemReviews.prototype['individual_reviews'] = undefined;
/**
 * Number of approved reviews
 * @member {Number} review_count
 */

ItemReviews.prototype['review_count'] = undefined;
/**
 * Overall score of reviews
 * @member {Number} review_overall
 */

ItemReviews.prototype['review_overall'] = undefined;
/**
 * Review template name
 * @member {String} review_template_name
 */

ItemReviews.prototype['review_template_name'] = undefined;
/**
 * Review template object identifier
 * @member {Number} review_template_oid
 */

ItemReviews.prototype['review_template_oid'] = undefined;
/**
 * True if the item is reviewable
 * @member {Boolean} reviewable
 */

ItemReviews.prototype['reviewable'] = undefined;
/**
 * Share reviews with item id.  To set, use the share_reviews_with_merchant_item_oid field.
 * @member {String} share_reviews_with_merchant_item_id
 */

ItemReviews.prototype['share_reviews_with_merchant_item_id'] = undefined;
/**
 * Share reviews with item oid.  To null out this field, set teh value to zero.
 * @member {Number} share_reviews_with_merchant_item_oid
 */

ItemReviews.prototype['share_reviews_with_merchant_item_oid'] = undefined;
var _default = ItemReviews;
exports["default"] = _default;