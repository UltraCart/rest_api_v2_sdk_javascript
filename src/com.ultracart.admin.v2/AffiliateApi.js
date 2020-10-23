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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AffiliateClickQuery', 'com.ultracart.admin.v2.models/AffiliateClicksResponse', 'com.ultracart.admin.v2.models/AffiliateLedgerQuery', 'com.ultracart.admin.v2.models/AffiliateLedgersResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/AffiliateClickQuery'), require('../com.ultracart.admin.v2.models/AffiliateClicksResponse'), require('../com.ultracart.admin.v2.models/AffiliateLedgerQuery'), require('../com.ultracart.admin.v2.models/AffiliateLedgersResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AffiliateApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AffiliateClickQuery, root.UltraCartRestApiV2.AffiliateClicksResponse, root.UltraCartRestApiV2.AffiliateLedgerQuery, root.UltraCartRestApiV2.AffiliateLedgersResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, AffiliateClickQuery, AffiliateClicksResponse, AffiliateLedgerQuery, AffiliateLedgersResponse, ErrorResponse) {
  'use strict';

  /**
   * Affiliate service.
   * @module com.ultracart.admin.v2/AffiliateApi
   * @version 3.0.33
   */

  /**
   * Constructs a new AffiliateApi. 
   * @alias module:com.ultracart.admin.v2/AffiliateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getClicksByQuery operation.
     * @callback module:com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AffiliateClicksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve clicks
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/AffiliateClickQuery} click_query Click query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._expand The object expansion to perform on the result.  Only option is link.
     * @param {module:com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AffiliateClicksResponse}
     */
    this.getClicksByQuery = function(click_query, opts, callback) {
      opts = opts || {};
      var postBody = click_query;

      // verify the required parameter 'click_query' is set
      if (click_query === undefined || click_query === null) {
        throw new Error("Missing the required parameter 'click_query' when calling getClicksByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
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
      var returnType = AffiliateClicksResponse;

      return this.apiClient.callApi(
        '/affiliate/clicks/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLedgersByQuery operation.
     * @callback module:com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedgersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve ledger entries
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/AffiliateLedgerQuery} ledger_query Ledger query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._expand The object expansion to perform on the result.  Only option is link.
     * @param {module:com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AffiliateLedgersResponse}
     */
    this.getLedgersByQuery = function(ledger_query, opts, callback) {
      opts = opts || {};
      var postBody = ledger_query;

      // verify the required parameter 'ledger_query' is set
      if (ledger_query === undefined || ledger_query === null) {
        throw new Error("Missing the required parameter 'ledger_query' when calling getLedgersByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
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
      var returnType = AffiliateLedgersResponse;

      return this.apiClient.callApi(
        '/affiliate/ledgers/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
