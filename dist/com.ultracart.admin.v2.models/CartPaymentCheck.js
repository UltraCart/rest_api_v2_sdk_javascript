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
 * The CartPaymentCheck model module.
 * @module com.ultracart.admin.v2.models/CartPaymentCheck
 * @version 4.0.137
 */
var CartPaymentCheck = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartPaymentCheck</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPaymentCheck
   */
  function CartPaymentCheck() {
    _classCallCheck(this, CartPaymentCheck);

    CartPaymentCheck.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartPaymentCheck, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartPaymentCheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentCheck} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentCheck} The populated <code>CartPaymentCheck</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPaymentCheck();

        if (data.hasOwnProperty('check_number')) {
          obj['check_number'] = _ApiClient["default"].convertToType(data['check_number'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CartPaymentCheck;
}();
/**
 * Check number they are paying with
 * @member {Number} check_number
 */


CartPaymentCheck.prototype['check_number'] = undefined;
var _default = CartPaymentCheck;
exports["default"] = _default;