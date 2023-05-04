"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItemMultimediaThumbnail = _interopRequireDefault(require("./CartItemMultimediaThumbnail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartItemMultimedia model module.
 * @module com.ultracart.admin.v2.models/CartItemMultimedia
 * @version 4.0.153
 */
var CartItemMultimedia = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemMultimedia
   */
  function CartItemMultimedia() {
    _classCallCheck(this, CartItemMultimedia);

    CartItemMultimedia.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemMultimedia, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemMultimedia} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemMultimedia} The populated <code>CartItemMultimedia</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemMultimedia();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('exclude_from_gallery')) {
          obj['exclude_from_gallery'] = _ApiClient["default"].convertToType(data['exclude_from_gallery'], 'Boolean');
        }

        if (data.hasOwnProperty('image_height')) {
          obj['image_height'] = _ApiClient["default"].convertToType(data['image_height'], 'Number');
        }

        if (data.hasOwnProperty('image_width')) {
          obj['image_width'] = _ApiClient["default"].convertToType(data['image_width'], 'Number');
        }

        if (data.hasOwnProperty('is_default')) {
          obj['is_default'] = _ApiClient["default"].convertToType(data['is_default'], 'Boolean');
        }

        if (data.hasOwnProperty('thumbnails')) {
          obj['thumbnails'] = _ApiClient["default"].convertToType(data['thumbnails'], [_CartItemMultimediaThumbnail["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartItemMultimedia;
}();
/**
 * Code assigned to the multimedia
 * @member {String} code
 */


CartItemMultimedia.prototype['code'] = undefined;
/**
 * Description
 * @member {String} description
 */

CartItemMultimedia.prototype['description'] = undefined;
/**
 * True if the image should be excluded from galleries
 * @member {Boolean} exclude_from_gallery
 */

CartItemMultimedia.prototype['exclude_from_gallery'] = undefined;
/**
 * Image height
 * @member {Number} image_height
 */

CartItemMultimedia.prototype['image_height'] = undefined;
/**
 * Image width
 * @member {Number} image_width
 */

CartItemMultimedia.prototype['image_width'] = undefined;
/**
 * True if the multimedia is the default for this type
 * @member {Boolean} is_default
 */

CartItemMultimedia.prototype['is_default'] = undefined;
/**
 * Thumbnails of the images
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail>} thumbnails
 */

CartItemMultimedia.prototype['thumbnails'] = undefined;
/**
 * Type of multimedia
 * @member {module:com.ultracart.admin.v2.models/CartItemMultimedia.TypeEnum} type
 */

CartItemMultimedia.prototype['type'] = undefined;
/**
 * URL to view multimedia at
 * @member {String} url
 */

CartItemMultimedia.prototype['url'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CartItemMultimedia['TypeEnum'] = {
  /**
   * value: "Image"
   * @const
   */
  "Image": "Image",

  /**
   * value: "PDF"
   * @const
   */
  "PDF": "PDF",

  /**
   * value: "Text"
   * @const
   */
  "Text": "Text",

  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown",

  /**
   * value: "Video"
   * @const
   */
  "Video": "Video"
};
var _default = CartItemMultimedia;
exports["default"] = _default;