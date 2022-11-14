"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerLoyaltyLedger = _interopRequireDefault(require("./CustomerLoyaltyLedger"));

var _CustomerLoyaltyRedemption = _interopRequireDefault(require("./CustomerLoyaltyRedemption"));

var _GiftCertificate = _interopRequireDefault(require("./GiftCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerLoyalty model module.
 * @module com.ultracart.admin.v2.models/CustomerLoyalty
 * @version 4.0.79-RC
 */
var CustomerLoyalty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerLoyalty</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerLoyalty
   */
  function CustomerLoyalty() {
    _classCallCheck(this, CustomerLoyalty);

    CustomerLoyalty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerLoyalty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerLoyalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerLoyalty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerLoyalty} The populated <code>CustomerLoyalty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerLoyalty();

        if (data.hasOwnProperty('current_points')) {
          obj['current_points'] = _ApiClient["default"].convertToType(data['current_points'], 'Number');
        }

        if (data.hasOwnProperty('internal_gift_certificate')) {
          obj['internal_gift_certificate'] = _GiftCertificate["default"].constructFromObject(data['internal_gift_certificate']);
        }

        if (data.hasOwnProperty('internal_gift_certificate_balance')) {
          obj['internal_gift_certificate_balance'] = _ApiClient["default"].convertToType(data['internal_gift_certificate_balance'], 'String');
        }

        if (data.hasOwnProperty('internal_gift_certificate_oid')) {
          obj['internal_gift_certificate_oid'] = _ApiClient["default"].convertToType(data['internal_gift_certificate_oid'], 'Number');
        }

        if (data.hasOwnProperty('ledger_entries')) {
          obj['ledger_entries'] = _ApiClient["default"].convertToType(data['ledger_entries'], [_CustomerLoyaltyLedger["default"]]);
        }

        if (data.hasOwnProperty('pending_points')) {
          obj['pending_points'] = _ApiClient["default"].convertToType(data['pending_points'], 'Number');
        }

        if (data.hasOwnProperty('redemptions')) {
          obj['redemptions'] = _ApiClient["default"].convertToType(data['redemptions'], [_CustomerLoyaltyRedemption["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CustomerLoyalty;
}();
/**
 * Current points
 * @member {Number} current_points
 */


CustomerLoyalty.prototype['current_points'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/GiftCertificate} internal_gift_certificate
 */

CustomerLoyalty.prototype['internal_gift_certificate'] = undefined;
/**
 * Loyalty Cashback / Store credit balance (internal gift certificate balance)
 * @member {String} internal_gift_certificate_balance
 */

CustomerLoyalty.prototype['internal_gift_certificate_balance'] = undefined;
/**
 * Internal gift certificate oid used to tracking loyalty cashback / store credit.
 * @member {Number} internal_gift_certificate_oid
 */

CustomerLoyalty.prototype['internal_gift_certificate_oid'] = undefined;
/**
 * Ledger entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger>} ledger_entries
 */

CustomerLoyalty.prototype['ledger_entries'] = undefined;
/**
 * Pending Points
 * @member {Number} pending_points
 */

CustomerLoyalty.prototype['pending_points'] = undefined;
/**
 * Redemptions
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption>} redemptions
 */

CustomerLoyalty.prototype['redemptions'] = undefined;
var _default = CustomerLoyalty;
exports["default"] = _default;