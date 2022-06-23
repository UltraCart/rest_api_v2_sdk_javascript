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
 * The CartPaymentAffirm model module.
 * @module com.ultracart.admin.v2.models/CartPaymentAffirm
 * @version 4.0.24-RC
 */
var CartPaymentAffirm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartPaymentAffirm</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPaymentAffirm
   */
  function CartPaymentAffirm() {
    _classCallCheck(this, CartPaymentAffirm);

    CartPaymentAffirm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartPaymentAffirm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CartPaymentAffirm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentAffirm} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentAffirm} The populated <code>CartPaymentAffirm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPaymentAffirm();

        if (data.hasOwnProperty('affirm_checkout_token')) {
          obj['affirm_checkout_token'] = _ApiClient["default"].convertToType(data['affirm_checkout_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CartPaymentAffirm;
}();
/**
 * Affirm checkout token
 * @member {String} affirm_checkout_token
 */


CartPaymentAffirm.prototype['affirm_checkout_token'] = undefined;
var _default = CartPaymentAffirm;
exports["default"] = _default;