"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cart = _interopRequireDefault(require("./Cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartProfileLoginRequest model module.
 * @module com.ultracart.admin.v2.models/CartProfileLoginRequest
 * @version 4.0.135
 */
var CartProfileLoginRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartProfileLoginRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CartProfileLoginRequest
   */
  function CartProfileLoginRequest() {
    _classCallCheck(this, CartProfileLoginRequest);

    CartProfileLoginRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartProfileLoginRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartProfileLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartProfileLoginRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartProfileLoginRequest} The populated <code>CartProfileLoginRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartProfileLoginRequest();

        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartProfileLoginRequest;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */


CartProfileLoginRequest.prototype['cart'] = undefined;
/**
 * Unique identifier for customer profile.  Can not be used with browser key authentication type.
 * @member {Number} customer_profile_oid
 */

CartProfileLoginRequest.prototype['customer_profile_oid'] = undefined;
/**
 * Password for the profile
 * @member {String} password
 */

CartProfileLoginRequest.prototype['password'] = undefined;
var _default = CartProfileLoginRequest;
exports["default"] = _default;