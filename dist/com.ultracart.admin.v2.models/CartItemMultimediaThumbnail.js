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
 * The CartItemMultimediaThumbnail model module.
 * @module com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
 * @version 4.0.40-RC
 */
var CartItemMultimediaThumbnail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemMultimediaThumbnail</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
   */
  function CartItemMultimediaThumbnail() {
    _classCallCheck(this, CartItemMultimediaThumbnail);

    CartItemMultimediaThumbnail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemMultimediaThumbnail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartItemMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} The populated <code>CartItemMultimediaThumbnail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemMultimediaThumbnail();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('png')) {
          obj['png'] = _ApiClient["default"].convertToType(data['png'], 'Boolean');
        }

        if (data.hasOwnProperty('square')) {
          obj['square'] = _ApiClient["default"].convertToType(data['square'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CartItemMultimediaThumbnail;
}();
/**
 * Height in pixels
 * @member {Number} height
 */


CartItemMultimediaThumbnail.prototype['height'] = undefined;
/**
 * True if thumbnail is a PNG, otherwise its a JPEG
 * @member {Boolean} png
 */

CartItemMultimediaThumbnail.prototype['png'] = undefined;
/**
 * True if the thumbnail is square
 * @member {Boolean} square
 */

CartItemMultimediaThumbnail.prototype['square'] = undefined;
/**
 * URL for the thumbnail
 * @member {String} url
 */

CartItemMultimediaThumbnail.prototype['url'] = undefined;
/**
 * Width in pixels
 * @member {Number} width
 */

CartItemMultimediaThumbnail.prototype['width'] = undefined;
var _default = CartItemMultimediaThumbnail;
exports["default"] = _default;