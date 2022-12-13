"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailListSegmentMembership = _interopRequireDefault(require("./EmailListSegmentMembership"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailCampaign model module.
 * @module com.ultracart.admin.v2.models/EmailCampaign
 * @version 4.0.96-RC
 */
var EmailCampaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailCampaign</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaign
   */
  function EmailCampaign() {
    _classCallCheck(this, EmailCampaign);

    EmailCampaign.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailCampaign, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaign} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCampaign} The populated <code>EmailCampaign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailCampaign();

        if (data.hasOwnProperty('click_rate_formatted')) {
          obj['click_rate_formatted'] = _ApiClient["default"].convertToType(data['click_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('created_dts')) {
          obj['created_dts'] = _ApiClient["default"].convertToType(data['created_dts'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('email_campaign_uuid')) {
          obj['email_campaign_uuid'] = _ApiClient["default"].convertToType(data['email_campaign_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_communication_sequence_uuid')) {
          obj['email_communication_sequence_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_uuid'], 'String');
        }

        if (data.hasOwnProperty('end_once_customer_purchases')) {
          obj['end_once_customer_purchases'] = _ApiClient["default"].convertToType(data['end_once_customer_purchases'], 'Boolean');
        }

        if (data.hasOwnProperty('end_once_customer_purchases_anywhere')) {
          obj['end_once_customer_purchases_anywhere'] = _ApiClient["default"].convertToType(data['end_once_customer_purchases_anywhere'], 'Boolean');
        }

        if (data.hasOwnProperty('esp_campaign_folder_uuid')) {
          obj['esp_campaign_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_campaign_folder_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_domain_user')) {
          obj['esp_domain_user'] = _ApiClient["default"].convertToType(data['esp_domain_user'], 'String');
        }

        if (data.hasOwnProperty('esp_domain_uuid')) {
          obj['esp_domain_uuid'] = _ApiClient["default"].convertToType(data['esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_friendly_name')) {
          obj['esp_friendly_name'] = _ApiClient["default"].convertToType(data['esp_friendly_name'], 'String');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('memberships')) {
          obj['memberships'] = _ApiClient["default"].convertToType(data['memberships'], [_EmailListSegmentMembership["default"]]);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('open_rate_formatted')) {
          obj['open_rate_formatted'] = _ApiClient["default"].convertToType(data['open_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('prevent_sending_due_to_spam')) {
          obj['prevent_sending_due_to_spam'] = _ApiClient["default"].convertToType(data['prevent_sending_due_to_spam'], 'Boolean');
        }

        if (data.hasOwnProperty('revenue_formatted')) {
          obj['revenue_formatted'] = _ApiClient["default"].convertToType(data['revenue_formatted'], 'String');
        }

        if (data.hasOwnProperty('revenue_per_customer_formatted')) {
          obj['revenue_per_customer_formatted'] = _ApiClient["default"].convertToType(data['revenue_per_customer_formatted'], 'String');
        }

        if (data.hasOwnProperty('scheduled_dts')) {
          obj['scheduled_dts'] = _ApiClient["default"].convertToType(data['scheduled_dts'], 'String');
        }

        if (data.hasOwnProperty('screenshot_large_full_url')) {
          obj['screenshot_large_full_url'] = _ApiClient["default"].convertToType(data['screenshot_large_full_url'], 'String');
        }

        if (data.hasOwnProperty('sms_esp_twilio_uuid')) {
          obj['sms_esp_twilio_uuid'] = _ApiClient["default"].convertToType(data['sms_esp_twilio_uuid'], 'String');
        }

        if (data.hasOwnProperty('sms_phone_number')) {
          obj['sms_phone_number'] = _ApiClient["default"].convertToType(data['sms_phone_number'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('status_dts')) {
          obj['status_dts'] = _ApiClient["default"].convertToType(data['status_dts'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailCampaign;
}();
/**
 * Click rate of emails
 * @member {String} click_rate_formatted
 */


EmailCampaign.prototype['click_rate_formatted'] = undefined;
/**
 * Created date
 * @member {String} created_dts
 */

EmailCampaign.prototype['created_dts'] = undefined;
/**
 * True if this campaign was deleted
 * @member {Boolean} deleted
 */

EmailCampaign.prototype['deleted'] = undefined;
/**
 * Email campaign UUID
 * @member {String} email_campaign_uuid
 */

EmailCampaign.prototype['email_campaign_uuid'] = undefined;
/**
 * Email communication sequence UUID
 * @member {String} email_communication_sequence_uuid
 */

EmailCampaign.prototype['email_communication_sequence_uuid'] = undefined;
/**
 * True if the customer should end the flow once they purchase from this campaign
 * @member {Boolean} end_once_customer_purchases
 */

EmailCampaign.prototype['end_once_customer_purchases'] = undefined;
/**
 * True if the customer should end the flow once they purchase from anywhere
 * @member {Boolean} end_once_customer_purchases_anywhere
 */

EmailCampaign.prototype['end_once_customer_purchases_anywhere'] = undefined;
/**
 * Campaign folder UUID.  Null for uncategorized
 * @member {String} esp_campaign_folder_uuid
 */

EmailCampaign.prototype['esp_campaign_folder_uuid'] = undefined;
/**
 * User of the sending address
 * @member {String} esp_domain_user
 */

EmailCampaign.prototype['esp_domain_user'] = undefined;
/**
 * UUID of the sending domain
 * @member {String} esp_domain_uuid
 */

EmailCampaign.prototype['esp_domain_uuid'] = undefined;
/**
 * Friendly name of the sending email
 * @member {String} esp_friendly_name
 */

EmailCampaign.prototype['esp_friendly_name'] = undefined;
/**
 * If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated.
 * @member {Number} library_item_oid
 */

EmailCampaign.prototype['library_item_oid'] = undefined;
/**
 * List and segment memberships
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentMembership>} memberships
 */

EmailCampaign.prototype['memberships'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailCampaign.prototype['merchant_id'] = undefined;
/**
 * Name of email campaign
 * @member {String} name
 */

EmailCampaign.prototype['name'] = undefined;
/**
 * Open rate of emails
 * @member {String} open_rate_formatted
 */

EmailCampaign.prototype['open_rate_formatted'] = undefined;
/**
 * True if this campaign is prevented from sending at this time due to spam complaints.
 * @member {Boolean} prevent_sending_due_to_spam
 */

EmailCampaign.prototype['prevent_sending_due_to_spam'] = undefined;
/**
 * Revenue associated with campaign
 * @member {String} revenue_formatted
 */

EmailCampaign.prototype['revenue_formatted'] = undefined;
/**
 * Revenue per customer associated with campaign
 * @member {String} revenue_per_customer_formatted
 */

EmailCampaign.prototype['revenue_per_customer_formatted'] = undefined;
/**
 * Scheduled date
 * @member {String} scheduled_dts
 */

EmailCampaign.prototype['scheduled_dts'] = undefined;
/**
 * URL to a large full length screenshot
 * @member {String} screenshot_large_full_url
 */

EmailCampaign.prototype['screenshot_large_full_url'] = undefined;
/**
 * Twilio Account UUID.  Null for none
 * @member {String} sms_esp_twilio_uuid
 */

EmailCampaign.prototype['sms_esp_twilio_uuid'] = undefined;
/**
 * Twilio SMS Phone Number.  Null for none
 * @member {String} sms_phone_number
 */

EmailCampaign.prototype['sms_phone_number'] = undefined;
/**
 * Status of the campaign of draft, archived, and sent
 * @member {String} status
 */

EmailCampaign.prototype['status'] = undefined;
/**
 * Timestamp when the last status change happened
 * @member {String} status_dts
 */

EmailCampaign.prototype['status_dts'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailCampaign.prototype['storefront_oid'] = undefined;
var _default = EmailCampaign;
exports["default"] = _default;