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
 * The ItemContentMultimediaThumbnail model module.
 * @module com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
 * @version 4.0.153
 */
var ItemContentMultimediaThumbnail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemContentMultimediaThumbnail</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
   */
  function ItemContentMultimediaThumbnail() {
    _classCallCheck(this, ItemContentMultimediaThumbnail);

    ItemContentMultimediaThumbnail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemContentMultimediaThumbnail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemContentMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} The populated <code>ItemContentMultimediaThumbnail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemContentMultimediaThumbnail();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('http_url')) {
          obj['http_url'] = _ApiClient["default"].convertToType(data['http_url'], 'String');
        }

        if (data.hasOwnProperty('https_url')) {
          obj['https_url'] = _ApiClient["default"].convertToType(data['https_url'], 'String');
        }

        if (data.hasOwnProperty('png_format')) {
          obj['png_format'] = _ApiClient["default"].convertToType(data['png_format'], 'Boolean');
        }

        if (data.hasOwnProperty('square')) {
          obj['square'] = _ApiClient["default"].convertToType(data['square'], 'Boolean');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemContentMultimediaThumbnail;
}();
/**
 * Height of the thumbnail
 * @member {Number} height
 */


ItemContentMultimediaThumbnail.prototype['height'] = undefined;
/**
 * HTTP URL to view the thumbnail
 * @member {String} http_url
 */

ItemContentMultimediaThumbnail.prototype['http_url'] = undefined;
/**
 * HTTPS URL to view the thumbnail
 * @member {String} https_url
 */

ItemContentMultimediaThumbnail.prototype['https_url'] = undefined;
/**
 * True if PNG, false if JPEG
 * @member {Boolean} png_format
 */

ItemContentMultimediaThumbnail.prototype['png_format'] = undefined;
/**
 * True if the thumbnail is square
 * @member {Boolean} square
 */

ItemContentMultimediaThumbnail.prototype['square'] = undefined;
/**
 * Width of the thumbnail
 * @member {Number} width
 */

ItemContentMultimediaThumbnail.prototype['width'] = undefined;
var _default = ItemContentMultimediaThumbnail;
exports["default"] = _default;