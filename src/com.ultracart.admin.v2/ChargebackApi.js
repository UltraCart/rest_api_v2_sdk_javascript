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
import ChargebackDispute from '../com.ultracart.admin.v2.models/ChargebackDispute';
import ChargebackDisputeResponse from '../com.ultracart.admin.v2.models/ChargebackDisputeResponse';
import ChargebackDisputesResponse from '../com.ultracart.admin.v2.models/ChargebackDisputesResponse';
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';

/**
* Chargeback service.
* @module com.ultracart.admin.v2/ChargebackApi
* @version 4.1.16
*/
export default class ChargebackApi {

    /**
    * Constructs a new ChargebackApi. 
    * @alias module:com.ultracart.admin.v2/ChargebackApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~deleteChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a chargeback
     * Delete a chargeback on the UltraCart account. 
     * @param {Number} chargeback_dispute_oid The chargeback_dispute_oid to delete.
     * @param {module:com.ultracart.admin.v2/ChargebackApi~deleteChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    deleteChargeback(chargeback_dispute_oid, callback) {
      let postBody = null;
      // verify the required parameter 'chargeback_dispute_oid' is set
      if (chargeback_dispute_oid === undefined || chargeback_dispute_oid === null) {
        throw new Error("Missing the required parameter 'chargeback_dispute_oid' when calling deleteChargeback");
      }

      let pathParams = {
        'chargeback_dispute_oid': chargeback_dispute_oid
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
      let returnType = ChargebackDisputeResponse;
      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getChargebackDispute operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a chargeback
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * @param {Number} chargeback_dispute_oid The chargeback dispute oid to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    getChargebackDispute(chargeback_dispute_oid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'chargeback_dispute_oid' is set
      if (chargeback_dispute_oid === undefined || chargeback_dispute_oid === null) {
        throw new Error("Missing the required parameter 'chargeback_dispute_oid' when calling getChargebackDispute");
      }

      let pathParams = {
        'chargeback_dispute_oid': chargeback_dispute_oid
      };
      let queryParams = {
        '_expand': opts['_expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChargebackDisputeResponse;
      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getChargebackDisputes operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve chargebacks
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.order_id Order Id
     * @param {String} opts.case_number Case number
     * @param {String} opts.status Status
     * @param {String} opts.expiration_dts_start Expiration dts start
     * @param {String} opts.expiration_dts_end Expiration dts end
     * @param {String} opts.chargeback_dts_start Chargeback dts start
     * @param {String} opts.chargeback_dts_end Chargeback dts end
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch chargebacks that have been created/modified since this date/time.
     * @param {String} opts._sort The sort order of the chargebacks.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~getChargebackDisputesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputesResponse}
     */
    getChargebackDisputes(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'order_id': opts['order_id'],
        'case_number': opts['case_number'],
        'status': opts['status'],
        'expiration_dts_start': opts['expiration_dts_start'],
        'expiration_dts_end': opts['expiration_dts_end'],
        'chargeback_dts_start': opts['chargeback_dts_start'],
        'chargeback_dts_end': opts['chargeback_dts_end'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since'],
        '_sort': opts['_sort'],
        '_expand': opts['_expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChargebackDisputesResponse;
      return this.apiClient.callApi(
        '/chargeback/chargebacks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~insertChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a chargeback
     * Insert a chargeback on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} chargeback Chargeback to insert
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~insertChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    insertChargeback(chargeback, opts, callback) {
      opts = opts || {};
      let postBody = chargeback;
      // verify the required parameter 'chargeback' is set
      if (chargeback === undefined || chargeback === null) {
        throw new Error("Missing the required parameter 'chargeback' when calling insertChargeback");
      }

      let pathParams = {
      };
      let queryParams = {
        '_expand': opts['_expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = ChargebackDisputeResponse;
      return this.apiClient.callApi(
        '/chargeback/chargebacks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateChargeback operation.
     * @callback module:com.ultracart.admin.v2/ChargebackApi~updateChargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDisputeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a chargeback
     * Update a chargeback on the UltraCart account. 
     * @param {Number} chargeback_dispute_oid The chargeback_dispute_oid to update.
     * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} chargeback Chargeback to update
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/ChargebackApi~updateChargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ChargebackDisputeResponse}
     */
    updateChargeback(chargeback_dispute_oid, chargeback, opts, callback) {
      opts = opts || {};
      let postBody = chargeback;
      // verify the required parameter 'chargeback_dispute_oid' is set
      if (chargeback_dispute_oid === undefined || chargeback_dispute_oid === null) {
        throw new Error("Missing the required parameter 'chargeback_dispute_oid' when calling updateChargeback");
      }
      // verify the required parameter 'chargeback' is set
      if (chargeback === undefined || chargeback === null) {
        throw new Error("Missing the required parameter 'chargeback' when calling updateChargeback");
      }

      let pathParams = {
        'chargeback_dispute_oid': chargeback_dispute_oid
      };
      let queryParams = {
        '_expand': opts['_expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = ChargebackDisputeResponse;
      return this.apiClient.callApi(
        '/chargeback/chargebacks/{chargeback_dispute_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
