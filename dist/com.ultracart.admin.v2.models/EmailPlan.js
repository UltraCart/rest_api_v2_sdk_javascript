"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailPlanAdditional = _interopRequireDefault(require("./EmailPlanAdditional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailPlan model module.
 * @module com.ultracart.admin.v2.models/EmailPlan
 * @version 4.0.53-RC
 */
var EmailPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailPlan</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPlan
   */
  function EmailPlan() {
    _classCallCheck(this, EmailPlan);

    EmailPlan.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailPlan, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPlan} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPlan} The populated <code>EmailPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailPlan();

        if (data.hasOwnProperty('additional_customers')) {
          obj['additional_customers'] = _ApiClient["default"].convertToType(data['additional_customers'], 'Number');
        }

        if (data.hasOwnProperty('additional_emails')) {
          obj['additional_emails'] = _ApiClient["default"].convertToType(data['additional_emails'], 'Number');
        }

        if (data.hasOwnProperty('additional_fee')) {
          obj['additional_fee'] = _ApiClient["default"].convertToType(data['additional_fee'], 'Number');
        }

        if (data.hasOwnProperty('allow_list_import')) {
          obj['allow_list_import'] = _ApiClient["default"].convertToType(data['allow_list_import'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_tracking_emails')) {
          obj['allow_tracking_emails'] = _ApiClient["default"].convertToType(data['allow_tracking_emails'], 'Boolean');
        }

        if (data.hasOwnProperty('customer_tiers')) {
          obj['customer_tiers'] = _ApiClient["default"].convertToType(data['customer_tiers'], [_EmailPlanAdditional["default"]]);
        }

        if (data.hasOwnProperty('initial_sending_limits')) {
          obj['initial_sending_limits'] = _ApiClient["default"].convertToType(data['initial_sending_limits'], 'Number');
        }

        if (data.hasOwnProperty('plan_customers')) {
          obj['plan_customers'] = _ApiClient["default"].convertToType(data['plan_customers'], 'Number');
        }

        if (data.hasOwnProperty('plan_emails')) {
          obj['plan_emails'] = _ApiClient["default"].convertToType(data['plan_emails'], 'Number');
        }

        if (data.hasOwnProperty('plan_name')) {
          obj['plan_name'] = _ApiClient["default"].convertToType(data['plan_name'], 'String');
        }

        if (data.hasOwnProperty('plan_name_formatted')) {
          obj['plan_name_formatted'] = _ApiClient["default"].convertToType(data['plan_name_formatted'], 'String');
        }

        if (data.hasOwnProperty('require_order_within_last_days')) {
          obj['require_order_within_last_days'] = _ApiClient["default"].convertToType(data['require_order_within_last_days'], 'Number');
        }

        if (data.hasOwnProperty('revenue_percent')) {
          obj['revenue_percent'] = _ApiClient["default"].convertToType(data['revenue_percent'], 'Number');
        }

        if (data.hasOwnProperty('spam_percent_limit')) {
          obj['spam_percent_limit'] = _ApiClient["default"].convertToType(data['spam_percent_limit'], 'Number');
        }

        if (data.hasOwnProperty('total_customers')) {
          obj['total_customers'] = _ApiClient["default"].convertToType(data['total_customers'], 'Number');
        }

        if (data.hasOwnProperty('total_emails')) {
          obj['total_emails'] = _ApiClient["default"].convertToType(data['total_emails'], 'Number');
        }

        if (data.hasOwnProperty('upgrade_to')) {
          obj['upgrade_to'] = _ApiClient["default"].convertToType(data['upgrade_to'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmailPlan;
}();
/**
 * @member {Number} additional_customers
 */


EmailPlan.prototype['additional_customers'] = undefined;
/**
 * @member {Number} additional_emails
 */

EmailPlan.prototype['additional_emails'] = undefined;
/**
 * @member {Number} additional_fee
 */

EmailPlan.prototype['additional_fee'] = undefined;
/**
 * @member {Boolean} allow_list_import
 */

EmailPlan.prototype['allow_list_import'] = undefined;
/**
 * @member {Boolean} allow_tracking_emails
 */

EmailPlan.prototype['allow_tracking_emails'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailPlanAdditional>} customer_tiers
 */

EmailPlan.prototype['customer_tiers'] = undefined;
/**
 * @member {Number} initial_sending_limits
 */

EmailPlan.prototype['initial_sending_limits'] = undefined;
/**
 * @member {Number} plan_customers
 */

EmailPlan.prototype['plan_customers'] = undefined;
/**
 * @member {Number} plan_emails
 */

EmailPlan.prototype['plan_emails'] = undefined;
/**
 * @member {String} plan_name
 */

EmailPlan.prototype['plan_name'] = undefined;
/**
 * @member {String} plan_name_formatted
 */

EmailPlan.prototype['plan_name_formatted'] = undefined;
/**
 * @member {Number} require_order_within_last_days
 */

EmailPlan.prototype['require_order_within_last_days'] = undefined;
/**
 * @member {Number} revenue_percent
 */

EmailPlan.prototype['revenue_percent'] = undefined;
/**
 * @member {Number} spam_percent_limit
 */

EmailPlan.prototype['spam_percent_limit'] = undefined;
/**
 * @member {Number} total_customers
 */

EmailPlan.prototype['total_customers'] = undefined;
/**
 * @member {Number} total_emails
 */

EmailPlan.prototype['total_emails'] = undefined;
/**
 * @member {Number} upgrade_to
 */

EmailPlan.prototype['upgrade_to'] = undefined;
var _default = EmailPlan;
exports["default"] = _default;