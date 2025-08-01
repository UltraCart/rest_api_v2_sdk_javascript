"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutoOrder = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrder"));
var _AutoOrderConsolidate = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrderConsolidate"));
var _AutoOrderQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrderQuery"));
var _AutoOrderQueryBatch = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrderQueryBatch"));
var _AutoOrderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrderResponse"));
var _AutoOrdersRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrdersRequest"));
var _AutoOrdersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AutoOrdersResponse"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* AutoOrder service.
* @module com.ultracart.admin.v2/AutoOrderApi
* @version 4.1.15
*/
var AutoOrderApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AutoOrderApi. 
  * @alias module:com.ultracart.admin.v2/AutoOrderApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AutoOrderApi(apiClient) {
    _classCallCheck(this, AutoOrderApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the consolidateAutoOrders operation.
   * @callback module:com.ultracart.admin.v2/AutoOrderApi~consolidateAutoOrdersCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Consolidates multiple auto orders
   * Consolidates mutliple auto orders on the UltraCart account. 
   * @param {Number} auto_order_oid The auto order oid to consolidate into.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderConsolidate} auto_order_consolidate Auto orders to consolidate
   * @param {Object} opts Optional parameters
   * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
   * @param {module:com.ultracart.admin.v2/AutoOrderApi~consolidateAutoOrdersCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
   */
  return _createClass(AutoOrderApi, [{
    key: "consolidateAutoOrders",
    value: function consolidateAutoOrders(auto_order_oid, auto_order_consolidate, opts, callback) {
      opts = opts || {};
      var postBody = auto_order_consolidate;
      // verify the required parameter 'auto_order_oid' is set
      if (auto_order_oid === undefined || auto_order_oid === null) {
        throw new Error("Missing the required parameter 'auto_order_oid' when calling consolidateAutoOrders");
      }
      // verify the required parameter 'auto_order_consolidate' is set
      if (auto_order_consolidate === undefined || auto_order_consolidate === null) {
        throw new Error("Missing the required parameter 'auto_order_consolidate' when calling consolidateAutoOrders");
      }
      var pathParams = {
        'auto_order_oid': auto_order_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/{auto_order_oid}/consolidate', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

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
  }, {
    key: "establishAutoOrderByReferenceOrderId",
    value: function establishAutoOrderByReferenceOrderId(reference_order_id, opts, callback) {
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/reference_order_id/{reference_order_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrder",
    value: function getAutoOrder(auto_order_oid, opts, callback) {
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/{auto_order_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrderByCode",
    value: function getAutoOrderByCode(auto_order_code, opts, callback) {
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/code/{auto_order_code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrderByReferenceOrderId",
    value: function getAutoOrderByReferenceOrderId(reference_order_id, opts, callback) {
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/reference_order_id/{reference_order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrders",
    value: function getAutoOrders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoOrdersResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrdersBatch",
    value: function getAutoOrdersBatch(auto_order_batch, opts, callback) {
      opts = opts || {};
      var postBody = auto_order_batch;
      // verify the required parameter 'auto_order_batch' is set
      if (auto_order_batch === undefined || auto_order_batch === null) {
        throw new Error("Missing the required parameter 'auto_order_batch' when calling getAutoOrdersBatch");
      }
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AutoOrdersResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "getAutoOrdersByQuery",
    value: function getAutoOrdersByQuery(auto_order_query, opts, callback) {
      opts = opts || {};
      var postBody = auto_order_query;
      // verify the required parameter 'auto_order_query' is set
      if (auto_order_query === undefined || auto_order_query === null) {
        throw new Error("Missing the required parameter 'auto_order_query' when calling getAutoOrdersByQuery");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AutoOrdersResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the pauseAutoOrder operation.
     * @callback module:com.ultracart.admin.v2/AutoOrderApi~pauseAutoOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause auto order
     * Completely pause an auto order 
     * @param {Number} auto_order_oid The auto order oid to pause.
     * @param {module:com.ultracart.admin.v2.models/AutoOrder} auto_order Auto order to pause
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~pauseAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
  }, {
    key: "pauseAutoOrder",
    value: function pauseAutoOrder(auto_order_oid, auto_order, opts, callback) {
      opts = opts || {};
      var postBody = auto_order;
      // verify the required parameter 'auto_order_oid' is set
      if (auto_order_oid === undefined || auto_order_oid === null) {
        throw new Error("Missing the required parameter 'auto_order_oid' when calling pauseAutoOrder");
      }
      // verify the required parameter 'auto_order' is set
      if (auto_order === undefined || auto_order === null) {
        throw new Error("Missing the required parameter 'auto_order' when calling pauseAutoOrder");
      }
      var pathParams = {
        'auto_order_oid': auto_order_oid
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/{auto_order_oid}/pause', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} auto_order_oid The auto order oid to update.
     * @param {module:com.ultracart.admin.v2.models/AutoOrder} auto_order Auto order to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.validate_original_order Validate original order before updating
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/AutoOrderApi~updateAutoOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AutoOrderResponse}
     */
  }, {
    key: "updateAutoOrder",
    value: function updateAutoOrder(auto_order_oid, auto_order, opts, callback) {
      opts = opts || {};
      var postBody = auto_order;
      // verify the required parameter 'auto_order_oid' is set
      if (auto_order_oid === undefined || auto_order_oid === null) {
        throw new Error("Missing the required parameter 'auto_order_oid' when calling updateAutoOrder");
      }
      // verify the required parameter 'auto_order' is set
      if (auto_order === undefined || auto_order === null) {
        throw new Error("Missing the required parameter 'auto_order' when calling updateAutoOrder");
      }
      var pathParams = {
        'auto_order_oid': auto_order_oid
      };
      var queryParams = {
        'validate_original_order': opts['validate_original_order'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _AutoOrderResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/{auto_order_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "updateAutoOrdersBatch",
    value: function updateAutoOrdersBatch(auto_orders_request, opts, callback) {
      opts = opts || {};
      var postBody = auto_orders_request;
      // verify the required parameter 'auto_orders_request' is set
      if (auto_orders_request === undefined || auto_orders_request === null) {
        throw new Error("Missing the required parameter 'auto_orders_request' when calling updateAutoOrdersBatch");
      }
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand'],
        '_placeholders': opts['_placeholders'],
        '_async': opts['_async']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _AutoOrdersResponse["default"];
      return this.apiClient.callApi('/auto_order/auto_orders/batch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();