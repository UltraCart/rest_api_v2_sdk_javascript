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
    root.UltraCartRestApiV2.ConversationEngagementEquationFunction = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationEngagementEquationFunction model module.
   * @module com.ultracart.admin.v2.models/ConversationEngagementEquationFunction
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationEngagementEquationFunction</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationEngagementEquationFunction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction} The populated <code>ConversationEngagementEquationFunction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('any_page_url_logic'))
        obj.any_page_url_logic = ApiClient.convertToType(data['any_page_url_logic'], 'String');
      if (data.hasOwnProperty('any_page_url_value'))
        obj.any_page_url_value = ApiClient.convertToType(data['any_page_url_value'], 'String');
      if (data.hasOwnProperty('current_page_url_logic'))
        obj.current_page_url_logic = ApiClient.convertToType(data['current_page_url_logic'], 'String');
      if (data.hasOwnProperty('current_page_url_value'))
        obj.current_page_url_value = ApiClient.convertToType(data['current_page_url_value'], 'String');
      if (data.hasOwnProperty('customers_browsing_time_logic'))
        obj.customers_browsing_time_logic = ApiClient.convertToType(data['customers_browsing_time_logic'], 'String');
      if (data.hasOwnProperty('customers_browsing_time_seconds'))
        obj.customers_browsing_time_seconds = ApiClient.convertToType(data['customers_browsing_time_seconds'], 'Number');
      if (data.hasOwnProperty('customers_location_country'))
        obj.customers_location_country = ApiClient.convertToType(data['customers_location_country'], 'String');
      if (data.hasOwnProperty('customers_location_logic'))
        obj.customers_location_logic = ApiClient.convertToType(data['customers_location_logic'], 'String');
      if (data.hasOwnProperty('customers_location_state'))
        obj.customers_location_state = ApiClient.convertToType(data['customers_location_state'], 'String');
      if (data.hasOwnProperty('number_of_viewed_pages_logic'))
        obj.number_of_viewed_pages_logic = ApiClient.convertToType(data['number_of_viewed_pages_logic'], 'String');
      if (data.hasOwnProperty('number_of_viewed_pages_value'))
        obj.number_of_viewed_pages_value = ApiClient.convertToType(data['number_of_viewed_pages_value'], 'Number');
      if (data.hasOwnProperty('referring_website_logic'))
        obj.referring_website_logic = ApiClient.convertToType(data['referring_website_logic'], 'String');
      if (data.hasOwnProperty('referring_website_value'))
        obj.referring_website_value = ApiClient.convertToType(data['referring_website_value'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Logic operation to perform on an any page url function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.AnyPageUrlLogicEnum} any_page_url_logic
   */
  exports.prototype.any_page_url_logic = undefined;

  /**
   * @member {String} any_page_url_value
   */
  exports.prototype.any_page_url_value = undefined;

  /**
   * Logic operation to perform on a current page url function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CurrentPageUrlLogicEnum} current_page_url_logic
   */
  exports.prototype.current_page_url_logic = undefined;

  /**
   * @member {String} current_page_url_value
   */
  exports.prototype.current_page_url_value = undefined;

  /**
   * Logic operation to perform on a customer's browsing time function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CustomersBrowsingTimeLogicEnum} customers_browsing_time_logic
   */
  exports.prototype.customers_browsing_time_logic = undefined;

  /**
   * @member {Number} customers_browsing_time_seconds
   */
  exports.prototype.customers_browsing_time_seconds = undefined;

  /**
   * @member {String} customers_location_country
   */
  exports.prototype.customers_location_country = undefined;

  /**
   * Logic operation to perform on a customer's location function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CustomersLocationLogicEnum} customers_location_logic
   */
  exports.prototype.customers_location_logic = undefined;

  /**
   * @member {String} customers_location_state
   */
  exports.prototype.customers_location_state = undefined;

  /**
   * Logic operation to perform on a customer's browsing time function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.NumberOfViewedPagesLogicEnum} number_of_viewed_pages_logic
   */
  exports.prototype.number_of_viewed_pages_logic = undefined;

  /**
   * @member {Number} number_of_viewed_pages_value
   */
  exports.prototype.number_of_viewed_pages_value = undefined;

  /**
   * Logic operation to perform on a referring website function type
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.ReferringWebsiteLogicEnum} referring_website_logic
   */
  exports.prototype.referring_website_logic = undefined;

  /**
   * @member {String} referring_website_value
   */
  exports.prototype.referring_website_value = undefined;

  /**
   * Type of function
   * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>any_page_url_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnyPageUrlLogicEnum = {
    /**
     * value: "contains"
     * @const
     */
    contains: "contains",

    /**
     * value: "does not contain"
     * @const
     */
    does_not_contain: "does not contain",

    /**
     * value: "is exactly"
     * @const
     */
    is_exactly: "is exactly",

    /**
     * value: "is not"
     * @const
     */
    is_not: "is not"
  };


  /**
   * Allowed values for the <code>current_page_url_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrentPageUrlLogicEnum = {
    /**
     * value: "contains"
     * @const
     */
    contains: "contains",

    /**
     * value: "does not contain"
     * @const
     */
    does_not_contain: "does not contain",

    /**
     * value: "is exactly"
     * @const
     */
    is_exactly: "is exactly",

    /**
     * value: "is not"
     * @const
     */
    is_not: "is not"
  };


  /**
   * Allowed values for the <code>customers_browsing_time_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CustomersBrowsingTimeLogicEnum = {
    /**
     * value: "is at least"
     * @const
     */
    at_least: "is at least",

    /**
     * value: "is more than"
     * @const
     */
    more_than: "is more than",

    /**
     * value: "is less than"
     * @const
     */
    less_than: "is less than",

    /**
     * value: "is at most"
     * @const
     */
    at_most: "is at most"
  };


  /**
   * Allowed values for the <code>customers_location_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CustomersLocationLogicEnum = {
    /**
     * value: "is"
     * @const
     */
    is: "is",

    /**
     * value: "is not"
     * @const
     */
    is_not: "is not"
  };


  /**
   * Allowed values for the <code>number_of_viewed_pages_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NumberOfViewedPagesLogicEnum = {
    /**
     * value: "is at least"
     * @const
     */
    at_least: "is at least",

    /**
     * value: "is more than"
     * @const
     */
    more_than: "is more than",

    /**
     * value: "is less than"
     * @const
     */
    less_than: "is less than",

    /**
     * value: "is at most"
     * @const
     */
    at_most: "is at most"
  };


  /**
   * Allowed values for the <code>referring_website_logic</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReferringWebsiteLogicEnum = {
    /**
     * value: "contains"
     * @const
     */
    contains: "contains",

    /**
     * value: "does not contain"
     * @const
     */
    does_not_contain: "does not contain",

    /**
     * value: "is exactly"
     * @const
     */
    is_exactly: "is exactly",

    /**
     * value: "is not"
     * @const
     */
    is_not: "is not"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "current page url"
     * @const
     */
    current_page_url: "current page url",

    /**
     * value: "customers location"
     * @const
     */
    customers_location: "customers location",

    /**
     * value: "customers browsing time"
     * @const
     */
    customers_browsing_time: "customers browsing time",

    /**
     * value: "number of viewed pages"
     * @const
     */
    number_of_viewed_pages: "number of viewed pages",

    /**
     * value: "referring website address"
     * @const
     */
    referring_website_address: "referring website address",

    /**
     * value: "any page from session"
     * @const
     */
    any_page_from_session: "any page from session"
  };

  return exports;

}));
