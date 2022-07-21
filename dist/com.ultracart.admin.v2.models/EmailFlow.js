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
 * The EmailFlow model module.
 * @module com.ultracart.admin.v2.models/EmailFlow
 * @version 4.0.38-RC
 */
var EmailFlow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailFlow</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlow
   */
  function EmailFlow() {
    _classCallCheck(this, EmailFlow);

    EmailFlow.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailFlow, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailFlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailFlow} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailFlow} The populated <code>EmailFlow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailFlow();

        if (data.hasOwnProperty('allow_multiple_concurrent_enrollments')) {
          obj['allow_multiple_concurrent_enrollments'] = _ApiClient["default"].convertToType(data['allow_multiple_concurrent_enrollments'], 'Boolean');
        }

        if (data.hasOwnProperty('back_populating')) {
          obj['back_populating'] = _ApiClient["default"].convertToType(data['back_populating'], 'Boolean');
        }

        if (data.hasOwnProperty('click_rate_formatted')) {
          obj['click_rate_formatted'] = _ApiClient["default"].convertToType(data['click_rate_formatted'], 'String');
        }

        if (data.hasOwnProperty('created_dts')) {
          obj['created_dts'] = _ApiClient["default"].convertToType(data['created_dts'], 'String');
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('email_communication_sequence_uuid')) {
          obj['email_communication_sequence_uuid'] = _ApiClient["default"].convertToType(data['email_communication_sequence_uuid'], 'String');
        }

        if (data.hasOwnProperty('email_flow_uuid')) {
          obj['email_flow_uuid'] = _ApiClient["default"].convertToType(data['email_flow_uuid'], 'String');
        }

        if (data.hasOwnProperty('end_once_customer_purchases')) {
          obj['end_once_customer_purchases'] = _ApiClient["default"].convertToType(data['end_once_customer_purchases'], 'Boolean');
        }

        if (data.hasOwnProperty('end_once_customer_purchases_anywhere')) {
          obj['end_once_customer_purchases_anywhere'] = _ApiClient["default"].convertToType(data['end_once_customer_purchases_anywhere'], 'Boolean');
        }

        if (data.hasOwnProperty('enrolled_customers')) {
          obj['enrolled_customers'] = _ApiClient["default"].convertToType(data['enrolled_customers'], 'Number');
        }

        if (data.hasOwnProperty('esp_domain_user')) {
          obj['esp_domain_user'] = _ApiClient["default"].convertToType(data['esp_domain_user'], 'String');
        }

        if (data.hasOwnProperty('esp_domain_uuid')) {
          obj['esp_domain_uuid'] = _ApiClient["default"].convertToType(data['esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_flow_folder_uuid')) {
          obj['esp_flow_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_flow_folder_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_friendly_name')) {
          obj['esp_friendly_name'] = _ApiClient["default"].convertToType(data['esp_friendly_name'], 'String');
        }

        if (data.hasOwnProperty('filter_profile_equation_json')) {
          obj['filter_profile_equation_json'] = _ApiClient["default"].convertToType(data['filter_profile_equation_json'], 'String');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
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

        if (data.hasOwnProperty('revenue_formatted')) {
          obj['revenue_formatted'] = _ApiClient["default"].convertToType(data['revenue_formatted'], 'String');
        }

        if (data.hasOwnProperty('revenue_per_customer_formatted')) {
          obj['revenue_per_customer_formatted'] = _ApiClient["default"].convertToType(data['revenue_per_customer_formatted'], 'String');
        }

        if (data.hasOwnProperty('screenshot_large_full_url')) {
          obj['screenshot_large_full_url'] = _ApiClient["default"].convertToType(data['screenshot_large_full_url'], 'String');
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

        if (data.hasOwnProperty('trigger_parameter')) {
          obj['trigger_parameter'] = _ApiClient["default"].convertToType(data['trigger_parameter'], 'String');
        }

        if (data.hasOwnProperty('trigger_parameter_name')) {
          obj['trigger_parameter_name'] = _ApiClient["default"].convertToType(data['trigger_parameter_name'], 'String');
        }

        if (data.hasOwnProperty('trigger_type')) {
          obj['trigger_type'] = _ApiClient["default"].convertToType(data['trigger_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailFlow;
}();
/**
 * True if a customer may be enrolled in this flow multiple times
 * @member {Boolean} allow_multiple_concurrent_enrollments
 */


EmailFlow.prototype['allow_multiple_concurrent_enrollments'] = undefined;
/**
 * True if the flow is currently performing a back population.
 * @member {Boolean} back_populating
 */

EmailFlow.prototype['back_populating'] = undefined;
/**
 * Click rate of emails, formatted
 * @member {String} click_rate_formatted
 */

EmailFlow.prototype['click_rate_formatted'] = undefined;
/**
 * Created date
 * @member {String} created_dts
 */

EmailFlow.prototype['created_dts'] = undefined;
/**
 * True if this campaign was deleted
 * @member {Boolean} deleted
 */

EmailFlow.prototype['deleted'] = undefined;
/**
 * Email communication sequence UUID
 * @member {String} email_communication_sequence_uuid
 */

EmailFlow.prototype['email_communication_sequence_uuid'] = undefined;
/**
 * Email flow UUID
 * @member {String} email_flow_uuid
 */

EmailFlow.prototype['email_flow_uuid'] = undefined;
/**
 * True if the customer should end the flow once they purchase from an email on this flow
 * @member {Boolean} end_once_customer_purchases
 */

EmailFlow.prototype['end_once_customer_purchases'] = undefined;
/**
 * True if the customer should end the flow once they purchase from any source
 * @member {Boolean} end_once_customer_purchases_anywhere
 */

EmailFlow.prototype['end_once_customer_purchases_anywhere'] = undefined;
/**
 * Number of enrolled customers.
 * @member {Number} enrolled_customers
 */

EmailFlow.prototype['enrolled_customers'] = undefined;
/**
 * Username of sending email
 * @member {String} esp_domain_user
 */

EmailFlow.prototype['esp_domain_user'] = undefined;
/**
 * UUID of sending domain
 * @member {String} esp_domain_uuid
 */

EmailFlow.prototype['esp_domain_uuid'] = undefined;
/**
 * Flow folder UUID.  Null for uncategorized
 * @member {String} esp_flow_folder_uuid
 */

EmailFlow.prototype['esp_flow_folder_uuid'] = undefined;
/**
 * Friendly name of the sending email
 * @member {String} esp_friendly_name
 */

EmailFlow.prototype['esp_friendly_name'] = undefined;
/**
 * File profile equation json
 * @member {String} filter_profile_equation_json
 */

EmailFlow.prototype['filter_profile_equation_json'] = undefined;
/**
 * If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated.
 * @member {Number} library_item_oid
 */

EmailFlow.prototype['library_item_oid'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailFlow.prototype['merchant_id'] = undefined;
/**
 * Name of email flow
 * @member {String} name
 */

EmailFlow.prototype['name'] = undefined;
/**
 * Open rate of emails, formatted
 * @member {String} open_rate_formatted
 */

EmailFlow.prototype['open_rate_formatted'] = undefined;
/**
 * Revenue, formatted
 * @member {String} revenue_formatted
 */

EmailFlow.prototype['revenue_formatted'] = undefined;
/**
 * Revenue per customer, formatted
 * @member {String} revenue_per_customer_formatted
 */

EmailFlow.prototype['revenue_per_customer_formatted'] = undefined;
/**
 * URL to a large full length screenshot
 * @member {String} screenshot_large_full_url
 */

EmailFlow.prototype['screenshot_large_full_url'] = undefined;
/**
 * Status of the campaign of draft, archived, active, and inactive
 * @member {String} status
 */

EmailFlow.prototype['status'] = undefined;
/**
 * Timestamp when the last status change happened
 * @member {String} status_dts
 */

EmailFlow.prototype['status_dts'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailFlow.prototype['storefront_oid'] = undefined;
/**
 * Trigger parameter
 * @member {String} trigger_parameter
 */

EmailFlow.prototype['trigger_parameter'] = undefined;
/**
 * Trigger parameter name
 * @member {String} trigger_parameter_name
 */

EmailFlow.prototype['trigger_parameter_name'] = undefined;
/**
 * Trigger type
 * @member {String} trigger_type
 */

EmailFlow.prototype['trigger_type'] = undefined;
var _default = EmailFlow;
exports["default"] = _default;