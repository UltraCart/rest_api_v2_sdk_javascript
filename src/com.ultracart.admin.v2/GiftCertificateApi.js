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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/GiftCertificate', 'com.ultracart.admin.v2.models/GiftCertificateCreateRequest', 'com.ultracart.admin.v2.models/GiftCertificateLedgerEntry', 'com.ultracart.admin.v2.models/GiftCertificateQuery', 'com.ultracart.admin.v2.models/GiftCertificateResponse', 'com.ultracart.admin.v2.models/GiftCertificatesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/GiftCertificate'), require('../com.ultracart.admin.v2.models/GiftCertificateCreateRequest'), require('../com.ultracart.admin.v2.models/GiftCertificateLedgerEntry'), require('../com.ultracart.admin.v2.models/GiftCertificateQuery'), require('../com.ultracart.admin.v2.models/GiftCertificateResponse'), require('../com.ultracart.admin.v2.models/GiftCertificatesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.GiftCertificateApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.GiftCertificate, root.UltraCartRestApiV2.GiftCertificateCreateRequest, root.UltraCartRestApiV2.GiftCertificateLedgerEntry, root.UltraCartRestApiV2.GiftCertificateQuery, root.UltraCartRestApiV2.GiftCertificateResponse, root.UltraCartRestApiV2.GiftCertificatesResponse);
  }
}(this, function(ApiClient, ErrorResponse, GiftCertificate, GiftCertificateCreateRequest, GiftCertificateLedgerEntry, GiftCertificateQuery, GiftCertificateResponse, GiftCertificatesResponse) {
  'use strict';

  /**
   * GiftCertificate service.
   * @module com.ultracart.admin.v2/GiftCertificateApi
   * @version 3.10.179
   */

  /**
   * Constructs a new GiftCertificateApi. 
   * @alias module:com.ultracart.admin.v2/GiftCertificateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGiftCertificateLedgerEntry operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~addGiftCertificateLedgerEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a gift certificate ledger entry
     * Adds a ledger entry for this gift certificate. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateLedgerEntry} gift_certificate_ledger_entry Gift certificate ledger entry
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~addGiftCertificateLedgerEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
    this.addGiftCertificateLedgerEntry = function(gift_certificate_oid, gift_certificate_ledger_entry, callback) {
      var postBody = gift_certificate_ledger_entry;

      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling addGiftCertificateLedgerEntry");
      }

      // verify the required parameter 'gift_certificate_ledger_entry' is set
      if (gift_certificate_ledger_entry === undefined || gift_certificate_ledger_entry === null) {
        throw new Error("Missing the required parameter 'gift_certificate_ledger_entry' when calling addGiftCertificateLedgerEntry");
      }


      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
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
      var returnType = GiftCertificateResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/{gift_certificate_oid}/ledger_entry', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~createGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a gift certificate
     * Creates a gift certificate for this merchant account. 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateCreateRequest} gift_certificate_create_request Gift certificate create request
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~createGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
    this.createGiftCertificate = function(gift_certificate_create_request, callback) {
      var postBody = gift_certificate_create_request;

      // verify the required parameter 'gift_certificate_create_request' is set
      if (gift_certificate_create_request === undefined || gift_certificate_create_request === null) {
        throw new Error("Missing the required parameter 'gift_certificate_create_request' when calling createGiftCertificate");
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
      var returnType = GiftCertificateResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~deleteGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a gift certificate
     * Deletes a gift certificate for this merchant account. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~deleteGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGiftCertificate = function(gift_certificate_oid, callback) {
      var postBody = null;

      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling deleteGiftCertificate");
      }


      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
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
      var returnType = null;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/{gift_certificate_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGiftCertificateByCode operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by code
     * Retrieves a gift certificate from the account based on the code (the value the customer enters at checkout time). 
     * @param {String} code 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
    this.getGiftCertificateByCode = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getGiftCertificateByCode");
      }


      var pathParams = {
        'code': code
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
      var returnType = GiftCertificateResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/by_code/{code}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGiftCertificateByOid operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByOidCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by oid
     * Retrieves a gift certificate from the account based on the internal primary key. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificateByOidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
    this.getGiftCertificateByOid = function(gift_certificate_oid, callback) {
      var postBody = null;

      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling getGiftCertificateByOid");
      }


      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
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
      var returnType = GiftCertificateResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/{gift_certificate_oid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGiftCertificatesByEmail operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificate by email
     * Retrieves all gift certificates from the account based on customer email. 
     * @param {String} email 
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificatesResponse}
     */
    this.getGiftCertificatesByEmail = function(email, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getGiftCertificatesByEmail");
      }


      var pathParams = {
        'email': email
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
      var returnType = GiftCertificatesResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/by_email/{email}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGiftCertificatesByQuery operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve gift certificates by query
     * Retrieves gift certificates from the account.  If no parameters are specified, all gift certificates will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateQuery} gift_certificate_query Gift certificates query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch customers that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~getGiftCertificatesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificatesResponse}
     */
    this.getGiftCertificatesByQuery = function(gift_certificate_query, opts, callback) {
      opts = opts || {};
      var postBody = gift_certificate_query;

      // verify the required parameter 'gift_certificate_query' is set
      if (gift_certificate_query === undefined || gift_certificate_query === null) {
        throw new Error("Missing the required parameter 'gift_certificate_query' when calling getGiftCertificatesByQuery");
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
      var returnType = GiftCertificatesResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGiftCertificate operation.
     * @callback module:com.ultracart.admin.v2/GiftCertificateApi~updateGiftCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GiftCertificateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a gift certificate
     * Update a gift certificate for this merchant account. 
     * @param {Number} gift_certificate_oid 
     * @param {module:com.ultracart.admin.v2.models/GiftCertificate} gift_certificate Gift certificate
     * @param {module:com.ultracart.admin.v2/GiftCertificateApi~updateGiftCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GiftCertificateResponse}
     */
    this.updateGiftCertificate = function(gift_certificate_oid, gift_certificate, callback) {
      var postBody = gift_certificate;

      // verify the required parameter 'gift_certificate_oid' is set
      if (gift_certificate_oid === undefined || gift_certificate_oid === null) {
        throw new Error("Missing the required parameter 'gift_certificate_oid' when calling updateGiftCertificate");
      }

      // verify the required parameter 'gift_certificate' is set
      if (gift_certificate === undefined || gift_certificate === null) {
        throw new Error("Missing the required parameter 'gift_certificate' when calling updateGiftCertificate");
      }


      var pathParams = {
        'gift_certificate_oid': gift_certificate_oid
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
      var returnType = GiftCertificateResponse;

      return this.apiClient.callApi(
        '/gift_certificate/gift_certificates/{gift_certificate_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
