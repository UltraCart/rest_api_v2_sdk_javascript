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
 * The LibraryItemPublishedMeta model module.
 * @module com.ultracart.admin.v2.models/LibraryItemPublishedMeta
 * @version 4.0.157
 */
var LibraryItemPublishedMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemPublishedMeta</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta
   */
  function LibraryItemPublishedMeta() {
    _classCallCheck(this, LibraryItemPublishedMeta);

    LibraryItemPublishedMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItemPublishedMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItemPublishedMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemPublishedMeta} The populated <code>LibraryItemPublishedMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemPublishedMeta();

        if (data.hasOwnProperty('count_of_versions')) {
          obj['count_of_versions'] = _ApiClient["default"].convertToType(data['count_of_versions'], 'Number');
        }

        if (data.hasOwnProperty('library_item_published_oid')) {
          obj['library_item_published_oid'] = _ApiClient["default"].convertToType(data['library_item_published_oid'], 'Number');
        }

        if (data.hasOwnProperty('library_item_review_oid')) {
          obj['library_item_review_oid'] = _ApiClient["default"].convertToType(data['library_item_review_oid'], 'Number');
        }

        if (data.hasOwnProperty('rejected')) {
          obj['rejected'] = _ApiClient["default"].convertToType(data['rejected'], 'Boolean');
        }

        if (data.hasOwnProperty('rejected_reason')) {
          obj['rejected_reason'] = _ApiClient["default"].convertToType(data['rejected_reason'], 'String');
        }

        if (data.hasOwnProperty('release_version')) {
          obj['release_version'] = _ApiClient["default"].convertToType(data['release_version'], 'Number');
        }

        if (data.hasOwnProperty('review_version')) {
          obj['review_version'] = _ApiClient["default"].convertToType(data['review_version'], 'Number');
        }

        if (data.hasOwnProperty('under_review')) {
          obj['under_review'] = _ApiClient["default"].convertToType(data['under_review'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LibraryItemPublishedMeta;
}();
/**
 * The number of published versions a source item has, or zero if this item is not a source or is private
 * @member {Number} count_of_versions
 */


LibraryItemPublishedMeta.prototype['count_of_versions'] = undefined;
/**
 * The oid pointing to the most recent published version, or zero if this is not a published source item.
 * @member {Number} library_item_published_oid
 */

LibraryItemPublishedMeta.prototype['library_item_published_oid'] = undefined;
/**
 * The oid pointing to the review data if this is a source library item and currently under review
 * @member {Number} library_item_review_oid
 */

LibraryItemPublishedMeta.prototype['library_item_review_oid'] = undefined;
/**
 * True if this is a source item and is under review and was rejected.
 * @member {Boolean} rejected
 */

LibraryItemPublishedMeta.prototype['rejected'] = undefined;
/**
 * The reason for rejection if this item is a source item, is under review, and was rejected.  For all other cases, this value will be null or missing.
 * @member {String} rejected_reason
 */

LibraryItemPublishedMeta.prototype['rejected_reason'] = undefined;
/**
 * If this library item is a source item and it is published, this is the most recent release version number
 * @member {Number} release_version
 */

LibraryItemPublishedMeta.prototype['release_version'] = undefined;
/**
 * If this library item is a source item and has a published item currently under review, this is that version number
 * @member {Number} review_version
 */

LibraryItemPublishedMeta.prototype['review_version'] = undefined;
/**
 * True if this library item is a source item and is currently under review
 * @member {Boolean} under_review
 */

LibraryItemPublishedMeta.prototype['under_review'] = undefined;
var _default = LibraryItemPublishedMeta;
exports["default"] = _default;