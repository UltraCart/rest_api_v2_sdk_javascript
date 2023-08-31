"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartSettingsGiftWrap model module.
 * @module com.ultracart.admin.v2.models/CartSettingsGiftWrap
 * @version 4.0.172
 */
var CartSettingsGiftWrap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsGiftWrap</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsGiftWrap
   */
  function CartSettingsGiftWrap() {
    _classCallCheck(this, CartSettingsGiftWrap);

    CartSettingsGiftWrap.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsGiftWrap, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsGiftWrap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} The populated <code>CartSettingsGiftWrap</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsGiftWrap();

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _Currency["default"].constructFromObject(data['cost']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartSettingsGiftWrap;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost
 */


CartSettingsGiftWrap.prototype['cost'] = undefined;
/**
 * Title of the gift wrap
 * @member {String} title
 */

CartSettingsGiftWrap.prototype['title'] = undefined;
/**
 * URL for the sample of the gift wrap
 * @member {String} url
 */

CartSettingsGiftWrap.prototype['url'] = undefined;
var _default = CartSettingsGiftWrap;
exports["default"] = _default;