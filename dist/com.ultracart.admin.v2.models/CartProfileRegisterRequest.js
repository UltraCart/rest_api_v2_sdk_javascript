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
 * The CartProfileRegisterRequest model module.
 * @module com.ultracart.admin.v2.models/CartProfileRegisterRequest
 * @version 4.0.152
 */
var CartProfileRegisterRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartProfileRegisterRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CartProfileRegisterRequest
   */
  function CartProfileRegisterRequest() {
    _classCallCheck(this, CartProfileRegisterRequest);

    CartProfileRegisterRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartProfileRegisterRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartProfileRegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartProfileRegisterRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartProfileRegisterRequest} The populated <code>CartProfileRegisterRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartProfileRegisterRequest();

        if (data.hasOwnProperty('cart')) {
          obj['cart'] = _Cart["default"].constructFromObject(data['cart']);
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartProfileRegisterRequest;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */


CartProfileRegisterRequest.prototype['cart'] = undefined;
/**
 * Password for the profile
 * @member {String} password
 */

CartProfileRegisterRequest.prototype['password'] = undefined;
var _default = CartProfileRegisterRequest;
exports["default"] = _default;