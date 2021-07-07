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
    define(['ApiClient', 'com.ultracart.admin.v2.models/DistributionCentersResponse', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/FulfillmentInventory', 'com.ultracart.admin.v2.models/FulfillmentShipment', 'com.ultracart.admin.v2.models/OrdersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/DistributionCentersResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/FulfillmentInventory'), require('../com.ultracart.admin.v2.models/FulfillmentShipment'), require('../com.ultracart.admin.v2.models/OrdersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.FulfillmentApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.DistributionCentersResponse, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.FulfillmentInventory, root.UltraCartRestApiV2.FulfillmentShipment, root.UltraCartRestApiV2.OrdersResponse);
  }
}(this, function(ApiClient, DistributionCentersResponse, ErrorResponse, FulfillmentInventory, FulfillmentShipment, OrdersResponse) {
  'use strict';

  /**
   * Fulfillment service.
   * @module com.ultracart.admin.v2/FulfillmentApi
   * @version 3.2.9
   */

  /**
   * Constructs a new FulfillmentApi. 
   * @alias module:com.ultracart.admin.v2/FulfillmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acknowledgeOrders operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~acknowledgeOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Acknowledge receipt of orders.
     * Acknowledge receipt of orders so that they are removed from the fulfillment queue.  This method must be called after receiving and order (via webhook) or retrieving (via retrieve orders method). 
     * @param {String} distribution_center_code Distribution center code
     * @param {Array.<module:com.ultracart.admin.v2.models/String>} orderIds Orders to acknowledge receipt of (limit 100)
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~acknowledgeOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.acknowledgeOrders = function(distribution_center_code, orderIds, callback) {
      var postBody = orderIds;

      // verify the required parameter 'distribution_center_code' is set
      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling acknowledgeOrders");
      }

      // verify the required parameter 'orderIds' is set
      if (orderIds === undefined || orderIds === null) {
        throw new Error("Missing the required parameter 'orderIds' when calling acknowledgeOrders");
      }


      var pathParams = {
        'distribution_center_code': distribution_center_code
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
        '/fulfillment/distribution_centers/{distribution_center_code}/acknowledgements', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistributionCenterOrders operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~getDistributionCenterOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve orders queued up for this distribution center.
     * Retrieves up to 100 orders that are queued up in this distribution center.  You must acknowledge them before additional new orders will be returned.  There is NO record chunking.  You'll get the same 100 records again and again until you acknowledge orders.  The orders that are returned contain only items for this distribution center and are by default completely expanded with billing, buysafe, channel_partner, checkout, coupons, customer_profile, edi, gift, gift_certificate, internal, items, payment, shipping, summary, taxes. 
     * @param {String} distribution_center_code Distribution center code
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~getDistributionCenterOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */
    this.getDistributionCenterOrders = function(distribution_center_code, callback) {
      var postBody = null;

      // verify the required parameter 'distribution_center_code' is set
      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling getDistributionCenterOrders");
      }


      var pathParams = {
        'distribution_center_code': distribution_center_code
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
      var returnType = OrdersResponse;

      return this.apiClient.callApi(
        '/fulfillment/distribution_centers/{distribution_center_code}/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistributionCenters operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~getDistributionCentersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/DistributionCentersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve distribution centers
     * Retrieves the distribution centers that this user has access to. 
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~getDistributionCentersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/DistributionCentersResponse}
     */
    this.getDistributionCenters = function(callback) {
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
      var returnType = DistributionCentersResponse;

      return this.apiClient.callApi(
        '/fulfillment/distribution_centers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the shipOrders operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~shipOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark orders as shipped
     * Store the tracking information and mark the order shipped for this distribution center. 
     * @param {String} distribution_center_code Distribution center code
     * @param {Array.<module:com.ultracart.admin.v2.models/FulfillmentShipment>} shipments Orders to mark shipped
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~shipOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.shipOrders = function(distribution_center_code, shipments, callback) {
      var postBody = shipments;

      // verify the required parameter 'distribution_center_code' is set
      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling shipOrders");
      }

      // verify the required parameter 'shipments' is set
      if (shipments === undefined || shipments === null) {
        throw new Error("Missing the required parameter 'shipments' when calling shipOrders");
      }


      var pathParams = {
        'distribution_center_code': distribution_center_code
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
        '/fulfillment/distribution_centers/{distribution_center_code}/shipments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventory operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~updateInventoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update inventory
     * Update the inventory for items associated with this distribution center 
     * @param {String} distribution_center_code Distribution center code
     * @param {Array.<module:com.ultracart.admin.v2.models/FulfillmentInventory>} inventories Inventory updates (limit 500)
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~updateInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventory = function(distribution_center_code, inventories, callback) {
      var postBody = inventories;

      // verify the required parameter 'distribution_center_code' is set
      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling updateInventory");
      }

      // verify the required parameter 'inventories' is set
      if (inventories === undefined || inventories === null) {
        throw new Error("Missing the required parameter 'inventories' when calling updateInventory");
      }


      var pathParams = {
        'distribution_center_code': distribution_center_code
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
        '/fulfillment/distribution_centers/{distribution_center_code}/inventory', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
