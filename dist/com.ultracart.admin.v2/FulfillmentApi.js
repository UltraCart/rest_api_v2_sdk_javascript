"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DistributionCentersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/DistributionCentersResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _FulfillmentInventory = _interopRequireDefault(require("../com.ultracart.admin.v2.models/FulfillmentInventory"));

var _FulfillmentShipment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/FulfillmentShipment"));

var _OrdersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OrdersResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Fulfillment service.
* @module com.ultracart.admin.v2/FulfillmentApi
* @version 4.0.60-RC
*/
var FulfillmentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FulfillmentApi. 
  * @alias module:com.ultracart.admin.v2/FulfillmentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FulfillmentApi(apiClient) {
    _classCallCheck(this, FulfillmentApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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
   * @param {Array.<String>} orderIds Orders to acknowledge receipt of (limit 100)
   * @param {module:com.ultracart.admin.v2/FulfillmentApi~acknowledgeOrdersCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(FulfillmentApi, [{
    key: "acknowledgeOrders",
    value: function acknowledgeOrders(distribution_center_code, orderIds, callback) {
      var postBody = orderIds; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling acknowledgeOrders");
      } // verify the required parameter 'orderIds' is set


      if (orderIds === undefined || orderIds === null) {
        throw new Error("Missing the required parameter 'orderIds' when calling acknowledgeOrders");
      }

      var pathParams = {
        'distribution_center_code': distribution_center_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/fulfillment/distribution_centers/{distribution_center_code}/acknowledgements', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generatePackingSlip operation.
     * @callback module:com.ultracart.admin.v2/FulfillmentApi~generatePackingSlipCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a packing slip for this order for the given distribution center.
     * The packing slip PDF that is returned is base 64 encoded 
     * @param {String} distribution_center_code Distribution center code
     * @param {String} order_id Order ID
     * @param {module:com.ultracart.admin.v2/FulfillmentApi~generatePackingSlipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OrdersResponse}
     */

  }, {
    key: "generatePackingSlip",
    value: function generatePackingSlip(distribution_center_code, order_id, callback) {
      var postBody = null; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling generatePackingSlip");
      } // verify the required parameter 'order_id' is set


      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling generatePackingSlip");
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
      var returnType = _OrdersResponse["default"];
      return this.apiClient.callApi('/fulfillment/distribution_centers/{distribution_center_code}/orders/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getDistributionCenterOrders",
    value: function getDistributionCenterOrders(distribution_center_code, callback) {
      var postBody = null; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling getDistributionCenterOrders");
      }

      var pathParams = {
        'distribution_center_code': distribution_center_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrdersResponse["default"];
      return this.apiClient.callApi('/fulfillment/distribution_centers/{distribution_center_code}/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getDistributionCenters",
    value: function getDistributionCenters(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DistributionCentersResponse["default"];
      return this.apiClient.callApi('/fulfillment/distribution_centers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "shipOrders",
    value: function shipOrders(distribution_center_code, shipments, callback) {
      var postBody = shipments; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling shipOrders");
      } // verify the required parameter 'shipments' is set


      if (shipments === undefined || shipments === null) {
        throw new Error("Missing the required parameter 'shipments' when calling shipOrders");
      }

      var pathParams = {
        'distribution_center_code': distribution_center_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/fulfillment/distribution_centers/{distribution_center_code}/shipments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "updateInventory",
    value: function updateInventory(distribution_center_code, inventories, callback) {
      var postBody = inventories; // verify the required parameter 'distribution_center_code' is set

      if (distribution_center_code === undefined || distribution_center_code === null) {
        throw new Error("Missing the required parameter 'distribution_center_code' when calling updateInventory");
      } // verify the required parameter 'inventories' is set


      if (inventories === undefined || inventories === null) {
        throw new Error("Missing the required parameter 'inventories' when calling updateInventory");
      }

      var pathParams = {
        'distribution_center_code': distribution_center_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/fulfillment/distribution_centers/{distribution_center_code}/inventory', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FulfillmentApi;
}();

exports["default"] = FulfillmentApi;