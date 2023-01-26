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
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';
import SingleSignOnAuthorizeRequest from '../com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest';
import SingleSignOnAuthorizeResponse from '../com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse';
import SingleSignOnTokenRequest from '../com.ultracart.admin.v2.models/SingleSignOnTokenRequest';
import SingleSignOnTokenResponse from '../com.ultracart.admin.v2.models/SingleSignOnTokenResponse';
import User from '../com.ultracart.admin.v2.models/User';

/**
* Sso service.
* @module com.ultracart.admin.v2/SsoApi
* @version 4.0.126-RC
*/
export default class SsoApi {

    /**
    * Constructs a new SsoApi. 
    * @alias module:com.ultracart.admin.v2/SsoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSsoSessionUser operation.
     * @callback module:com.ultracart.admin.v2/SsoApi~getSsoSessionUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single sign on session user
     * This is the equivalent of logging out of the single sign on session 
     * @param {module:com.ultracart.admin.v2/SsoApi~getSsoSessionUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/User}
     */
    getSsoSessionUser(callback) {
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
      let returnType = User;
      return this.apiClient.callApi(
        '/sso/session/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ssoAuthorize operation.
     * @callback module:com.ultracart.admin.v2/SsoApi~ssoAuthorizeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize a single sign on session
     * Starts the process of authorizing a single sign on session. 
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest} authorization_request Authorization request
     * @param {module:com.ultracart.admin.v2/SsoApi~ssoAuthorizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse}
     */
    ssoAuthorize(authorization_request, callback) {
      let postBody = authorization_request;
      // verify the required parameter 'authorization_request' is set
      if (authorization_request === undefined || authorization_request === null) {
        throw new Error("Missing the required parameter 'authorization_request' when calling ssoAuthorize");
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
      let returnType = SingleSignOnAuthorizeResponse;
      return this.apiClient.callApi(
        '/sso/authorize', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ssoSessionRevoke operation.
     * @callback module:com.ultracart.admin.v2/SsoApi~ssoSessionRevokeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke single sign on session
     * This is the equivalent of logging out of the single sign on session 
     * @param {module:com.ultracart.admin.v2/SsoApi~ssoSessionRevokeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ssoSessionRevoke(callback) {
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
      let returnType = null;
      return this.apiClient.callApi(
        '/sso/session/revoke', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ssoToken operation.
     * @callback module:com.ultracart.admin.v2/SsoApi~ssoTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exchange a single sign on code for a simple key token
     * Called by your application after receiving the code back on the redirect URI to obtain a simple key token to make API calls with 
     * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenRequest} token_request Token request
     * @param {module:com.ultracart.admin.v2/SsoApi~ssoTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse}
     */
    ssoToken(token_request, callback) {
      let postBody = token_request;
      // verify the required parameter 'token_request' is set
      if (token_request === undefined || token_request === null) {
        throw new Error("Missing the required parameter 'token_request' when calling ssoToken");
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
      let returnType = SingleSignOnTokenResponse;
      return this.apiClient.callApi(
        '/sso/token', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
