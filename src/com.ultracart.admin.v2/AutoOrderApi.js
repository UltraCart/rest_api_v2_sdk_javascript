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
   * @version 3.10.147
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
     * Callback function to receive the result of the establishAutoOrderByReferenceOrderId operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~establishAutoOrderByReferenceOrderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Establish an auto order by referencing a regular order id
     * Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 
     * @param {String} reference_order_id The order id to attach this auto order to
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~establishAutoOrderByReferenceOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.establishAutoOrderByReferenceOrderId = function(reference_order_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'reference_order_id' is set
      if (reference_order_id === undefined || reference_order_id === null) {
        throw new Error("Missing the required parameter 'reference_order_id' when calling establishAutoOrderByReferenceOrderId");
      }


      var pathParams = {
        'reference_order_id': reference_order_id
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
      var returnType = AutoOrderResponse;

      return this.apiClient.callApi(
        '/auto_order/auto_orders/reference_order_id/{reference_order_id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutoOrder operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an auto order by oid
     * Retrieves a single auto order using the specified auto order oid. 
     * @param {Number} auto_order_oid The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrder = function(auto_order_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'auto_order_oid' is set
      if (auto_order_oid === undefined || auto_order_oid === null) {
        throw new Error("Missing the required parameter 'auto_order_oid' when calling getAutoOrder");
      }


      var pathParams = {
        'auto_order_oid': auto_order_oid
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
     * Retrieve an auto order by code
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} auto_order_code The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByCode = function(auto_order_code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'auto_order_code' is set
      if (auto_order_code === undefined || auto_order_code === null) {
        throw new Error("Missing the required parameter 'auto_order_code' when calling getAutoOrderByCode");
      }


      var pathParams = {
        'auto_order_code': auto_order_code
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
     * Retrieve an auto order by order id
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @param {String} reference_order_id The auto order oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrderByReferenceOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.getAutoOrderByReferenceOrderId = function(reference_order_id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'reference_order_id' is set
      if (reference_order_id === undefined || reference_order_id === null) {
        throw new Error("Missing the required parameter 'reference_order_id' when calling getAutoOrderByReferenceOrderId");
      }


      var pathParams = {
        'reference_order_id': reference_order_id
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
     * @param {String} opts.auto_order_code Auto order code
     * @param {String} opts.original_order_id Original order id
     * @param {String} opts.first_name First name
     * @param {String} opts.last_name Last name
     * @param {String} opts.company Company
     * @param {String} opts.city City
     * @param {String} opts.state State
     * @param {String} opts.postal_code Postal code
     * @param {String} opts.country_code Country code (ISO-3166 two letter)
     * @param {String} opts.phone Phone
     * @param {String} opts.email Email
     * @param {String} opts.original_order_date_begin Original order date begin
     * @param {String} opts.original_order_date_end Original order date end
     * @param {String} opts.next_shipment_date_begin Next shipment date begin
     * @param {String} opts.next_shipment_date_end Next shipment date end
     * @param {String} opts.card_type Card type
     * @param {String} opts.item_id Item ID
     * @param {String} opts.status Status
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch auto orders that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrders = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'auto_order_code': opts['auto_order_code'],
        'original_order_id': opts['original_order_id'],
        'first_name': opts['first_name'],
        'last_name': opts['last_name'],
        'company': opts['company'],
        'city': opts['city'],
        'state': opts['state'],
        'postal_code': opts['postal_code'],
        'country_code': opts['country_code'],
        'phone': opts['phone'],
        'email': opts['email'],
        'original_order_date_begin': opts['original_order_date_begin'],
        'original_order_date_end': opts['original_order_date_end'],
        'next_shipment_date_begin': opts['next_shipment_date_begin'],
        'next_shipment_date_end': opts['next_shipment_date_end'],
        'card_type': opts['card_type'],
        'item_id': opts['item_id'],
        'status': opts['status'],
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
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} auto_order_batch Auto order batch
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrdersBatch = function(auto_order_batch, opts, callback) {
      opts = opts || {};
      var postBody = auto_order_batch;

      // verify the required parameter 'auto_order_batch' is set
      if (auto_order_batch === undefined || auto_order_batch === null) {
        throw new Error("Missing the required parameter 'auto_order_batch' when calling getAutoOrdersBatch");
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
     * Retrieve auto orders by query
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQuery} auto_order_query Auto order query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~getAutoOrdersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.getAutoOrdersByQuery = function(auto_order_query, opts, callback) {
      opts = opts || {};
      var postBody = auto_order_query;

      // verify the required parameter 'auto_order_query' is set
      if (auto_order_query === undefined || auto_order_query === null) {
        throw new Error("Missing the required parameter 'auto_order_query' when calling getAutoOrdersByQuery");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
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
     * @param {module:com.ultracart.admin.v2.models/AutoOrder} auto_order Auto order to update
     * @param {Number} auto_order_oid The auto order oid to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
    this.updateAutoOrder = function(auto_order, auto_order_oid, opts, callback) {
      opts = opts || {};
      var postBody = auto_order;

      // verify the required parameter 'auto_order' is set
      if (auto_order === undefined || auto_order === null) {
        throw new Error("Missing the required parameter 'auto_order' when calling updateAutoOrder");
      }

      // verify the required parameter 'auto_order_oid' is set
      if (auto_order_oid === undefined || auto_order_oid === null) {
        throw new Error("Missing the required parameter 'auto_order_oid' when calling updateAutoOrder");
      }


      var pathParams = {
        'auto_order_oid': auto_order_oid
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
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersRequest} auto_orders_request Auto orders to update (synchronous maximum 20 / asynchronous maximum 100)
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {Boolean} opts._async True if the operation should be run async.  No result returned
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrdersBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrdersResponse}
     */
    this.updateAutoOrdersBatch = function(auto_orders_request, opts, callback) {
      opts = opts || {};
      var postBody = auto_orders_request;

      // verify the required parameter 'auto_orders_request' is set
      if (auto_orders_request === undefined || auto_orders_request === null) {
        throw new Error("Missing the required parameter 'auto_orders_request' when calling updateAutoOrdersBatch");
      }


      var pathParams = {
      };
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders'],
        '_async': opts['_async'],
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
