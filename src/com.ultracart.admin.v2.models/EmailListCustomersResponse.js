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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailListCustomer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailListCustomer'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailListCustomersResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailListCustomer);
  }
}(this, function(ApiClient, EmailListCustomer) {
  'use strict';

  /**
   * The EmailListCustomersResponse model module.
   * @module com.ultracart.admin.v2.models/EmailListCustomersResponse
   * @version 3.10.98
   */

  /**
   * Constructs a new <code>EmailListCustomersResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailListCustomersResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailListCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} The populated <code>EmailListCustomersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customers'))
        obj.customers = ApiClient.convertToType(data['customers'], [EmailListCustomer]);
      if (data.hasOwnProperty('page_number'))
        obj.page_number = ApiClient.convertToType(data['page_number'], 'Number');
      if (data.hasOwnProperty('page_size'))
        obj.page_size = ApiClient.convertToType(data['page_size'], 'Number');
      if (data.hasOwnProperty('total_customers'))
        obj.total_customers = ApiClient.convertToType(data['total_customers'], 'Number');
      if (data.hasOwnProperty('total_pages'))
        obj.total_pages = ApiClient.convertToType(data['total_pages'], 'Number');
    }
    return obj;
  }

  /**
   * Customers on the page
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailListCustomer>} customers
   */
  exports.prototype.customers = undefined;

  /**
   * Page number (one based offset)
   * @member {Number} page_number
   */
  exports.prototype.page_number = undefined;

  /**
   * Number of records per page
   * @member {Number} page_size
   */
  exports.prototype.page_size = undefined;

  /**
   * Total customers
   * @member {Number} total_customers
   */
  exports.prototype.total_customers = undefined;

  /**
   * Total number of pages
   * @member {Number} total_pages
   */
  exports.prototype.total_pages = undefined;

  return exports;

}));
