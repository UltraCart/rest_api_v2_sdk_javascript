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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AccountsReceivableRetryConfig', 'com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse', 'com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse', 'com.ultracart.admin.v2.models/BaseResponse', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/Order', 'com.ultracart.admin.v2.models/OrderFormat', 'com.ultracart.admin.v2.models/OrderFormatResponse', 'com.ultracart.admin.v2.models/OrderQuery', 'com.ultracart.admin.v2.models/OrderResponse', 'com.ultracart.admin.v2.models/OrdersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/AccountsReceivableRetryConfig'), require('../com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse'), require('../com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse'), require('../com.ultracart.admin.v2.models/BaseResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/Order'), require('../com.ultracart.admin.v2.models/OrderFormat'), require('../com.ultracart.admin.v2.models/OrderFormatResponse'), require('../com.ultracart.admin.v2.models/OrderQuery'), require('../com.ultracart.admin.v2.models/OrderResponse'), require('../com.ultracart.admin.v2.models/OrdersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AccountsReceivableRetryConfig, root.UltraCartRestApiV2.AccountsReceivableRetryConfigResponse, root.UltraCartRestApiV2.AccountsReceivableRetryStatsResponse, root.UltraCartRestApiV2.BaseResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.Order, root.UltraCartRestApiV2.OrderFormat, root.UltraCartRestApiV2.OrderFormatResponse, root.UltraCartRestApiV2.OrderQuery, root.UltraCartRestApiV2.OrderResponse, root.UltraCartRestApiV2.OrdersResponse);
  }
}(this, function(ApiClient, AccountsReceivableRetryConfig, AccountsReceivableRetryConfigResponse, AccountsReceivableRetryStatsResponse, BaseResponse, ErrorResponse, Order, OrderFormat, OrderFormatResponse, OrderQuery, OrderResponse, OrdersResponse) {
  'use strict';

  /**
   * Order service.
   * @module com.ultracart.admin.v2/OrderApi
   * @version 2.3.17
   */

  /**
   * Constructs a new OrderApi. 
   * @alias module:com.ultracart.admin.v2/OrderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * @param {String} orderId The order id to cancel.
     * @param {module:com.ultracart.admin.v2/OrderApi~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
    this.cancelOrder = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling cancelOrder");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = BaseResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} orderId The order id to delete.
     * @param {module:com.ultracart.admin.v2/OrderApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrder = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }


      var pathParams = {
        'order_id': orderId
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
        '/order/orders/{order_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} orderId The order id to format
     * @param {module:com.ultracart.admin.v2.models/OrderFormat} formatOptions Format options
     * @param {module:com.ultracart.admin.v2/OrderApi~formatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderFormatResponse}
     */
    this.format = function(orderId, formatOptions, callback) {
      var postBody = formatOptions;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling format");
      }

      // verify the required parameter 'formatOptions' is set
      if (formatOptions === undefined || formatOptions === null) {
        throw new Error("Missing the required parameter 'formatOptions' when calling format");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = OrderFormatResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}/format', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getAccountsReceivableRetryConfig = function(callback) {
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
      var returnType = AccountsReceivableRetryConfigResponse;

      return this.apiClient.callApi(
        '/order/accountsReceivableRetryConfig', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} opts.from null
     * @param {String} opts.to null
     * @param {module:com.ultracart.admin.v2/OrderApi~getAccountsReceivableRetryStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse}
     */
    this.getAccountsReceivableRetryStats = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = AccountsReceivableRetryStatsResponse;

      return this.apiClient.callApi(
        '/order/accountsReceivableRetryConfig/stats', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} orderId The order id to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */
    this.getOrder = function(orderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrder");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = OrderResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} opts.orderId Order Id
     * @param {String} opts.paymentMethod Payment Method
     * @param {String} opts.company Company
     * @param {String} opts.firstName First Name
     * @param {String} opts.lastName Last Name
     * @param {String} opts.city City
     * @param {String} opts.stateRegion State/Region
     * @param {String} opts.postalCode Postal Code
     * @param {String} opts.countryCode Country Code (ISO-3166 two letter)
     * @param {String} opts.phone Phone
     * @param {String} opts.email Email
     * @param {String} opts.ccEmail CC Email
     * @param {Number} opts.total Total
     * @param {String} opts.screenBrandingThemeCode Screen Branding Theme Code
     * @param {String} opts.storefrontHostName StoreFront Host Name
     * @param {String} opts.creationDateBegin Creation Date Begin
     * @param {String} opts.creationDateEnd Creation Date End
     * @param {String} opts.paymentDateBegin Payment Date Begin
     * @param {String} opts.paymentDateEnd Payment Date End
     * @param {String} opts.shipmentDateBegin Shipment Date Begin
     * @param {String} opts.shipmentDateEnd Shipment Date End
     * @param {String} opts.rma RMA
     * @param {String} opts.purchaseOrderNumber Purchase Order Number
     * @param {String} opts.itemId Item Id
     * @param {String} opts.currentStage Current Stage
     * @param {String} opts.channelPartnerCode Channel Partner Code
     * @param {String} opts.channelPartnerOrderId Channel Partner Order ID
     * @param {Number} opts.customerProfileOid null
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */
    this.getOrders = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'order_id': opts['orderId'],
        'payment_method': opts['paymentMethod'],
        'company': opts['company'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'city': opts['city'],
        'state_region': opts['stateRegion'],
        'postal_code': opts['postalCode'],
        'country_code': opts['countryCode'],
        'phone': opts['phone'],
        'email': opts['email'],
        'cc_email': opts['ccEmail'],
        'total': opts['total'],
        'screen_branding_theme_code': opts['screenBrandingThemeCode'],
        'storefront_host_name': opts['storefrontHostName'],
        'creation_date_begin': opts['creationDateBegin'],
        'creation_date_end': opts['creationDateEnd'],
        'payment_date_begin': opts['paymentDateBegin'],
        'payment_date_end': opts['paymentDateEnd'],
        'shipment_date_begin': opts['shipmentDateBegin'],
        'shipment_date_end': opts['shipmentDateEnd'],
        'rma': opts['rma'],
        'purchase_order_number': opts['purchaseOrderNumber'],
        'item_id': opts['itemId'],
        'current_stage': opts['currentStage'],
        'channel_partner_code': opts['channelPartnerCode'],
        'channel_partner_order_id': opts['channelPartnerOrderId'],
        'customer_profile_oid': opts['customerProfileOid'],
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
      var returnType = OrdersResponse;

      return this.apiClient.callApi(
        '/order/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrdersByQuery operation.
     * @callback module:com.ultracart.admin.v2/OrderApi~getOrdersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve orders
     * Retrieves a group of orders from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/OrderQuery} orderQuery Order query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts.expand The object expansion to perform on the result.
     * @param {module:com.ultracart.admin.v2/OrderApi~getOrdersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */
    this.getOrdersByQuery = function(orderQuery, opts, callback) {
      opts = opts || {};
      var postBody = orderQuery;

      // verify the required parameter 'orderQuery' is set
      if (orderQuery === undefined || orderQuery === null) {
        throw new Error("Missing the required parameter 'orderQuery' when calling getOrdersByQuery");
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
      var returnType = OrdersResponse;

      return this.apiClient.callApi(
        '/order/orders/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {module:com.ultracart.admin.v2.models/Order} order Order to refund
     * @param {String} orderId The order id to refund.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.rejectAfterRefund Reject order after refund (default to false)
     * @param {Boolean} opts.skipCustomerNotification Skip customer email notification (default to false)
     * @param {Boolean} opts.autoOrderCancel Cancel associated auto orders (default to false)
     * @param {Boolean} opts.manualRefund Consider a manual refund done externally (default to false)
     * @param {Boolean} opts.reverseAffiliateTransactions Reverse affiliate transactions (default to true)
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~refundOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */
    this.refundOrder = function(order, orderId, opts, callback) {
      opts = opts || {};
      var postBody = order;

      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling refundOrder");
      }

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling refundOrder");
      }


      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'reject_after_refund': opts['rejectAfterRefund'],
        'skip_customer_notification': opts['skipCustomerNotification'],
        'auto_order_cancel': opts['autoOrderCancel'],
        'manual_refund': opts['manualRefund'],
        'reverse_affiliate_transactions': opts['reverseAffiliateTransactions'],
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
      var returnType = OrderResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}/refund', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} orderId The order id to resend the receipt for.
     * @param {module:com.ultracart.admin.v2/OrderApi~resendReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
    this.resendReceipt = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling resendReceipt");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = BaseResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}/resend_receipt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {String} orderId The order id to resend the shipment notification for.
     * @param {module:com.ultracart.admin.v2/OrderApi~resendShipmentConfirmationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
    this.resendShipmentConfirmation = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling resendShipmentConfirmation");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = BaseResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}/resend_shipment_confirmation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} retryConfig AccountsReceivableRetryConfig object
     * @param {module:com.ultracart.admin.v2/OrderApi~updateAccountsReceivableRetryConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
    this.updateAccountsReceivableRetryConfig = function(retryConfig, callback) {
      var postBody = retryConfig;

      // verify the required parameter 'retryConfig' is set
      if (retryConfig === undefined || retryConfig === null) {
        throw new Error("Missing the required parameter 'retryConfig' when calling updateAccountsReceivableRetryConfig");
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
      var returnType = BaseResponse;

      return this.apiClient.callApi(
        '/order/accountsReceivableRetryConfig', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
     * @param {module:com.ultracart.admin.v2.models/Order} order Order to update
     * @param {String} orderId The order id to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/OrderApi~updateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrderResponse}
     */
    this.updateOrder = function(order, orderId, opts, callback) {
      opts = opts || {};
      var postBody = order;

      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling updateOrder");
      }

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling updateOrder");
      }


      var pathParams = {
        'order_id': orderId
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
      var returnType = OrderResponse;

      return this.apiClient.callApi(
        '/order/orders/{order_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
