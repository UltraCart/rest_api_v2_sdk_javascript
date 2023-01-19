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
 * The CouponTierPercent model module.
 * @module com.ultracart.admin.v2.models/CouponTierPercent
 * @version 4.0.118-RC
 */
var CouponTierPercent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTierPercent</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTierPercent
   */
  function CouponTierPercent() {
    _classCallCheck(this, CouponTierPercent);

    CouponTierPercent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTierPercent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTierPercent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierPercent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierPercent} The populated <code>CouponTierPercent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTierPercent();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('quickbooks_code')) {
          obj['quickbooks_code'] = _ApiClient["default"].convertToType(data['quickbooks_code'], 'String');
        }

        if (data.hasOwnProperty('subtotal_amount')) {
          obj['subtotal_amount'] = _ApiClient["default"].convertToType(data['subtotal_amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponTierPercent;
}();
/**
 * The percent of subtotal discount
 * @member {Number} discount_percent
 */


CouponTierPercent.prototype['discount_percent'] = undefined;
/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */

CouponTierPercent.prototype['quickbooks_code'] = undefined;
/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */

CouponTierPercent.prototype['subtotal_amount'] = undefined;
var _default = CouponTierPercent;
exports["default"] = _default;