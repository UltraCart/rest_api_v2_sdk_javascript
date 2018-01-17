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
    define(['com.ultracart.admin.v2.swagger/ApiClient', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateClickQuery', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateClicksResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateLedgersResponse', 'com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateLedgerQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/AffiliateClickQuery'), require('../com.ultracart.admin.v2.models/AffiliateClicksResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/AffiliateLedgersResponse'), require('../com.ultracart.admin.v2.models/AffiliateLedgerQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AffiliateApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AffiliateClickQuery, root.UltraCartRestApiV2.AffiliateClicksResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.AffiliateLedgersResponse, root.UltraCartRestApiV2.AffiliateLedgerQuery);
  }
}(this, function(ApiClient, AffiliateClickQuery, AffiliateClicksResponse, ErrorResponse, AffiliateLedgersResponse, AffiliateLedgerQuery) {
  'use strict';

  /**
   * Affiliate service.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi
   * @version 2.0.5
   */

  /**
   * Constructs a new AffiliateApi. 
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi
   * @class
   * @param {module:com.ultracart.admin.v2.swagger/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:com.ultracart.admin.v2.swagger/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getClicksByQuery operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateClicksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve clicks
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateClickQuery} clickQuery Click query
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Integer} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.expand The object expansion to perform on the result.  Only option is link.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi~getClicksByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateClicksResponse}
     */
    this.getClicksByQuery = function(clickQuery, opts, callback) {
      opts = opts || {};
      var postBody = clickQuery;

      // verify the required parameter 'clickQuery' is set
      if (clickQuery == undefined || clickQuery == null) {
        throw "Missing the required parameter 'clickQuery' when calling getClicksByQuery";
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_expand': opts['expand']
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
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLedgersByQuery operation.
     * @callback module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateLedgersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve ledger entries
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateLedgerQuery} ledgerQuery Ledger query
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Integer} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.expand The object expansion to perform on the result.  Only option is link.
     * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2/AffiliateApi~getLedgersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/AffiliateLedgersResponse}
     */
    this.getLedgersByQuery = function(ledgerQuery, opts, callback) {
      opts = opts || {};
      var postBody = ledgerQuery;

      // verify the required parameter 'ledgerQuery' is set
      if (ledgerQuery == undefined || ledgerQuery == null) {
        throw "Missing the required parameter 'ledgerQuery' when calling getLedgersByQuery";
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_expand': opts['expand']
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
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
