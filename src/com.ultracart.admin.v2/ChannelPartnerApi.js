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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartnerCancelResponse', 'com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse', 'com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse', 'com.ultracart.admin.v2.models/ChannelPartnerImportResponse', 'com.ultracart.admin.v2.models/ChannelPartnerOrder', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ChannelPartnerCancelResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerImportResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerOrder'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChannelPartnerApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartnerCancelResponse, root.UltraCartRestApiV2.ChannelPartnerEstimateShippingResponse, root.UltraCartRestApiV2.ChannelPartnerEstimateTaxResponse, root.UltraCartRestApiV2.ChannelPartnerImportResponse, root.UltraCartRestApiV2.ChannelPartnerOrder, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, ChannelPartnerCancelResponse, ChannelPartnerEstimateShippingResponse, ChannelPartnerEstimateTaxResponse, ChannelPartnerImportResponse, ChannelPartnerOrder, ErrorResponse) {
  'use strict';

  /**
   * ChannelPartner service.
   * @module com.ultracart.admin.v2/ChannelPartnerApi
   * @version 3.10.87
   */

  /**
   * Constructs a new ChannelPartnerApi. 
   * @alias module:com.ultracart.admin.v2/ChannelPartnerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelOrderByChannelPartnerOrderId operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~cancelOrderByChannelPartnerOrderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel channel partner order by channel partner order id
     * Cancel channel partner order by channel partner order id 
     * @param {String} order_id The channel partner order id to delete.
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~cancelOrderByChannelPartnerOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse}
     */
    this.cancelOrderByChannelPartnerOrderId = function(order_id, callback) {
      var postBody = null;

      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByChannelPartnerOrderId");
      }


      var pathParams = {
        'order_id': order_id
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
      var returnType = ChannelPartnerCancelResponse;

      return this.apiClient.callApi(
        '/channel_partner/cancel/by_channel_partner_order_id/{order_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOrderByUltraCartOrderId operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~cancelOrderByUltraCartOrderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel channel partner order by UltraCart order id
     * Cancel channel partner order by UltraCart order id 
     * @param {String} order_id The UltraCart order id to delete.
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~cancelOrderByUltraCartOrderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerCancelResponse}
     */
    this.cancelOrderByUltraCartOrderId = function(order_id, callback) {
      var postBody = null;

      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByUltraCartOrderId");
      }


      var pathParams = {
        'order_id': order_id
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
      var returnType = ChannelPartnerCancelResponse;

      return this.apiClient.callApi(
        '/channel_partner/cancel/by_ultracart_order_id/{order_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the estimateShippingForChannelPartnerOrder operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~estimateShippingForChannelPartnerOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate shipping for channel partner order
     * Estimate shipping for order from a channel partner. 
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrder} channel_partner_order Order needing shipping estimate
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~estimateShippingForChannelPartnerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse}
     */
    this.estimateShippingForChannelPartnerOrder = function(channel_partner_order, callback) {
      var postBody = channel_partner_order;

      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateShippingForChannelPartnerOrder");
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
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = ChannelPartnerEstimateShippingResponse;

      return this.apiClient.callApi(
        '/channel_partner/estimate_shipping', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the estimateTaxForChannelPartnerOrder operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~estimateTaxForChannelPartnerOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate tax for channel partner order
     * Estimate tax for order from a channel partner. 
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrder} channel_partner_order Order needing tax estimate
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~estimateTaxForChannelPartnerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse}
     */
    this.estimateTaxForChannelPartnerOrder = function(channel_partner_order, callback) {
      var postBody = channel_partner_order;

      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateTaxForChannelPartnerOrder");
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
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = ChannelPartnerEstimateTaxResponse;

      return this.apiClient.callApi(
        '/channel_partner/estimate_tax', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importChannelPartnerOrder operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~importChannelPartnerOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert channel partner order
     * Insert order from a channel partner. 
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrder} channel_partner_order Order to insert
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~importChannelPartnerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse}
     */
    this.importChannelPartnerOrder = function(channel_partner_order, callback) {
      var postBody = channel_partner_order;

      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling importChannelPartnerOrder");
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
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = ChannelPartnerImportResponse;

      return this.apiClient.callApi(
        '/channel_partner/import', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
