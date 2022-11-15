"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PricingTierNotification = _interopRequireDefault(require("./PricingTierNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PricingTier model module.
 * @module com.ultracart.admin.v2.models/PricingTier
 * @version 4.0.81-RC
 */
var PricingTier = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PricingTier</code>.
   * @alias module:com.ultracart.admin.v2.models/PricingTier
   */
  function PricingTier() {
    _classCallCheck(this, PricingTier);

    PricingTier.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PricingTier, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PricingTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PricingTier} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PricingTier} The populated <code>PricingTier</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PricingTier();

        if (data.hasOwnProperty('allow_3rd_party_billing')) {
          obj['allow_3rd_party_billing'] = _ApiClient["default"].convertToType(data['allow_3rd_party_billing'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_cod')) {
          obj['allow_cod'] = _ApiClient["default"].convertToType(data['allow_cod'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_purchase_order')) {
          obj['allow_purchase_order'] = _ApiClient["default"].convertToType(data['allow_purchase_order'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_quote_request')) {
          obj['allow_quote_request'] = _ApiClient["default"].convertToType(data['allow_quote_request'], 'Boolean');
        }

        if (data.hasOwnProperty('approval_notification')) {
          obj['approval_notification'] = _PricingTierNotification["default"].constructFromObject(data['approval_notification']);
        }

        if (data.hasOwnProperty('auto_approve_cod')) {
          obj['auto_approve_cod'] = _ApiClient["default"].convertToType(data['auto_approve_cod'], 'Boolean');
        }

        if (data.hasOwnProperty('auto_approve_purchase_order')) {
          obj['auto_approve_purchase_order'] = _ApiClient["default"].convertToType(data['auto_approve_purchase_order'], 'Boolean');
        }

        if (data.hasOwnProperty('default_on_wholesale_signup')) {
          obj['default_on_wholesale_signup'] = _ApiClient["default"].convertToType(data['default_on_wholesale_signup'], 'Boolean');
        }

        if (data.hasOwnProperty('default_percentage_discount')) {
          obj['default_percentage_discount'] = _ApiClient["default"].convertToType(data['default_percentage_discount'], 'Number');
        }

        if (data.hasOwnProperty('default_shipping_method_oid')) {
          obj['default_shipping_method_oid'] = _ApiClient["default"].convertToType(data['default_shipping_method_oid'], 'Number');
        }

        if (data.hasOwnProperty('default_tier')) {
          obj['default_tier'] = _ApiClient["default"].convertToType(data['default_tier'], 'Boolean');
        }

        if (data.hasOwnProperty('display_on_wholesale_signup')) {
          obj['display_on_wholesale_signup'] = _ApiClient["default"].convertToType(data['display_on_wholesale_signup'], 'Boolean');
        }

        if (data.hasOwnProperty('exclude_from_free_promotion')) {
          obj['exclude_from_free_promotion'] = _ApiClient["default"].convertToType(data['exclude_from_free_promotion'], 'Boolean');
        }

        if (data.hasOwnProperty('exempt_shipping_handling_charge')) {
          obj['exempt_shipping_handling_charge'] = _ApiClient["default"].convertToType(data['exempt_shipping_handling_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _ApiClient["default"].convertToType(data['free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('free_shipping_minimum')) {
          obj['free_shipping_minimum'] = _ApiClient["default"].convertToType(data['free_shipping_minimum'], 'Number');
        }

        if (data.hasOwnProperty('maximum_item_count')) {
          obj['maximum_item_count'] = _ApiClient["default"].convertToType(data['maximum_item_count'], 'Number');
        }

        if (data.hasOwnProperty('minimum_item_count')) {
          obj['minimum_item_count'] = _ApiClient["default"].convertToType(data['minimum_item_count'], 'Number');
        }

        if (data.hasOwnProperty('minimum_subtotal')) {
          obj['minimum_subtotal'] = _ApiClient["default"].convertToType(data['minimum_subtotal'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('no_coupons')) {
          obj['no_coupons'] = _ApiClient["default"].convertToType(data['no_coupons'], 'Boolean');
        }

        if (data.hasOwnProperty('no_free_shipping')) {
          obj['no_free_shipping'] = _ApiClient["default"].convertToType(data['no_free_shipping'], 'Boolean');
        }

        if (data.hasOwnProperty('no_realtime_charge')) {
          obj['no_realtime_charge'] = _ApiClient["default"].convertToType(data['no_realtime_charge'], 'Boolean');
        }

        if (data.hasOwnProperty('not_valid_when_coupon_present')) {
          obj['not_valid_when_coupon_present'] = _ApiClient["default"].convertToType(data['not_valid_when_coupon_present'], 'Boolean');
        }

        if (data.hasOwnProperty('pricing_tier_oid')) {
          obj['pricing_tier_oid'] = _ApiClient["default"].convertToType(data['pricing_tier_oid'], 'Number');
        }

        if (data.hasOwnProperty('realtime_percentage_discount')) {
          obj['realtime_percentage_discount'] = _ApiClient["default"].convertToType(data['realtime_percentage_discount'], 'Number');
        }

        if (data.hasOwnProperty('signup_notification')) {
          obj['signup_notification'] = _PricingTierNotification["default"].constructFromObject(data['signup_notification']);
        }

        if (data.hasOwnProperty('suppress_buysafe')) {
          obj['suppress_buysafe'] = _ApiClient["default"].convertToType(data['suppress_buysafe'], 'Boolean');
        }

        if (data.hasOwnProperty('suppress_mailing_list')) {
          obj['suppress_mailing_list'] = _ApiClient["default"].convertToType(data['suppress_mailing_list'], 'Boolean');
        }

        if (data.hasOwnProperty('tax_exempt')) {
          obj['tax_exempt'] = _ApiClient["default"].convertToType(data['tax_exempt'], 'Boolean');
        }

        if (data.hasOwnProperty('track_separately')) {
          obj['track_separately'] = _ApiClient["default"].convertToType(data['track_separately'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PricingTier;
}();
/**
 * Allow 3rd party billing
 * @member {Boolean} allow_3rd_party_billing
 */


PricingTier.prototype['allow_3rd_party_billing'] = undefined;
/**
 * Allow COD
 * @member {Boolean} allow_cod
 */

PricingTier.prototype['allow_cod'] = undefined;
/**
 * Allow purchase order
 * @member {Boolean} allow_purchase_order
 */

PricingTier.prototype['allow_purchase_order'] = undefined;
/**
 * Allow quote request
 * @member {Boolean} allow_quote_request
 */

PricingTier.prototype['allow_quote_request'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/PricingTierNotification} approval_notification
 */

PricingTier.prototype['approval_notification'] = undefined;
/**
 * Auto approve COD
 * @member {Boolean} auto_approve_cod
 */

PricingTier.prototype['auto_approve_cod'] = undefined;
/**
 * Auto approve purchase order
 * @member {Boolean} auto_approve_purchase_order
 */

PricingTier.prototype['auto_approve_purchase_order'] = undefined;
/**
 * Default on wholesale signup
 * @member {Boolean} default_on_wholesale_signup
 */

PricingTier.prototype['default_on_wholesale_signup'] = undefined;
/**
 * Default percentage discount
 * @member {Number} default_percentage_discount
 */

PricingTier.prototype['default_percentage_discount'] = undefined;
/**
 * Default shipping method oid
 * @member {Number} default_shipping_method_oid
 */

PricingTier.prototype['default_shipping_method_oid'] = undefined;
/**
 * Default tier
 * @member {Boolean} default_tier
 */

PricingTier.prototype['default_tier'] = undefined;
/**
 * Display on wholesale signup
 * @member {Boolean} display_on_wholesale_signup
 */

PricingTier.prototype['display_on_wholesale_signup'] = undefined;
/**
 * Exclude from free promotion
 * @member {Boolean} exclude_from_free_promotion
 */

PricingTier.prototype['exclude_from_free_promotion'] = undefined;
/**
 * Exempt shipping handling charge
 * @member {Boolean} exempt_shipping_handling_charge
 */

PricingTier.prototype['exempt_shipping_handling_charge'] = undefined;
/**
 * Free shipping
 * @member {Boolean} free_shipping
 */

PricingTier.prototype['free_shipping'] = undefined;
/**
 * Free shipping minimum
 * @member {Number} free_shipping_minimum
 */

PricingTier.prototype['free_shipping_minimum'] = undefined;
/**
 * Maximum item count
 * @member {Number} maximum_item_count
 */

PricingTier.prototype['maximum_item_count'] = undefined;
/**
 * Minimum item count
 * @member {Number} minimum_item_count
 */

PricingTier.prototype['minimum_item_count'] = undefined;
/**
 * Minimum subtotal
 * @member {Number} minimum_subtotal
 */

PricingTier.prototype['minimum_subtotal'] = undefined;
/**
 * Name
 * @member {String} name
 */

PricingTier.prototype['name'] = undefined;
/**
 * No coupons
 * @member {Boolean} no_coupons
 */

PricingTier.prototype['no_coupons'] = undefined;
/**
 * No free shipping
 * @member {Boolean} no_free_shipping
 */

PricingTier.prototype['no_free_shipping'] = undefined;
/**
 * No realtime charge
 * @member {Boolean} no_realtime_charge
 */

PricingTier.prototype['no_realtime_charge'] = undefined;
/**
 * Not valid when coupon present
 * @member {Boolean} not_valid_when_coupon_present
 */

PricingTier.prototype['not_valid_when_coupon_present'] = undefined;
/**
 * Pricing Tier Oid
 * @member {Number} pricing_tier_oid
 */

PricingTier.prototype['pricing_tier_oid'] = undefined;
/**
 * Realtime percentage discount
 * @member {Number} realtime_percentage_discount
 */

PricingTier.prototype['realtime_percentage_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/PricingTierNotification} signup_notification
 */

PricingTier.prototype['signup_notification'] = undefined;
/**
 * Suppress buySAFE (deprecated)
 * @member {Boolean} suppress_buysafe
 */

PricingTier.prototype['suppress_buysafe'] = undefined;
/**
 * Suppress mailing list
 * @member {Boolean} suppress_mailing_list
 */

PricingTier.prototype['suppress_mailing_list'] = undefined;
/**
 * Tax Exempt
 * @member {Boolean} tax_exempt
 */

PricingTier.prototype['tax_exempt'] = undefined;
/**
 * Track separately
 * @member {Boolean} track_separately
 */

PricingTier.prototype['track_separately'] = undefined;
var _default = PricingTier;
exports["default"] = _default;