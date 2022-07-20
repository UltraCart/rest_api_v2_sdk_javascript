"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountsReceivableRetryStatMetrics = _interopRequireDefault(require("./AccountsReceivableRetryStatMetrics"));

var _AccountsReceivableRetryStatRevenue = _interopRequireDefault(require("./AccountsReceivableRetryStatRevenue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AccountsReceivableRetryStatAccount model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
 * @version 4.0.36-RC
 */
var AccountsReceivableRetryStatAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsReceivableRetryStatAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
   */
  function AccountsReceivableRetryStatAccount() {
    _classCallCheck(this, AccountsReceivableRetryStatAccount);

    AccountsReceivableRetryStatAccount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountsReceivableRetryStatAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountsReceivableRetryStatAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} The populated <code>AccountsReceivableRetryStatAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsReceivableRetryStatAccount();

        if (data.hasOwnProperty('days')) {
          obj['days'] = _ApiClient["default"].convertToType(data['days'], [_AccountsReceivableRetryStatMetrics["default"]]);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('overall')) {
          obj['overall'] = _AccountsReceivableRetryStatMetrics["default"].constructFromObject(data['overall']);
        }

        if (data.hasOwnProperty('revenue_for_period')) {
          obj['revenue_for_period'] = _ApiClient["default"].convertToType(data['revenue_for_period'], [_AccountsReceivableRetryStatRevenue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountsReceivableRetryStatAccount;
}();
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics>} days
 */


AccountsReceivableRetryStatAccount.prototype['days'] = undefined;
/**
 * @member {String} merchant_id
 */

AccountsReceivableRetryStatAccount.prototype['merchant_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} overall
 */

AccountsReceivableRetryStatAccount.prototype['overall'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue>} revenue_for_period
 */

AccountsReceivableRetryStatAccount.prototype['revenue_for_period'] = undefined;
var _default = AccountsReceivableRetryStatAccount;
exports["default"] = _default;