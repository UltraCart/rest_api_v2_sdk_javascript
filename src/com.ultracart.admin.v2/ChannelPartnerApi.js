/**
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


import ApiClient from "../ApiClient";
import ChannelPartnerCancelResponse from '../com.ultracart.admin.v2.models/ChannelPartnerCancelResponse';
import ChannelPartnerEstimateShippingResponse from '../com.ultracart.admin.v2.models/ChannelPartnerEstimateShippingResponse';
import ChannelPartnerEstimateTaxResponse from '../com.ultracart.admin.v2.models/ChannelPartnerEstimateTaxResponse';
import ChannelPartnerImportResponse from '../com.ultracart.admin.v2.models/ChannelPartnerImportResponse';
import ChannelPartnerOrder from '../com.ultracart.admin.v2.models/ChannelPartnerOrder';
import ChannelPartnerShipToPreference from '../com.ultracart.admin.v2.models/ChannelPartnerShipToPreference';
import ChannelPartnerShipToPreferenceResponse from '../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferenceResponse';
import ChannelPartnerShipToPreferencesResponse from '../com.ultracart.admin.v2.models/ChannelPartnerShipToPreferencesResponse';
import ChannelPartnersResponse from '../com.ultracart.admin.v2.models/ChannelPartnersResponse';
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';

/**
* ChannelPartner service.
* @module com.ultracart.admin.v2/ChannelPartnerApi
* @version 4.0.190
*/
export default class ChannelPartnerApi {

    /**
    * Constructs a new ChannelPartnerApi. 
    * @alias module:com.ultracart.admin.v2/ChannelPartnerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    cancelOrderByChannelPartnerOrderId(order_id, callback) {
      let postBody = null;
      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByChannelPartnerOrderId");
      }

      let pathParams = {
        'order_id': order_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerCancelResponse;
      return this.apiClient.callApi(
        '/channel_partner/cancel/by_channel_partner_order_id/{order_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    cancelOrderByUltraCartOrderId(order_id, callback) {
      let postBody = null;
      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling cancelOrderByUltraCartOrderId");
      }

      let pathParams = {
        'order_id': order_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerCancelResponse;
      return this.apiClient.callApi(
        '/channel_partner/cancel/by_ultracart_order_id/{order_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      let postBody = null;
      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling deleteChannelPartnerShipToPreference");
      }
      // verify the required parameter 'channel_partner_ship_to_preference_oid' is set
      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling deleteChannelPartnerShipToPreference");
      }

      let pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    estimateShippingForChannelPartnerOrder(channel_partner_order, callback) {
      let postBody = channel_partner_order;
      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateShippingForChannelPartnerOrder");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerEstimateShippingResponse;
      return this.apiClient.callApi(
        '/channel_partner/estimate_shipping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    estimateTaxForChannelPartnerOrder(channel_partner_order, callback) {
      let postBody = channel_partner_order;
      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling estimateTaxForChannelPartnerOrder");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerEstimateTaxResponse;
      return this.apiClient.callApi(
        '/channel_partner/estimate_tax', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, callback) {
      let postBody = null;
      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreference");
      }
      // verify the required parameter 'channel_partner_ship_to_preference_oid' is set
      if (channel_partner_ship_to_preference_oid === undefined || channel_partner_ship_to_preference_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_ship_to_preference_oid' when calling getChannelPartnerShipToPreference");
      }

      let pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerShipToPreferenceResponse;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getChannelPartnerShipToPreferences(channel_partner_oid, callback) {
      let postBody = null;
      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling getChannelPartnerShipToPreferences");
      }

      let pathParams = {
        'channel_partner_oid': channel_partner_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerShipToPreferencesResponse;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getChannelPartners(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChannelPartnersResponse;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    importChannelPartnerOrder(channel_partner_order, callback) {
      let postBody = channel_partner_order;
      // verify the required parameter 'channel_partner_order' is set
      if (channel_partner_order === undefined || channel_partner_order === null) {
        throw new Error("Missing the required parameter 'channel_partner_order' when calling importChannelPartnerOrder");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerImportResponse;
      return this.apiClient.callApi(
        '/channel_partner/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference, callback) {
      let postBody = ship_to_preference;
      // verify the required parameter 'channel_partner_oid' is set
      if (channel_partner_oid === undefined || channel_partner_oid === null) {
        throw new Error("Missing the required parameter 'channel_partner_oid' when calling insertChannelPartnerShipToPreference");
      }
      // verify the required parameter 'ship_to_preference' is set
      if (ship_to_preference === undefined || ship_to_preference === null) {
        throw new Error("Missing the required parameter 'ship_to_preference' when calling insertChannelPartnerShipToPreference");
      }

      let pathParams = {
        'channel_partner_oid': channel_partner_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerShipToPreferenceResponse;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference, callback) {
      let postBody = ship_to_preference;
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

      let pathParams = {
        'channel_partner_oid': channel_partner_oid,
        'channel_partner_ship_to_preference_oid': channel_partner_ship_to_preference_oid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ChannelPartnerShipToPreferenceResponse;
      return this.apiClient.callApi(
        '/channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
