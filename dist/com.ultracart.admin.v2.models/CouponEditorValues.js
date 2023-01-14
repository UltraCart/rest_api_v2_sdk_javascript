"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponType = _interopRequireDefault(require("./CouponType"));

var _SimpleValue = _interopRequireDefault(require("./SimpleValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CouponEditorValues model module.
 * @module com.ultracart.admin.v2.models/CouponEditorValues
 * @version 4.0.112-RC
 */
var CouponEditorValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponEditorValues</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponEditorValues
   */
  function CouponEditorValues() {
    _classCallCheck(this, CouponEditorValues);

    CouponEditorValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponEditorValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponEditorValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponEditorValues} The populated <code>CouponEditorValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponEditorValues();

        if (data.hasOwnProperty('affiliates')) {
          obj['affiliates'] = _ApiClient["default"].convertToType(data['affiliates'], [_SimpleValue["default"]]);
        }

        if (data.hasOwnProperty('coupon_types')) {
          obj['coupon_types'] = _ApiClient["default"].convertToType(data['coupon_types'], ['String']);
        }

        if (data.hasOwnProperty('coupon_types_for_display')) {
          obj['coupon_types_for_display'] = _ApiClient["default"].convertToType(data['coupon_types_for_display'], [_CouponType["default"]]);
        }

        if (data.hasOwnProperty('currency_codes')) {
          obj['currency_codes'] = _ApiClient["default"].convertToType(data['currency_codes'], ['String']);
        }

        if (data.hasOwnProperty('deprecated_themes')) {
          obj['deprecated_themes'] = _ApiClient["default"].convertToType(data['deprecated_themes'], [_SimpleValue["default"]]);
        }

        if (data.hasOwnProperty('mix_and_match_names')) {
          obj['mix_and_match_names'] = _ApiClient["default"].convertToType(data['mix_and_match_names'], ['String']);
        }

        if (data.hasOwnProperty('shipping_methods')) {
          obj['shipping_methods'] = _ApiClient["default"].convertToType(data['shipping_methods'], ['String']);
        }

        if (data.hasOwnProperty('storefronts')) {
          obj['storefronts'] = _ApiClient["default"].convertToType(data['storefronts'], [_SimpleValue["default"]]);
        }

        if (data.hasOwnProperty('usable_by')) {
          obj['usable_by'] = _ApiClient["default"].convertToType(data['usable_by'], [_SimpleValue["default"]]);
        }

        if (data.hasOwnProperty('valid_with_other_coupons')) {
          obj['valid_with_other_coupons'] = _ApiClient["default"].convertToType(data['valid_with_other_coupons'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponEditorValues;
}();
/**
 * affiliates
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} affiliates
 */


CouponEditorValues.prototype['affiliates'] = undefined;
/**
 * coupon_types
 * @member {Array.<String>} coupon_types
 */

CouponEditorValues.prototype['coupon_types'] = undefined;
/**
 * coupon_types_for_display
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponType>} coupon_types_for_display
 */

CouponEditorValues.prototype['coupon_types_for_display'] = undefined;
/**
 * currency_codes
 * @member {Array.<String>} currency_codes
 */

CouponEditorValues.prototype['currency_codes'] = undefined;
/**
 * deprecated_themes
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} deprecated_themes
 */

CouponEditorValues.prototype['deprecated_themes'] = undefined;
/**
 * mix_and_match_names
 * @member {Array.<String>} mix_and_match_names
 */

CouponEditorValues.prototype['mix_and_match_names'] = undefined;
/**
 * shipping_methods
 * @member {Array.<String>} shipping_methods
 */

CouponEditorValues.prototype['shipping_methods'] = undefined;
/**
 * storefronts
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} storefronts
 */

CouponEditorValues.prototype['storefronts'] = undefined;
/**
 * usable_by
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} usable_by
 */

CouponEditorValues.prototype['usable_by'] = undefined;
/**
 * valid_with_other_coupons
 * @member {Array.<String>} valid_with_other_coupons
 */

CouponEditorValues.prototype['valid_with_other_coupons'] = undefined;
var _default = CouponEditorValues;
exports["default"] = _default;