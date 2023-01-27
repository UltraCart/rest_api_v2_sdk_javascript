"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Browser = _interopRequireDefault(require("./Browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderCheckout model module.
 * @module com.ultracart.admin.v2.models/OrderCheckout
 * @version 4.0.126-RC
 */
var OrderCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderCheckout
   */
  function OrderCheckout() {
    _classCallCheck(this, OrderCheckout);

    OrderCheckout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderCheckout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderCheckout} The populated <code>OrderCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCheckout();

        if (data.hasOwnProperty('browser')) {
          obj['browser'] = _Browser["default"].constructFromObject(data['browser']);
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('custom_field1')) {
          obj['custom_field1'] = _ApiClient["default"].convertToType(data['custom_field1'], 'String');
        }

        if (data.hasOwnProperty('custom_field2')) {
          obj['custom_field2'] = _ApiClient["default"].convertToType(data['custom_field2'], 'String');
        }

        if (data.hasOwnProperty('custom_field3')) {
          obj['custom_field3'] = _ApiClient["default"].convertToType(data['custom_field3'], 'String');
        }

        if (data.hasOwnProperty('custom_field4')) {
          obj['custom_field4'] = _ApiClient["default"].convertToType(data['custom_field4'], 'String');
        }

        if (data.hasOwnProperty('custom_field5')) {
          obj['custom_field5'] = _ApiClient["default"].convertToType(data['custom_field5'], 'String');
        }

        if (data.hasOwnProperty('custom_field6')) {
          obj['custom_field6'] = _ApiClient["default"].convertToType(data['custom_field6'], 'String');
        }

        if (data.hasOwnProperty('custom_field7')) {
          obj['custom_field7'] = _ApiClient["default"].convertToType(data['custom_field7'], 'String');
        }

        if (data.hasOwnProperty('customer_ip_address')) {
          obj['customer_ip_address'] = _ApiClient["default"].convertToType(data['customer_ip_address'], 'String');
        }

        if (data.hasOwnProperty('screen_branding_theme_code')) {
          obj['screen_branding_theme_code'] = _ApiClient["default"].convertToType(data['screen_branding_theme_code'], 'String');
        }

        if (data.hasOwnProperty('screen_size')) {
          obj['screen_size'] = _ApiClient["default"].convertToType(data['screen_size'], 'String');
        }

        if (data.hasOwnProperty('storefront_host_name')) {
          obj['storefront_host_name'] = _ApiClient["default"].convertToType(data['storefront_host_name'], 'String');
        }

        if (data.hasOwnProperty('upsell_path_code')) {
          obj['upsell_path_code'] = _ApiClient["default"].convertToType(data['upsell_path_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderCheckout;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Browser} browser
 */


OrderCheckout.prototype['browser'] = undefined;
/**
 * Comments from the customer.  Rarely used on the single page checkout.
 * @member {String} comments
 */

OrderCheckout.prototype['comments'] = undefined;
/**
 * Custom field 1
 * @member {String} custom_field1
 */

OrderCheckout.prototype['custom_field1'] = undefined;
/**
 * Custom field 2
 * @member {String} custom_field2
 */

OrderCheckout.prototype['custom_field2'] = undefined;
/**
 * Custom field 3
 * @member {String} custom_field3
 */

OrderCheckout.prototype['custom_field3'] = undefined;
/**
 * Custom field 4
 * @member {String} custom_field4
 */

OrderCheckout.prototype['custom_field4'] = undefined;
/**
 * Custom field 5
 * @member {String} custom_field5
 */

OrderCheckout.prototype['custom_field5'] = undefined;
/**
 * Custom field 6
 * @member {String} custom_field6
 */

OrderCheckout.prototype['custom_field6'] = undefined;
/**
 * Custom field 7
 * @member {String} custom_field7
 */

OrderCheckout.prototype['custom_field7'] = undefined;
/**
 * IP address of the customer when placing the order
 * @member {String} customer_ip_address
 */

OrderCheckout.prototype['customer_ip_address'] = undefined;
/**
 * Screen branding theme code associated with the order (legacy checkout)
 * @member {String} screen_branding_theme_code
 */

OrderCheckout.prototype['screen_branding_theme_code'] = undefined;
/**
 * Screen size small, medium or large
 * @member {String} screen_size
 */

OrderCheckout.prototype['screen_size'] = undefined;
/**
 * StoreFront host name associated with the order
 * @member {String} storefront_host_name
 */

OrderCheckout.prototype['storefront_host_name'] = undefined;
/**
 * Upsell path code assigned during the checkout that the customer went through
 * @member {String} upsell_path_code
 */

OrderCheckout.prototype['upsell_path_code'] = undefined;
var _default = OrderCheckout;
exports["default"] = _default;