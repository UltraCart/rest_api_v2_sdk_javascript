"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartSettingsGiftWrap = _interopRequireDefault(require("./CartSettingsGiftWrap"));

var _Currency = _interopRequireDefault(require("./Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartSettingsGift model module.
 * @module com.ultracart.admin.v2.models/CartSettingsGift
 * @version 4.0.154
 */
var CartSettingsGift = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsGift</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsGift
   */
  function CartSettingsGift() {
    _classCallCheck(this, CartSettingsGift);

    CartSettingsGift.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsGift, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsGift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsGift} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsGift} The populated <code>CartSettingsGift</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsGift();

        if (data.hasOwnProperty('allow_gifts')) {
          obj['allow_gifts'] = _ApiClient["default"].convertToType(data['allow_gifts'], 'Boolean');
        }

        if (data.hasOwnProperty('gift_charge')) {
          obj['gift_charge'] = _Currency["default"].constructFromObject(data['gift_charge']);
        }

        if (data.hasOwnProperty('gift_wraps')) {
          obj['gift_wraps'] = _ApiClient["default"].convertToType(data['gift_wraps'], [_CartSettingsGiftWrap["default"]]);
        }

        if (data.hasOwnProperty('max_message_length')) {
          obj['max_message_length'] = _ApiClient["default"].convertToType(data['max_message_length'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CartSettingsGift;
}();
/**
 * True if this checkout supports gift giving
 * @member {Boolean} allow_gifts
 */


CartSettingsGift.prototype['allow_gifts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
 */

CartSettingsGift.prototype['gift_charge'] = undefined;
/**
 * The gift wraps available for the customer to select from
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsGiftWrap>} gift_wraps
 */

CartSettingsGift.prototype['gift_wraps'] = undefined;
/**
 * The maximum length of the gift message the giver can enter
 * @member {Number} max_message_length
 */

CartSettingsGift.prototype['max_message_length'] = undefined;
var _default = CartSettingsGift;
exports["default"] = _default;