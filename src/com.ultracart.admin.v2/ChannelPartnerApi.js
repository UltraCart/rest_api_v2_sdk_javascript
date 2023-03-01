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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartnerCancelResponse', 'com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse', 'com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse', 'com.ultracart.admin.v2.models/ChannelPartnerImportResponse', 'com.ultracart.admin.v2.models/ChannelPartnerOrder', 'com.ultracart.admin.v2.models/ChannelPartnerShipToPreference', 'com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse', 'com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse', 'com.ultracart.admin.v2.models/ChannelPartnersResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ChannelPartnerCancelResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerImportResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerOrder'), require('../com.ultracart.admin.v2.models/ChannelPartnerShipToPreference'), require('../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse'), require('../com.ultracart.admin.v2.models/ChannelPartnersResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChannelPartnerApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartnerCancelResponse, root.UltraCartRestApiV2.ChannelPartnerEstimateShippingResponse, root.UltraCartRestApiV2.ChannelPartnerEstimateTaxResponse, root.UltraCartRestApiV2.ChannelPartnerImportResponse, root.UltraCartRestApiV2.ChannelPartnerOrder, root.UltraCartRestApiV2.ChannelPartnerShipToPreference, root.UltraCartRestApiV2.ChannelPartnerShipToPreferenceResponse, root.UltraCartRestApiV2.ChannelPartnerShipToPreferencesResponse, root.UltraCartRestApiV2.ChannelPartnersResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, ChannelPartnerCancelResponse, ChannelPartnerEstimateShippingResponse, ChannelPartnerEstimateTaxResponse, ChannelPartnerImportResponse, ChannelPartnerOrder, ChannelPartnerShipToPreference, ChannelPartnerShipToPreferenceResponse, ChannelPartnerShipToPreferencesResponse, ChannelPartnersResponse, ErrorResponse) {
  'use strict';

  /**
   * ChannelPartner service.
   * @module com.ultracart.admin.v2/ChannelPartnerApi
   * @version 3.10.121
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
    this.deleteChannelPartnerShipToPreference = function(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      var postBody = null;

      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling deleteChannelPartnerShipToPreference");
      }

      // verify the required parameter 'channel_partner_ship_to_preference_oid' is set
      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling deleteChannelPartnerShipToPreference");
      }


      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
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
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'DELETE',
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
    this.getChannelPartnerShipToPreference = function(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      var postBody = null;

      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreference");
      }

      // verify the required parameter 'channel_partner_ship_to_preference_oid' is set
      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling getChannelPartnerShipToPreference");
      }


      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
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
      var returnType = ChannelPartnerShipToPreferenceResponse;

      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getChannelPartnerShipToPreferences = function(channel_partner_oid, callback) {
      var postBody = null;

      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreferences");
      }


      var pathParams = {
        'channel_partner_oid': channel_partner_oid
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
      var returnType = ChannelPartnerShipToPreferencesResponse;

      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getChannelPartners = function(callback) {
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
      var returnType = ChannelPartnersResponse;

      return this.apiClient.callApi(
        '/channel_partner/channel_partners', 'GET',
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
    this.insertChannelPartnerShipToPreference = function(channel_partner_oid, ship_to_preference, callback) {
      var postBody = ship_to_preference;

      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling insertChannelPartnerShipToPreference");
      }

      // verify the required parameter 'ship_to_preference' is set
      if (ship_to_preference === undefined || ship_to_preference === null) {
        throw new Error("Missing the required parameter 'ship_to_preference' when calling insertChannelPartnerShipToPreference");
      }


      var pathParams = {
        'channel_partner_oid': channel_partner_oid
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
      var returnType = ChannelPartnerShipToPreferenceResponse;

      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.updateChannelPartnerShipToPreference = function(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference, callback) {
      var postBody = ship_to_preference;

      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling updateChannelPartnerShipToPreference");
      }

      // verify the required parameter 'channel_partner_ship_to_preference_oid' is set
      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling updateChannelPartnerShipToPreference");
      }

      // verify the required parameter 'ship_to_preference' is set
      if (ship_to_preference === undefined || ship_to_preference === null) {
        throw new Error("Missing the required parameter 'ship_to_preference' when calling updateChannelPartnerShipToPreference");
      }


      var pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
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
      var returnType = ChannelPartnerShipToPreferenceResponse;

      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
