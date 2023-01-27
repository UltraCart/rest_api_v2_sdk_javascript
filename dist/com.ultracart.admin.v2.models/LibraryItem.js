"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LibraryItemAccount = _interopRequireDefault(require("./LibraryItemAccount"));

var _LibraryItemAsset = _interopRequireDefault(require("./LibraryItemAsset"));

var _LibraryItemAttribute = _interopRequireDefault(require("./LibraryItemAttribute"));

var _LibraryItemEmail = _interopRequireDefault(require("./LibraryItemEmail"));

var _LibraryItemPublishedMeta = _interopRequireDefault(require("./LibraryItemPublishedMeta"));

var _LibraryItemPurchasedMeta = _interopRequireDefault(require("./LibraryItemPurchasedMeta"));

var _LibraryItemScreenshot = _interopRequireDefault(require("./LibraryItemScreenshot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LibraryItem model module.
 * @module com.ultracart.admin.v2.models/LibraryItem
 * @version 4.0.126-RC
 */
var LibraryItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItem</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItem
   */
  function LibraryItem() {
    _classCallCheck(this, LibraryItem);

    LibraryItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItem} The populated <code>LibraryItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItem();

        if (data.hasOwnProperty('assets')) {
          obj['assets'] = _ApiClient["default"].convertToType(data['assets'], [_LibraryItemAsset["default"]]);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_LibraryItemAttribute["default"]]);
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], ['String']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('industries')) {
          obj['industries'] = _ApiClient["default"].convertToType(data['industries'], ['String']);
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('my_purchased_version')) {
          obj['my_purchased_version'] = _ApiClient["default"].convertToType(data['my_purchased_version'], 'Number');
        }

        if (data.hasOwnProperty('original_object_id')) {
          obj['original_object_id'] = _ApiClient["default"].convertToType(data['original_object_id'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('price_formatted')) {
          obj['price_formatted'] = _ApiClient["default"].convertToType(data['price_formatted'], 'String');
        }

        if (data.hasOwnProperty('published')) {
          obj['published'] = _ApiClient["default"].convertToType(data['published'], 'Boolean');
        }

        if (data.hasOwnProperty('published_dts')) {
          obj['published_dts'] = _ApiClient["default"].convertToType(data['published_dts'], Object);
        }

        if (data.hasOwnProperty('published_from_library_item_oid')) {
          obj['published_from_library_item_oid'] = _ApiClient["default"].convertToType(data['published_from_library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('published_meta')) {
          obj['published_meta'] = _LibraryItemPublishedMeta["default"].constructFromObject(data['published_meta']);
        }

        if (data.hasOwnProperty('published_version')) {
          obj['published_version'] = _ApiClient["default"].convertToType(data['published_version'], 'Number');
        }

        if (data.hasOwnProperty('purchased')) {
          obj['purchased'] = _ApiClient["default"].convertToType(data['purchased'], 'Boolean');
        }

        if (data.hasOwnProperty('purchased_from_library_item_oid')) {
          obj['purchased_from_library_item_oid'] = _ApiClient["default"].convertToType(data['purchased_from_library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('purchased_meta')) {
          obj['purchased_meta'] = _LibraryItemPurchasedMeta["default"].constructFromObject(data['purchased_meta']);
        }

        if (data.hasOwnProperty('purchased_version')) {
          obj['purchased_version'] = _ApiClient["default"].convertToType(data['purchased_version'], 'Number');
        }

        if (data.hasOwnProperty('rejected')) {
          obj['rejected'] = _ApiClient["default"].convertToType(data['rejected'], 'Boolean');
        }

        if (data.hasOwnProperty('rejected_reason')) {
          obj['rejected_reason'] = _ApiClient["default"].convertToType(data['rejected_reason'], 'String');
        }

        if (data.hasOwnProperty('release_notes')) {
          obj['release_notes'] = _ApiClient["default"].convertToType(data['release_notes'], 'String');
        }

        if (data.hasOwnProperty('release_version')) {
          obj['release_version'] = _ApiClient["default"].convertToType(data['release_version'], 'Number');
        }

        if (data.hasOwnProperty('reviewed')) {
          obj['reviewed'] = _ApiClient["default"].convertToType(data['reviewed'], 'Boolean');
        }

        if (data.hasOwnProperty('reviewed_dts')) {
          obj['reviewed_dts'] = _ApiClient["default"].convertToType(data['reviewed_dts'], Object);
        }

        if (data.hasOwnProperty('screenshots')) {
          obj['screenshots'] = _ApiClient["default"].convertToType(data['screenshots'], [_LibraryItemScreenshot["default"]]);
        }

        if (data.hasOwnProperty('share_with_accounts')) {
          obj['share_with_accounts'] = _ApiClient["default"].convertToType(data['share_with_accounts'], [_LibraryItemAccount["default"]]);
        }

        if (data.hasOwnProperty('share_with_other_emails')) {
          obj['share_with_other_emails'] = _ApiClient["default"].convertToType(data['share_with_other_emails'], [_LibraryItemEmail["default"]]);
        }

        if (data.hasOwnProperty('shared')) {
          obj['shared'] = _ApiClient["default"].convertToType(data['shared'], 'Boolean');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'Boolean');
        }

        if (data.hasOwnProperty('source_to_library_item_oid')) {
          obj['source_to_library_item_oid'] = _ApiClient["default"].convertToType(data['source_to_library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('source_version')) {
          obj['source_version'] = _ApiClient["default"].convertToType(data['source_version'], 'Number');
        }

        if (data.hasOwnProperty('style')) {
          obj['style'] = _ApiClient["default"].convertToType(data['style'], 'String');
        }

        if (data.hasOwnProperty('times_purchased')) {
          obj['times_purchased'] = _ApiClient["default"].convertToType(data['times_purchased'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('under_review')) {
          obj['under_review'] = _ApiClient["default"].convertToType(data['under_review'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LibraryItem;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAsset>} assets
 */


LibraryItem.prototype['assets'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAttribute>} attributes
 */

LibraryItem.prototype['attributes'] = undefined;
/**
 * @member {Array.<String>} categories
 */

LibraryItem.prototype['categories'] = undefined;
/**
 * @member {String} content
 */

LibraryItem.prototype['content'] = undefined;
/**
 * @member {String} content_type
 */

LibraryItem.prototype['content_type'] = undefined;
/**
 * @member {String} description
 */

LibraryItem.prototype['description'] = undefined;
/**
 * @member {Array.<String>} industries
 */

LibraryItem.prototype['industries'] = undefined;
/**
 * @member {Number} library_item_oid
 */

LibraryItem.prototype['library_item_oid'] = undefined;
/**
 * @member {String} merchant_id
 */

LibraryItem.prototype['merchant_id'] = undefined;
/**
 * If this is a public item and the merchant has already purchased it, this is their version.  If not yet purchased, this will be zero.  This value will only be populated during a searchPublicItems() call.
 * @member {Number} my_purchased_version
 */

LibraryItem.prototype['my_purchased_version'] = undefined;
/**
 * This id points to the original object that was added to the library. For flows and campaigns, this is a uuid string.  For upsells, it is an oid integer.  For transactional_emails, it is an email name.
 * @member {String} original_object_id
 */

LibraryItem.prototype['original_object_id'] = undefined;
/**
 * The price of the published item.  Null for any private library items.
 * @member {Number} price
 */

LibraryItem.prototype['price'] = undefined;
/**
 * The formatted price of the published item.  Null for any private library items.
 * @member {String} price_formatted
 */

LibraryItem.prototype['price_formatted'] = undefined;
/**
 * True if this library item is a published item (not source)
 * @member {Boolean} published
 */

LibraryItem.prototype['published'] = undefined;
/**
 * The timestamp of the last published version
 * @member {Object} published_dts
 */

LibraryItem.prototype['published_dts'] = undefined;
/**
 * The source item used to publish this item.  This allows for comparisons between source and published
 * @member {Number} published_from_library_item_oid
 */

LibraryItem.prototype['published_from_library_item_oid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta} published_meta
 */

LibraryItem.prototype['published_meta'] = undefined;
/**
 * The source version when this item was published.  This allows for out-of-date alerts to be shown when there is a difference between source and published
 * @member {Number} published_version
 */

LibraryItem.prototype['published_version'] = undefined;
/**
 * True if this library item has been purchased
 * @member {Boolean} purchased
 */

LibraryItem.prototype['purchased'] = undefined;
/**
 * The published item that was purchased to make this item.  This allows for comparisons between published and purchased
 * @member {Number} purchased_from_library_item_oid
 */

LibraryItem.prototype['purchased_from_library_item_oid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} purchased_meta
 */

LibraryItem.prototype['purchased_meta'] = undefined;
/**
 * The published version when this item was purchased.  This allows for out-of-date alerts to be shown when there is a difference between published and purchased
 * @member {Number} purchased_version
 */

LibraryItem.prototype['purchased_version'] = undefined;
/**
 * Any published library reviewed by UltraCart staff for malicious or inappropriate content will have this flag set to true.  This is always false for non-published items
 * @member {Boolean} rejected
 */

LibraryItem.prototype['rejected'] = undefined;
/**
 * Any rejected published item will have this field populated with the reason.
 * @member {String} rejected_reason
 */

LibraryItem.prototype['rejected_reason'] = undefined;
/**
 * Release notes specific to each published version and only appearing on public items.
 * @member {String} release_notes
 */

LibraryItem.prototype['release_notes'] = undefined;
/**
 * This counter records how many times a library item has been published.  This is used to show version history.
 * @member {Number} release_version
 */

LibraryItem.prototype['release_version'] = undefined;
/**
 * Any published library items must be reviewed by UltraCart staff for malicious content.  This flag shows the status of that review.  This is always false for non-published items
 * @member {Boolean} reviewed
 */

LibraryItem.prototype['reviewed'] = undefined;
/**
 * This is the timestamp for a published items formal review by UltraCart staff for malicious content.
 * @member {Object} reviewed_dts
 */

LibraryItem.prototype['reviewed_dts'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemScreenshot>} screenshots
 */

LibraryItem.prototype['screenshots'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAccount>} share_with_accounts
 */

LibraryItem.prototype['share_with_accounts'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemEmail>} share_with_other_emails
 */

LibraryItem.prototype['share_with_other_emails'] = undefined;
/**
 * True if this item is shared from another merchant account
 * @member {Boolean} shared
 */

LibraryItem.prototype['shared'] = undefined;
/**
 * True if this library item has been published
 * @member {Boolean} source
 */

LibraryItem.prototype['source'] = undefined;
/**
 * This oid points to the published library item, if there is one.
 * @member {Number} source_to_library_item_oid
 */

LibraryItem.prototype['source_to_library_item_oid'] = undefined;
/**
 * The version of this item.  Increment every time the item is saved.
 * @member {Number} source_version
 */

LibraryItem.prototype['source_version'] = undefined;
/**
 * @member {String} style
 */

LibraryItem.prototype['style'] = undefined;
/**
 * @member {Number} times_purchased
 */

LibraryItem.prototype['times_purchased'] = undefined;
/**
 * @member {String} title
 */

LibraryItem.prototype['title'] = undefined;
/**
 * @member {String} type
 */

LibraryItem.prototype['type'] = undefined;
/**
 * True if this library item was published but is awaiting review from UltraCart staff.
 * @member {Boolean} under_review
 */

LibraryItem.prototype['under_review'] = undefined;
var _default = LibraryItem;
exports["default"] = _default;