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

var _ChannelPartnerShipToPreference = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerShipToPreference"));

var _ChannelPartnerShipToPreferenceResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse"));

var _ChannelPartnerShipToPreferencesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse"));

var _ChannelPartnersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ChannelPartnersResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ChannelPartner service.
* @module com.ultracart.admin.v2/ChannelPartnerApi
* @version 4.0.146
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
     * Callback function to receive the result of the deleteChannelPartnerShipToPreference operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~deleteChannelPartnerShipToPreferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a ship to preference record for the channel partner.
     * Delete a ship to preference record for the channel partner. 
     * @param {Number} channel_partner_oid 
     * @param {Number} channel_partner_ship_to_preference_oid 
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~deleteChannelPartnerShipToPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteChannelPartnerShipToPreference",
    value: function deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      var postBody = null; // verify the required parameter 'channel_partner_oid' is set

      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling deleteChannelPartnerShipToPreference");
      } // verify the required parameter 'channel_partner_ship_to_preference_oid' is set


      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling deleteChannelPartnerShipToPreference");
      }

      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the getChannelPartnerShipToPreference operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnerShipToPreferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the ship to preference associated with the channel partner and the specific id.
     * Retrieve the ship to preference associated with the channel partner and the specific id. 
     * @param {Number} channel_partner_oid 
     * @param {Number} channel_partner_ship_to_preference_oid 
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnerShipToPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse}
     */

  }, {
    key: "getChannelPartnerShipToPreference",
    value: function getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      var postBody = null; // verify the required parameter 'channel_partner_oid' is set

      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreference");
      } // verify the required parameter 'channel_partner_ship_to_preference_oid' is set


      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling getChannelPartnerShipToPreference");
      }

      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerShipToPreferenceResponse["default"];
      return this.apiClient.callApi('/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getChannelPartnerShipToPreferences operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnerShipToPreferencesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the ship to preferences associated with the channel partner.
     * Retrieve the ship to preferences associated with the channel partner. 
     * @param {Number} channel_partner_oid 
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnerShipToPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse}
     */

  }, {
    key: "getChannelPartnerShipToPreferences",
    value: function getChannelPartnerShipToPreferences(channel_partner_oid, callback) {
      var postBody = null; // verify the required parameter 'channel_partner_oid' is set

      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreferences");
      }

      var pathParams = {
        'channel_partner_oid': channel_partner_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerShipToPreferencesResponse["default"];
      return this.apiClient.callApi('/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getChannelPartners operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the channel partners configured on the account.
     * Retrieve the channel partners configured on the account. 
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~getChannelPartnersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnersResponse}
     */

  }, {
    key: "getChannelPartners",
    value: function getChannelPartners(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnersResponse["default"];
      return this.apiClient.callApi('/channel_partner/channel_partners', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
    /**
     * Callback function to receive the result of the insertChannelPartnerShipToPreference operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~insertChannelPartnerShipToPreferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a ship to preference record for the channel partner.
     * Insert a ship to preference record for the channel partner. 
     * @param {Number} channel_partner_oid 
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} ship_to_preference Ship to preference to create
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~insertChannelPartnerShipToPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse}
     */

  }, {
    key: "insertChannelPartnerShipToPreference",
    value: function insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference, callback) {
      var postBody = ship_to_preference; // verify the required parameter 'channel_partner_oid' is set

      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling insertChannelPartnerShipToPreference");
      } // verify the required parameter 'ship_to_preference' is set


      if (ship_to_preference === undefined || ship_to_preference === null) {
        throw new Error("Missing the required parameter 'ship_to_preference' when calling insertChannelPartnerShipToPreference");
      }

      var pathParams = {
        'channel_partner_oid': channel_partner_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerShipToPreferenceResponse["default"];
      return this.apiClient.callApi('/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelPartnerShipToPreference operation.
     * @callback module:com.ultracart.admin.v2/ChannelPartnerApi~updateChannelPartnerShipToPreferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a ship to preference record for the channel partner.
     * Update a ship to preference record for the channel partner. 
     * @param {Number} channel_partner_oid 
     * @param {Number} channel_partner_ship_to_preference_oid 
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} ship_to_preference Ship to preference to create
     * @param {module:com.ultracart.admin.v2/ChannelPartnerApi~updateChannelPartnerShipToPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse}
     */

  }, {
    key: "updateChannelPartnerShipToPreference",
    value: function updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference, callback) {
      var postBody = ship_to_preference; // verify the required parameter 'channel_partner_oid' is set

      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling updateChannelPartnerShipToPreference");
      } // verify the required parameter 'channel_partner_ship_to_preference_oid' is set


      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling updateChannelPartnerShipToPreference");
      } // verify the required parameter 'ship_to_preference' is set


      if (ship_to_preference === undefined || ship_to_preference === null) {
        throw new Error("Missing the required parameter 'ship_to_preference' when calling updateChannelPartnerShipToPreference");
      }

      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ChannelPartnerShipToPreferenceResponse["default"];
      return this.apiClient.callApi('/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ChannelPartnerApi;
}();

exports["default"] = ChannelPartnerApi;