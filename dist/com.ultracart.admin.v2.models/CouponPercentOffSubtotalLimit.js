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
 * The CouponPercentOffSubtotalLimit model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit
 * @version 4.0.143
 */
var CouponPercentOffSubtotalLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffSubtotalLimit</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit
   */
  function CouponPercentOffSubtotalLimit() {
    _classCallCheck(this, CouponPercentOffSubtotalLimit);

    CouponPercentOffSubtotalLimit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffSubtotalLimit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffSubtotalLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit} The populated <code>CouponPercentOffSubtotalLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffSubtotalLimit();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffSubtotalLimit;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponPercentOffSubtotalLimit.prototype['currency_code'] = undefined;
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */

CouponPercentOffSubtotalLimit.prototype['discount_percent'] = undefined;
/**
 * The maximum amount of subtotal used to determine discount.
 * @member {Number} limit
 */

CouponPercentOffSubtotalLimit.prototype['limit'] = undefined;
var _default = CouponPercentOffSubtotalLimit;
exports["default"] = _default;