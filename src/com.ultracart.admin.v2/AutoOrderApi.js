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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrder', 'com.ultracart.admin.v2.models/AutoOrderQuery', 'com.ultracart.admin.v2.models/AutoOrderQueryBatch', 'com.ultracart.admin.v2.models/AutoOrderResponse', 'com.ultracart.admin.v2.models/AutoOrdersRequest', 'com.ultracart.admin.v2.models/AutoOrdersResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/AutoOrder'), require('../com.ultracart.admin.v2.models/AutoOrderQuery'), require('../com.ultracart.admin.v2.models/AutoOrderQueryBatch'), require('../com.ultracart.admin.v2.models/AutoOrderResponse'), require('../com.ultracart.admin.v2.models/AutoOrdersRequest'), require('../com.ultracart.admin.v2.models/AutoOrdersResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoOrderApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrder, root.UltraCartRestApiV2.AutoOrderQuery, root.UltraCartRestApiV2.AutoOrderQueryBatch, root.UltraCartRestApiV2.AutoOrderResponse, root.UltraCartRestApiV2.AutoOrdersRequest, root.UltraCartRestApiV2.AutoOrdersResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, AutoOrder, AutoOrderQuery, AutoOrderQueryBatch, AutoOrderResponse, AutoOrdersRequest, AutoOrdersResponse, ErrorResponse) {
  'use strict';

  /**
   * AutoOrder service.
   * @module com.ultracart.admin.v2/AutoOrderApi
   * @version 2.4.111
   */

  /**
   * Constructs a new AutoOrderApi. 
   * @alias module:com.ultracart.admin.v2/AutoOrderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAutoOrder operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified auto order oid. 
     * @param {Number} autoOrderOid The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrder = function(autoOrderOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'autoOrderOid' is set
      if (autoOrderOid === undefined || autoOrderOid === null) {
        throw new Error("Missing the required parameter 'autoOrderOid' when calling getAutoOrder");
      }


      var pathParams = {
        'auto_order_oid': autoOrderOid
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
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/{auto_order_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrderByCode operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} autoOrderCode The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByCode = function(autoOrderCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'autoOrderCode' is set
      if (autoOrderCode === undefined || autoOrderCode === null) {
        throw new Error("Missing the required parameter 'autoOrderCode' when calling getAutoOrderByCode");
      }


      var pathParams = {
        'auto_order_code': autoOrderCode
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
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/code/{auto_order_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrderByReferenceOrderId operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByReferenceOrderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} referenceOrderId The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByReferenceOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByReferenceOrderId = function(referenceOrderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceOrderId' is set
      if (referenceOrderId === undefined || referenceOrderId === null) {
        throw new Error("Missing the required parameter 'referenceOrderId' when calling getAutoOrderByReferenceOrderId");
      }


      var pathParams = {
        'reference_order_id': referenceOrderId
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
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/reference_order_id/{reference_order_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrders operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve auto orders
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.autoOrderCode Auto order code
     * @param {String} opts.originalOrderId Original order id
     * @param {String} opts.firstName First name
     * @param {String} opts.lastName Last name
     * @param {String} opts.company Company
     * @param {String} opts.city City
     * @param {String} opts.state State
     * @param {String} opts.postalCode Postal code
     * @param {String} opts.countryCode Country code (ISO-3166 two letter)
     * @param {String} opts.phone Phone
     * @param {String} opts.email Email
     * @param {String} opts.originalOrderDateBegin Original order date begin
     * @param {String} opts.originalOrderDateEnd Original order date end
     * @param {String} opts.nextShipmentDateBegin Next shipment date begin
     * @param {String} opts.nextShipmentDateEnd Next shipment date end
     * @param {String} opts.cardType Card type
     * @param {String} opts.itemId Item ID
     * @param {String} opts.status Status
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch auto orders that have been created/modified since this date/time.
     * @param {String} opts.sort The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrders = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'auto_order_code': opts['autoOrderCode'],
        'original_order_id': opts['originalOrderId'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'company': opts['company'],
        'city': opts['city'],
        'state': opts['state'],
        'postal_code': opts['postalCode'],
        'country_code': opts['countryCode'],
        'phone': opts['phone'],
        'email': opts['email'],
        'original_order_date_begin': opts['originalOrderDateBegin'],
        'original_order_date_end': opts['originalOrderDateEnd'],
        'next_shipment_date_begin': opts['nextShipmentDateBegin'],
        'next_shipment_date_end': opts['nextShipmentDateEnd'],
        'card_type': opts['cardType'],
        'item_id': opts['itemId'],
        'status': opts['status'],
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
      var returnType = AutoOrdersResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrdersBatch operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve auto order batch
     * Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} autoOrderBatch Auto order batch
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrdersBatch = function(autoOrderBatch, opts, callback) {
      opts = opts || {};
      var postBody = autoOrderBatch;

      // verify the required parameter 'autoOrderBatch' is set
      if (autoOrderBatch === undefined || autoOrderBatch === null) {
        throw new Error("Missing the required parameter 'autoOrderBatch' when calling getAutoOrdersBatch");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutoOrdersResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrdersByQuery operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve auto orders
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQuery} autoOrderQuery Auto order query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrdersByQuery = function(autoOrderQuery, opts, callback) {
      opts = opts || {};
      var postBody = autoOrderQuery;

      // verify the required parameter 'autoOrderQuery' is set
      if (autoOrderQuery === undefined || autoOrderQuery === null) {
        throw new Error("Missing the required parameter 'autoOrderQuery' when calling getAutoOrdersByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
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
      var returnType = AutoOrdersResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAutoOrder operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an auto order
     * Update an auto order on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/AutoOrder} autoOrder Auto order to update
     * @param {Number} autoOrderOid The auto order oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.updateAutoOrder = function(autoOrder, autoOrderOid, opts, callback) {
      opts = opts || {};
      var postBody = autoOrder;

      // verify the required parameter 'autoOrder' is set
      if (autoOrder === undefined || autoOrder === null) {
        throw new Error("Missing the required parameter 'autoOrder' when calling updateAutoOrder");
      }

      // verify the required parameter 'autoOrderOid' is set
      if (autoOrderOid === undefined || autoOrderOid === null) {
        throw new Error("Missing the required parameter 'autoOrderOid' when calling updateAutoOrder");
      }


      var pathParams = {
        'auto_order_oid': autoOrderOid
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
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/{auto_order_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAutoOrdersBatch operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrdersBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update multiple auto orders
     * Update multiple auto orders on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersRequest} autoOrdersRequest Auto orders to update (synchronous maximum 20 / asynchronous maximum 100)
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {Boolean} opts.async True if the operation should be run async.  No result returned
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrdersBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.updateAutoOrdersBatch = function(autoOrdersRequest, opts, callback) {
      opts = opts || {};
      var postBody = autoOrdersRequest;

      // verify the required parameter 'autoOrdersRequest' is set
      if (autoOrdersRequest === undefined || autoOrdersRequest === null) {
        throw new Error("Missing the required parameter 'autoOrdersRequest' when calling updateAutoOrdersBatch");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['expand'],
        '_placeholders': opts['placeholders'],
        '_async': opts['async'],
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
      var returnType = AutoOrdersResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/batch', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
