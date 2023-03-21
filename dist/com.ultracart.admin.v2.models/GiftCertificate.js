"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GiftCertificateLedgerEntry = _interopRequireDefault(require("./GiftCertificateLedgerEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GiftCertificate model module.
 * @module com.ultracart.admin.v2.models/GiftCertificate
 * @version 4.0.139
 */
var GiftCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificate
   */
  function GiftCertificate() {
    _classCallCheck(this, GiftCertificate);

    GiftCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GiftCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GiftCertificate} The populated <code>GiftCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GiftCertificate();

        if (data.hasOwnProperty('activated')) {
          obj['activated'] = _ApiClient["default"].convertToType(data['activated'], 'Boolean');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('gift_certificate_oid')) {
          obj['gift_certificate_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_oid'], 'Number');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _ApiClient["default"].convertToType(data['internal'], 'Boolean');
        }

        if (data.hasOwnProperty('ledger_entries')) {
          obj['ledger_entries'] = _ApiClient["default"].convertToType(data['ledger_entries'], [_GiftCertificateLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_note')) {
          obj['merchant_note'] = _ApiClient["default"].convertToType(data['merchant_note'], 'String');
        }

        if (data.hasOwnProperty('original_balance')) {
          obj['original_balance'] = _ApiClient["default"].convertToType(data['original_balance'], 'Number');
        }

        if (data.hasOwnProperty('reference_order_id')) {
          obj['reference_order_id'] = _ApiClient["default"].convertToType(data['reference_order_id'], 'String');
        }

        if (data.hasOwnProperty('remaining_balance')) {
          obj['remaining_balance'] = _ApiClient["default"].convertToType(data['remaining_balance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GiftCertificate;
}();
/**
 * True if this gift certificate is activated and ready to apply to purchases.
 * @member {Boolean} activated
 */


GiftCertificate.prototype['activated'] = undefined;
/**
 * The code used by the customer to purchase against this gift certificate.
 * @member {String} code
 */

GiftCertificate.prototype['code'] = undefined;
/**
 * This is the customer profile oid associated with this internally managed gift certificate.
 * @member {Number} customer_profile_oid
 */

GiftCertificate.prototype['customer_profile_oid'] = undefined;
/**
 * True if this gift certificate was deleted.
 * @member {Boolean} deleted
 */

GiftCertificate.prototype['deleted'] = undefined;
/**
 * Email of the customer associated with this gift certificate.
 * @member {String} email
 */

GiftCertificate.prototype['email'] = undefined;
/**
 * Expiration date time.
 * @member {String} expiration_dts
 */

GiftCertificate.prototype['expiration_dts'] = undefined;
/**
 * Gift certificate oid.
 * @member {Number} gift_certificate_oid
 */

GiftCertificate.prototype['gift_certificate_oid'] = undefined;
/**
 * This is an internally managed gift certificate associated with the loyalty cash rewards program.
 * @member {Boolean} internal
 */

GiftCertificate.prototype['internal'] = undefined;
/**
 * A list of all ledger activity for this gift certificate.
 * @member {Array.<module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry>} ledger_entries
 */

GiftCertificate.prototype['ledger_entries'] = undefined;
/**
 * Merchant Id
 * @member {String} merchant_id
 */

GiftCertificate.prototype['merchant_id'] = undefined;
/**
 * A list of all ledger activity for this gift certificate.
 * @member {String} merchant_note
 */

GiftCertificate.prototype['merchant_note'] = undefined;
/**
 * Original balance of the gift certificate.
 * @member {Number} original_balance
 */

GiftCertificate.prototype['original_balance'] = undefined;
/**
 * The order used to purchase this gift certificate.  This value is ONLY set during checkout when a certificate is purchased, not when it is used.  Any usage is recorded in the ledger
 * @member {String} reference_order_id
 */

GiftCertificate.prototype['reference_order_id'] = undefined;
/**
 * The remaining balance on the gift certificate.  This is never set directly, but calculated from the ledger.  To change the remaining balance, add a ledger entry.
 * @member {Number} remaining_balance
 */

GiftCertificate.prototype['remaining_balance'] = undefined;
var _default = GiftCertificate;
exports["default"] = _default;