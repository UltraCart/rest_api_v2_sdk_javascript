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
 * The CouponTierQuantityAmount model module.
 * @module com.ultracart.admin.v2.models/CouponTierQuantityAmount
 * @version 4.0.120-RC
 */
var CouponTierQuantityAmount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTierQuantityAmount</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTierQuantityAmount
   */
  function CouponTierQuantityAmount() {
    _classCallCheck(this, CouponTierQuantityAmount);

    CouponTierQuantityAmount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTierQuantityAmount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTierQuantityAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierQuantityAmount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierQuantityAmount} The populated <code>CouponTierQuantityAmount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTierQuantityAmount();

        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }

        if (data.hasOwnProperty('item_quantity')) {
          obj['item_quantity'] = _ApiClient["default"].convertToType(data['item_quantity'], 'Number');
        }

        if (data.hasOwnProperty('quickbooks_code')) {
          obj['quickbooks_code'] = _ApiClient["default"].convertToType(data['quickbooks_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponTierQuantityAmount;
}();
/**
 * The amount of discount per item.
 * @member {Number} discount_amount
 */


CouponTierQuantityAmount.prototype['discount_amount'] = undefined;
/**
 * The quantity of item purchased (in units)
 * @member {Number} item_quantity
 */

CouponTierQuantityAmount.prototype['item_quantity'] = undefined;
/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */

CouponTierQuantityAmount.prototype['quickbooks_code'] = undefined;
var _default = CouponTierQuantityAmount;
exports["default"] = _default;