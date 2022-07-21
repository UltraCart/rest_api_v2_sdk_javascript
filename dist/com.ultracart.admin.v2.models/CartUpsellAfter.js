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
 * The CartUpsellAfter model module.
 * @module com.ultracart.admin.v2.models/CartUpsellAfter
 * @version 4.0.37-RC
 */
var CartUpsellAfter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartUpsellAfter</code>.
   * @alias module:com.ultracart.admin.v2.models/CartUpsellAfter
   */
  function CartUpsellAfter() {
    _classCallCheck(this, CartUpsellAfter);

    CartUpsellAfter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartUpsellAfter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartUpsellAfter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartUpsellAfter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartUpsellAfter} The populated <code>CartUpsellAfter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartUpsellAfter();

        if (data.hasOwnProperty('finalize_after_dts')) {
          obj['finalize_after_dts'] = _ApiClient["default"].convertToType(data['finalize_after_dts'], 'String');
        }

        if (data.hasOwnProperty('finalize_after_minutes')) {
          obj['finalize_after_minutes'] = _ApiClient["default"].convertToType(data['finalize_after_minutes'], 'Number');
        }

        if (data.hasOwnProperty('upsell_path_code')) {
          obj['upsell_path_code'] = _ApiClient["default"].convertToType(data['upsell_path_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartUpsellAfter;
}();
/**
 * The date/time after which the cart will finalize into an order.
 * @member {String} finalize_after_dts
 */


CartUpsellAfter.prototype['finalize_after_dts'] = undefined;
/**
 * The amount of inactivity in minutes after which the cart should be finalized into an order.  This will calculate the finalize_after_dts field.
 * @member {Number} finalize_after_minutes
 */

CartUpsellAfter.prototype['finalize_after_minutes'] = undefined;
/**
 * Upsell path code
 * @member {String} upsell_path_code
 */

CartUpsellAfter.prototype['upsell_path_code'] = undefined;
var _default = CartUpsellAfter;
exports["default"] = _default;