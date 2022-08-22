"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChargebackDispute model module.
 * @module com.ultracart.admin.v2.models/ChargebackDispute
 * @version 4.0.56-RC
 */
var ChargebackDispute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChargebackDispute</code>.
   * @alias module:com.ultracart.admin.v2.models/ChargebackDispute
   */
  function ChargebackDispute() {
    _classCallCheck(this, ChargebackDispute);

    ChargebackDispute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChargebackDispute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChargebackDispute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChargebackDispute} The populated <code>ChargebackDispute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChargebackDispute();

        if (data.hasOwnProperty('account_number')) {
          obj['account_number'] = _ApiClient["default"].convertToType(data['account_number'], 'String');
        }

        if (data.hasOwnProperty('adjustment_request_text')) {
          obj['adjustment_request_text'] = _ApiClient["default"].convertToType(data['adjustment_request_text'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('auth_code')) {
          obj['auth_code'] = _ApiClient["default"].convertToType(data['auth_code'], 'String');
        }

        if (data.hasOwnProperty('case_number')) {
          obj['case_number'] = _ApiClient["default"].convertToType(data['case_number'], 'String');
        }

        if (data.hasOwnProperty('chargeback_dispute_oid')) {
          obj['chargeback_dispute_oid'] = _ApiClient["default"].convertToType(data['chargeback_dispute_oid'], 'Number');
        }

        if (data.hasOwnProperty('chargeback_dts')) {
          obj['chargeback_dts'] = _ApiClient["default"].convertToType(data['chargeback_dts'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('customer_care_notes')) {
          obj['customer_care_notes'] = _ApiClient["default"].convertToType(data['customer_care_notes'], 'String');
        }

        if (data.hasOwnProperty('encryption_key')) {
          obj['encryption_key'] = _ApiClient["default"].convertToType(data['encryption_key'], 'String');
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('fax_failure_reason')) {
          obj['fax_failure_reason'] = _ApiClient["default"].convertToType(data['fax_failure_reason'], 'String');
        }

        if (data.hasOwnProperty('fax_number')) {
          obj['fax_number'] = _ApiClient["default"].convertToType(data['fax_number'], 'String');
        }

        if (data.hasOwnProperty('fax_transaction_id')) {
          obj['fax_transaction_id'] = _ApiClient["default"].convertToType(data['fax_transaction_id'], 'Number');
        }

        if (data.hasOwnProperty('icsid')) {
          obj['icsid'] = _ApiClient["default"].convertToType(data['icsid'], 'String');
        }

        if (data.hasOwnProperty('merchant_account_profile_oid')) {
          obj['merchant_account_profile_oid'] = _ApiClient["default"].convertToType(data['merchant_account_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _Order["default"].constructFromObject(data['order']);
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('partial_card_number')) {
          obj['partial_card_number'] = _ApiClient["default"].convertToType(data['partial_card_number'], 'String');
        }

        if (data.hasOwnProperty('pdf_file_oid')) {
          obj['pdf_file_oid'] = _ApiClient["default"].convertToType(data['pdf_file_oid'], 'String');
        }

        if (data.hasOwnProperty('reason_code')) {
          obj['reason_code'] = _ApiClient["default"].convertToType(data['reason_code'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('website_url')) {
          obj['website_url'] = _ApiClient["default"].convertToType(data['website_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChargebackDispute;
}();
/**
 * Account number
 * @member {String} account_number
 */


ChargebackDispute.prototype['account_number'] = undefined;
/**
 * Adjustment request text
 * @member {String} adjustment_request_text
 */

ChargebackDispute.prototype['adjustment_request_text'] = undefined;
/**
 * Amount
 * @member {Number} amount
 */

ChargebackDispute.prototype['amount'] = undefined;
/**
 * Auth code
 * @member {String} auth_code
 */

ChargebackDispute.prototype['auth_code'] = undefined;
/**
 * Case number
 * @member {String} case_number
 */

ChargebackDispute.prototype['case_number'] = undefined;
/**
 * Chargeback Dispute Oid
 * @member {Number} chargeback_dispute_oid
 */

ChargebackDispute.prototype['chargeback_dispute_oid'] = undefined;
/**
 * Chargeback dts
 * @member {String} chargeback_dts
 */

ChargebackDispute.prototype['chargeback_dts'] = undefined;
/**
 * Currency
 * @member {String} currency
 */

ChargebackDispute.prototype['currency'] = undefined;
/**
 * Customer care notes
 * @member {String} customer_care_notes
 */

ChargebackDispute.prototype['customer_care_notes'] = undefined;
/**
 * Encryption key
 * @member {String} encryption_key
 */

ChargebackDispute.prototype['encryption_key'] = undefined;
/**
 * Expiration Dts
 * @member {String} expiration_dts
 */

ChargebackDispute.prototype['expiration_dts'] = undefined;
/**
 * Fax failure reason
 * @member {String} fax_failure_reason
 */

ChargebackDispute.prototype['fax_failure_reason'] = undefined;
/**
 * Fax number
 * @member {String} fax_number
 */

ChargebackDispute.prototype['fax_number'] = undefined;
/**
 * Fax transaction id
 * @member {Number} fax_transaction_id
 */

ChargebackDispute.prototype['fax_transaction_id'] = undefined;
/**
 * icsid
 * @member {String} icsid
 */

ChargebackDispute.prototype['icsid'] = undefined;
/**
 * Merchant account profile oid
 * @member {Number} merchant_account_profile_oid
 */

ChargebackDispute.prototype['merchant_account_profile_oid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */

ChargebackDispute.prototype['order'] = undefined;
/**
 * Order Id
 * @member {String} order_id
 */

ChargebackDispute.prototype['order_id'] = undefined;
/**
 * Partial card number
 * @member {String} partial_card_number
 */

ChargebackDispute.prototype['partial_card_number'] = undefined;
/**
 * PDF file oid
 * @member {String} pdf_file_oid
 */

ChargebackDispute.prototype['pdf_file_oid'] = undefined;
/**
 * Reason code
 * @member {String} reason_code
 */

ChargebackDispute.prototype['reason_code'] = undefined;
/**
 * Status
 * @member {String} status
 */

ChargebackDispute.prototype['status'] = undefined;
/**
 * Website URL
 * @member {String} website_url
 */

ChargebackDispute.prototype['website_url'] = undefined;
var _default = ChargebackDispute;
exports["default"] = _default;