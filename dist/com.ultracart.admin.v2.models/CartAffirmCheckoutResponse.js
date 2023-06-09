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
 * The CartAffirmCheckoutResponse model module.
 * @module com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
 * @version 4.0.158
 */
var CartAffirmCheckoutResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartAffirmCheckoutResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse
   */
  function CartAffirmCheckoutResponse() {
    _classCallCheck(this, CartAffirmCheckoutResponse);

    CartAffirmCheckoutResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartAffirmCheckoutResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartAffirmCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartAffirmCheckoutResponse} The populated <code>CartAffirmCheckoutResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartAffirmCheckoutResponse();

        if (data.hasOwnProperty('checkout_json')) {
          obj['checkout_json'] = _ApiClient["default"].convertToType(data['checkout_json'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CartAffirmCheckoutResponse;
}();
/**
 * Checkout JSON object
 * @member {String} checkout_json
 */


CartAffirmCheckoutResponse.prototype['checkout_json'] = undefined;
/**
 * Errors that should be displayed to the customer
 * @member {Array.<String>} errors
 */

CartAffirmCheckoutResponse.prototype['errors'] = undefined;
var _default = CartAffirmCheckoutResponse;
exports["default"] = _default;