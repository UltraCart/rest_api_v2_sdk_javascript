"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemContentAssignment = _interopRequireDefault(require("./ItemContentAssignment"));

var _ItemContentAttribute = _interopRequireDefault(require("./ItemContentAttribute"));

var _ItemContentMultimedia = _interopRequireDefault(require("./ItemContentMultimedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemContent model module.
 * @module com.ultracart.admin.v2.models/ItemContent
 * @version 4.0.155
 */
var ItemContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemContent</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContent
   */
  function ItemContent() {
    _classCallCheck(this, ItemContent);

    ItemContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContent} The populated <code>ItemContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemContent();

        if (data.hasOwnProperty('assignments')) {
          obj['assignments'] = _ApiClient["default"].convertToType(data['assignments'], [_ItemContentAssignment["default"]]);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_ItemContentAttribute["default"]]);
        }

        if (data.hasOwnProperty('custom_thank_you_url')) {
          obj['custom_thank_you_url'] = _ApiClient["default"].convertToType(data['custom_thank_you_url'], 'String');
        }

        if (data.hasOwnProperty('exclude_from_search')) {
          obj['exclude_from_search'] = _ApiClient["default"].convertToType(data['exclude_from_search'], 'Boolean');
        }

        if (data.hasOwnProperty('exclude_from_sitemap')) {
          obj['exclude_from_sitemap'] = _ApiClient["default"].convertToType(data['exclude_from_sitemap'], 'Boolean');
        }

        if (data.hasOwnProperty('exclude_from_top_sellers')) {
          obj['exclude_from_top_sellers'] = _ApiClient["default"].convertToType(data['exclude_from_top_sellers'], 'Boolean');
        }

        if (data.hasOwnProperty('extended_description')) {
          obj['extended_description'] = _ApiClient["default"].convertToType(data['extended_description'], 'String');
        }

        if (data.hasOwnProperty('extended_description_translated_text_instance_oid')) {
          obj['extended_description_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['extended_description_translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('multimedia')) {
          obj['multimedia'] = _ApiClient["default"].convertToType(data['multimedia'], [_ItemContentMultimedia["default"]]);
        }

        if (data.hasOwnProperty('new_item')) {
          obj['new_item'] = _ApiClient["default"].convertToType(data['new_item'], 'Boolean');
        }

        if (data.hasOwnProperty('new_item_end')) {
          obj['new_item_end'] = _ApiClient["default"].convertToType(data['new_item_end'], 'String');
        }

        if (data.hasOwnProperty('new_item_start')) {
          obj['new_item_start'] = _ApiClient["default"].convertToType(data['new_item_start'], 'String');
        }

        if (data.hasOwnProperty('view_url')) {
          obj['view_url'] = _ApiClient["default"].convertToType(data['view_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemContent;
}();
/**
 * StoreFront assignments
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAssignment>} assignments
 */


ItemContent.prototype['assignments'] = undefined;
/**
 * StoreFront attributes
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAttribute>} attributes
 */

ItemContent.prototype['attributes'] = undefined;
/**
 * Custom Thank You URL
 * @member {String} custom_thank_you_url
 */

ItemContent.prototype['custom_thank_you_url'] = undefined;
/**
 * Exclude from search
 * @member {Boolean} exclude_from_search
 */

ItemContent.prototype['exclude_from_search'] = undefined;
/**
 * Exclude from the sitemap for the StoreFront
 * @member {Boolean} exclude_from_sitemap
 */

ItemContent.prototype['exclude_from_sitemap'] = undefined;
/**
 * Exclude from the top sellers list in the StoreFront
 * @member {Boolean} exclude_from_top_sellers
 */

ItemContent.prototype['exclude_from_top_sellers'] = undefined;
/**
 * Extended description (max 10000 characters)
 * @member {String} extended_description
 */

ItemContent.prototype['extended_description'] = undefined;
/**
 * Extneded description text translation instance identifier
 * @member {Number} extended_description_translated_text_instance_oid
 */

ItemContent.prototype['extended_description_translated_text_instance_oid'] = undefined;
/**
 * Multimedia
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentMultimedia>} multimedia
 */

ItemContent.prototype['multimedia'] = undefined;
/**
 * True if the item is new
 * @member {Boolean} new_item
 */

ItemContent.prototype['new_item'] = undefined;
/**
 * The date the item should no longer be considered new
 * @member {String} new_item_end
 */

ItemContent.prototype['new_item_end'] = undefined;
/**
 * The date the item should start being considered new
 * @member {String} new_item_start
 */

ItemContent.prototype['new_item_start'] = undefined;
/**
 * Legacy view URL (not used by StoreFronts)
 * @member {String} view_url
 */

ItemContent.prototype['view_url'] = undefined;
var _default = ItemContent;
exports["default"] = _default;