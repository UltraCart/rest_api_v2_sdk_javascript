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
 * The CouponFreeItemsWithMixMatchPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase
 * @version 4.0.95-RC
 */
var CouponFreeItemsWithMixMatchPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeItemsWithMixMatchPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase
   */
  function CouponFreeItemsWithMixMatchPurchase() {
    _classCallCheck(this, CouponFreeItemsWithMixMatchPurchase);

    CouponFreeItemsWithMixMatchPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponFreeItemsWithMixMatchPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponFreeItemsWithMixMatchPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase} The populated <code>CouponFreeItemsWithMixMatchPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeItemsWithMixMatchPurchase();

        if (data.hasOwnProperty('free_item')) {
          obj['free_item'] = _ApiClient["default"].convertToType(data['free_item'], 'String');
        }

        if (data.hasOwnProperty('free_quantity')) {
          obj['free_quantity'] = _ApiClient["default"].convertToType(data['free_quantity'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('required_purchase_mix_and_match_group')) {
          obj['required_purchase_mix_and_match_group'] = _ApiClient["default"].convertToType(data['required_purchase_mix_and_match_group'], 'String');
        }

        if (data.hasOwnProperty('required_purchase_quantity')) {
          obj['required_purchase_quantity'] = _ApiClient["default"].convertToType(data['required_purchase_quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponFreeItemsWithMixMatchPurchase;
}();
/**
 * The item id of the free item that will be received when the required mix and match group quantity is purchased.
 * @member {String} free_item
 */


CouponFreeItemsWithMixMatchPurchase.prototype['free_item'] = undefined;
/**
 * The quantity of free item that will be received.
 * @member {Number} free_quantity
 */

CouponFreeItemsWithMixMatchPurchase.prototype['free_quantity'] = undefined;
/**
 * The limit of free items that may be received when purchasing multiple mix and match group items
 * @member {Number} limit
 */

CouponFreeItemsWithMixMatchPurchase.prototype['limit'] = undefined;
/**
 * Required mix and match group that must be purchased for coupon to be valid
 * @member {String} required_purchase_mix_and_match_group
 */

CouponFreeItemsWithMixMatchPurchase.prototype['required_purchase_mix_and_match_group'] = undefined;
/**
 * Required quantity of mix and match group items that must be purchased for coupon to be valid
 * @member {Number} required_purchase_quantity
 */

CouponFreeItemsWithMixMatchPurchase.prototype['required_purchase_quantity'] = undefined;
var _default = CouponFreeItemsWithMixMatchPurchase;
exports["default"] = _default;