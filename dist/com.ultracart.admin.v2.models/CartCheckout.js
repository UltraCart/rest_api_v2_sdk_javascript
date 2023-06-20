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
 * The CartCheckout model module.
 * @module com.ultracart.admin.v2.models/CartCheckout
 * @version 4.0.161
 */
var CartCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartCheckout</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCheckout
   */
  function CartCheckout() {
    _classCallCheck(this, CartCheckout);

    CartCheckout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartCheckout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCheckout} The populated <code>CartCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartCheckout();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('custom_field1')) {
          obj['custom_field1'] = _ApiClient["default"].convertToType(data['custom_field1'], 'String');
        }

        if (data.hasOwnProperty('custom_field10')) {
          obj['custom_field10'] = _ApiClient["default"].convertToType(data['custom_field10'], 'String');
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

        if (data.hasOwnProperty('custom_field8')) {
          obj['custom_field8'] = _ApiClient["default"].convertToType(data['custom_field8'], 'String');
        }

        if (data.hasOwnProperty('custom_field9')) {
          obj['custom_field9'] = _ApiClient["default"].convertToType(data['custom_field9'], 'String');
        }

        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }

        if (data.hasOwnProperty('return_code')) {
          obj['return_code'] = _ApiClient["default"].convertToType(data['return_code'], 'String');
        }

        if (data.hasOwnProperty('return_url')) {
          obj['return_url'] = _ApiClient["default"].convertToType(data['return_url'], 'String');
        }

        if (data.hasOwnProperty('screen_branding_theme_code')) {
          obj['screen_branding_theme_code'] = _ApiClient["default"].convertToType(data['screen_branding_theme_code'], 'String');
        }

        if (data.hasOwnProperty('storefront_host_name')) {
          obj['storefront_host_name'] = _ApiClient["default"].convertToType(data['storefront_host_name'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartCheckout;
}();
/**
 * Comments from the customer.  Rarely used on the single page checkout.
 * @member {String} comments
 */


CartCheckout.prototype['comments'] = undefined;
/**
 * Custom field 1
 * @member {String} custom_field1
 */

CartCheckout.prototype['custom_field1'] = undefined;
/**
 * Custom field 10
 * @member {String} custom_field10
 */

CartCheckout.prototype['custom_field10'] = undefined;
/**
 * Custom field 2
 * @member {String} custom_field2
 */

CartCheckout.prototype['custom_field2'] = undefined;
/**
 * Custom field 3
 * @member {String} custom_field3
 */

CartCheckout.prototype['custom_field3'] = undefined;
/**
 * Custom field 4
 * @member {String} custom_field4
 */

CartCheckout.prototype['custom_field4'] = undefined;
/**
 * Custom field 5
 * @member {String} custom_field5
 */

CartCheckout.prototype['custom_field5'] = undefined;
/**
 * Custom field 6
 * @member {String} custom_field6
 */

CartCheckout.prototype['custom_field6'] = undefined;
/**
 * Custom field 7
 * @member {String} custom_field7
 */

CartCheckout.prototype['custom_field7'] = undefined;
/**
 * Custom field 8
 * @member {String} custom_field8
 */

CartCheckout.prototype['custom_field8'] = undefined;
/**
 * Custom field 9
 * @member {String} custom_field9
 */

CartCheckout.prototype['custom_field9'] = undefined;
/**
 * IP Address (read only unless non-browser key authenticated)
 * @member {String} ip_address
 */

CartCheckout.prototype['ip_address'] = undefined;
/**
 * Return code assigned for send return email operation
 * @member {String} return_code
 */

CartCheckout.prototype['return_code'] = undefined;
/**
 * The URL to redirect the customer to when they return from an abandon cart email.  Must be https protocol.
 * @member {String} return_url
 */

CartCheckout.prototype['return_url'] = undefined;
/**
 * Screen branding theme code
 * @member {String} screen_branding_theme_code
 */

CartCheckout.prototype['screen_branding_theme_code'] = undefined;
/**
 * StoreFront Host Name
 * @member {String} storefront_host_name
 */

CartCheckout.prototype['storefront_host_name'] = undefined;
/**
 * User agent of the browser
 * @member {String} user_agent
 */

CartCheckout.prototype['user_agent'] = undefined;
var _default = CartCheckout;
exports["default"] = _default;