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
 * The CartSettingsShippingEstimate model module.
 * @module com.ultracart.admin.v2.models/CartSettingsShippingEstimate
 * @version 4.0.169
 */
var CartSettingsShippingEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartSettingsShippingEstimate</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate
   */
  function CartSettingsShippingEstimate() {
    _classCallCheck(this, CartSettingsShippingEstimate);

    CartSettingsShippingEstimate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartSettingsShippingEstimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartSettingsShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} The populated <code>CartSettingsShippingEstimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartSettingsShippingEstimate();

        if (data.hasOwnProperty('allow_3rd_party_billing')) {
          obj['allow_3rd_party_billing'] = _ApiClient["default"].convertToType(data['allow_3rd_party_billing'], 'Boolean');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _Currency["default"].constructFromObject(data['cost']);
        }

        if (data.hasOwnProperty('cost_before_discount')) {
          obj['cost_before_discount'] = _Currency["default"].constructFromObject(data['cost_before_discount']);
        }

        if (data.hasOwnProperty('default_method')) {
          obj['default_method'] = _ApiClient["default"].convertToType(data['default_method'], 'Boolean');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _Currency["default"].constructFromObject(data['discount']);
        }

        if (data.hasOwnProperty('discounted')) {
          obj['discounted'] = _ApiClient["default"].convertToType(data['discounted'], 'Boolean');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('estimated_delivery')) {
          obj['estimated_delivery'] = _ApiClient["default"].convertToType(data['estimated_delivery'], 'String');
        }

        if (data.hasOwnProperty('lift_gate_option')) {
          obj['lift_gate_option'] = _ApiClient["default"].convertToType(data['lift_gate_option'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pickup')) {
          obj['pickup'] = _ApiClient["default"].convertToType(data['pickup'], 'Boolean');
        }

        if (data.hasOwnProperty('tax')) {
          obj['tax'] = _Currency["default"].constructFromObject(data['tax']);
        }

        if (data.hasOwnProperty('total_tax')) {
          obj['total_tax'] = _Currency["default"].constructFromObject(data['total_tax']);
        }
      }

      return obj;
    }
  }]);

  return CartSettingsShippingEstimate;
}();
/**
 * True if this method allows the customer to use their own shipper account number
 * @member {Boolean} allow_3rd_party_billing
 */


CartSettingsShippingEstimate.prototype['allow_3rd_party_billing'] = undefined;
/**
 * Comment to display to the customer about this method
 * @member {String} comment
 */

CartSettingsShippingEstimate.prototype['comment'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost
 */

CartSettingsShippingEstimate.prototype['cost'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_before_discount
 */

CartSettingsShippingEstimate.prototype['cost_before_discount'] = undefined;
/**
 * True if this is the default method
 * @member {Boolean} default_method
 */

CartSettingsShippingEstimate.prototype['default_method'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} discount
 */

CartSettingsShippingEstimate.prototype['discount'] = undefined;
/**
 * True if this method is discounted because of a coupon
 * @member {Boolean} discounted
 */

CartSettingsShippingEstimate.prototype['discounted'] = undefined;
/**
 * The name to display to the customer
 * @member {String} display_name
 */

CartSettingsShippingEstimate.prototype['display_name'] = undefined;
/**
 * Date of the estimated delivery (or range)
 * @member {String} estimated_delivery
 */

CartSettingsShippingEstimate.prototype['estimated_delivery'] = undefined;
/**
 * True if a lift gate option for this method should be offered to the customer
 * @member {Boolean} lift_gate_option
 */

CartSettingsShippingEstimate.prototype['lift_gate_option'] = undefined;
/**
 * Shipping method name
 * @member {String} name
 */

CartSettingsShippingEstimate.prototype['name'] = undefined;
/**
 * True if this shipping method requires customers to physically pickup product themselves
 * @member {Boolean} pickup
 */

CartSettingsShippingEstimate.prototype['pickup'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax
 */

CartSettingsShippingEstimate.prototype['tax'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_tax
 */

CartSettingsShippingEstimate.prototype['total_tax'] = undefined;
var _default = CartSettingsShippingEstimate;
exports["default"] = _default;