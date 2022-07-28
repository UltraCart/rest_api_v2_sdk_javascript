"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AdjustInternalCertificateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AdjustInternalCertificateRequest"));

var _AdjustInternalCertificateResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AdjustInternalCertificateResponse"));

var _BaseResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/BaseResponse"));

var _Customer = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Customer"));

var _CustomerEditorValues = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerEditorValues"));

var _CustomerEmailListChanges = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerEmailListChanges"));

var _CustomerMergeRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerMergeRequest"));

var _CustomerQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerQuery"));

var _CustomerResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerResponse"));

var _CustomerStoreCreditAddRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest"));

var _CustomerStoreCreditResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomerStoreCreditResponse"));

var _CustomersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomersResponse"));

var _DataTablesServerSideResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/DataTablesServerSideResponse"));

var _EmailListsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListsResponse"));

var _EmailVerifyTokenRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailVerifyTokenRequest"));

var _EmailVerifyTokenResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailVerifyTokenResponse"));

var _EmailVerifyTokenValidateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailVerifyTokenValidateRequest"));

var _EmailVerifyTokenValidateResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailVerifyTokenValidateResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _LookupRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LookupRequest"));

var _LookupResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LookupResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Customer service.
* @module com.ultracart.admin.v2/CustomerApi
* @version 4.0.43-RC
*/
var CustomerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CustomerApi. 
  * @alias module:com.ultracart.admin.v2/CustomerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CustomerApi(apiClient) {
    _classCallCheck(this, CustomerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addCustomerStoreCredit operation.
   * @callback module:com.ultracart.admin.v2/CustomerApi~addCustomerStoreCreditCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Adds store credit to a customer
   * Adds store credit to a customer 
   * @param {Number} customer_profile_oid The customer oid to credit.
   * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} store_credit_request Store credit to add
   * @param {module:com.ultracart.admin.v2/CustomerApi~addCustomerStoreCreditCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
   */


  _createClass(CustomerApi, [{
    key: "addCustomerStoreCredit",
    value: function addCustomerStoreCredit(customer_profile_oid, store_credit_request, callback) {
      var postBody = store_credit_request; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling addCustomerStoreCredit");
      } // verify the required parameter 'store_credit_request' is set


      if (store_credit_request === undefined || store_credit_request === null) {
        throw new Error("Missing the required parameter 'store_credit_request' when calling addCustomerStoreCredit");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}/store_credit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the adjustInternalCertificate operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~adjustInternalCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed.
     * Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed. 
     * @param {Number} customer_profile_oid The customer profile oid
     * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} adjust_internal_certificate_request adjustInternalCertificateRequest
     * @param {module:com.ultracart.admin.v2/CustomerApi~adjustInternalCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AdjustInternalCertificateResponse}
     */

  }, {
    key: "adjustInternalCertificate",
    value: function adjustInternalCertificate(customer_profile_oid, adjust_internal_certificate_request, callback) {
      var postBody = adjust_internal_certificate_request; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling adjustInternalCertificate");
      } // verify the required parameter 'adjust_internal_certificate_request' is set


      if (adjust_internal_certificate_request === undefined || adjust_internal_certificate_request === null) {
        throw new Error("Missing the required parameter 'adjust_internal_certificate_request' when calling adjustInternalCertificate");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _AdjustInternalCertificateResponse["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}/adjust_cashback_balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer
     * Delete a customer on the UltraCart account. 
     * @param {Number} customer_profile_oid The customer_profile_oid to delete.
     * @param {module:com.ultracart.admin.v2/CustomerApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteCustomer",
    value: function deleteCustomer(customer_profile_oid, callback) {
      var postBody = null; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling deleteCustomer");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomer",
    value: function getCustomer(customer_profile_oid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling getCustomer");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomerByEmail",
    value: function getCustomerByEmail(email, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getCustomerByEmail");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/customers/by_email/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomerEditorValues",
    value: function getCustomerEditorValues(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerEditorValues["default"];
      return this.apiClient.callApi('/customer/editor_values', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomerEmailLists",
    value: function getCustomerEmailLists(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListsResponse["default"];
      return this.apiClient.callApi('/customer/email_lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCustomerStoreCredit operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~getCustomerStoreCreditCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the customer store credit accumulated through loyalty programs
     * Retrieve the customer store credit accumulated through loyalty programs 
     * @param {Number} customer_profile_oid The customer oid to retrieve.
     * @param {module:com.ultracart.admin.v2/CustomerApi~getCustomerStoreCreditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerStoreCreditResponse}
     */

  }, {
    key: "getCustomerStoreCredit",
    value: function getCustomerStoreCredit(customer_profile_oid, callback) {
      var postBody = null; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling getCustomerStoreCredit");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerStoreCreditResponse["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}/store_credit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomers",
    value: function getCustomers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomersResponse["default"];
      return this.apiClient.callApi('/customer/customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomersByQuery",
    value: function getCustomersByQuery(customer_query, opts, callback) {
      opts = opts || {};
      var postBody = customer_query; // verify the required parameter 'customer_query' is set

      if (customer_query === undefined || customer_query === null) {
        throw new Error("Missing the required parameter 'customer_query' when calling getCustomersByQuery");
      }

      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomersResponse["default"];
      return this.apiClient.callApi('/customer/customers/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getCustomersForDataTables",
    value: function getCustomersForDataTables(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DataTablesServerSideResponse["default"];
      return this.apiClient.callApi('/customer/customers/dataTables', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getEmailVerificationToken",
    value: function getEmailVerificationToken(token_request, callback) {
      var postBody = token_request; // verify the required parameter 'token_request' is set

      if (token_request === undefined || token_request === null) {
        throw new Error("Missing the required parameter 'token_request' when calling getEmailVerificationToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailVerifyTokenResponse["default"];
      return this.apiClient.callApi('/customer/customers/email_verify/get_token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertCustomer",
    value: function insertCustomer(customer, opts, callback) {
      opts = opts || {};
      var postBody = customer; // verify the required parameter 'customer' is set

      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling insertCustomer");
      }

      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/customers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mergeCustomer operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~mergeCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge customer into this customer
     * Merge customer into this customer. 
     * @param {Number} customer_profile_oid The customer_profile_oid to update.
     * @param {module:com.ultracart.admin.v2.models/CustomerMergeRequest} customer Customer to merge into this profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~mergeCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "mergeCustomer",
    value: function mergeCustomer(customer_profile_oid, customer, opts, callback) {
      opts = opts || {};
      var postBody = customer; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling mergeCustomer");
      } // verify the required parameter 'customer' is set


      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling mergeCustomer");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}/merge', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchCustomerProfileValues operation.
     * @callback module:com.ultracart.admin.v2/CustomerApi~searchCustomerProfileValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for all matching values (using POST)
     * @param {module:com.ultracart.admin.v2.models/LookupRequest} lookup_request LookupRequest
     * @param {module:com.ultracart.admin.v2/CustomerApi~searchCustomerProfileValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LookupResponse}
     */

  }, {
    key: "searchCustomerProfileValues",
    value: function searchCustomerProfileValues(lookup_request, callback) {
      var postBody = lookup_request; // verify the required parameter 'lookup_request' is set

      if (lookup_request === undefined || lookup_request === null) {
        throw new Error("Missing the required parameter 'lookup_request' when calling searchCustomerProfileValues");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LookupResponse["default"];
      return this.apiClient.callApi('/customer/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} customer_profile_oid The customer_profile_oid to update.
     * @param {module:com.ultracart.admin.v2.models/Customer} customer Customer to update
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/CustomerApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomerResponse}
     */

  }, {
    key: "updateCustomer",
    value: function updateCustomer(customer_profile_oid, customer, opts, callback) {
      opts = opts || {};
      var postBody = customer; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling updateCustomer");
      } // verify the required parameter 'customer' is set


      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling updateCustomer");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "updateCustomerEmailLists",
    value: function updateCustomerEmailLists(customer_profile_oid, list_changes, callback) {
      var postBody = list_changes; // verify the required parameter 'customer_profile_oid' is set

      if (customer_profile_oid === undefined || customer_profile_oid === null) {
        throw new Error("Missing the required parameter 'customer_profile_oid' when calling updateCustomerEmailLists");
      } // verify the required parameter 'list_changes' is set


      if (list_changes === undefined || list_changes === null) {
        throw new Error("Missing the required parameter 'list_changes' when calling updateCustomerEmailLists");
      }

      var pathParams = {
        'customer_profile_oid': customer_profile_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomerEmailListChanges["default"];
      return this.apiClient.callApi('/customer/customers/{customer_profile_oid}/email_lists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "validateEmailVerificationToken",
    value: function validateEmailVerificationToken(validation_request, callback) {
      var postBody = validation_request; // verify the required parameter 'validation_request' is set

      if (validation_request === undefined || validation_request === null) {
        throw new Error("Missing the required parameter 'validation_request' when calling validateEmailVerificationToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailVerifyTokenValidateResponse["default"];
      return this.apiClient.callApi('/customer/customers/email_verify/validate_token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CustomerApi;
}();

exports["default"] = CustomerApi;