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
 * The EmailStat model module.
 * @module com.ultracart.admin.v2.models/EmailStat
 * @version 4.0.165
 */
var EmailStat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStat
   */
  function EmailStat() {
    _classCallCheck(this, EmailStat);

    EmailStat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailStat} The populated <code>EmailStat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStat();

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

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('delivered_count')) {
          obj['delivered_count'] = _ApiClient["default"].convertToType(data['delivered_count'], 'Number');
        }

        if (data.hasOwnProperty('delivered_count_formatted')) {
          obj['delivered_count_formatted'] = _ApiClient["default"].convertToType(data['delivered_count_formatted'], 'String');
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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

        if (data.hasOwnProperty('stat_type')) {
          obj['stat_type'] = _ApiClient["default"].convertToType(data['stat_type'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('status_dts')) {
          obj['status_dts'] = _ApiClient["default"].convertToType(data['status_dts'], 'String');
        }

        if (data.hasOwnProperty('step_uuid')) {
          obj['step_uuid'] = _ApiClient["default"].convertToType(data['step_uuid'], 'String');
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], [EmailStat]);
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

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
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

  return EmailStat;
}();
/**
 * Count of clicked emails
 * @member {Number} click_count
 */


EmailStat.prototype['click_count'] = undefined;
/**
 * Count of clicked emails, formatted
 * @member {String} click_count_formatted
 */

EmailStat.prototype['click_count_formatted'] = undefined;
/**
 * Count of conversions
 * @member {Number} conversion_count
 */

EmailStat.prototype['conversion_count'] = undefined;
/**
 * Count of conversions, formatted
 * @member {String} conversion_count_formatted
 */

EmailStat.prototype['conversion_count_formatted'] = undefined;
/**
 * True if campaign/flow has been archived
 * @member {Boolean} deleted
 */

EmailStat.prototype['deleted'] = undefined;
/**
 * Count of delivered emails
 * @member {Number} delivered_count
 */

EmailStat.prototype['delivered_count'] = undefined;
/**
 * Count of delivered emails, formatted
 * @member {String} delivered_count_formatted
 */

EmailStat.prototype['delivered_count_formatted'] = undefined;
/**
 * Count of emails kicked
 * @member {Number} kickbox_count
 */

EmailStat.prototype['kickbox_count'] = undefined;
/**
 * Count of emails kicked, formatted
 * @member {String} kickbox_count_formatted
 */

EmailStat.prototype['kickbox_count_formatted'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailStat.prototype['merchant_id'] = undefined;
/**
 * List or segment name
 * @member {String} name
 */

EmailStat.prototype['name'] = undefined;
/**
 * Count of opened emails
 * @member {Number} open_count
 */

EmailStat.prototype['open_count'] = undefined;
/**
 * Count of opened emails, formatted
 * @member {String} open_count_formatted
 */

EmailStat.prototype['open_count_formatted'] = undefined;
/**
 * Count of orders
 * @member {Number} order_count
 */

EmailStat.prototype['order_count'] = undefined;
/**
 * Count of orders, formatted
 * @member {String} order_count_formatted
 */

EmailStat.prototype['order_count_formatted'] = undefined;
/**
 * Count of emails permanently bounced
 * @member {Number} permanent_bounce_count
 */

EmailStat.prototype['permanent_bounce_count'] = undefined;
/**
 * Count of emails permanently bounced, formatted
 * @member {String} permanent_bounce_count_formatted
 */

EmailStat.prototype['permanent_bounce_count_formatted'] = undefined;
/**
 * Profit
 * @member {Number} profit
 */

EmailStat.prototype['profit'] = undefined;
/**
 * Profit, formatted
 * @member {String} profit_formatted
 */

EmailStat.prototype['profit_formatted'] = undefined;
/**
 * Revenue
 * @member {Number} revenue
 */

EmailStat.prototype['revenue'] = undefined;
/**
 * Revenue, formatted
 * @member {String} revenue_formatted
 */

EmailStat.prototype['revenue_formatted'] = undefined;
/**
 * Count of emails sent
 * @member {Number} send_count
 */

EmailStat.prototype['send_count'] = undefined;
/**
 * Count of emails sent, formatted
 * @member {String} send_count_formatted
 */

EmailStat.prototype['send_count_formatted'] = undefined;
/**
 * Count of skipped emails
 * @member {Number} skipped_count
 */

EmailStat.prototype['skipped_count'] = undefined;
/**
 * Count of skipped emails, formatted
 * @member {String} skipped_count_formatted
 */

EmailStat.prototype['skipped_count_formatted'] = undefined;
/**
 * Count of emails classified as spam
 * @member {Number} spam_count
 */

EmailStat.prototype['spam_count'] = undefined;
/**
 * Count of emails classified as spam, formatted
 * @member {String} spam_count_formatted
 */

EmailStat.prototype['spam_count_formatted'] = undefined;
/**
 * Campaign, Flow or None (for anything else)
 * @member {String} stat_type
 */

EmailStat.prototype['stat_type'] = undefined;
/**
 * Status of campaign or flow
 * @member {String} status
 */

EmailStat.prototype['status'] = undefined;
/**
 * Status dts of campaign or flow
 * @member {String} status_dts
 */

EmailStat.prototype['status_dts'] = undefined;
/**
 * Step UUID if the statistics are at the step/email level
 * @member {String} step_uuid
 */

EmailStat.prototype['step_uuid'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailStat>} steps
 */

EmailStat.prototype['steps'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailStat.prototype['storefront_oid'] = undefined;
/**
 * Count of emails classified as unsubscribe
 * @member {Number} unsubscribe_count
 */

EmailStat.prototype['unsubscribe_count'] = undefined;
/**
 * Count of emails classified as unsubscribe, formatted
 * @member {String} unsubscribe_count_formatted
 */

EmailStat.prototype['unsubscribe_count_formatted'] = undefined;
/**
 * List/Segment uuid, or Flow/Campaign uuid depending on level of stat aggregation.
 * @member {String} uuid
 */

EmailStat.prototype['uuid'] = undefined;
/**
 * Count of views
 * @member {Number} view_count
 */

EmailStat.prototype['view_count'] = undefined;
/**
 * Count of views, formatted
 * @member {String} view_count_formatted
 */

EmailStat.prototype['view_count_formatted'] = undefined;
var _default = EmailStat;
exports["default"] = _default;