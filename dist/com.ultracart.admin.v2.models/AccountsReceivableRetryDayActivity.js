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
 * The AccountsReceivableRetryDayActivity model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
 * @version 4.0.23-RC
 */
var AccountsReceivableRetryDayActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsReceivableRetryDayActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
   */
  function AccountsReceivableRetryDayActivity() {
    _classCallCheck(this, AccountsReceivableRetryDayActivity);

    AccountsReceivableRetryDayActivity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountsReceivableRetryDayActivity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountsReceivableRetryDayActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} The populated <code>AccountsReceivableRetryDayActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsReceivableRetryDayActivity();

        if (data.hasOwnProperty('charge')) {
          obj['charge'] = _ApiClient["default"].convertToType(data['charge'], 'Boolean');
        }

        if (data.hasOwnProperty('coupon_code')) {
          obj['coupon_code'] = _ApiClient["default"].convertToType(data['coupon_code'], 'String');
        }

        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient["default"].convertToType(data['day'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccountsReceivableRetryDayActivity;
}();
/**
 * True if a charge attempt should be made on this day.  False means the order should be rejected on this day.
 * @member {Boolean} charge
 */


AccountsReceivableRetryDayActivity.prototype['charge'] = undefined;
/**
 * The coupon code that should be applied to this order.
 * @member {String} coupon_code
 */

AccountsReceivableRetryDayActivity.prototype['coupon_code'] = undefined;
/**
 * The number of days since the order placed in Accounts Receivable
 * @member {Number} day
 */

AccountsReceivableRetryDayActivity.prototype['day'] = undefined;
var _default = AccountsReceivableRetryDayActivity;
exports["default"] = _default;