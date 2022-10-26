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
 * The AccountsReceivableRetryStatMetrics model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
 * @version 4.0.74-RC
 */
var AccountsReceivableRetryStatMetrics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountsReceivableRetryStatMetrics</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
   */
  function AccountsReceivableRetryStatMetrics() {
    _classCallCheck(this, AccountsReceivableRetryStatMetrics);

    AccountsReceivableRetryStatMetrics.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountsReceivableRetryStatMetrics, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountsReceivableRetryStatMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} The populated <code>AccountsReceivableRetryStatMetrics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountsReceivableRetryStatMetrics();

        if (data.hasOwnProperty('attempts')) {
          obj['attempts'] = _ApiClient["default"].convertToType(data['attempts'], 'Number');
        }

        if (data.hasOwnProperty('attempts_formatted')) {
          obj['attempts_formatted'] = _ApiClient["default"].convertToType(data['attempts_formatted'], 'String');
        }

        if (data.hasOwnProperty('conversion_rate')) {
          obj['conversion_rate'] = _ApiClient["default"].convertToType(data['conversion_rate'], 'Number');
        }

        if (data.hasOwnProperty('conversion_rate_formatted')) {
          obj['conversion_rate_formatted'] = _ApiClient["default"].convertToType(data['conversion_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient["default"].convertToType(data['day'], 'Number');
        }

        if (data.hasOwnProperty('discounts')) {
          obj['discounts'] = _ApiClient["default"].convertToType(data['discounts'], 'Number');
        }

        if (data.hasOwnProperty('discounts_formatted')) {
          obj['discounts_formatted'] = _ApiClient["default"].convertToType(data['discounts_formatted'], 'String');
        }

        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }

        if (data.hasOwnProperty('revenue_formatted')) {
          obj['revenue_formatted'] = _ApiClient["default"].convertToType(data['revenue_formatted'], 'String');
        }

        if (data.hasOwnProperty('successes')) {
          obj['successes'] = _ApiClient["default"].convertToType(data['successes'], 'Number');
        }

        if (data.hasOwnProperty('successes_formatted')) {
          obj['successes_formatted'] = _ApiClient["default"].convertToType(data['successes_formatted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountsReceivableRetryStatMetrics;
}();
/**
 * @member {Number} attempts
 */


AccountsReceivableRetryStatMetrics.prototype['attempts'] = undefined;
/**
 * @member {String} attempts_formatted
 */

AccountsReceivableRetryStatMetrics.prototype['attempts_formatted'] = undefined;
/**
 * @member {Number} conversion_rate
 */

AccountsReceivableRetryStatMetrics.prototype['conversion_rate'] = undefined;
/**
 * @member {String} conversion_rate_formatted
 */

AccountsReceivableRetryStatMetrics.prototype['conversion_rate_formatted'] = undefined;
/**
 * @member {Number} day
 */

AccountsReceivableRetryStatMetrics.prototype['day'] = undefined;
/**
 * @member {Number} discounts
 */

AccountsReceivableRetryStatMetrics.prototype['discounts'] = undefined;
/**
 * @member {String} discounts_formatted
 */

AccountsReceivableRetryStatMetrics.prototype['discounts_formatted'] = undefined;
/**
 * @member {Number} revenue
 */

AccountsReceivableRetryStatMetrics.prototype['revenue'] = undefined;
/**
 * @member {String} revenue_formatted
 */

AccountsReceivableRetryStatMetrics.prototype['revenue_formatted'] = undefined;
/**
 * @member {Number} successes
 */

AccountsReceivableRetryStatMetrics.prototype['successes'] = undefined;
/**
 * @member {String} successes_formatted
 */

AccountsReceivableRetryStatMetrics.prototype['successes_formatted'] = undefined;
var _default = AccountsReceivableRetryStatMetrics;
exports["default"] = _default;