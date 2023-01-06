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
 * The OrderPaymentCheck model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentCheck
 * @version 4.0.106-RC
 */
var OrderPaymentCheck = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPaymentCheck</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPaymentCheck
   */
  function OrderPaymentCheck() {
    _classCallCheck(this, OrderPaymentCheck);

    OrderPaymentCheck.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPaymentCheck, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPaymentCheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentCheck} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentCheck} The populated <code>OrderPaymentCheck</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPaymentCheck();

        if (data.hasOwnProperty('check_number')) {
          obj['check_number'] = _ApiClient["default"].convertToType(data['check_number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderPaymentCheck;
}();
/**
 * Check number
 * @member {String} check_number
 */


OrderPaymentCheck.prototype['check_number'] = undefined;
var _default = OrderPaymentCheck;
exports["default"] = _default;