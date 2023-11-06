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
 * The CouponFreeItemWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal
 * @version 4.0.185
 */
var CouponFreeItemWithSubtotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeItemWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal
   */
  function CouponFreeItemWithSubtotal() {
    _classCallCheck(this, CouponFreeItemWithSubtotal);

    CouponFreeItemWithSubtotal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponFreeItemWithSubtotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponFreeItemWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} The populated <code>CouponFreeItemWithSubtotal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeItemWithSubtotal();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('subtotal_amount')) {
          obj['subtotal_amount'] = _ApiClient["default"].convertToType(data['subtotal_amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponFreeItemWithSubtotal;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponFreeItemWithSubtotal.prototype['currency_code'] = undefined;
/**
 * A list of items that are eligible for this discount_price.
 * @member {Array.<String>} items
 */

CouponFreeItemWithSubtotal.prototype['items'] = undefined;
/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */

CouponFreeItemWithSubtotal.prototype['limit'] = undefined;
/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */

CouponFreeItemWithSubtotal.prototype['subtotal_amount'] = undefined;
var _default = CouponFreeItemWithSubtotal;
exports["default"] = _default;