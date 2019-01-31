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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChargebackDispute', 'com.ultracart.admin.v2.models/ChargebackDisputeResponse', 'com.ultracart.admin.v2.models/ChargebackDisputesResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ChargebackDispute'), require('../com.ultracart.admin.v2.models/ChargebackDisputeResponse'), require('../com.ultracart.admin.v2.models/ChargebackDisputesResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChargebackApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChargebackDispute, root.UltraCartRestApiV2.ChargebackDisputeResponse, root.UltraCartRestApiV2.ChargebackDisputesResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, ChargebackDispute, ChargebackDisputeResponse, ChargebackDisputesResponse, ErrorResponse) {
  'use strict';

  /**
   * Chargeback service.
   * @module com.ultracart.admin.v2/ChargebackApi
   * @version 2.3.20
   */

  /**
   * Constructs a new ChargebackApi. 
   * @alias module:com.ultracart.admin.v2/ChargebackApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~deleteChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a chargeback
     * Delete a chargeback on the UltraCart account. 
     * @param {Number} chargebackDisputeOid The chargeback_dispute_oid to delete.
     * @param {module:com.ultracart.admin.v2/ChargebackApi~deleteChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    this.deleteChargeback = function(chargebackDisputeOid, callback) {
      var postBody = null;

      // verify the required parameter 'chargebackDisputeOid' is set
      if (chargebackDisputeOid === undefined || chargebackDisputeOid === null) {
        throw new Error("Missing the required parameter 'chargebackDisputeOid' when calling deleteChargeback");
      }


      var pathParams = {
        'chargeback_dispute_oid': chargebackDisputeOid
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
      var returnType = ChargebackDisputeResponse;

      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getChargebackDispute operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a chargeback
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * @param {Number} chargebackDisputeOid The chargeback dispute oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    this.getChargebackDispute = function(chargebackDisputeOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'chargebackDisputeOid' is set
      if (chargebackDisputeOid === undefined || chargebackDisputeOid === null) {
        throw new Error("Missing the required parameter 'chargebackDisputeOid' when calling getChargebackDispute");
      }


      var pathParams = {
        'chargeback_dispute_oid': chargebackDisputeOid
      };
      var queryParams = {
        '_expand': opts['expand'],
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
      var returnType = ChargebackDisputeResponse;

      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getChargebackDisputes operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve chargebacks
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderId Order Id
     * @param {String} opts.caseNumber Case number
     * @param {String} opts.status Status
     * @param {String} opts.expirationDtsStart Expiration dts start
     * @param {String} opts.expirationDtsEnd Expiration dts end
     * @param {String} opts.chargebackDtsStart Chargeback dts start
     * @param {String} opts.chargebackDtsEnd Chargeback dts end
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch chargebacks that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the chargebacks.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputesResponse}
     */
    this.getChargebackDisputes = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'order_id': opts['orderId'],
        'case_number': opts['caseNumber'],
        'status': opts['status'],
        'expiration_dts_start': opts['expirationDtsStart'],
        'expiration_dts_end': opts['expirationDtsEnd'],
        'chargeback_dts_start': opts['chargebackDtsStart'],
        'chargeback_dts_end': opts['chargebackDtsEnd'],
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
        '_sort': opts['sort'],
        '_expand': opts['expand'],
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
      var returnType = ChargebackDisputesResponse;

      return this.apiClient.callApi(
        '/chargeback/chargebacks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~insertChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a chargeback
     * Insert a chargeback on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} chargeback Chargeback to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~insertChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    this.insertChargeback = function(chargeback, opts, callback) {
      opts = opts || {};
      var postBody = chargeback;

      // verify the required parameter 'chargeback' is set
      if (chargeback === undefined || chargeback === null) {
        throw new Error("Missing the required parameter 'chargeback' when calling insertChargeback");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['expand'],
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
      var returnType = ChargebackDisputeResponse;

      return this.apiClient.callApi(
        '/chargeback/chargebacks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~updateChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a chargeback
     * Update a chargeback on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} chargeback Chargeback to update
     * @param {Number} chargebackDisputeOid The chargeback_dispute_oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~updateChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    this.updateChargeback = function(chargeback, chargebackDisputeOid, opts, callback) {
      opts = opts || {};
      var postBody = chargeback;

      // verify the required parameter 'chargeback' is set
      if (chargeback === undefined || chargeback === null) {
        throw new Error("Missing the required parameter 'chargeback' when calling updateChargeback");
      }

      // verify the required parameter 'chargebackDisputeOid' is set
      if (chargebackDisputeOid === undefined || chargebackDisputeOid === null) {
        throw new Error("Missing the required parameter 'chargebackDisputeOid' when calling updateChargeback");
      }


      var pathParams = {
        'chargeback_dispute_oid': chargebackDisputeOid
      };
      var queryParams = {
        '_expand': opts['expand'],
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
      var returnType = ChargebackDisputeResponse;

      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
