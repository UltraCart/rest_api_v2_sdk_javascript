"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemDigitalItemPdfMeta = _interopRequireDefault(require("./ItemDigitalItemPdfMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemDigitalItem model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalItem
 * @version 4.0.159
 */
var ItemDigitalItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemDigitalItem
   */
  function ItemDigitalItem() {
    _classCallCheck(this, ItemDigitalItem);

    ItemDigitalItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemDigitalItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalItem} The populated <code>ItemDigitalItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemDigitalItem();

        if (data.hasOwnProperty('click_wrap_agreement')) {
          obj['click_wrap_agreement'] = _ApiClient["default"].convertToType(data['click_wrap_agreement'], 'String');
        }

        if (data.hasOwnProperty('creation_dts')) {
          obj['creation_dts'] = _ApiClient["default"].convertToType(data['creation_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('digital_item_oid')) {
          obj['digital_item_oid'] = _ApiClient["default"].convertToType(data['digital_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
        }

        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }

        if (data.hasOwnProperty('import_from_url')) {
          obj['import_from_url'] = _ApiClient["default"].convertToType(data['import_from_url'], 'String');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('original_filename')) {
          obj['original_filename'] = _ApiClient["default"].convertToType(data['original_filename'], 'String');
        }

        if (data.hasOwnProperty('pdf_meta')) {
          obj['pdf_meta'] = _ItemDigitalItemPdfMeta["default"].constructFromObject(data['pdf_meta']);
        }
      }

      return obj;
    }
  }]);

  return ItemDigitalItem;
}();
/**
 * Click wrap agreement is presented to the customer before they can purchase your product.
 * @member {String} click_wrap_agreement
 */


ItemDigitalItem.prototype['click_wrap_agreement'] = undefined;
/**
 * File creation date
 * @member {String} creation_dts
 */

ItemDigitalItem.prototype['creation_dts'] = undefined;
/**
 * Description of the digital item
 * @member {String} description
 */

ItemDigitalItem.prototype['description'] = undefined;
/**
 * The Digital item oid is a primary key used internally by UltraCart.  You should not set or change this value.  Doing so will have no effect.
 * @member {Number} digital_item_oid
 */

ItemDigitalItem.prototype['digital_item_oid'] = undefined;
/**
 * External Id useful for syncing with a remote filesystem, this may be an MD5 hash or whatever suits your needs.
 * @member {String} external_id
 */

ItemDigitalItem.prototype['external_id'] = undefined;
/**
 * File size
 * @member {Number} file_size
 */

ItemDigitalItem.prototype['file_size'] = undefined;
/**
 * This url is sourced to create or update a digital file in your digital library.  It is only considered during an insert or update operation.
 * @member {String} import_from_url
 */

ItemDigitalItem.prototype['import_from_url'] = undefined;
/**
 * Mime type associated with the file
 * @member {String} mime_type
 */

ItemDigitalItem.prototype['mime_type'] = undefined;
/**
 * Original filename
 * @member {String} original_filename
 */

ItemDigitalItem.prototype['original_filename'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta} pdf_meta
 */

ItemDigitalItem.prototype['pdf_meta'] = undefined;
var _default = ItemDigitalItem;
exports["default"] = _default;