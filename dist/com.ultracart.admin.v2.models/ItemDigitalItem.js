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
 * The ItemDigitalItem model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalItem
 * @version 4.0.63-RC
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

        if (data.hasOwnProperty('creation_dts')) {
          obj['creation_dts'] = _ApiClient["default"].convertToType(data['creation_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('original_filename')) {
          obj['original_filename'] = _ApiClient["default"].convertToType(data['original_filename'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemDigitalItem;
}();
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
 * File size
 * @member {Number} file_size
 */

ItemDigitalItem.prototype['file_size'] = undefined;
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
var _default = ItemDigitalItem;
exports["default"] = _default;