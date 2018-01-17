/**
 * UltraCart Rest API V2
 * This is the next generation UltraCart REST API...
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomersResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerQuery', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerEditorValues', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Customer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/CustomerResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/CustomersResponse'), require('../com.ultracart.admin.v2.models/CustomerQuery'), require('../com.ultracart.admin.v2.models/CustomerEditorValues'), require('../com.ultracart.admin.v2.models/Customer'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CustomerResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.CustomersResponse, root.UltraCartRestApiV2.CustomerQuery, root.UltraCartRestApiV2.CustomerEditorValues, root.UltraCartRestApiV2.Customer);
  }
}(this, function(ApiClient, CustomerResponse, ErrorResponse, CustomersResponse, CustomerQuery, CustomerEditorValues, Customer) {
  'use strict';

  /**
   * Customer service.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi
   * @version 2.0.5
   */

  /**
   * Constructs a new CustomerApi. 
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi
   * @class
   * @param {module:com.ultracart.admin.v2.swagger/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ultracart.admin.v2.swagger/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer
     * Delete a customer on the UltraCart account. 
     * @param {Integer} customerProfileOid The customer_profile_oid to delete.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.deleteCustomer = function(customerProfileOid, callback) {
      var postBody = null;

      // verify the required parameter 'customerProfileOid' is set
      if (customerProfileOid == undefined || customerProfileOid == null) {
        throw "Missing the required parameter 'customerProfileOid' when calling deleteCustomer";
      }


      var pathParams = {
        'customer_profile_oid': customerProfileOid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer/customers/{customer_profile_oid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a customer
     * Retrieves a single customer using the specified customer profile oid. 
     * @param {Integer} customerProfileOid The customer oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.getCustomer = function(customerProfileOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerProfileOid' is set
      if (customerProfileOid == undefined || customerProfileOid == null) {
        throw "Missing the required parameter 'customerProfileOid' when calling getCustomer";
      }


      var pathParams = {
        'customer_profile_oid': customerProfileOid
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer/customers/{customer_profile_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomers operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers
     * Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email Email
     * @param {String} opts.qbClass Quickbooks class
     * @param {String} opts.quickbooksCode Quickbooks code
     * @param {String} opts.lastModifiedDtsStart Last modified date start
     * @param {String} opts.lastModifiedDtsEnd Last modified date end
     * @param {String} opts.signupDtsStart Signup date start
     * @param {String} opts.signupDtsEnd Signup date end
     * @param {String} opts.billingFirstName Billing first name
     * @param {String} opts.billingLastName Billing last name
     * @param {String} opts.billingCompany Billing company
     * @param {String} opts.billingCity Billing city
     * @param {String} opts.billingState Billing state
     * @param {String} opts.billingPostalCode Billing postal code
     * @param {String} opts.billingCountryCode Billing country code
     * @param {String} opts.billingDayPhone Billing day phone
     * @param {String} opts.billingEveningPhone Billing evening phone
     * @param {String} opts.shippingFirstName Shipping first name
     * @param {String} opts.shippingLastName Shipping last name
     * @param {String} opts.shippingCompany Shipping company
     * @param {String} opts.shippingCity Shipping city
     * @param {String} opts.shippingState Shipping state
     * @param {String} opts.shippingPostalCode Shipping postal code
     * @param {String} opts.shippingCountryCode Shipping country code
     * @param {String} opts.shippingDayPhone Shipping day phone
     * @param {String} opts.shippingEveningPhone Shipping evening phone
     * @param {Integer} opts.pricingTierOid Pricing tier oid
     * @param {String} opts.pricingTierName Pricing tier name
     * @param {Integer} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Integer} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomersResponse}
     */
    this.getCustomers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'email': opts['email'],
        'qb_class': opts['qbClass'],
        'quickbooks_code': opts['quickbooksCode'],
        'last_modified_dts_start': opts['lastModifiedDtsStart'],
        'last_modified_dts_end': opts['lastModifiedDtsEnd'],
        'signup_dts_start': opts['signupDtsStart'],
        'signup_dts_end': opts['signupDtsEnd'],
        'billing_first_name': opts['billingFirstName'],
        'billing_last_name': opts['billingLastName'],
        'billing_company': opts['billingCompany'],
        'billing_city': opts['billingCity'],
        'billing_state': opts['billingState'],
        'billing_postal_code': opts['billingPostalCode'],
        'billing_country_code': opts['billingCountryCode'],
        'billing_day_phone': opts['billingDayPhone'],
        'billing_evening_phone': opts['billingEveningPhone'],
        'shipping_first_name': opts['shippingFirstName'],
        'shipping_last_name': opts['shippingLastName'],
        'shipping_company': opts['shippingCompany'],
        'shipping_city': opts['shippingCity'],
        'shipping_state': opts['shippingState'],
        'shipping_postal_code': opts['shippingPostalCode'],
        'shipping_country_code': opts['shippingCountryCode'],
        'shipping_day_phone': opts['shippingDayPhone'],
        'shipping_evening_phone': opts['shippingEveningPhone'],
        'pricing_tier_oid': opts['pricingTierOid'],
        'pricing_tier_name': opts['pricingTierName'],
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
        '_sort': opts['sort'],
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomersResponse;

      return this.apiClient.callApi(
        '/customer/customers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomersByQuery operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers by query
     * Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerQuery} customerQuery Customer query
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Integer} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getCustomersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomersResponse}
     */
    this.getCustomersByQuery = function(customerQuery, opts, callback) {
      opts = opts || {};
      var postBody = customerQuery;

      // verify the required parameter 'customerQuery' is set
      if (customerQuery == undefined || customerQuery == null) {
        throw "Missing the required parameter 'customerQuery' when calling getCustomersByQuery";
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
        '_sort': opts['sort'],
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomersResponse;

      return this.apiClient.callApi(
        '/customer/customers/query', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEditorValues operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getEditorValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerEditorValues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve values needed for a customer profile editor
     * Retrieve values needed for a customer profile editor. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~getEditorValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerEditorValues}
     */
    this.getEditorValues = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomerEditorValues;

      return this.apiClient.callApi(
        '/customer/editor_values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertCustomer operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~insertCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a customer
     * Insert a customer on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Customer} customer Customer to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~insertCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.insertCustomer = function(customer, opts, callback) {
      opts = opts || {};
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer == undefined || customer == null) {
        throw "Missing the required parameter 'customer' when calling insertCustomer";
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer/customers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer
     * Update a customer on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/Customer} customer Customer to update
     * @param {Integer} customerProfileOid The customer_profile_oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/CustomerApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.updateCustomer = function(customer, customerProfileOid, opts, callback) {
      opts = opts || {};
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer == undefined || customer == null) {
        throw "Missing the required parameter 'customer' when calling updateCustomer";
      }

      // verify the required parameter 'customerProfileOid' is set
      if (customerProfileOid == undefined || customerProfileOid == null) {
        throw "Missing the required parameter 'customerProfileOid' when calling updateCustomer";
      }


      var pathParams = {
        'customer_profile_oid': customerProfileOid
      };
      var queryParams = {
        '_expand': opts['expand']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = CustomerResponse;

      return this.apiClient.callApi(
        '/customer/customers/{customer_profile_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
