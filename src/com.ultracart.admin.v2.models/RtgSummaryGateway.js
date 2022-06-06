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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.RtgSummaryGateway = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RtgSummaryGateway model module.
   * @module com.ultracart.admin.v2.models/RtgSummaryGateway
   * @version 3.10.10
   */

  /**
   * Constructs a new <code>RtgSummaryGateway</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgSummaryGateway
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgSummaryGateway</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgSummaryGateway} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgSummaryGateway} The populated <code>RtgSummaryGateway</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cascade_code'))
        obj.cascade_code = ApiClient.convertToType(data['cascade_code'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('delay_auto_orders'))
        obj.delay_auto_orders = ApiClient.convertToType(data['delay_auto_orders'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('reserve_percentage'))
        obj.reserve_percentage = ApiClient.convertToType(data['reserve_percentage'], 'Number');
      if (data.hasOwnProperty('reserves_released_through'))
        obj.reserves_released_through = ApiClient.convertToType(data['reserves_released_through'], 'String');
      if (data.hasOwnProperty('rotating_transaction_gateway_oid'))
        obj.rotating_transaction_gateway_oid = ApiClient.convertToType(data['rotating_transaction_gateway_oid'], 'Number');
      if (data.hasOwnProperty('show_ultracart_payments_verification'))
        obj.show_ultracart_payments_verification = ApiClient.convertToType(data['show_ultracart_payments_verification'], 'Boolean');
      if (data.hasOwnProperty('show_ultracart_payments_verified'))
        obj.show_ultracart_payments_verified = ApiClient.convertToType(data['show_ultracart_payments_verified'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('supports_auth'))
        obj.supports_auth = ApiClient.convertToType(data['supports_auth'], 'String');
      if (data.hasOwnProperty('supports_refund'))
        obj.supports_refund = ApiClient.convertToType(data['supports_refund'], 'String');
      if (data.hasOwnProperty('third_party'))
        obj.third_party = ApiClient.convertToType(data['third_party'], 'String');
      if (data.hasOwnProperty('traffic_percentage'))
        obj.traffic_percentage = ApiClient.convertToType(data['traffic_percentage'], 'Number');
      if (data.hasOwnProperty('warning'))
        obj.warning = ApiClient.convertToType(data['warning'], 'String');
      if (data.hasOwnProperty('wepay_account_update_uri'))
        obj.wepay_account_update_uri = ApiClient.convertToType(data['wepay_account_update_uri'], 'String');
      if (data.hasOwnProperty('wepay_console_hostname'))
        obj.wepay_console_hostname = ApiClient.convertToType(data['wepay_console_hostname'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} cascade_code
   */
  exports.prototype.cascade_code = undefined;

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} delay_auto_orders
   */
  exports.prototype.delay_auto_orders = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} reserve_percentage
   */
  exports.prototype.reserve_percentage = undefined;

  /**
   * An optional date specifying the date up to which your gateway has released all reserve funds.  This aids in profitability reporting.
   * @member {String} reserves_released_through
   */
  exports.prototype.reserves_released_through = undefined;

  /**
   * @member {Number} rotating_transaction_gateway_oid
   */
  exports.prototype.rotating_transaction_gateway_oid = undefined;

  /**
   * @member {Boolean} show_ultracart_payments_verification
   */
  exports.prototype.show_ultracart_payments_verification = undefined;

  /**
   * @member {Boolean} show_ultracart_payments_verified
   */
  exports.prototype.show_ultracart_payments_verified = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} supports_auth
   */
  exports.prototype.supports_auth = undefined;

  /**
   * @member {String} supports_refund
   */
  exports.prototype.supports_refund = undefined;

  /**
   * @member {String} third_party
   */
  exports.prototype.third_party = undefined;

  /**
   * @member {Number} traffic_percentage
   */
  exports.prototype.traffic_percentage = undefined;

  /**
   * @member {String} warning
   */
  exports.prototype.warning = undefined;

  /**
   * @member {String} wepay_account_update_uri
   */
  exports.prototype.wepay_account_update_uri = undefined;

  /**
   * @member {String} wepay_console_hostname
   */
  exports.prototype.wepay_console_hostname = undefined;

  return exports;

}));
