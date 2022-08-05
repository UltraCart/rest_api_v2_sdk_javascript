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
 * The CartSummary model module.
 * @module com.ultracart.admin.v2.models/CartSummary
 * @version 4.0.51-RC
 */
var CartSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSummary
   */
  function CartSummary() {
    _classCallCheck(this, CartSummary);

    CartSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSummary} The populated <code>CartSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSummary();

        if (data.hasOwnProperty('arbitrary_shipping_handling_total')) {
          obj['arbitrary_shipping_handling_total'] = _Currency["default"].constructFromObject(data['arbitrary_shipping_handling_total']);
        }

        if (data.hasOwnProperty('arbitrary_tax')) {
          obj['arbitrary_tax'] = _Currency["default"].constructFromObject(data['arbitrary_tax']);
        }

        if (data.hasOwnProperty('arbitrary_tax_rate')) {
          obj['arbitrary_tax_rate'] = _Currency["default"].constructFromObject(data['arbitrary_tax_rate']);
        }

        if (data.hasOwnProperty('arbitrary_taxable_subtotal')) {
          obj['arbitrary_taxable_subtotal'] = _Currency["default"].constructFromObject(data['arbitrary_taxable_subtotal']);
        }

        if (data.hasOwnProperty('shipping_handling')) {
          obj['shipping_handling'] = _Currency["default"].constructFromObject(data['shipping_handling']);
        }

        if (data.hasOwnProperty('shipping_handling_discount')) {
          obj['shipping_handling_discount'] = _Currency["default"].constructFromObject(data['shipping_handling_discount']);
        }

        if (data.hasOwnProperty('shipping_handling_with_discount')) {
          obj['shipping_handling_with_discount'] = _Currency["default"].constructFromObject(data['shipping_handling_with_discount']);
        }

        if (data.hasOwnProperty('subtotal')) {
          obj['subtotal'] = _Currency["default"].constructFromObject(data['subtotal']);
        }

        if (data.hasOwnProperty('subtotal_discount')) {
          obj['subtotal_discount'] = _Currency["default"].constructFromObject(data['subtotal_discount']);
        }

        if (data.hasOwnProperty('subtotal_with_discount')) {
          obj['subtotal_with_discount'] = _Currency["default"].constructFromObject(data['subtotal_with_discount']);
        }

        if (data.hasOwnProperty('surcharge')) {
          obj['surcharge'] = _Currency["default"].constructFromObject(data['surcharge']);
        }

        if (data.hasOwnProperty('tax')) {
          obj['tax'] = _Currency["default"].constructFromObject(data['tax']);
        }

        if (data.hasOwnProperty('taxable_subtotal')) {
          obj['taxable_subtotal'] = _Currency["default"].constructFromObject(data['taxable_subtotal']);
        }

        if (data.hasOwnProperty('taxable_subtotal_discount')) {
          obj['taxable_subtotal_discount'] = _Currency["default"].constructFromObject(data['taxable_subtotal_discount']);
        }

        if (data.hasOwnProperty('taxable_subtotal_with_discount')) {
          obj['taxable_subtotal_with_discount'] = _Currency["default"].constructFromObject(data['taxable_subtotal_with_discount']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _Currency["default"].constructFromObject(data['total']);
        }
      }

      return obj;
    }
  }]);

  return CartSummary;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_shipping_handling_total
 */


CartSummary.prototype['arbitrary_shipping_handling_total'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax
 */

CartSummary.prototype['arbitrary_tax'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_tax_rate
 */

CartSummary.prototype['arbitrary_tax_rate'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_taxable_subtotal
 */

CartSummary.prototype['arbitrary_taxable_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling
 */

CartSummary.prototype['shipping_handling'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_discount
 */

CartSummary.prototype['shipping_handling_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} shipping_handling_with_discount
 */

CartSummary.prototype['shipping_handling_with_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal
 */

CartSummary.prototype['subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_discount
 */

CartSummary.prototype['subtotal_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} subtotal_with_discount
 */

CartSummary.prototype['subtotal_with_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
 */

CartSummary.prototype['surcharge'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax
 */

CartSummary.prototype['tax'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal
 */

CartSummary.prototype['taxable_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_discount
 */

CartSummary.prototype['taxable_subtotal_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} taxable_subtotal_with_discount
 */

CartSummary.prototype['taxable_subtotal_with_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */

CartSummary.prototype['total'] = undefined;
var _default = CartSummary;
exports["default"] = _default;