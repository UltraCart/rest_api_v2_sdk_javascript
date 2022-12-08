"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerStoreCreditLedgerEntry = _interopRequireDefault(require("./CustomerStoreCreditLedgerEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerStoreCredit model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCredit
 * @version 4.0.94-RC
 */
var CustomerStoreCredit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerStoreCredit</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerStoreCredit
   */
  function CustomerStoreCredit() {
    _classCallCheck(this, CustomerStoreCredit);

    CustomerStoreCredit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerStoreCredit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerStoreCredit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCredit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCredit} The populated <code>CustomerStoreCredit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerStoreCredit();

        if (data.hasOwnProperty('available')) {
          obj['available'] = _ApiClient["default"].convertToType(data['available'], 'Number');
        }

        if (data.hasOwnProperty('expiring')) {
          obj['expiring'] = _ApiClient["default"].convertToType(data['expiring'], 'Number');
        }

        if (data.hasOwnProperty('future_ledgers')) {
          obj['future_ledgers'] = _ApiClient["default"].convertToType(data['future_ledgers'], [_CustomerStoreCreditLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('past_ledgers')) {
          obj['past_ledgers'] = _ApiClient["default"].convertToType(data['past_ledgers'], [_CustomerStoreCreditLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('vesting')) {
          obj['vesting'] = _ApiClient["default"].convertToType(data['vesting'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerStoreCredit;
}();
/**
 * Available store credit which is defined as unused and vested
 * @member {Number} available
 */


CustomerStoreCredit.prototype['available'] = undefined;
/**
 * Amount of store credit expiring within 30 days
 * @member {Number} expiring
 */

CustomerStoreCredit.prototype['expiring'] = undefined;
/**
 * Array of future ledger entries including expiring entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} future_ledgers
 */

CustomerStoreCredit.prototype['future_ledgers'] = undefined;
/**
 * Array of past ledger entries including accrual, usage, and expiring entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} past_ledgers
 */

CustomerStoreCredit.prototype['past_ledgers'] = undefined;
/**
 * Total lifetime store credit for this customer.
 * @member {Number} total
 */

CustomerStoreCredit.prototype['total'] = undefined;
/**
 * Amount of store credit vesting
 * @member {Number} vesting
 */

CustomerStoreCredit.prototype['vesting'] = undefined;
var _default = CustomerStoreCredit;
exports["default"] = _default;