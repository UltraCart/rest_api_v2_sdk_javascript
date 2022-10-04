"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponTierPercent = _interopRequireDefault(require("./CouponTierPercent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponTieredPercentOffShipping model module.
 * @module com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
 * @version 4.0.70-RC
 */
var CouponTieredPercentOffShipping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponTieredPercentOffShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
   */
  function CouponTieredPercentOffShipping() {
    _classCallCheck(this, CouponTieredPercentOffShipping);

    CouponTieredPercentOffShipping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponTieredPercentOffShipping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponTieredPercentOffShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} The populated <code>CouponTieredPercentOffShipping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponTieredPercentOffShipping();

        if (data.hasOwnProperty('quickbooks_code')) {
          obj['quickbooks_code'] = _ApiClient["default"].convertToType(data['quickbooks_code'], 'String');
        }

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }

        if (data.hasOwnProperty('tiers')) {
          obj['tiers'] = _ApiClient["default"].convertToType(data['tiers'], [_CouponTierPercent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CouponTieredPercentOffShipping;
}();
/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */


CouponTieredPercentOffShipping.prototype['quickbooks_code'] = undefined;
/**
 * One or more shipping methods that may receive this discount
 * @member {Array.<String>} shipping_methods
 */

CouponTieredPercentOffShipping.prototype['shipping_methods'] = undefined;
/**
 * A list of discount tiers.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierPercent>} tiers
 */

CouponTieredPercentOffShipping.prototype['tiers'] = undefined;
var _default = CouponTieredPercentOffShipping;
exports["default"] = _default;