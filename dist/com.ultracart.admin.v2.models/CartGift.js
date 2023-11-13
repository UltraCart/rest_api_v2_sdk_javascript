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
 * The CartGift model module.
 * @module com.ultracart.admin.v2.models/CartGift
 * @version 4.0.187
 */
var CartGift = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartGift</code>.
   * @alias module:com.ultracart.admin.v2.models/CartGift
   */
  function CartGift() {
    _classCallCheck(this, CartGift);

    CartGift.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartGift, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartGift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartGift} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartGift} The populated <code>CartGift</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartGift();

        if (data.hasOwnProperty('gift')) {
          obj['gift'] = _ApiClient["default"].convertToType(data['gift'], 'Boolean');
        }

        if (data.hasOwnProperty('gift_charge')) {
          obj['gift_charge'] = _Currency["default"].constructFromObject(data['gift_charge']);
        }

        if (data.hasOwnProperty('gift_email')) {
          obj['gift_email'] = _ApiClient["default"].convertToType(data['gift_email'], 'String');
        }

        if (data.hasOwnProperty('gift_message')) {
          obj['gift_message'] = _ApiClient["default"].convertToType(data['gift_message'], 'String');
        }

        if (data.hasOwnProperty('gift_wrap_cost')) {
          obj['gift_wrap_cost'] = _Currency["default"].constructFromObject(data['gift_wrap_cost']);
        }

        if (data.hasOwnProperty('gift_wrap_title')) {
          obj['gift_wrap_title'] = _ApiClient["default"].convertToType(data['gift_wrap_title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartGift;
}();
/**
 * True if this order is a gift
 * @member {Boolean} gift
 */


CartGift.prototype['gift'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_charge
 */

CartGift.prototype['gift_charge'] = undefined;
/**
 * Email address of the gift recipient
 * @member {String} gift_email
 */

CartGift.prototype['gift_email'] = undefined;
/**
 * Message to the gift recipient
 * @member {String} gift_message
 */

CartGift.prototype['gift_message'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} gift_wrap_cost
 */

CartGift.prototype['gift_wrap_cost'] = undefined;
/**
 * Title of the selected gift wrap
 * @member {String} gift_wrap_title
 */

CartGift.prototype['gift_wrap_title'] = undefined;
var _default = CartGift;
exports["default"] = _default;