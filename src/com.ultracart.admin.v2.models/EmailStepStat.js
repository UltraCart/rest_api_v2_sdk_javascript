/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.EmailStepStat = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailStepStat model module.
   * @module com.ultracart.admin.v2.models/EmailStepStat
   * @version 2.4.102
   */

  /**
   * Constructs a new <code>EmailStepStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailStepStat
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>EmailStepStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailStepStat} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailStepStat} The populated <code>EmailStepStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('left_conversion_count')) {
        obj['left_conversion_count'] = ApiClient.convertToType(data['left_conversion_count'], 'Number');
      }
      if (data.hasOwnProperty('left_conversion_count_formatted')) {
        obj['left_conversion_count_formatted'] = ApiClient.convertToType(data['left_conversion_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('left_customer_count')) {
        obj['left_customer_count'] = ApiClient.convertToType(data['left_customer_count'], 'Number');
      }
      if (data.hasOwnProperty('left_customer_count_formatted')) {
        obj['left_customer_count_formatted'] = ApiClient.convertToType(data['left_customer_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('left_order_count')) {
        obj['left_order_count'] = ApiClient.convertToType(data['left_order_count'], 'Number');
      }
      if (data.hasOwnProperty('left_order_count_formatted')) {
        obj['left_order_count_formatted'] = ApiClient.convertToType(data['left_order_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('left_profit')) {
        obj['left_profit'] = ApiClient.convertToType(data['left_profit'], 'Number');
      }
      if (data.hasOwnProperty('left_profit_formatted')) {
        obj['left_profit_formatted'] = ApiClient.convertToType(data['left_profit_formatted'], 'String');
      }
      if (data.hasOwnProperty('left_revenue')) {
        obj['left_revenue'] = ApiClient.convertToType(data['left_revenue'], 'Number');
      }
      if (data.hasOwnProperty('left_revenue_formatted')) {
        obj['left_revenue_formatted'] = ApiClient.convertToType(data['left_revenue_formatted'], 'String');
      }
      if (data.hasOwnProperty('right_conversion_count')) {
        obj['right_conversion_count'] = ApiClient.convertToType(data['right_conversion_count'], 'Number');
      }
      if (data.hasOwnProperty('right_conversion_count_formatted')) {
        obj['right_conversion_count_formatted'] = ApiClient.convertToType(data['right_conversion_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('right_customer_count')) {
        obj['right_customer_count'] = ApiClient.convertToType(data['right_customer_count'], 'Number');
      }
      if (data.hasOwnProperty('right_customer_count_formatted')) {
        obj['right_customer_count_formatted'] = ApiClient.convertToType(data['right_customer_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('right_order_count')) {
        obj['right_order_count'] = ApiClient.convertToType(data['right_order_count'], 'Number');
      }
      if (data.hasOwnProperty('right_order_count_formatted')) {
        obj['right_order_count_formatted'] = ApiClient.convertToType(data['right_order_count_formatted'], 'String');
      }
      if (data.hasOwnProperty('right_profit')) {
        obj['right_profit'] = ApiClient.convertToType(data['right_profit'], 'Number');
      }
      if (data.hasOwnProperty('right_profit_formatted')) {
        obj['right_profit_formatted'] = ApiClient.convertToType(data['right_profit_formatted'], 'String');
      }
      if (data.hasOwnProperty('right_revenue')) {
        obj['right_revenue'] = ApiClient.convertToType(data['right_revenue'], 'Number');
      }
      if (data.hasOwnProperty('right_revenue_formatted')) {
        obj['right_revenue_formatted'] = ApiClient.convertToType(data['right_revenue_formatted'], 'String');
      }
    }
    return obj;
  }

  /**
   * conversion count (left/default side)
   * @member {Number} left_conversion_count
   */
  exports.prototype['left_conversion_count'] = undefined;
  /**
   * conversion count formatted (left/default side)
   * @member {String} left_conversion_count_formatted
   */
  exports.prototype['left_conversion_count_formatted'] = undefined;
  /**
   * customer count (left/default side)
   * @member {Number} left_customer_count
   */
  exports.prototype['left_customer_count'] = undefined;
  /**
   * customer count formatted (left/default side)
   * @member {String} left_customer_count_formatted
   */
  exports.prototype['left_customer_count_formatted'] = undefined;
  /**
   * order count (left/default side)
   * @member {Number} left_order_count
   */
  exports.prototype['left_order_count'] = undefined;
  /**
   * order count formatted (left/default side)
   * @member {String} left_order_count_formatted
   */
  exports.prototype['left_order_count_formatted'] = undefined;
  /**
   * profit (left/default side)
   * @member {Number} left_profit
   */
  exports.prototype['left_profit'] = undefined;
  /**
   * profit formatted (left/default side)
   * @member {String} left_profit_formatted
   */
  exports.prototype['left_profit_formatted'] = undefined;
  /**
   * revenue (left/default side)
   * @member {Number} left_revenue
   */
  exports.prototype['left_revenue'] = undefined;
  /**
   * revenue formatted (left/default side)
   * @member {String} left_revenue_formatted
   */
  exports.prototype['left_revenue_formatted'] = undefined;
  /**
   * conversion count (right side)
   * @member {Number} right_conversion_count
   */
  exports.prototype['right_conversion_count'] = undefined;
  /**
   * conversion count formatted (right side)
   * @member {String} right_conversion_count_formatted
   */
  exports.prototype['right_conversion_count_formatted'] = undefined;
  /**
   * customer count (right side)
   * @member {Number} right_customer_count
   */
  exports.prototype['right_customer_count'] = undefined;
  /**
   * customer count formatted (right side)
   * @member {String} right_customer_count_formatted
   */
  exports.prototype['right_customer_count_formatted'] = undefined;
  /**
   * order count (right side)
   * @member {Number} right_order_count
   */
  exports.prototype['right_order_count'] = undefined;
  /**
   * order count formatted (right side)
   * @member {String} right_order_count_formatted
   */
  exports.prototype['right_order_count_formatted'] = undefined;
  /**
   * profit (right side)
   * @member {Number} right_profit
   */
  exports.prototype['right_profit'] = undefined;
  /**
   * profit formatted (right side)
   * @member {String} right_profit_formatted
   */
  exports.prototype['right_profit_formatted'] = undefined;
  /**
   * revenue (right side)
   * @member {Number} right_revenue
   */
  exports.prototype['right_revenue'] = undefined;
  /**
   * revenue formatted (right side)
   * @member {String} right_revenue_formatted
   */
  exports.prototype['right_revenue_formatted'] = undefined;



  return exports;
}));

