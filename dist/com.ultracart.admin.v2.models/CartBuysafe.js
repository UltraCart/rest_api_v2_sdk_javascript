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
 * The CartBuysafe model module.
 * @module com.ultracart.admin.v2.models/CartBuysafe
 * @version 4.0.91-RC
 */
var CartBuysafe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartBuysafe</code>.
   * @alias module:com.ultracart.admin.v2.models/CartBuysafe
   */
  function CartBuysafe() {
    _classCallCheck(this, CartBuysafe);

    CartBuysafe.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartBuysafe, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartBuysafe} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartBuysafe} The populated <code>CartBuysafe</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartBuysafe();

        if (data.hasOwnProperty('bond_available')) {
          obj['bond_available'] = _ApiClient["default"].convertToType(data['bond_available'], 'Boolean');
        }

        if (data.hasOwnProperty('bond_cost')) {
          obj['bond_cost'] = _Currency["default"].constructFromObject(data['bond_cost']);
        }

        if (data.hasOwnProperty('bond_free')) {
          obj['bond_free'] = _ApiClient["default"].convertToType(data['bond_free'], 'Boolean');
        }

        if (data.hasOwnProperty('bond_wanted')) {
          obj['bond_wanted'] = _ApiClient["default"].convertToType(data['bond_wanted'], 'Boolean');
        }

        if (data.hasOwnProperty('cart_display_text')) {
          obj['cart_display_text'] = _ApiClient["default"].convertToType(data['cart_display_text'], 'String');
        }

        if (data.hasOwnProperty('cart_display_url')) {
          obj['cart_display_url'] = _ApiClient["default"].convertToType(data['cart_display_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartBuysafe;
}();
/**
 * True if buySAFE is willing to bond the order
 * @member {Boolean} bond_available
 */


CartBuysafe.prototype['bond_available'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} bond_cost
 */

CartBuysafe.prototype['bond_cost'] = undefined;
/**
 * True if the bond is free (merchant paying for it)
 * @member {Boolean} bond_free
 */

CartBuysafe.prototype['bond_free'] = undefined;
/**
 * True if the customer wants the bond
 * @member {Boolean} bond_wanted
 */

CartBuysafe.prototype['bond_wanted'] = undefined;
/**
 * Recommend text to display to the customer
 * @member {String} cart_display_text
 */

CartBuysafe.prototype['cart_display_text'] = undefined;
/**
 * URL associated with the recommended text
 * @member {String} cart_display_url
 */

CartBuysafe.prototype['cart_display_url'] = undefined;
var _default = CartBuysafe;
exports["default"] = _default;