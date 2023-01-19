"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailPerformanceCustomerHistogram = _interopRequireDefault(require("./EmailPerformanceCustomerHistogram"));

var _EmailPerformanceDaily = _interopRequireDefault(require("./EmailPerformanceDaily"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailPerformance model module.
 * @module com.ultracart.admin.v2.models/EmailPerformance
 * @version 4.0.118-RC
 */
var EmailPerformance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailPerformance</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformance
   */
  function EmailPerformance() {
    _classCallCheck(this, EmailPerformance);

    EmailPerformance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailPerformance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailPerformance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformance} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformance} The populated <code>EmailPerformance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailPerformance();

        if (data.hasOwnProperty('active_customers')) {
          obj['active_customers'] = _ApiClient["default"].convertToType(data['active_customers'], 'Number');
        }

        if (data.hasOwnProperty('actual_customers')) {
          obj['actual_customers'] = _ApiClient["default"].convertToType(data['actual_customers'], 'Number');
        }

        if (data.hasOwnProperty('bounce_count')) {
          obj['bounce_count'] = _ApiClient["default"].convertToType(data['bounce_count'], 'Number');
        }

        if (data.hasOwnProperty('bounce_percentage')) {
          obj['bounce_percentage'] = _ApiClient["default"].convertToType(data['bounce_percentage'], 'Number');
        }

        if (data.hasOwnProperty('bounce_percentage_formatted')) {
          obj['bounce_percentage_formatted'] = _ApiClient["default"].convertToType(data['bounce_percentage_formatted'], 'String');
        }

        if (data.hasOwnProperty('customer_histogram')) {
          obj['customer_histogram'] = _EmailPerformanceCustomerHistogram["default"].constructFromObject(data['customer_histogram']);
        }

        if (data.hasOwnProperty('daily_stats')) {
          obj['daily_stats'] = _ApiClient["default"].convertToType(data['daily_stats'], [_EmailPerformanceDaily["default"]]);
        }

        if (data.hasOwnProperty('delivered_count')) {
          obj['delivered_count'] = _ApiClient["default"].convertToType(data['delivered_count'], 'Number');
        }

        if (data.hasOwnProperty('loyalty_program_type')) {
          obj['loyalty_program_type'] = _ApiClient["default"].convertToType(data['loyalty_program_type'], 'String');
        }

        if (data.hasOwnProperty('max_active_customers')) {
          obj['max_active_customers'] = _ApiClient["default"].convertToType(data['max_active_customers'], 'Number');
        }

        if (data.hasOwnProperty('max_emails_per_day')) {
          obj['max_emails_per_day'] = _ApiClient["default"].convertToType(data['max_emails_per_day'], 'Number');
        }

        if (data.hasOwnProperty('max_emails_per_hour')) {
          obj['max_emails_per_hour'] = _ApiClient["default"].convertToType(data['max_emails_per_hour'], 'Number');
        }

        if (data.hasOwnProperty('max_emails_per_month')) {
          obj['max_emails_per_month'] = _ApiClient["default"].convertToType(data['max_emails_per_month'], 'Number');
        }

        if (data.hasOwnProperty('paused_for_spam')) {
          obj['paused_for_spam'] = _ApiClient["default"].convertToType(data['paused_for_spam'], 'Boolean');
        }

        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }

        if (data.hasOwnProperty('sent_emails_per_day')) {
          obj['sent_emails_per_day'] = _ApiClient["default"].convertToType(data['sent_emails_per_day'], 'Number');
        }

        if (data.hasOwnProperty('sent_emails_per_hour')) {
          obj['sent_emails_per_hour'] = _ApiClient["default"].convertToType(data['sent_emails_per_hour'], 'Number');
        }

        if (data.hasOwnProperty('sent_emails_per_month')) {
          obj['sent_emails_per_month'] = _ApiClient["default"].convertToType(data['sent_emails_per_month'], 'Number');
        }

        if (data.hasOwnProperty('sequence_send_count')) {
          obj['sequence_send_count'] = _ApiClient["default"].convertToType(data['sequence_send_count'], 'Number');
        }

        if (data.hasOwnProperty('spam_count')) {
          obj['spam_count'] = _ApiClient["default"].convertToType(data['spam_count'], 'Number');
        }

        if (data.hasOwnProperty('spam_percentage')) {
          obj['spam_percentage'] = _ApiClient["default"].convertToType(data['spam_percentage'], 'Number');
        }

        if (data.hasOwnProperty('spam_percentage_formatted')) {
          obj['spam_percentage_formatted'] = _ApiClient["default"].convertToType(data['spam_percentage_formatted'], 'String');
        }

        if (data.hasOwnProperty('transactional_send_count')) {
          obj['transactional_send_count'] = _ApiClient["default"].convertToType(data['transactional_send_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailPerformance;
}();
/**
 * Active customers.  The value will be -1 if calculation is pending.
 * @member {Number} active_customers
 */


EmailPerformance.prototype['active_customers'] = undefined;
/**
 * Actual customers that they have regardless of active state.  The value will be -1 if calculation is pending.
 * @member {Number} actual_customers
 */

EmailPerformance.prototype['actual_customers'] = undefined;
/**
 * Bounce count
 * @member {Number} bounce_count
 */

EmailPerformance.prototype['bounce_count'] = undefined;
/**
 * bounce percentage rate based upon our look back window.  This should be under five percent or the account will be paused for sending.
 * @member {Number} bounce_percentage
 */

EmailPerformance.prototype['bounce_percentage'] = undefined;
/**
 * bounce percentage rate (formatted) based upon our look back window.  This should be under five percent or the account will be paused for sending.
 * @member {String} bounce_percentage_formatted
 */

EmailPerformance.prototype['bounce_percentage_formatted'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram} customer_histogram
 */

EmailPerformance.prototype['customer_histogram'] = undefined;
/**
 * Daily statistics used for charting
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailPerformanceDaily>} daily_stats
 */

EmailPerformance.prototype['daily_stats'] = undefined;
/**
 * Delivered count
 * @member {Number} delivered_count
 */

EmailPerformance.prototype['delivered_count'] = undefined;
/**
 * Loyalty Program Type
 * @member {module:com.ultracart.admin.v2.models/EmailPerformance.LoyaltyProgramTypeEnum} loyalty_program_type
 */

EmailPerformance.prototype['loyalty_program_type'] = undefined;
/**
 * Maximum active customers allowed under their billing plan
 * @member {Number} max_active_customers
 */

EmailPerformance.prototype['max_active_customers'] = undefined;
/**
 * Max emails per day
 * @member {Number} max_emails_per_day
 */

EmailPerformance.prototype['max_emails_per_day'] = undefined;
/**
 * Max emails per hour
 * @member {Number} max_emails_per_hour
 */

EmailPerformance.prototype['max_emails_per_hour'] = undefined;
/**
 * Max emails per month
 * @member {Number} max_emails_per_month
 */

EmailPerformance.prototype['max_emails_per_month'] = undefined;
/**
 * True if campaign/flow emails are paused due to spam complaints.
 * @member {Boolean} paused_for_spam
 */

EmailPerformance.prototype['paused_for_spam'] = undefined;
/**
 * Revenue
 * @member {Number} revenue
 */

EmailPerformance.prototype['revenue'] = undefined;
/**
 * Sent emails last 24 hours
 * @member {Number} sent_emails_per_day
 */

EmailPerformance.prototype['sent_emails_per_day'] = undefined;
/**
 * Sent emails last hour
 * @member {Number} sent_emails_per_hour
 */

EmailPerformance.prototype['sent_emails_per_hour'] = undefined;
/**
 * Sent emails last 31 days
 * @member {Number} sent_emails_per_month
 */

EmailPerformance.prototype['sent_emails_per_month'] = undefined;
/**
 * Total sequence (campaign/flow) emails sent
 * @member {Number} sequence_send_count
 */

EmailPerformance.prototype['sequence_send_count'] = undefined;
/**
 * Spam complaints
 * @member {Number} spam_count
 */

EmailPerformance.prototype['spam_count'] = undefined;
/**
 * Spam percentage rate based upon our look back window.  This should be under one half a percent or the account will be paused for sending.
 * @member {Number} spam_percentage
 */

EmailPerformance.prototype['spam_percentage'] = undefined;
/**
 * Spam percentage rate (formatted) based upon our look back window.  This should be under one half a percent or the account will be paused for sending.
 * @member {String} spam_percentage_formatted
 */

EmailPerformance.prototype['spam_percentage_formatted'] = undefined;
/**
 * Total transactions emails sent
 * @member {Number} transactional_send_count
 */

EmailPerformance.prototype['transactional_send_count'] = undefined;
/**
 * Allowed values for the <code>loyalty_program_type</code> property.
 * @enum {String}
 * @readonly
 */

EmailPerformance['LoyaltyProgramTypeEnum'] = {
  /**
   * value: "disabled"
   * @const
   */
  "disabled": "disabled",

  /**
   * value: "points"
   * @const
   */
  "points": "points",

  /**
   * value: "cashback"
   * @const
   */
  "cashback": "cashback"
};
var _default = EmailPerformance;
exports["default"] = _default;