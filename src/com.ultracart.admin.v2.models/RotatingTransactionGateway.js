/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/RtgCurrency', 'com.ultracart.admin.v2.models/RtgDayOfMonthRestriction', 'com.ultracart.admin.v2.models/RtgDayOfWeekRestriction', 'com.ultracart.admin.v2.models/RtgThemeRestriction', 'com.ultracart.admin.v2.models/TransactionGateway'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RtgCurrency'), require('./RtgDayOfMonthRestriction'), require('./RtgDayOfWeekRestriction'), require('./RtgThemeRestriction'), require('./TransactionGateway'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.RotatingTransactionGateway = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.RtgCurrency, root.UltraCartRestApiV2.RtgDayOfMonthRestriction, root.UltraCartRestApiV2.RtgDayOfWeekRestriction, root.UltraCartRestApiV2.RtgThemeRestriction, root.UltraCartRestApiV2.TransactionGateway);
  }
}(this, function(ApiClient, RtgCurrency, RtgDayOfMonthRestriction, RtgDayOfWeekRestriction, RtgThemeRestriction, TransactionGateway) {
  'use strict';

  /**
   * The RotatingTransactionGateway model module.
   * @module com.ultracart.admin.v2.models/RotatingTransactionGateway
   * @version 3.6.34
   */

  /**
   * Constructs a new <code>RotatingTransactionGateway</code>.
   * @alias module:com.ultracart.admin.v2.models/RotatingTransactionGateway
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RotatingTransactionGateway</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RotatingTransactionGateway} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RotatingTransactionGateway} The populated <code>RotatingTransactionGateway</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_native_currency_codes'))
        obj.additional_native_currency_codes = ApiClient.convertToType(data['additional_native_currency_codes'], [RtgCurrency]);
      if (data.hasOwnProperty('auto_order_cancel_unless_response_name'))
        obj.auto_order_cancel_unless_response_name = ApiClient.convertToType(data['auto_order_cancel_unless_response_name'], 'String');
      if (data.hasOwnProperty('auto_order_cancel_unless_response_values'))
        obj.auto_order_cancel_unless_response_values = ApiClient.convertToType(data['auto_order_cancel_unless_response_values'], ['String']);
      if (data.hasOwnProperty('base_currency_code'))
        obj.base_currency_code = ApiClient.convertToType(data['base_currency_code'], 'String');
      if (data.hasOwnProperty('cascade_code'))
        obj.cascade_code = ApiClient.convertToType(data['cascade_code'], 'String');
      if (data.hasOwnProperty('cascade_codes'))
        obj.cascade_codes = ApiClient.convertToType(data['cascade_codes'], ['String']);
      if (data.hasOwnProperty('cascade_daily_auto_order_code'))
        obj.cascade_daily_auto_order_code = ApiClient.convertToType(data['cascade_daily_auto_order_code'], 'String');
      if (data.hasOwnProperty('charge_appears_on_statement_as'))
        obj.charge_appears_on_statement_as = ApiClient.convertToType(data['charge_appears_on_statement_as'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('current_daily'))
        obj.current_daily = ApiClient.convertToType(data['current_daily'], 'Number');
      if (data.hasOwnProperty('current_daily_auto_order'))
        obj.current_daily_auto_order = ApiClient.convertToType(data['current_daily_auto_order'], 'Number');
      if (data.hasOwnProperty('current_monthly'))
        obj.current_monthly = ApiClient.convertToType(data['current_monthly'], 'Number');
      if (data.hasOwnProperty('customer_service_email'))
        obj.customer_service_email = ApiClient.convertToType(data['customer_service_email'], 'String');
      if (data.hasOwnProperty('customer_service_phone'))
        obj.customer_service_phone = ApiClient.convertToType(data['customer_service_phone'], 'String');
      if (data.hasOwnProperty('day_of_month_restrictions'))
        obj.day_of_month_restrictions = ApiClient.convertToType(data['day_of_month_restrictions'], [RtgDayOfMonthRestriction]);
      if (data.hasOwnProperty('day_of_week_restrictions'))
        obj.day_of_week_restrictions = ApiClient.convertToType(data['day_of_week_restrictions'], [RtgDayOfWeekRestriction]);
      if (data.hasOwnProperty('deactivate_after_failures'))
        obj.deactivate_after_failures = ApiClient.convertToType(data['deactivate_after_failures'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.end_date = ApiClient.convertToType(data['end_date'], 'String');
      if (data.hasOwnProperty('gateways'))
        obj.gateways = ApiClient.convertToType(data['gateways'], [TransactionGateway]);
      if (data.hasOwnProperty('maximum_daily'))
        obj.maximum_daily = ApiClient.convertToType(data['maximum_daily'], 'Number');
      if (data.hasOwnProperty('maximum_daily_auto_order'))
        obj.maximum_daily_auto_order = ApiClient.convertToType(data['maximum_daily_auto_order'], 'Number');
      if (data.hasOwnProperty('maximum_monthly'))
        obj.maximum_monthly = ApiClient.convertToType(data['maximum_monthly'], 'Number');
      if (data.hasOwnProperty('next_daily_auto_order_reset'))
        obj.next_daily_auto_order_reset = ApiClient.convertToType(data['next_daily_auto_order_reset'], 'String');
      if (data.hasOwnProperty('next_daily_reset'))
        obj.next_daily_reset = ApiClient.convertToType(data['next_daily_reset'], 'String');
      if (data.hasOwnProperty('next_monthly_reset'))
        obj.next_monthly_reset = ApiClient.convertToType(data['next_monthly_reset'], 'String');
      if (data.hasOwnProperty('order_total'))
        obj.order_total = ApiClient.convertToType(data['order_total'], 'Number');
      if (data.hasOwnProperty('order_total_comparison'))
        obj.order_total_comparison = ApiClient.convertToType(data['order_total_comparison'], 'String');
      if (data.hasOwnProperty('rebill_auto_orders_against_this_rtg_code'))
        obj.rebill_auto_orders_against_this_rtg_code = ApiClient.convertToType(data['rebill_auto_orders_against_this_rtg_code'], 'String');
      if (data.hasOwnProperty('reserve_days'))
        obj.reserve_days = ApiClient.convertToType(data['reserve_days'], 'Number');
      if (data.hasOwnProperty('reserve_percentage'))
        obj.reserve_percentage = ApiClient.convertToType(data['reserve_percentage'], 'Number');
      if (data.hasOwnProperty('reserve_refunded'))
        obj.reserve_refunded = ApiClient.convertToType(data['reserve_refunded'], 'Boolean');
      if (data.hasOwnProperty('reserves_released_through'))
        obj.reserves_released_through = ApiClient.convertToType(data['reserves_released_through'], 'String');
      if (data.hasOwnProperty('rotating_transaction_gateway_oid'))
        obj.rotating_transaction_gateway_oid = ApiClient.convertToType(data['rotating_transaction_gateway_oid'], 'Number');
      if (data.hasOwnProperty('selected_gateway_name'))
        obj.selected_gateway_name = ApiClient.convertToType(data['selected_gateway_name'], 'String');
      if (data.hasOwnProperty('show_cascade_codes'))
        obj.show_cascade_codes = ApiClient.convertToType(data['show_cascade_codes'], 'Boolean');
      if (data.hasOwnProperty('show_merchant_account_profiles'))
        obj.show_merchant_account_profiles = ApiClient.convertToType(data['show_merchant_account_profiles'], 'Boolean');
      if (data.hasOwnProperty('start_date'))
        obj.start_date = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('theme_restrictions'))
        obj.theme_restrictions = ApiClient.convertToType(data['theme_restrictions'], [RtgThemeRestriction]);
      if (data.hasOwnProperty('traffic_percentage'))
        obj.traffic_percentage = ApiClient.convertToType(data['traffic_percentage'], 'Number');
      if (data.hasOwnProperty('trial_daily_amount'))
        obj.trial_daily_amount = ApiClient.convertToType(data['trial_daily_amount'], 'Number');
      if (data.hasOwnProperty('trial_daily_limit'))
        obj.trial_daily_limit = ApiClient.convertToType(data['trial_daily_limit'], 'Number');
      if (data.hasOwnProperty('trial_monthly_amount'))
        obj.trial_monthly_amount = ApiClient.convertToType(data['trial_monthly_amount'], 'Number');
      if (data.hasOwnProperty('trial_monthly_limit'))
        obj.trial_monthly_limit = ApiClient.convertToType(data['trial_monthly_limit'], 'Number');
    }
    return obj;
  }

  /**
   * An array of all currencies known to the UltraCart system and a boolean indicating whether this gateway supports that currency.
   * @member {Array.<module:com.ultracart.admin.v2.models/RtgCurrency>} additional_native_currency_codes
   */
  exports.prototype.additional_native_currency_codes = undefined;

  /**
   * Advanced feature for canceling an auto order unless the transaction gateway response contains a field with this name.  If specified, this field must exist and the value must equal a value in the auto_order_cancel_unless_response_values array
   * @member {String} auto_order_cancel_unless_response_name
   */
  exports.prototype.auto_order_cancel_unless_response_name = undefined;

  /**
   * Advanced feature for canceling an auto order unless the transaction gateway response contains a field with the name specified in auto_order_cancel_unless_response_name.  If specified, this field must exist and the value must equal a value in this array.  If nothing matches, the auto order is canceled.
   * @member {Array.<String>} auto_order_cancel_unless_response_values
   */
  exports.prototype.auto_order_cancel_unless_response_values = undefined;

  /**
   * The base currency code for your gateway.  For example, USD.
   * @member {String} base_currency_code
   */
  exports.prototype.base_currency_code = undefined;

  /**
   * Optional field specifying a different rotating gateway to use if this gateway fails to process the transaction.
   * @member {String} cascade_code
   */
  exports.prototype.cascade_code = undefined;

  /**
   * A list of other rotating transaction gateways that can be used as a lookup to assign actions based on failures of this gateway
   * @member {Array.<String>} cascade_codes
   */
  exports.prototype.cascade_codes = undefined;

  /**
   * The code for the next rotating gateway that should be used when this gateway reaches a daily limit
   * @member {String} cascade_daily_auto_order_code
   */
  exports.prototype.cascade_daily_auto_order_code = undefined;

  /**
   * Optional field providing an alternate Charge Appears As value for this rotating gateway
   * @member {String} charge_appears_on_statement_as
   */
  exports.prototype.charge_appears_on_statement_as = undefined;

  /**
   * A human friendly short code used to recognize and differentiate this rotating gateway with other rotating gateways
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The current daily dollar amount this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward.
   * @member {Number} current_daily
   */
  exports.prototype.current_daily = undefined;

  /**
   * The current daily dollar amount of auto orders (recurring) this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward.
   * @member {Number} current_daily_auto_order
   */
  exports.prototype.current_daily_auto_order = undefined;

  /**
   * The current monthly dollar amount this gateway has processed.  Providing this will allow UltraCart to track the monthly amount going forward.
   * @member {Number} current_monthly
   */
  exports.prototype.current_monthly = undefined;

  /**
   * The customer service email address for this gateway
   * @member {String} customer_service_email
   */
  exports.prototype.customer_service_email = undefined;

  /**
   * The customer service phone number for this gateway
   * @member {String} customer_service_phone
   */
  exports.prototype.customer_service_phone = undefined;

  /**
   * Array containing all 31 (possible) days and any optional restrictions for one or more days.
   * @member {Array.<module:com.ultracart.admin.v2.models/RtgDayOfMonthRestriction>} day_of_month_restrictions
   */
  exports.prototype.day_of_month_restrictions = undefined;

  /**
   * Array containing all seven days of the week and any optional restrictions for one or more days
   * @member {Array.<module:com.ultracart.admin.v2.models/RtgDayOfWeekRestriction>} day_of_week_restrictions
   */
  exports.prototype.day_of_week_restrictions = undefined;

  /**
   * If non-zero, this gateway will be deactivated after reaching this amount of consecutive failures.
   * @member {Number} deactivate_after_failures
   */
  exports.prototype.deactivate_after_failures = undefined;

  /**
   * Optional field to specify an absolute date when this gateway should stop accepting transactions
   * @member {String} end_date
   */
  exports.prototype.end_date = undefined;

  /**
   * An array of all transaction gateways, not just the one currently configured for this rotating gateway. This allows for easy switching to another gateway.  The enabled property on the transaction gateway indicates which one is actually being used.
   * @member {Array.<module:com.ultracart.admin.v2.models/TransactionGateway>} gateways
   */
  exports.prototype.gateways = undefined;

  /**
   * The maximum daily dollar amount this gateway may process
   * @member {Number} maximum_daily
   */
  exports.prototype.maximum_daily = undefined;

  /**
   * The maximum daily dollar amount of auto orders (recurring) this gateway may process
   * @member {Number} maximum_daily_auto_order
   */
  exports.prototype.maximum_daily_auto_order = undefined;

  /**
   * The maximum monthly dollar amount this gateway may process.
   * @member {Number} maximum_monthly
   */
  exports.prototype.maximum_monthly = undefined;

  /**
   * The date and time when this gateway daily limit for auto orders will reset
   * @member {String} next_daily_auto_order_reset
   */
  exports.prototype.next_daily_auto_order_reset = undefined;

  /**
   * The date and time when this gateway daily limit will reset
   * @member {String} next_daily_reset
   */
  exports.prototype.next_daily_reset = undefined;

  /**
   * The date and time when this gateway monthly limit will reset
   * @member {String} next_monthly_reset
   */
  exports.prototype.next_monthly_reset = undefined;

  /**
   * This optional field is combined with order_total_comparison to determine if an order should be processed thorugh this gateway.
   * @member {Number} order_total
   */
  exports.prototype.order_total = undefined;

  /**
   * The math operator used to determine if the order total is allowed to process through this gateway.
   * @member {module:com.ultracart.admin.v2.models/RotatingTransactionGateway.OrderTotalComparisonEnum} order_total_comparison
   */
  exports.prototype.order_total_comparison = undefined;

  /**
   * If specified auto orders (rebills) are routed to this rotating gateway.  This may be needed because rebills lack a credit card cvv.
   * @member {String} rebill_auto_orders_against_this_rtg_code
   */
  exports.prototype.rebill_auto_orders_against_this_rtg_code = undefined;

  /**
   * The number of days that your gateway holds any reserves.  This aids in profitability reporting.
   * @member {Number} reserve_days
   */
  exports.prototype.reserve_days = undefined;

  /**
   * The percentage of an order which your gateway is holding in reserve.  This aids in profitability reporting.
   * @member {Number} reserve_percentage
   */
  exports.prototype.reserve_percentage = undefined;

  /**
   * If true, reserves are refunded when an order is refunded.  This aids in profitability reporting.
   * @member {Boolean} reserve_refunded
   */
  exports.prototype.reserve_refunded = undefined;

  /**
   * An optional date specifying the date up to which your gateway has released all reserve funds.  This aids in profitability reporting.
   * @member {String} reserves_released_through
   */
  exports.prototype.reserves_released_through = undefined;

  /**
   * Internal identifier used to store and retrieve this gateway information
   * @member {Number} rotating_transaction_gateway_oid
   */
  exports.prototype.rotating_transaction_gateway_oid = undefined;

  /**
   * The name of the currently selected transaction gateway used by this rotating gateway
   * @member {String} selected_gateway_name
   */
  exports.prototype.selected_gateway_name = undefined;

  /**
   * A boolean used by the builtin UltraCart UI to determine if cascading rtg codes should be shown
   * @member {Boolean} show_cascade_codes
   */
  exports.prototype.show_cascade_codes = undefined;

  /**
   * A flag to help the UltraCart UI to know whether to show merchant account profiles or not.
   * @member {Boolean} show_merchant_account_profiles
   */
  exports.prototype.show_merchant_account_profiles = undefined;

  /**
   * Optional field to specify an absolute date when this gateway should begin accepting transactions
   * @member {String} start_date
   */
  exports.prototype.start_date = undefined;

  /**
   * A field used to take a gateway offline without removing/deleting the configuration. Inactive marks the gateway as completely unusable.  Standby takes the gateway offline and will not be used unless all other active gateways fail.
   * @member {module:com.ultracart.admin.v2.models/RotatingTransactionGateway.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Optional restrictions by theme/storefront
   * @member {Array.<module:com.ultracart.admin.v2.models/RtgThemeRestriction>} theme_restrictions
   */
  exports.prototype.theme_restrictions = undefined;

  /**
   * Required field between 0 and 1 that dictates the percentage of traffic that should flow through this gateway
   * @member {Number} traffic_percentage
   */
  exports.prototype.traffic_percentage = undefined;

  /**
   * If specified, limits the total daily count of trial orders
   * @member {Number} trial_daily_amount
   */
  exports.prototype.trial_daily_amount = undefined;

  /**
   * If specified, limits the total daily dollar amount of trial orders
   * @member {Number} trial_daily_limit
   */
  exports.prototype.trial_daily_limit = undefined;

  /**
   * If specified, limits the total month dollar amount of trial orders
   * @member {Number} trial_monthly_amount
   */
  exports.prototype.trial_monthly_amount = undefined;

  /**
   * If specified, limits the total month count of trial orders
   * @member {Number} trial_monthly_limit
   */
  exports.prototype.trial_monthly_limit = undefined;


  /**
   * Allowed values for the <code>order_total_comparison</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderTotalComparisonEnum = {
    /**
     * value: "<"
     * @const
     */
    LESS_THAN: "<",

    /**
     * value: "<="
     * @const
     */
    LESS_THAN_OR_EQUAL_TO: "<=",

    /**
     * value: "="
     * @const
     */
    EQUAL: "=",

    /**
     * value: ">"
     * @const
     */
    GREATER_THAN: ">",

    /**
     * value: ">="
     * @const
     */
    GREATER_THAN_OR_EQUAL_TO: ">="
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    active: "active",

    /**
     * value: "inactive"
     * @const
     */
    inactive: "inactive",

    /**
     * value: "standby"
     * @const
     */
    standby: "standby"
  };

  return exports;

}));
