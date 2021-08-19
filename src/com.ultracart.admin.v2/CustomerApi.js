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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Customer', 'com.ultracart.admin.v2.models/CustomerEditorValues', 'com.ultracart.admin.v2.models/CustomerEmailListChanges', 'com.ultracart.admin.v2.models/CustomerQuery', 'com.ultracart.admin.v2.models/CustomerResponse', 'com.ultracart.admin.v2.models/CustomersResponse', 'com.ultracart.admin.v2.models/DataTablesServerSideResponse', 'com.ultracart.admin.v2.models/EmailListsResponse', 'com.ultracart.admin.v2.models/EmailVerifyTokenRequest', 'com.ultracart.admin.v2.models/EmailVerifyTokenResponse', 'com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest', 'com.ultracart.admin.v2.models/EmailVerifyTokenValidateResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/Customer'), require('../com.ultracart.admin.v2.models/CustomerEditorValues'), require('../com.ultracart.admin.v2.models/CustomerEmailListChanges'), require('../com.ultracart.admin.v2.models/CustomerQuery'), require('../com.ultracart.admin.v2.models/CustomerResponse'), require('../com.ultracart.admin.v2.models/CustomersResponse'), require('../com.ultracart.admin.v2.models/DataTablesServerSideResponse'), require('../com.ultracart.admin.v2.models/EmailListsResponse'), require('../com.ultracart.admin.v2.models/EmailVerifyTokenRequest'), require('../com.ultracart.admin.v2.models/EmailVerifyTokenResponse'), require('../com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest'), require('../com.ultracart.admin.v2.models/EmailVerifyTokenValidateResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Customer, root.UltraCartRestApiV2.CustomerEditorValues, root.UltraCartRestApiV2.CustomerEmailListChanges, root.UltraCartRestApiV2.CustomerQuery, root.UltraCartRestApiV2.CustomerResponse, root.UltraCartRestApiV2.CustomersResponse, root.UltraCartRestApiV2.DataTablesServerSideResponse, root.UltraCartRestApiV2.EmailListsResponse, root.UltraCartRestApiV2.EmailVerifyTokenRequest, root.UltraCartRestApiV2.EmailVerifyTokenResponse, root.UltraCartRestApiV2.EmailVerifyTokenValidateRequest, root.UltraCartRestApiV2.EmailVerifyTokenValidateResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, Customer, CustomerEditorValues, CustomerEmailListChanges, CustomerQuery, CustomerResponse, CustomersResponse, DataTablesServerSideResponse, EmailListsResponse, EmailVerifyTokenRequest, EmailVerifyTokenResponse, EmailVerifyTokenValidateRequest, EmailVerifyTokenValidateResponse, ErrorResponse) {
  'use strict';

  /**
   * Customer service.
   * @module com.ultracart.admin.v2/CustomerApi
   * @version 3.6.0
   */

  /**
   * Constructs a new CustomerApi. 
   * @alias module:com.ultracart.admin.v2/CustomerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer
     * Delete a customer on the UltraCart account. 
     * @param {Number} customer_profile_oid The customer_profile_oid to delete.
     * @param {module:com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.deleteCustomer = function(customer_profile_oid, callback) {
      var postBody = null;

      // verify the required parameter 'customer_profile_oid' is set
      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling deleteCustomer");
      }


      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a customer
     * Retrieves a single customer using the specified customer profile oid. 
     * @param {Number} customer_profile_oid The customer oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.getCustomer = function(customer_profile_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customer_profile_oid' is set
      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling getCustomer");
      }


      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerByEmail operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomerByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a customer by Email
     * Retrieves a single customer using the specified customer email address. 
     * @param {String} email The email address of the customer to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomerByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.getCustomerByEmail = function(email, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getCustomerByEmail");
      }


      var pathParams = {
        'email': email
      };
      var queryParams = {
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        '/customer/customers/by_email/{email}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerEditorValues operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomerEditorValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerEditorValues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve values needed for a customer profile editor
     * Retrieve values needed for a customer profile editor. 
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomerEditorValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerEditorValues}
     */
    this.getCustomerEditorValues = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerEmailLists operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomerEmailListsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all email lists across all storefronts
     * Retrieve all email lists across all storefronts 
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomerEmailListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListsResponse}
     */
    this.getCustomerEmailLists = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EmailListsResponse;

      return this.apiClient.callApi(
        '/customer/email_lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomers operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers
     * Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email Email
     * @param {String} opts.qb_class Quickbooks class
     * @param {String} opts.quickbooks_code Quickbooks code
     * @param {String} opts.last_modified_dts_start Last modified date start
     * @param {String} opts.last_modified_dts_end Last modified date end
     * @param {String} opts.signup_dts_start Signup date start
     * @param {String} opts.signup_dts_end Signup date end
     * @param {String} opts.billing_first_name Billing first name
     * @param {String} opts.billing_last_name Billing last name
     * @param {String} opts.billing_company Billing company
     * @param {String} opts.billing_city Billing city
     * @param {String} opts.billing_state Billing state
     * @param {String} opts.billing_postal_code Billing postal code
     * @param {String} opts.billing_country_code Billing country code
     * @param {String} opts.billing_day_phone Billing day phone
     * @param {String} opts.billing_evening_phone Billing evening phone
     * @param {String} opts.shipping_first_name Shipping first name
     * @param {String} opts.shipping_last_name Shipping last name
     * @param {String} opts.shipping_company Shipping company
     * @param {String} opts.shipping_city Shipping city
     * @param {String} opts.shipping_state Shipping state
     * @param {String} opts.shipping_postal_code Shipping postal code
     * @param {String} opts.shipping_country_code Shipping country code
     * @param {String} opts.shipping_day_phone Shipping day phone
     * @param {String} opts.shipping_evening_phone Shipping evening phone
     * @param {Number} opts.pricing_tier_oid Pricing tier oid
     * @param {String} opts.pricing_tier_name Pricing tier name
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomersResponse}
     */
    this.getCustomers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'email': opts['email'],
        'qb_class': opts['qb_class'],
        'quickbooks_code': opts['quickbooks_code'],
        'last_modified_dts_start': opts['last_modified_dts_start'],
        'last_modified_dts_end': opts['last_modified_dts_end'],
        'signup_dts_start': opts['signup_dts_start'],
        'signup_dts_end': opts['signup_dts_end'],
        'billing_first_name': opts['billing_first_name'],
        'billing_last_name': opts['billing_last_name'],
        'billing_company': opts['billing_company'],
        'billing_city': opts['billing_city'],
        'billing_state': opts['billing_state'],
        'billing_postal_code': opts['billing_postal_code'],
        'billing_country_code': opts['billing_country_code'],
        'billing_day_phone': opts['billing_day_phone'],
        'billing_evening_phone': opts['billing_evening_phone'],
        'shipping_first_name': opts['shipping_first_name'],
        'shipping_last_name': opts['shipping_last_name'],
        'shipping_company': opts['shipping_company'],
        'shipping_city': opts['shipping_city'],
        'shipping_state': opts['shipping_state'],
        'shipping_postal_code': opts['shipping_postal_code'],
        'shipping_country_code': opts['shipping_country_code'],
        'shipping_day_phone': opts['shipping_day_phone'],
        'shipping_evening_phone': opts['shipping_evening_phone'],
        'pricing_tier_oid': opts['pricing_tier_oid'],
        'pricing_tier_name': opts['pricing_tier_name'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomersByQuery operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers by query
     * Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/CustomerQuery} customer_query Customer query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomersResponse}
     */
    this.getCustomersByQuery = function(customer_query, opts, callback) {
      opts = opts || {};
      var postBody = customer_query;

      // verify the required parameter 'customer_query' is set
      if (customer_query === undefined || customer_query === null) {
        throw new Error("Missing the required parameter 'customer_query' when calling getCustomersByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        '/customer/customers/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomersForDataTables operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomersForDataTablesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers for DataTables plugin
     * Retrieves customers from the account.  If no searches are specified, all customers will be returned. 
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomersForDataTablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/DataTablesServerSideResponse}
     */
    this.getCustomersForDataTables = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DataTablesServerSideResponse;

      return this.apiClient.callApi(
        '/customer/customers/dataTables', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailVerificationToken operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getEmailVerificationTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a token that can be used to verify a customer email address
     * Create a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest} token_request Token request
     * @param {module:com.ultracart.admin.v2/CustomerApi~getEmailVerificationTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailVerifyTokenResponse}
     */
    this.getEmailVerificationToken = function(token_request, callback) {
      var postBody = token_request;

      // verify the required parameter 'token_request' is set
      if (token_request === undefined || token_request === null) {
        throw new Error("Missing the required parameter 'token_request' when calling getEmailVerificationToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EmailVerifyTokenResponse;

      return this.apiClient.callApi(
        '/customer/customers/email_verify/get_token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~insertCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a customer
     * Insert a customer on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Customer} customer Customer to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~insertCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.insertCustomer = function(customer, opts, callback) {
      opts = opts || {};
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling insertCustomer");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer
     * Update a customer on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Customer} customer Customer to update
     * @param {Number} customer_profile_oid The customer_profile_oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */
    this.updateCustomer = function(customer, customer_profile_oid, opts, callback) {
      opts = opts || {};
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling updateCustomer");
      }

      // verify the required parameter 'customer_profile_oid' is set
      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling updateCustomer");
      }


      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
        '_expand': opts['_expand'],
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerEmailLists operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~updateCustomerEmailListsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email list subscriptions for a customer
     * Update email list subscriptions for a customer 
     * @param {Number} customer_profile_oid The customer profile oid
     * @param {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} list_changes List changes
     * @param {module:com.ultracart.admin.v2/CustomerApi~updateCustomerEmailListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerEmailListChanges}
     */
    this.updateCustomerEmailLists = function(customer_profile_oid, list_changes, callback) {
      var postBody = list_changes;

      // verify the required parameter 'customer_profile_oid' is set
      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling updateCustomerEmailLists");
      }

      // verify the required parameter 'list_changes' is set
      if (list_changes === undefined || list_changes === null) {
        throw new Error("Missing the required parameter 'list_changes' when calling updateCustomerEmailLists");
      }


      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = CustomerEmailListChanges;

      return this.apiClient.callApi(
        '/customer/customers/{customer_profile_oid}/email_lists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateEmailVerificationToken operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~validateEmailVerificationTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a token that can be used to verify a customer email address
     * Validate a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 
     * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest} validation_request Token validation request
     * @param {module:com.ultracart.admin.v2/CustomerApi~validateEmailVerificationTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailVerifyTokenValidateResponse}
     */
    this.validateEmailVerificationToken = function(validation_request, callback) {
      var postBody = validation_request;

      // verify the required parameter 'validation_request' is set
      if (validation_request === undefined || validation_request === null) {
        throw new Error("Missing the required parameter 'validation_request' when calling validateEmailVerificationToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EmailVerifyTokenValidateResponse;

      return this.apiClient.callApi(
        '/customer/customers/email_verify/validate_token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
