"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AffiliateClick = _interopRequireDefault(require("./AffiliateClick"));

var _AffiliateLink = _interopRequireDefault(require("./AffiliateLink"));

var _Order = _interopRequireDefault(require("./Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AffiliateLedger model module.
 * @module com.ultracart.admin.v2.models/AffiliateLedger
 * @version 4.0.59-RC
 */
var AffiliateLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateLedger</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateLedger
   */
  function AffiliateLedger() {
    _classCallCheck(this, AffiliateLedger);

    AffiliateLedger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AffiliateLedger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AffiliateLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedger} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AffiliateLedger} The populated <code>AffiliateLedger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateLedger();

        if (data.hasOwnProperty('affiliate_click_oid')) {
          obj['affiliate_click_oid'] = _ApiClient["default"].convertToType(data['affiliate_click_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_ledger_oid')) {
          obj['affiliate_ledger_oid'] = _ApiClient["default"].convertToType(data['affiliate_ledger_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_link_oid')) {
          obj['affiliate_link_oid'] = _ApiClient["default"].convertToType(data['affiliate_link_oid'], 'Number');
        }

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('assigned_by_user')) {
          obj['assigned_by_user'] = _ApiClient["default"].convertToType(data['assigned_by_user'], 'String');
        }

        if (data.hasOwnProperty('click')) {
          obj['click'] = _AffiliateClick["default"].constructFromObject(data['click']);
        }

        if (data.hasOwnProperty('item_id')) {
          obj['item_id'] = _ApiClient["default"].convertToType(data['item_id'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _AffiliateLink["default"].constructFromObject(data['link']);
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _Order["default"].constructFromObject(data['order']);
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('original_transaction_dts')) {
          obj['original_transaction_dts'] = _ApiClient["default"].convertToType(data['original_transaction_dts'], 'String');
        }

        if (data.hasOwnProperty('sub_id')) {
          obj['sub_id'] = _ApiClient["default"].convertToType(data['sub_id'], 'String');
        }

        if (data.hasOwnProperty('tier_number')) {
          obj['tier_number'] = _ApiClient["default"].convertToType(data['tier_number'], 'Number');
        }

        if (data.hasOwnProperty('transaction_amount')) {
          obj['transaction_amount'] = _ApiClient["default"].convertToType(data['transaction_amount'], 'Number');
        }

        if (data.hasOwnProperty('transaction_amount_paid')) {
          obj['transaction_amount_paid'] = _ApiClient["default"].convertToType(data['transaction_amount_paid'], 'Number');
        }

        if (data.hasOwnProperty('transaction_dts')) {
          obj['transaction_dts'] = _ApiClient["default"].convertToType(data['transaction_dts'], 'String');
        }

        if (data.hasOwnProperty('transaction_memo')) {
          obj['transaction_memo'] = _ApiClient["default"].convertToType(data['transaction_memo'], 'String');
        }

        if (data.hasOwnProperty('transaction_percentage')) {
          obj['transaction_percentage'] = _ApiClient["default"].convertToType(data['transaction_percentage'], 'Number');
        }

        if (data.hasOwnProperty('transaction_state')) {
          obj['transaction_state'] = _ApiClient["default"].convertToType(data['transaction_state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AffiliateLedger;
}();
/**
 * Unique object identifier for the click associated with this ledger entry
 * @member {Number} affiliate_click_oid
 */


AffiliateLedger.prototype['affiliate_click_oid'] = undefined;
/**
 * Affiliate ledger object ID associated with this ledger
 * @member {Number} affiliate_ledger_oid
 */

AffiliateLedger.prototype['affiliate_ledger_oid'] = undefined;
/**
 * Unique object identifier for the link that this click is associated with
 * @member {Number} affiliate_link_oid
 */

AffiliateLedger.prototype['affiliate_link_oid'] = undefined;
/**
 * Affiliate object ID associated with this transaction
 * @member {Number} affiliate_oid
 */

AffiliateLedger.prototype['affiliate_oid'] = undefined;
/**
 * User that assigned the transaction if it was done manually
 * @member {String} assigned_by_user
 */

AffiliateLedger.prototype['assigned_by_user'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/AffiliateClick} click
 */

AffiliateLedger.prototype['click'] = undefined;
/**
 * Item ID associated with this transaction
 * @member {String} item_id
 */

AffiliateLedger.prototype['item_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/AffiliateLink} link
 */

AffiliateLedger.prototype['link'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */

AffiliateLedger.prototype['order'] = undefined;
/**
 * Order ID associated with this transaction
 * @member {String} order_id
 */

AffiliateLedger.prototype['order_id'] = undefined;
/**
 * Date/time of the original transaction for reversals
 * @member {String} original_transaction_dts
 */

AffiliateLedger.prototype['original_transaction_dts'] = undefined;
/**
 * Sub ID associated with transaction (from the click)
 * @member {String} sub_id
 */

AffiliateLedger.prototype['sub_id'] = undefined;
/**
 * Tier number that this transaction earned
 * @member {Number} tier_number
 */

AffiliateLedger.prototype['tier_number'] = undefined;
/**
 * Transaction amount
 * @member {Number} transaction_amount
 */

AffiliateLedger.prototype['transaction_amount'] = undefined;
/**
 * Amount of the transaction that has been paid out.
 * @member {Number} transaction_amount_paid
 */

AffiliateLedger.prototype['transaction_amount_paid'] = undefined;
/**
 * Date/time that the transaction was made
 * @member {String} transaction_dts
 */

AffiliateLedger.prototype['transaction_dts'] = undefined;
/**
 * Memo explaining the transaction
 * @member {String} transaction_memo
 */

AffiliateLedger.prototype['transaction_memo'] = undefined;
/**
 * Percentage associated with this transaction
 * @member {Number} transaction_percentage
 */

AffiliateLedger.prototype['transaction_percentage'] = undefined;
/**
 * Transaction state
 * @member {module:com.ultracart.admin.v2.models/AffiliateLedger.TransactionStateEnum} transaction_state
 */

AffiliateLedger.prototype['transaction_state'] = undefined;
/**
 * Allowed values for the <code>transaction_state</code> property.
 * @enum {String}
 * @readonly
 */

AffiliateLedger['TransactionStateEnum'] = {
  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Posted"
   * @const
   */
  "Posted": "Posted",

  /**
   * value: "Approved"
   * @const
   */
  "Approved": "Approved",

  /**
   * value: "Paid"
   * @const
   */
  "Paid": "Paid",

  /**
   * value: "Rejected"
   * @const
   */
  "Rejected": "Rejected",

  /**
   * value: "Partially Paid"
   * @const
   */
  "Partially Paid": "Partially Paid"
};
var _default = AffiliateLedger;
exports["default"] = _default;