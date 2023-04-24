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
 * The CartValidationResponse model module.
 * @module com.ultracart.admin.v2.models/CartValidationResponse
 * @version 4.0.150
 */
var CartValidationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartValidationResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CartValidationResponse
   */
  function CartValidationResponse() {
    _classCallCheck(this, CartValidationResponse);

    CartValidationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartValidationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartValidationResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartValidationResponse} The populated <code>CartValidationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartValidationResponse();

        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CartValidationResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */


CartValidationResponse.prototype['cart'] = undefined;
/**
 * Errors to display to the customer if they failed any of the validations checked
 * @member {Array.<String>} errors
 */

CartValidationResponse.prototype['errors'] = undefined;
var _default = CartValidationResponse;
exports["default"] = _default;