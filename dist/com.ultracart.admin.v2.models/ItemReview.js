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
 * The ItemReview model module.
 * @module com.ultracart.admin.v2.models/ItemReview
 * @version 4.0.63-RC
 */
var ItemReview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemReview</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemReview
   */
  function ItemReview() {
    _classCallCheck(this, ItemReview);

    ItemReview.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemReview, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemReview} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemReview} The populated <code>ItemReview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemReview();

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('featured')) {
          obj['featured'] = _ApiClient["default"].convertToType(data['featured'], 'Boolean');
        }

        if (data.hasOwnProperty('helperful_no_votes')) {
          obj['helperful_no_votes'] = _ApiClient["default"].convertToType(data['helperful_no_votes'], 'Number');
        }

        if (data.hasOwnProperty('helpful_yes_votes')) {
          obj['helpful_yes_votes'] = _ApiClient["default"].convertToType(data['helpful_yes_votes'], 'Number');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('overall')) {
          obj['overall'] = _ApiClient["default"].convertToType(data['overall'], 'Number');
        }

        if (data.hasOwnProperty('rating_name1')) {
          obj['rating_name1'] = _ApiClient["default"].convertToType(data['rating_name1'], 'String');
        }

        if (data.hasOwnProperty('rating_name10')) {
          obj['rating_name10'] = _ApiClient["default"].convertToType(data['rating_name10'], 'String');
        }

        if (data.hasOwnProperty('rating_name2')) {
          obj['rating_name2'] = _ApiClient["default"].convertToType(data['rating_name2'], 'String');
        }

        if (data.hasOwnProperty('rating_name3')) {
          obj['rating_name3'] = _ApiClient["default"].convertToType(data['rating_name3'], 'String');
        }

        if (data.hasOwnProperty('rating_name4')) {
          obj['rating_name4'] = _ApiClient["default"].convertToType(data['rating_name4'], 'String');
        }

        if (data.hasOwnProperty('rating_name5')) {
          obj['rating_name5'] = _ApiClient["default"].convertToType(data['rating_name5'], 'String');
        }

        if (data.hasOwnProperty('rating_name6')) {
          obj['rating_name6'] = _ApiClient["default"].convertToType(data['rating_name6'], 'String');
        }

        if (data.hasOwnProperty('rating_name7')) {
          obj['rating_name7'] = _ApiClient["default"].convertToType(data['rating_name7'], 'String');
        }

        if (data.hasOwnProperty('rating_name8')) {
          obj['rating_name8'] = _ApiClient["default"].convertToType(data['rating_name8'], 'String');
        }

        if (data.hasOwnProperty('rating_name9')) {
          obj['rating_name9'] = _ApiClient["default"].convertToType(data['rating_name9'], 'String');
        }

        if (data.hasOwnProperty('rating_score1')) {
          obj['rating_score1'] = _ApiClient["default"].convertToType(data['rating_score1'], 'Number');
        }

        if (data.hasOwnProperty('rating_score10')) {
          obj['rating_score10'] = _ApiClient["default"].convertToType(data['rating_score10'], 'Number');
        }

        if (data.hasOwnProperty('rating_score2')) {
          obj['rating_score2'] = _ApiClient["default"].convertToType(data['rating_score2'], 'Number');
        }

        if (data.hasOwnProperty('rating_score3')) {
          obj['rating_score3'] = _ApiClient["default"].convertToType(data['rating_score3'], 'Number');
        }

        if (data.hasOwnProperty('rating_score4')) {
          obj['rating_score4'] = _ApiClient["default"].convertToType(data['rating_score4'], 'Number');
        }

        if (data.hasOwnProperty('rating_score5')) {
          obj['rating_score5'] = _ApiClient["default"].convertToType(data['rating_score5'], 'Number');
        }

        if (data.hasOwnProperty('rating_score6')) {
          obj['rating_score6'] = _ApiClient["default"].convertToType(data['rating_score6'], 'Number');
        }

        if (data.hasOwnProperty('rating_score7')) {
          obj['rating_score7'] = _ApiClient["default"].convertToType(data['rating_score7'], 'Number');
        }

        if (data.hasOwnProperty('rating_score8')) {
          obj['rating_score8'] = _ApiClient["default"].convertToType(data['rating_score8'], 'Number');
        }

        if (data.hasOwnProperty('rating_score9')) {
          obj['rating_score9'] = _ApiClient["default"].convertToType(data['rating_score9'], 'Number');
        }

        if (data.hasOwnProperty('recommend_store_to_friend')) {
          obj['recommend_store_to_friend'] = _ApiClient["default"].convertToType(data['recommend_store_to_friend'], 'Number');
        }

        if (data.hasOwnProperty('recommend_to_friend')) {
          obj['recommend_to_friend'] = _ApiClient["default"].convertToType(data['recommend_to_friend'], 'Boolean');
        }

        if (data.hasOwnProperty('review')) {
          obj['review'] = _ApiClient["default"].convertToType(data['review'], 'String');
        }

        if (data.hasOwnProperty('review_oid')) {
          obj['review_oid'] = _ApiClient["default"].convertToType(data['review_oid'], 'Number');
        }

        if (data.hasOwnProperty('reviewed_nickname')) {
          obj['reviewed_nickname'] = _ApiClient["default"].convertToType(data['reviewed_nickname'], 'String');
        }

        if (data.hasOwnProperty('reviewer_email')) {
          obj['reviewer_email'] = _ApiClient["default"].convertToType(data['reviewer_email'], 'String');
        }

        if (data.hasOwnProperty('reviewer_location')) {
          obj['reviewer_location'] = _ApiClient["default"].convertToType(data['reviewer_location'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('store_feedback')) {
          obj['store_feedback'] = _ApiClient["default"].convertToType(data['store_feedback'], 'String');
        }

        if (data.hasOwnProperty('submitted_dts')) {
          obj['submitted_dts'] = _ApiClient["default"].convertToType(data['submitted_dts'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemReview;
}();
/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */


ItemReview.prototype['customer_profile_oid'] = undefined;
/**
 * @member {Boolean} featured
 */

ItemReview.prototype['featured'] = undefined;
/**
 * @member {Number} helperful_no_votes
 */

ItemReview.prototype['helperful_no_votes'] = undefined;
/**
 * @member {Number} helpful_yes_votes
 */

ItemReview.prototype['helpful_yes_votes'] = undefined;
/**
 * @member {String} order_id
 */

ItemReview.prototype['order_id'] = undefined;
/**
 * @member {Number} overall
 */

ItemReview.prototype['overall'] = undefined;
/**
 * @member {String} rating_name1
 */

ItemReview.prototype['rating_name1'] = undefined;
/**
 * @member {String} rating_name10
 */

ItemReview.prototype['rating_name10'] = undefined;
/**
 * @member {String} rating_name2
 */

ItemReview.prototype['rating_name2'] = undefined;
/**
 * @member {String} rating_name3
 */

ItemReview.prototype['rating_name3'] = undefined;
/**
 * @member {String} rating_name4
 */

ItemReview.prototype['rating_name4'] = undefined;
/**
 * @member {String} rating_name5
 */

ItemReview.prototype['rating_name5'] = undefined;
/**
 * @member {String} rating_name6
 */

ItemReview.prototype['rating_name6'] = undefined;
/**
 * @member {String} rating_name7
 */

ItemReview.prototype['rating_name7'] = undefined;
/**
 * @member {String} rating_name8
 */

ItemReview.prototype['rating_name8'] = undefined;
/**
 * @member {String} rating_name9
 */

ItemReview.prototype['rating_name9'] = undefined;
/**
 * @member {Number} rating_score1
 */

ItemReview.prototype['rating_score1'] = undefined;
/**
 * @member {Number} rating_score10
 */

ItemReview.prototype['rating_score10'] = undefined;
/**
 * @member {Number} rating_score2
 */

ItemReview.prototype['rating_score2'] = undefined;
/**
 * @member {Number} rating_score3
 */

ItemReview.prototype['rating_score3'] = undefined;
/**
 * @member {Number} rating_score4
 */

ItemReview.prototype['rating_score4'] = undefined;
/**
 * @member {Number} rating_score5
 */

ItemReview.prototype['rating_score5'] = undefined;
/**
 * @member {Number} rating_score6
 */

ItemReview.prototype['rating_score6'] = undefined;
/**
 * @member {Number} rating_score7
 */

ItemReview.prototype['rating_score7'] = undefined;
/**
 * @member {Number} rating_score8
 */

ItemReview.prototype['rating_score8'] = undefined;
/**
 * @member {Number} rating_score9
 */

ItemReview.prototype['rating_score9'] = undefined;
/**
 * @member {Number} recommend_store_to_friend
 */

ItemReview.prototype['recommend_store_to_friend'] = undefined;
/**
 * @member {Boolean} recommend_to_friend
 */

ItemReview.prototype['recommend_to_friend'] = undefined;
/**
 * @member {String} review
 */

ItemReview.prototype['review'] = undefined;
/**
 * @member {Number} review_oid
 */

ItemReview.prototype['review_oid'] = undefined;
/**
 * @member {String} reviewed_nickname
 */

ItemReview.prototype['reviewed_nickname'] = undefined;
/**
 * @member {String} reviewer_email
 */

ItemReview.prototype['reviewer_email'] = undefined;
/**
 * @member {String} reviewer_location
 */

ItemReview.prototype['reviewer_location'] = undefined;
/**
 * @member {String} status
 */

ItemReview.prototype['status'] = undefined;
/**
 * @member {String} store_feedback
 */

ItemReview.prototype['store_feedback'] = undefined;
/**
 * Date/time of review submission
 * @member {String} submitted_dts
 */

ItemReview.prototype['submitted_dts'] = undefined;
/**
 * @member {String} title
 */

ItemReview.prototype['title'] = undefined;
var _default = ItemReview;
exports["default"] = _default;