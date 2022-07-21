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
 * The CustomerStoreCreditLedgerEntry model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
 * @version 4.0.38-RC
 */
var CustomerStoreCreditLedgerEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerStoreCreditLedgerEntry</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
   */
  function CustomerStoreCreditLedgerEntry() {
    _classCallCheck(this, CustomerStoreCreditLedgerEntry);

    CustomerStoreCreditLedgerEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerStoreCreditLedgerEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerStoreCreditLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} The populated <code>CustomerStoreCreditLedgerEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerStoreCreditLedgerEntry();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('entry_dts')) {
          obj['entry_dts'] = _ApiClient["default"].convertToType(data['entry_dts'], 'String');
        }

        if (data.hasOwnProperty('gift_certificate_ledger_oid')) {
          obj['gift_certificate_ledger_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_ledger_oid'], 'Number');
        }

        if (data.hasOwnProperty('gift_certificate_oid')) {
          obj['gift_certificate_oid'] = _ApiClient["default"].convertToType(data['gift_certificate_oid'], 'Number');
        }

        if (data.hasOwnProperty('reference_order_id')) {
          obj['reference_order_id'] = _ApiClient["default"].convertToType(data['reference_order_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerStoreCreditLedgerEntry;
}();
/**
 * Identifies the state of this ledger entry whether the entry is Vesting or Expiring
 * @member {String} action
 */


CustomerStoreCreditLedgerEntry.prototype['action'] = undefined;
/**
 * The amount of the activity.
 * @member {Number} amount
 */

CustomerStoreCreditLedgerEntry.prototype['amount'] = undefined;
/**
 * Description of what this ledger entry is used.
 * @member {String} description
 */

CustomerStoreCreditLedgerEntry.prototype['description'] = undefined;
/**
 * Date time of this ledger activity.
 * @member {String} entry_dts
 */

CustomerStoreCreditLedgerEntry.prototype['entry_dts'] = undefined;
/**
 * Gift certificate ledger oid is a primary key for this object, used internally.
 * @member {Number} gift_certificate_ledger_oid
 */

CustomerStoreCreditLedgerEntry.prototype['gift_certificate_ledger_oid'] = undefined;
/**
 * Gift certificate oid.
 * @member {Number} gift_certificate_oid
 */

CustomerStoreCreditLedgerEntry.prototype['gift_certificate_oid'] = undefined;
/**
 * The order id if this gift certificate was used as part of the payment.
 * @member {String} reference_order_id
 */

CustomerStoreCreditLedgerEntry.prototype['reference_order_id'] = undefined;
var _default = CustomerStoreCreditLedgerEntry;
exports["default"] = _default;