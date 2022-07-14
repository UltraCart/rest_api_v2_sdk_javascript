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
 * The EmailCommseqStat model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqStat
 * @version 4.0.34-RC
 */
var EmailCommseqStat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCommseqStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqStat
   */
  function EmailCommseqStat() {
    _classCallCheck(this, EmailCommseqStat);

    EmailCommseqStat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCommseqStat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCommseqStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqStat} The populated <code>EmailCommseqStat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCommseqStat();

        if (data.hasOwnProperty('click_count')) {
          obj['click_count'] = _ApiClient["default"].convertToType(data['click_count'], 'Number');
        }

        if (data.hasOwnProperty('click_count_formatted')) {
          obj['click_count_formatted'] = _ApiClient["default"].convertToType(data['click_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('conversion_count')) {
          obj['conversion_count'] = _ApiClient["default"].convertToType(data['conversion_count'], 'Number');
        }

        if (data.hasOwnProperty('conversion_count_formatted')) {
          obj['conversion_count_formatted'] = _ApiClient["default"].convertToType(data['conversion_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('delivered_count')) {
          obj['delivered_count'] = _ApiClient["default"].convertToType(data['delivered_count'], 'Number');
        }

        if (data.hasOwnProperty('delivered_count_formatted')) {
          obj['delivered_count_formatted'] = _ApiClient["default"].convertToType(data['delivered_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('email_communication_sequence_uuid')) {
          obj['email_communication_sequence_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_uuid'], 'String');
        }

        if (data.hasOwnProperty('finished_count')) {
          obj['finished_count'] = _ApiClient["default"].convertToType(data['finished_count'], 'Number');
        }

        if (data.hasOwnProperty('finished_count_formatted')) {
          obj['finished_count_formatted'] = _ApiClient["default"].convertToType(data['finished_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('in_progress_count')) {
          obj['in_progress_count'] = _ApiClient["default"].convertToType(data['in_progress_count'], 'Number');
        }

        if (data.hasOwnProperty('in_progress_count_formatted')) {
          obj['in_progress_count_formatted'] = _ApiClient["default"].convertToType(data['in_progress_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('kickbox_count')) {
          obj['kickbox_count'] = _ApiClient["default"].convertToType(data['kickbox_count'], 'Number');
        }

        if (data.hasOwnProperty('kickbox_count_formatted')) {
          obj['kickbox_count_formatted'] = _ApiClient["default"].convertToType(data['kickbox_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('open_count')) {
          obj['open_count'] = _ApiClient["default"].convertToType(data['open_count'], 'Number');
        }

        if (data.hasOwnProperty('open_count_formatted')) {
          obj['open_count_formatted'] = _ApiClient["default"].convertToType(data['open_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('order_count')) {
          obj['order_count'] = _ApiClient["default"].convertToType(data['order_count'], 'Number');
        }

        if (data.hasOwnProperty('order_count_formatted')) {
          obj['order_count_formatted'] = _ApiClient["default"].convertToType(data['order_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('permanent_bounce_count')) {
          obj['permanent_bounce_count'] = _ApiClient["default"].convertToType(data['permanent_bounce_count'], 'Number');
        }

        if (data.hasOwnProperty('permanent_bounce_count_formatted')) {
          obj['permanent_bounce_count_formatted'] = _ApiClient["default"].convertToType(data['permanent_bounce_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('profit')) {
          obj['profit'] = _ApiClient["default"].convertToType(data['profit'], 'Number');
        }

        if (data.hasOwnProperty('profit_formatted')) {
          obj['profit_formatted'] = _ApiClient["default"].convertToType(data['profit_formatted'], 'String');
        }

        if (data.hasOwnProperty('revenue')) {
          obj['revenue'] = _ApiClient["default"].convertToType(data['revenue'], 'Number');
        }

        if (data.hasOwnProperty('revenue_formatted')) {
          obj['revenue_formatted'] = _ApiClient["default"].convertToType(data['revenue_formatted'], 'String');
        }

        if (data.hasOwnProperty('send_count')) {
          obj['send_count'] = _ApiClient["default"].convertToType(data['send_count'], 'Number');
        }

        if (data.hasOwnProperty('send_count_formatted')) {
          obj['send_count_formatted'] = _ApiClient["default"].convertToType(data['send_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('skipped_count')) {
          obj['skipped_count'] = _ApiClient["default"].convertToType(data['skipped_count'], 'Number');
        }

        if (data.hasOwnProperty('skipped_count_formatted')) {
          obj['skipped_count_formatted'] = _ApiClient["default"].convertToType(data['skipped_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('spam_count')) {
          obj['spam_count'] = _ApiClient["default"].convertToType(data['spam_count'], 'Number');
        }

        if (data.hasOwnProperty('spam_count_formatted')) {
          obj['spam_count_formatted'] = _ApiClient["default"].convertToType(data['spam_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('started_count')) {
          obj['started_count'] = _ApiClient["default"].convertToType(data['started_count'], 'Number');
        }

        if (data.hasOwnProperty('started_count_formatted')) {
          obj['started_count_formatted'] = _ApiClient["default"].convertToType(data['started_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('unsubscribe_count')) {
          obj['unsubscribe_count'] = _ApiClient["default"].convertToType(data['unsubscribe_count'], 'Number');
        }

        if (data.hasOwnProperty('unsubscribe_count_formatted')) {
          obj['unsubscribe_count_formatted'] = _ApiClient["default"].convertToType(data['unsubscribe_count_formatted'], 'String');
        }

        if (data.hasOwnProperty('view_count')) {
          obj['view_count'] = _ApiClient["default"].convertToType(data['view_count'], 'Number');
        }

        if (data.hasOwnProperty('view_count_formatted')) {
          obj['view_count_formatted'] = _ApiClient["default"].convertToType(data['view_count_formatted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailCommseqStat;
}();
/**
 * Count of clicked emails
 * @member {Number} click_count
 */


EmailCommseqStat.prototype['click_count'] = undefined;
/**
 * Count of clicked emails, formatted
 * @member {String} click_count_formatted
 */

EmailCommseqStat.prototype['click_count_formatted'] = undefined;
/**
 * Count of conversion
 * @member {Number} conversion_count
 */

EmailCommseqStat.prototype['conversion_count'] = undefined;
/**
 * Count of conversions, formatted
 * @member {String} conversion_count_formatted
 */

EmailCommseqStat.prototype['conversion_count_formatted'] = undefined;
/**
 * Count of delivered emails
 * @member {Number} delivered_count
 */

EmailCommseqStat.prototype['delivered_count'] = undefined;
/**
 * Count of delivered emails, formatted
 * @member {String} delivered_count_formatted
 */

EmailCommseqStat.prototype['delivered_count_formatted'] = undefined;
/**
 * UUID associated with the communication sequence
 * @member {String} email_communication_sequence_uuid
 */

EmailCommseqStat.prototype['email_communication_sequence_uuid'] = undefined;
/**
 * Count of customers that finished the sequence
 * @member {Number} finished_count
 */

EmailCommseqStat.prototype['finished_count'] = undefined;
/**
 * Count of customers that finished the sequence, formatted
 * @member {String} finished_count_formatted
 */

EmailCommseqStat.prototype['finished_count_formatted'] = undefined;
/**
 * Count of customers in progress
 * @member {Number} in_progress_count
 */

EmailCommseqStat.prototype['in_progress_count'] = undefined;
/**
 * Count of customers in progress, formatted
 * @member {String} in_progress_count_formatted
 */

EmailCommseqStat.prototype['in_progress_count_formatted'] = undefined;
/**
 * Count of emails kicked
 * @member {Number} kickbox_count
 */

EmailCommseqStat.prototype['kickbox_count'] = undefined;
/**
 * Count of emails kicked, formatted
 * @member {String} kickbox_count_formatted
 */

EmailCommseqStat.prototype['kickbox_count_formatted'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCommseqStat.prototype['merchant_id'] = undefined;
/**
 * Count of opened emails
 * @member {Number} open_count
 */

EmailCommseqStat.prototype['open_count'] = undefined;
/**
 * Count of opened emails, formatted
 * @member {String} open_count_formatted
 */

EmailCommseqStat.prototype['open_count_formatted'] = undefined;
/**
 * Count of orders
 * @member {Number} order_count
 */

EmailCommseqStat.prototype['order_count'] = undefined;
/**
 * Count of orders, formatted
 * @member {String} order_count_formatted
 */

EmailCommseqStat.prototype['order_count_formatted'] = undefined;
/**
 * Count of emails permanently bounced
 * @member {Number} permanent_bounce_count
 */

EmailCommseqStat.prototype['permanent_bounce_count'] = undefined;
/**
 * Count of emails permanently bounced, formatted
 * @member {String} permanent_bounce_count_formatted
 */

EmailCommseqStat.prototype['permanent_bounce_count_formatted'] = undefined;
/**
 * Profit
 * @member {Number} profit
 */

EmailCommseqStat.prototype['profit'] = undefined;
/**
 * Profit, formatted
 * @member {String} profit_formatted
 */

EmailCommseqStat.prototype['profit_formatted'] = undefined;
/**
 * Revenue
 * @member {Number} revenue
 */

EmailCommseqStat.prototype['revenue'] = undefined;
/**
 * Revenue, formatted
 * @member {String} revenue_formatted
 */

EmailCommseqStat.prototype['revenue_formatted'] = undefined;
/**
 * Count of emails sent
 * @member {Number} send_count
 */

EmailCommseqStat.prototype['send_count'] = undefined;
/**
 * Count of emails sent, formatted
 * @member {String} send_count_formatted
 */

EmailCommseqStat.prototype['send_count_formatted'] = undefined;
/**
 * Count of skipped emails
 * @member {Number} skipped_count
 */

EmailCommseqStat.prototype['skipped_count'] = undefined;
/**
 * Count of skipped emails, formatted
 * @member {String} skipped_count_formatted
 */

EmailCommseqStat.prototype['skipped_count_formatted'] = undefined;
/**
 * Count of emails classified as spam
 * @member {Number} spam_count
 */

EmailCommseqStat.prototype['spam_count'] = undefined;
/**
 * Count of emails classified as spam, formatted
 * @member {String} spam_count_formatted
 */

EmailCommseqStat.prototype['spam_count_formatted'] = undefined;
/**
 * Count of customers that started the sequence
 * @member {Number} started_count
 */

EmailCommseqStat.prototype['started_count'] = undefined;
/**
 * Count of customers that started the sequence, formatted
 * @member {String} started_count_formatted
 */

EmailCommseqStat.prototype['started_count_formatted'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCommseqStat.prototype['storefront_oid'] = undefined;
/**
 * Count of unsubscribes caused
 * @member {Number} unsubscribe_count
 */

EmailCommseqStat.prototype['unsubscribe_count'] = undefined;
/**
 * Count of unsubscribes caused, formatted
 * @member {String} unsubscribe_count_formatted
 */

EmailCommseqStat.prototype['unsubscribe_count_formatted'] = undefined;
/**
 * Count of views
 * @member {Number} view_count
 */

EmailCommseqStat.prototype['view_count'] = undefined;
/**
 * Count of views, formatted
 * @member {String} view_count_formatted
 */

EmailCommseqStat.prototype['view_count_formatted'] = undefined;
var _default = EmailCommseqStat;
exports["default"] = _default;