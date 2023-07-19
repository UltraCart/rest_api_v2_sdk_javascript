"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cart = _interopRequireDefault(require("./Cart"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartFinalizeOrderResponse model module.
 * @module com.ultracart.admin.v2.models/CartFinalizeOrderResponse
 * @version 4.0.166
 */
var CartFinalizeOrderResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartFinalizeOrderResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse
   */
  function CartFinalizeOrderResponse() {
    _classCallCheck(this, CartFinalizeOrderResponse);

    CartFinalizeOrderResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartFinalizeOrderResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartFinalizeOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartFinalizeOrderResponse} The populated <code>CartFinalizeOrderResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartFinalizeOrderResponse();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }

        if (data.hasOwnProperty('next_cart')) {
          obj['next_cart'] = _Cart["default"].constructFromObject(data['next_cart']);
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _Order["default"].constructFromObject(data['order']);
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('successful')) {
          obj['successful'] = _ApiClient["default"].convertToType(data['successful'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CartFinalizeOrderResponse;
}();
/**
 * Error messages if the order could not be completed
 * @member {Array.<String>} errors
 */


CartFinalizeOrderResponse.prototype['errors'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Cart} next_cart
 */

CartFinalizeOrderResponse.prototype['next_cart'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */

CartFinalizeOrderResponse.prototype['order'] = undefined;
/**
 * Order ID assigned to the order
 * @member {String} order_id
 */

CartFinalizeOrderResponse.prototype['order_id'] = undefined;
/**
 * True if the cart was converted successfully to an order
 * @member {Boolean} successful
 */

CartFinalizeOrderResponse.prototype['successful'] = undefined;
var _default = CartFinalizeOrderResponse;
exports["default"] = _default;