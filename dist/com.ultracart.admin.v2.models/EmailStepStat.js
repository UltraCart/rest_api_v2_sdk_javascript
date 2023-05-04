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
 * The EmailStepStat model module.
 * @module com.ultracart.admin.v2.models/EmailStepStat
 * @version 4.0.153
 */
var EmailStepStat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStepStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStepStat
   */
  function EmailStepStat() {
    _classCallCheck(this, EmailStepStat);

    EmailStepStat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStepStat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStepStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStepStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStepStat} The populated <code>EmailStepStat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStepStat();

        if (data.hasOwnProperty('left_click_count')) {
          obj['left_click_count'] = _ApiClient["default"].convertToType(data['left_click_count'], 'Number');
        }

        if (data.hasOwnProperty('left_click_count_formatted')) {
          obj['left_click_count_formatted'] = _ApiClient["default"].convertToType(data['left_click_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_conversion_count')) {
          obj['left_conversion_count'] = _ApiClient["default"].convertToType(data['left_conversion_count'], 'Number');
        }

        if (data.hasOwnProperty('left_conversion_count_formatted')) {
          obj['left_conversion_count_formatted'] = _ApiClient["default"].convertToType(data['left_conversion_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_customer_count')) {
          obj['left_customer_count'] = _ApiClient["default"].convertToType(data['left_customer_count'], 'Number');
        }

        if (data.hasOwnProperty('left_customer_count_formatted')) {
          obj['left_customer_count_formatted'] = _ApiClient["default"].convertToType(data['left_customer_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_delivered_count')) {
          obj['left_delivered_count'] = _ApiClient["default"].convertToType(data['left_delivered_count'], 'Number');
        }

        if (data.hasOwnProperty('left_delivered_count_formatted')) {
          obj['left_delivered_count_formatted'] = _ApiClient["default"].convertToType(data['left_delivered_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_order_count')) {
          obj['left_order_count'] = _ApiClient["default"].convertToType(data['left_order_count'], 'Number');
        }

        if (data.hasOwnProperty('left_order_count_formatted')) {
          obj['left_order_count_formatted'] = _ApiClient["default"].convertToType(data['left_order_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_profit')) {
          obj['left_profit'] = _ApiClient["default"].convertToType(data['left_profit'], 'Number');
        }

        if (data.hasOwnProperty('left_profit_formatted')) {
          obj['left_profit_formatted'] = _ApiClient["default"].convertToType(data['left_profit_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_revenue')) {
          obj['left_revenue'] = _ApiClient["default"].convertToType(data['left_revenue'], 'Number');
        }

        if (data.hasOwnProperty('left_revenue_formatted')) {
          obj['left_revenue_formatted'] = _ApiClient["default"].convertToType(data['left_revenue_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_send_count')) {
          obj['left_send_count'] = _ApiClient["default"].convertToType(data['left_send_count'], 'Number');
        }

        if (data.hasOwnProperty('left_send_count_formatted')) {
          obj['left_send_count_formatted'] = _ApiClient["default"].convertToType(data['left_send_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_skipped_count')) {
          obj['left_skipped_count'] = _ApiClient["default"].convertToType(data['left_skipped_count'], 'Number');
        }

        if (data.hasOwnProperty('left_skipped_count_formatted')) {
          obj['left_skipped_count_formatted'] = _ApiClient["default"].convertToType(data['left_skipped_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('left_unsubscribe_count')) {
          obj['left_unsubscribe_count'] = _ApiClient["default"].convertToType(data['left_unsubscribe_count'], 'Number');
        }

        if (data.hasOwnProperty('left_unsubscribe_count_formatted')) {
          obj['left_unsubscribe_count_formatted'] = _ApiClient["default"].convertToType(data['left_unsubscribe_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('right_conversion_count')) {
          obj['right_conversion_count'] = _ApiClient["default"].convertToType(data['right_conversion_count'], 'Number');
        }

        if (data.hasOwnProperty('right_conversion_count_formatted')) {
          obj['right_conversion_count_formatted'] = _ApiClient["default"].convertToType(data['right_conversion_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('right_customer_count')) {
          obj['right_customer_count'] = _ApiClient["default"].convertToType(data['right_customer_count'], 'Number');
        }

        if (data.hasOwnProperty('right_customer_count_formatted')) {
          obj['right_customer_count_formatted'] = _ApiClient["default"].convertToType(data['right_customer_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('right_order_count')) {
          obj['right_order_count'] = _ApiClient["default"].convertToType(data['right_order_count'], 'Number');
        }

        if (data.hasOwnProperty('right_order_count_formatted')) {
          obj['right_order_count_formatted'] = _ApiClient["default"].convertToType(data['right_order_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('right_profit')) {
          obj['right_profit'] = _ApiClient["default"].convertToType(data['right_profit'], 'Number');
        }

        if (data.hasOwnProperty('right_profit_formatted')) {
          obj['right_profit_formatted'] = _ApiClient["default"].convertToType(data['right_profit_formatted'], 'String');
        }

        if (data.hasOwnProperty('right_revenue')) {
          obj['right_revenue'] = _ApiClient["default"].convertToType(data['right_revenue'], 'Number');
        }

        if (data.hasOwnProperty('right_revenue_formatted')) {
          obj['right_revenue_formatted'] = _ApiClient["default"].convertToType(data['right_revenue_formatted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailStepStat;
}();
/**
 * click count (left side)
 * @member {Number} left_click_count
 */


EmailStepStat.prototype['left_click_count'] = undefined;
/**
 * click count formatted (left side)
 * @member {String} left_click_count_formatted
 */

EmailStepStat.prototype['left_click_count_formatted'] = undefined;
/**
 * conversion count (left/default side)
 * @member {Number} left_conversion_count
 */

EmailStepStat.prototype['left_conversion_count'] = undefined;
/**
 * conversion count formatted (left/default side)
 * @member {String} left_conversion_count_formatted
 */

EmailStepStat.prototype['left_conversion_count_formatted'] = undefined;
/**
 * customer count (left/default side)
 * @member {Number} left_customer_count
 */

EmailStepStat.prototype['left_customer_count'] = undefined;
/**
 * customer count formatted (left/default side)
 * @member {String} left_customer_count_formatted
 */

EmailStepStat.prototype['left_customer_count_formatted'] = undefined;
/**
 * delivered count (left side)
 * @member {Number} left_delivered_count
 */

EmailStepStat.prototype['left_delivered_count'] = undefined;
/**
 * delivered count formatted (left side)
 * @member {String} left_delivered_count_formatted
 */

EmailStepStat.prototype['left_delivered_count_formatted'] = undefined;
/**
 * order count (left/default side)
 * @member {Number} left_order_count
 */

EmailStepStat.prototype['left_order_count'] = undefined;
/**
 * order count formatted (left/default side)
 * @member {String} left_order_count_formatted
 */

EmailStepStat.prototype['left_order_count_formatted'] = undefined;
/**
 * profit (left/default side)
 * @member {Number} left_profit
 */

EmailStepStat.prototype['left_profit'] = undefined;
/**
 * profit formatted (left/default side)
 * @member {String} left_profit_formatted
 */

EmailStepStat.prototype['left_profit_formatted'] = undefined;
/**
 * revenue (left/default side)
 * @member {Number} left_revenue
 */

EmailStepStat.prototype['left_revenue'] = undefined;
/**
 * revenue formatted (left/default side)
 * @member {String} left_revenue_formatted
 */

EmailStepStat.prototype['left_revenue_formatted'] = undefined;
/**
 * send count (left side)
 * @member {Number} left_send_count
 */

EmailStepStat.prototype['left_send_count'] = undefined;
/**
 * send count formatted (left side)
 * @member {String} left_send_count_formatted
 */

EmailStepStat.prototype['left_send_count_formatted'] = undefined;
/**
 * conversion count (left side)
 * @member {Number} left_skipped_count
 */

EmailStepStat.prototype['left_skipped_count'] = undefined;
/**
 * skipped count formatted (left side)
 * @member {String} left_skipped_count_formatted
 */

EmailStepStat.prototype['left_skipped_count_formatted'] = undefined;
/**
 * unsubscribe count (left side)
 * @member {Number} left_unsubscribe_count
 */

EmailStepStat.prototype['left_unsubscribe_count'] = undefined;
/**
 * unsubscribe count formatted (left side)
 * @member {String} left_unsubscribe_count_formatted
 */

EmailStepStat.prototype['left_unsubscribe_count_formatted'] = undefined;
/**
 * conversion count (right side)
 * @member {Number} right_conversion_count
 */

EmailStepStat.prototype['right_conversion_count'] = undefined;
/**
 * conversion count formatted (right side)
 * @member {String} right_conversion_count_formatted
 */

EmailStepStat.prototype['right_conversion_count_formatted'] = undefined;
/**
 * customer count (right side)
 * @member {Number} right_customer_count
 */

EmailStepStat.prototype['right_customer_count'] = undefined;
/**
 * customer count formatted (right side)
 * @member {String} right_customer_count_formatted
 */

EmailStepStat.prototype['right_customer_count_formatted'] = undefined;
/**
 * order count (right side)
 * @member {Number} right_order_count
 */

EmailStepStat.prototype['right_order_count'] = undefined;
/**
 * order count formatted (right side)
 * @member {String} right_order_count_formatted
 */

EmailStepStat.prototype['right_order_count_formatted'] = undefined;
/**
 * profit (right side)
 * @member {Number} right_profit
 */

EmailStepStat.prototype['right_profit'] = undefined;
/**
 * profit formatted (right side)
 * @member {String} right_profit_formatted
 */

EmailStepStat.prototype['right_profit_formatted'] = undefined;
/**
 * revenue (right side)
 * @member {Number} right_revenue
 */

EmailStepStat.prototype['right_revenue'] = undefined;
/**
 * revenue formatted (right side)
 * @member {String} right_revenue_formatted
 */

EmailStepStat.prototype['right_revenue_formatted'] = undefined;
var _default = EmailStepStat;
exports["default"] = _default;