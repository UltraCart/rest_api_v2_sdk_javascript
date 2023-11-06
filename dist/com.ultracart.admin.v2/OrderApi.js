"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountsReceivableRetryConfig = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AccountsReceivableRetryConfig"));

var _AccountsReceivableRetryConfigResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse"));

var _AccountsReceivableRetryStatsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse"));

var _BaseResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/BaseResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _Order = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Order"));

var _OrderByTokenQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderByTokenQuery"));

var _OrderEdiDocumentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderEdiDocumentsResponse"));

var _OrderFormat = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderFormat"));

var _OrderFormatResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderFormatResponse"));

var _OrderInvoiceResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderInvoiceResponse"));

var _OrderPackingSlipResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderPackingSlipResponse"));

var _OrderProcessPaymentRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderProcessPaymentRequest"));

var _OrderProcessPaymentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderProcessPaymentResponse"));

var _OrderQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderQuery"));

var _OrderQueryBatch = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderQueryBatch"));

var _OrderRefundableResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderRefundableResponse"));

var _OrderReplacement = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderReplacement"));

var _OrderReplacementResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderReplacementResponse"));

var _OrderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderResponse"));

var _OrderTokenResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderTokenResponse"));

var _OrderValidationRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderValidationRequest"));

var _OrderValidationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrderValidationResponse"));

var _OrdersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrdersResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Order service.
* @module com.ultracart.admin.v2/OrderApi
* @version 4.0.185
*/
var OrderApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrderApi. 
  * @alias module:com.ultracart.admin.v2/OrderApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrderApi(apiClient) {
    _classCallCheck(this, OrderApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the adjustOrderTotal operation.
   * @callback module:com.ultracart.admin.v2/OrderApi~adjustOrderTotalCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Adjusts an order total
   * Adjusts an order total.  Adjusts individual items appropriately and considers taxes.  Desired total should be provided in the same currency as the order and must be less than the current total and greater than zero.  This call will change the order total.  It returns true if the desired total is achieved.  If the goal seeking algorithm falls short (usually by pennies), this method returns back false.  View the merchant notes for the order for further details. 
   * @param {String} order_id The order id to cancel.
   * @param {String} desired_total The desired total with no formatting. example 123.45
   * @param {module:com.ultracart.admin.v2/OrderApi~adjustOrderTotalCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
   */


  _createClass(OrderApi, [{
    key: "adjustOrderTotal",
    value: function adjustOrderTotal(order_id, desired_total, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling adjustOrderTotal");
      } // verify the required parameter 'desired_total' is set


      if (desired_total === undefined || desired_total === null) {
        throw new Error("Missing the required parameter 'desired_total' when calling adjustOrderTotal");
      }

      var pathParams = {
        'order_id': order_id,
        'desired_total': desired_total
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/adjust_order_total/{desired_total}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the cancelOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~cancelOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel an order
     * Cancel an order on the UltraCart account.  If the success flag is false, then consult the error message for why it failed. 
     * @param {String} order_id The order id to cancel.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.lock_self_ship_orders Flag to prevent a order shipping during a refund process
     * @param {Boolean} opts.skip_refund_and_hold Skip refund and move order to Held Orders department
     * @param {module:com.ultracart.admin.v2/OrderApi~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */

  }, {
    key: "cancelOrder",
    value: function cancelOrder(order_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
        'lock_self_ship_orders': opts['lock_self_ship_orders'],
        'skip_refund_and_hold': opts['skip_refund_and_hold']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~deleteOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an order
     * Delete an order on the UltraCart account. 
     * @param {String} order_id The order id to delete.
     * @param {module:com.ultracart.admin.v2/OrderApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteOrder",
    value: function deleteOrder(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling deleteOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/order/orders/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the duplicateOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~duplicateOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate an order
     * Perform a duplicate of the specified order_id and return a new order located in Accounts Receivable. 
     * @param {String} order_id The order id to duplicate.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~duplicateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "duplicateOrder",
    value: function duplicateOrder(order_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling duplicateOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/duplicate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the format operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~formatCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderFormatResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Format order
     * Format the order for display at text or html 
     * @param {String} order_id The order id to format
     * @param {module:com.ultracart.admin.v2.models/OrderFormat} format_options Format options
     * @param {module:com.ultracart.admin.v2/OrderApi~formatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderFormatResponse}
     */

  }, {
    key: "format",
    value: function format(order_id, format_options, callback) {
      var postBody = format_options; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling format");
      } // verify the required parameter 'format_options' is set


      if (format_options === undefined || format_options === null) {
        throw new Error("Missing the required parameter 'format_options' when calling format");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderFormatResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/format', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateInvoice operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~generateInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderInvoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate an invoice for this order.
     * The invoice PDF that is returned is base 64 encoded 
     * @param {String} order_id Order ID
     * @param {module:com.ultracart.admin.v2/OrderApi~generateInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderInvoiceResponse}
     */

  }, {
    key: "generateInvoice",
    value: function generateInvoice(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling generateInvoice");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderInvoiceResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/invoice', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateOrderToken operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~generateOrderTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate an order token for a given order id
     * Retrieves a single order token for a given order id.  The token can be used with the getOrderByToken API. 
     * @param {String} order_id The order id to generate a token for.
     * @param {module:com.ultracart.admin.v2/OrderApi~generateOrderTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderTokenResponse}
     */

  }, {
    key: "generateOrderToken",
    value: function generateOrderToken(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling generateOrderToken");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderTokenResponse["default"];
      return this.apiClient.callApi('/order/orders/token/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generatePackingSlipAllDC operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~generatePackingSlipAllDCCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderPackingSlipResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a packing slip for this order across all distribution centers.
     * The packing slip PDF that is returned is base 64 encoded 
     * @param {String} order_id Order ID
     * @param {module:com.ultracart.admin.v2/OrderApi~generatePackingSlipAllDCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderPackingSlipResponse}
     */

  }, {
    key: "generatePackingSlipAllDC",
    value: function generatePackingSlipAllDC(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling generatePackingSlipAllDC");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderPackingSlipResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/packing_slip', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generatePackingSlipSpecificDC operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~generatePackingSlipSpecificDCCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderPackingSlipResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a packing slip for this order for the given distribution center.
     * The packing slip PDF that is returned is base 64 encoded 
     * @param {String} distribution_center_code Distribution center code
     * @param {String} order_id Order ID
     * @param {module:com.ultracart.admin.v2/OrderApi~generatePackingSlipSpecificDCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderPackingSlipResponse}
     */

  }, {
    key: "generatePackingSlipSpecificDC",
    value: function generatePackingSlipSpecificDC(distribution_center_code, order_id, callback) {
      var postBody = null; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling generatePackingSlipSpecificDC");
      } // verify the required parameter 'order_id' is set


      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling generatePackingSlipSpecificDC");
      }

      var pathParams = {
        'distribution_center_code': distribution_center_code,
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderPackingSlipResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/packing_slip/{distribution_center_code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAccountsReceivableRetryConfig operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getAccountsReceivableRetryConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve A/R Retry Configuration
     * Retrieve A/R Retry Configuration. This is primarily an internal API call.  It is doubtful you would ever need to use it. 
     * @param {module:com.ultracart.admin.v2/OrderApi~getAccountsReceivableRetryConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse}
     */

  }, {
    key: "getAccountsReceivableRetryConfig",
    value: function getAccountsReceivableRetryConfig(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountsReceivableRetryConfigResponse["default"];
      return this.apiClient.callApi('/order/accountsReceivableRetryConfig', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAccountsReceivableRetryStats operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getAccountsReceivableRetryStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve A/R Retry Statistics
     * Retrieve A/R Retry Statistics. This is primarily an internal API call.  It is doubtful you would ever need to use it. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.from 
     * @param {String} opts.to 
     * @param {module:com.ultracart.admin.v2/OrderApi~getAccountsReceivableRetryStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse}
     */

  }, {
    key: "getAccountsReceivableRetryStats",
    value: function getAccountsReceivableRetryStats(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountsReceivableRetryStatsResponse["default"];
      return this.apiClient.callApi('/order/accountsReceivableRetryConfig/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an order
     * Retrieves a single order using the specified order id. 
     * @param {String} order_id The order id to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "getOrder",
    value: function getOrder(order_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling getOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrderByToken operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrderByTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an order using a token
     * Retrieves a single order using the specified order token. 
     * @param {module:com.ultracart.admin.v2.models/OrderByTokenQuery} order_by_token_query Order by token query
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrderByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "getOrderByToken",
    value: function getOrderByToken(order_by_token_query, opts, callback) {
      opts = opts || {};
      var postBody = order_by_token_query; // verify the required parameter 'order_by_token_query' is set

      if (order_by_token_query === undefined || order_by_token_query === null) {
        throw new Error("Missing the required parameter 'order_by_token_query' when calling getOrderByToken");
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
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrderEdiDocuments operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrderEdiDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderEdiDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve EDI documents associated with this order.
     * Retrieve EDI documents associated with this order. 
     * @param {String} order_id The order id to retrieve EDI documents for.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrderEdiDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderEdiDocumentsResponse}
     */

  }, {
    key: "getOrderEdiDocuments",
    value: function getOrderEdiDocuments(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling getOrderEdiDocuments");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderEdiDocumentsResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/edi', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrders operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve orders
     * Retrieves a group of orders from the account.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.order_id Order Id
     * @param {String} opts.payment_method Payment Method
     * @param {String} opts.company Company
     * @param {String} opts.first_name First Name
     * @param {String} opts.last_name Last Name
     * @param {String} opts.city City
     * @param {String} opts.state_region State/Region
     * @param {String} opts.postal_code Postal Code
     * @param {String} opts.country_code Country Code (ISO-3166 two letter)
     * @param {String} opts.phone Phone
     * @param {String} opts.email Email
     * @param {String} opts.cc_email CC Email
     * @param {Number} opts.total Total
     * @param {String} opts.screen_branding_theme_code Screen Branding Theme Code
     * @param {String} opts.storefront_host_name StoreFront Host Name
     * @param {String} opts.creation_date_begin Creation Date Begin
     * @param {String} opts.creation_date_end Creation Date End
     * @param {String} opts.payment_date_begin Payment Date Begin
     * @param {String} opts.payment_date_end Payment Date End
     * @param {String} opts.shipment_date_begin Shipment Date Begin
     * @param {String} opts.shipment_date_end Shipment Date End
     * @param {String} opts.rma RMA
     * @param {String} opts.purchase_order_number Purchase Order Number
     * @param {String} opts.item_id Item Id
     * @param {String} opts.current_stage Current Stage
     * @param {String} opts.channel_partner_code Channel Partner Code
     * @param {String} opts.channel_partner_order_id Channel Partner Order ID
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */

  }, {
    key: "getOrders",
    value: function getOrders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'order_id': opts['order_id'],
        'payment_method': opts['payment_method'],
        'company': opts['company'],
        'first_name': opts['first_name'],
        'last_name': opts['last_name'],
        'city': opts['city'],
        'state_region': opts['state_region'],
        'postal_code': opts['postal_code'],
        'country_code': opts['country_code'],
        'phone': opts['phone'],
        'email': opts['email'],
        'cc_email': opts['cc_email'],
        'total': opts['total'],
        'screen_branding_theme_code': opts['screen_branding_theme_code'],
        'storefront_host_name': opts['storefront_host_name'],
        'creation_date_begin': opts['creation_date_begin'],
        'creation_date_end': opts['creation_date_end'],
        'payment_date_begin': opts['payment_date_begin'],
        'payment_date_end': opts['payment_date_end'],
        'shipment_date_begin': opts['shipment_date_begin'],
        'shipment_date_end': opts['shipment_date_end'],
        'rma': opts['rma'],
        'purchase_order_number': opts['purchase_order_number'],
        'item_id': opts['item_id'],
        'current_stage': opts['current_stage'],
        'channel_partner_code': opts['channel_partner_code'],
        'channel_partner_order_id': opts['channel_partner_order_id'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrdersResponse["default"];
      return this.apiClient.callApi('/order/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrdersBatch operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrdersBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve order batch
     * Retrieves a group of orders from the account based on an array of order ids.  If more than 500 order ids are specified, the API call will fail with a bad request error. 
     * @param {module:com.ultracart.admin.v2.models/OrderQueryBatch} order_batch Order batch
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrdersBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */

  }, {
    key: "getOrdersBatch",
    value: function getOrdersBatch(order_batch, opts, callback) {
      opts = opts || {};
      var postBody = order_batch; // verify the required parameter 'order_batch' is set

      if (order_batch === undefined || order_batch === null) {
        throw new Error("Missing the required parameter 'order_batch' when calling getOrdersBatch");
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
      var returnType = _OrdersResponse["default"];
      return this.apiClient.callApi('/order/orders/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrdersByQuery operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrdersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve orders by query
     * Retrieves a group of orders from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/OrderQuery} order_query Order query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrdersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */

  }, {
    key: "getOrdersByQuery",
    value: function getOrdersByQuery(order_query, opts, callback) {
      opts = opts || {};
      var postBody = order_query; // verify the required parameter 'order_query' is set

      if (order_query === undefined || order_query === null) {
        throw new Error("Missing the required parameter 'order_query' when calling getOrdersByQuery");
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
      var returnType = _OrdersResponse["default"];
      return this.apiClient.callApi('/order/orders/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~insertOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert an order
     * Inserts a new order on the UltraCart account.  This is probably NOT the method you want.  This is for channel orders.  For regular orders the customer is entering, use the CheckoutApi.  It has many, many more features, checks, and validations. 
     * @param {module:com.ultracart.admin.v2.models/Order} order Order to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~insertOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "insertOrder",
    value: function insertOrder(order, opts, callback) {
      opts = opts || {};
      var postBody = order; // verify the required parameter 'order' is set

      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling insertOrder");
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
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the isRefundableOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~isRefundableOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderRefundableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Determine if an order can be refunded
     * Determine if an order can be refunded based upon payment method and age 
     * @param {String} order_id The order id to check for refundable order.
     * @param {module:com.ultracart.admin.v2/OrderApi~isRefundableOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderRefundableResponse}
     */

  }, {
    key: "isRefundableOrder",
    value: function isRefundableOrder(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling isRefundableOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderRefundableResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/refundable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the processPayment operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~processPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderProcessPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process payment
     * Process payment on order 
     * @param {String} order_id The order id to process payment on
     * @param {module:com.ultracart.admin.v2.models/OrderProcessPaymentRequest} process_payment_request Process payment parameters
     * @param {module:com.ultracart.admin.v2/OrderApi~processPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderProcessPaymentResponse}
     */

  }, {
    key: "processPayment",
    value: function processPayment(order_id, process_payment_request, callback) {
      var postBody = process_payment_request; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling processPayment");
      } // verify the required parameter 'process_payment_request' is set


      if (process_payment_request === undefined || process_payment_request === null) {
        throw new Error("Missing the required parameter 'process_payment_request' when calling processPayment");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderProcessPaymentResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/process_payment', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the refundOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~refundOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund an order
     * Perform a refund operation on an order and then update the order if successful 
     * @param {String} order_id The order id to refund.
     * @param {module:com.ultracart.admin.v2.models/Order} order Order to refund
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.reject_after_refund Reject order after refund (default to false)
     * @param {Boolean} opts.skip_customer_notification Skip customer email notification (default to false)
     * @param {Boolean} opts.auto_order_cancel Cancel associated auto orders (default to false)
     * @param {Boolean} opts.manual_refund Consider a manual refund done externally (default to false)
     * @param {Boolean} opts.reverse_affiliate_transactions Reverse affiliate transactions (default to true)
     * @param {Boolean} opts.issue_store_credit Issue a store credit instead of refunding the original payment method, loyalty must be configured on merchant account (default to false)
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~refundOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "refundOrder",
    value: function refundOrder(order_id, order, opts, callback) {
      opts = opts || {};
      var postBody = order; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling refundOrder");
      } // verify the required parameter 'order' is set


      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling refundOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
        'reject_after_refund': opts['reject_after_refund'],
        'skip_customer_notification': opts['skip_customer_notification'],
        'auto_order_cancel': opts['auto_order_cancel'],
        'manual_refund': opts['manual_refund'],
        'reverse_affiliate_transactions': opts['reverse_affiliate_transactions'],
        'issue_store_credit': opts['issue_store_credit'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/refund', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the replacement operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~replacementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replacement order
     * Create a replacement order based upon a previous order 
     * @param {String} order_id The order id to generate a replacement for.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacement} replacement Replacement order details
     * @param {module:com.ultracart.admin.v2/OrderApi~replacementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderReplacementResponse}
     */

  }, {
    key: "replacement",
    value: function replacement(order_id, _replacement, callback) {
      var postBody = _replacement; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling replacement");
      } // verify the required parameter 'replacement' is set


      if (_replacement === undefined || _replacement === null) {
        throw new Error("Missing the required parameter 'replacement' when calling replacement");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderReplacementResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/replacement', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resendReceipt operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~resendReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend receipt
     * Resend the receipt for an order on the UltraCart account. 
     * @param {String} order_id The order id to resend the receipt for.
     * @param {module:com.ultracart.admin.v2/OrderApi~resendReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */

  }, {
    key: "resendReceipt",
    value: function resendReceipt(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling resendReceipt");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/resend_receipt', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resendShipmentConfirmation operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~resendShipmentConfirmationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend shipment confirmation
     * Resend shipment confirmation for an order on the UltraCart account. 
     * @param {String} order_id The order id to resend the shipment notification for.
     * @param {module:com.ultracart.admin.v2/OrderApi~resendShipmentConfirmationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */

  }, {
    key: "resendShipmentConfirmation",
    value: function resendShipmentConfirmation(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling resendShipmentConfirmation");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}/resend_shipment_confirmation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateAccountsReceivableRetryConfig operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~updateAccountsReceivableRetryConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update A/R Retry Configuration
     * Update A/R Retry Configuration.  This is primarily an internal API call.  It is doubtful you would ever need to use it. 
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} retry_config AccountsReceivableRetryConfig object
     * @param {module:com.ultracart.admin.v2/OrderApi~updateAccountsReceivableRetryConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */

  }, {
    key: "updateAccountsReceivableRetryConfig",
    value: function updateAccountsReceivableRetryConfig(retry_config, callback) {
      var postBody = retry_config; // verify the required parameter 'retry_config' is set

      if (retry_config === undefined || retry_config === null) {
        throw new Error("Missing the required parameter 'retry_config' when calling updateAccountsReceivableRetryConfig");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/order/accountsReceivableRetryConfig', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~updateOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order
     * Update a new order on the UltraCart account.  This is probably NOT the method you want.  It is rare to update a completed order.  This will not trigger charges, emails, or any other automation. 
     * @param {String} order_id The order id to update.
     * @param {module:com.ultracart.admin.v2.models/Order} order Order to update
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~updateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */

  }, {
    key: "updateOrder",
    value: function updateOrder(order_id, order, opts, callback) {
      opts = opts || {};
      var postBody = order; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling updateOrder");
      } // verify the required parameter 'order' is set


      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling updateOrder");
      }

      var pathParams = {
        'order_id': order_id
      };
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _OrderResponse["default"];
      return this.apiClient.callApi('/order/orders/{order_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the validateOrder operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~validateOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrderValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate
     * Validate the order for errors.  Specific checks can be passed to fine tune what is validated. Read and write permissions are required because the validate method may fix obvious address issues automatically which require update permission.This rest call makes use of the built-in translation of rest objects to UltraCart internal objects which also contains a multitude of validation checks that cannot be trapped.  Therefore any time this call is made, you should also trap api exceptions and examine their content because it may contain validation issues.  So check the response object and trap any exceptions. 
     * @param {module:com.ultracart.admin.v2.models/OrderValidationRequest} validation_request Validation request
     * @param {module:com.ultracart.admin.v2/OrderApi~validateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderValidationResponse}
     */

  }, {
    key: "validateOrder",
    value: function validateOrder(validation_request, callback) {
      var postBody = validation_request; // verify the required parameter 'validation_request' is set

      if (validation_request === undefined || validation_request === null) {
        throw new Error("Missing the required parameter 'validation_request' when calling validateOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderValidationResponse["default"];
      return this.apiClient.callApi('/order/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrderApi;
}();

exports["default"] = OrderApi;