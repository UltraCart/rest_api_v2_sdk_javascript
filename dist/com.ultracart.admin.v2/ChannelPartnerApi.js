"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPartnerCancelResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerCancelResponse"));

var _ChannelPartnerEstimateShippingResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse"));

var _ChannelPartnerEstimateTaxResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse"));

var _ChannelPartnerImportResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerImportResponse"));

var _ChannelPartnerOrder = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerOrder"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ChannelPartner service.
* @module com.ultracart.admin.v2/ChannelPartnerApi
* @version 4.0.39-RC
*/
var ChannelPartnerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ChannelPartnerApi. 
  * @alias module:com.ultracart.admin.v2/ChannelPartnerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChannelPartnerApi(apiClient) {
    _classCallCheck(this, ChannelPartnerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(ChannelPartnerApi, [{
    key: "cancelOrderByChannelPartnerOrderId",
    value: function cancelOrderByChannelPartnerOrderId(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByChannelPartnerOrderId");
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
      var returnType = _ChannelPartnerCancelResponse["default"];
      return this.apiClient.callApi('/channel_partner/cancel/by_channel_partner_order_id/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "cancelOrderByUltraCartOrderId",
    value: function cancelOrderByUltraCartOrderId(order_id, callback) {
      var postBody = null; // verify the required parameter 'order_id' is set

      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByUltraCartOrderId");
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
      var returnType = _ChannelPartnerCancelResponse["default"];
      return this.apiClient.callApi('/channel_partner/cancel/by_ultracart_order_id/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "estimateShippingForChannelPartnerOrder",
    value: function estimateShippingForChannelPartnerOrder(channel_partner_order, callback) {
      var postBody = channel_partner_order; // verify the required parameter 'channel_partner_order' is set

      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateShippingForChannelPartnerOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerEstimateShippingResponse["default"];
      return this.apiClient.callApi('/channel_partner/estimate_shipping', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "estimateTaxForChannelPartnerOrder",
    value: function estimateTaxForChannelPartnerOrder(channel_partner_order, callback) {
      var postBody = channel_partner_order; // verify the required parameter 'channel_partner_order' is set

      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateTaxForChannelPartnerOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerEstimateTaxResponse["default"];
      return this.apiClient.callApi('/channel_partner/estimate_tax', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "importChannelPartnerOrder",
    value: function importChannelPartnerOrder(channel_partner_order, callback) {
      var postBody = channel_partner_order; // verify the required parameter 'channel_partner_order' is set

      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling importChannelPartnerOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerImportResponse["default"];
      return this.apiClient.callApi('/channel_partner/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ChannelPartnerApi;
}();

exports["default"] = ChannelPartnerApi;