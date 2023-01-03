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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/OauthRevokeSuccessResponse', 'com.ultracart.admin.v2.models/OauthTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/OauthRevokeSuccessResponse'), require('../com.ultracart.admin.v2.models/OauthTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OauthApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.OauthRevokeSuccessResponse, root.UltraCartRestApiV2.OauthTokenResponse);
  }
}(this, function(ApiClient, ErrorResponse, OauthRevokeSuccessResponse, OauthTokenResponse) {
  'use strict';

  /**
   * Oauth service.
   * @module com.ultracart.admin.v2/OauthApi
   * @version 3.10.87
   */

  /**
   * Constructs a new OauthApi. 
   * @alias module:com.ultracart.admin.v2/OauthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the oauthAccessToken operation.
     * @callback module:com.ultracart.admin.v2/OauthApi~oauthAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OauthTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exchange authorization code for access token.
     * The final leg in the OAuth process which exchanges the specified access token for the access code needed to make API calls. 
     * @param {String} client_id The OAuth application client_id.
     * @param {String} grant_type Type of grant
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Authorization code received back from the browser redirect
     * @param {String} opts.redirect_uri The URI that you redirect the browser to to start the authorization process
     * @param {String} opts.refresh_token The refresh token received during the original grant_type=authorization_code that can be used to return a new access token
     * @param {module:com.ultracart.admin.v2/OauthApi~oauthAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OauthTokenResponse}
     */
    this.oauthAccessToken = function(client_id, grant_type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'client_id' is set
      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling oauthAccessToken");
      }

      // verify the required parameter 'grant_type' is set
      if (grant_type === undefined || grant_type === null) {
        throw new Error("Missing the required parameter 'grant_type' when calling oauthAccessToken");
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
        'client_id': client_id,
        'grant_type': grant_type,
        'code': opts['code'],
        'redirect_uri': opts['redirect_uri'],
        'refresh_token': opts['refresh_token']
      };

      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OauthTokenResponse;

      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthRevoke operation.
     * @callback module:com.ultracart.admin.v2/OauthApi~oauthRevokeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/OauthRevokeSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke this OAuth application.
     * Revokes the OAuth application associated with the specified client_id and token. 
     * @param {String} client_id The OAuth application client_id.
     * @param {String} token The OAuth access token that is to be revoked..
     * @param {module:com.ultracart.admin.v2/OauthApi~oauthRevokeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/OauthRevokeSuccessResponse}
     */
    this.oauthRevoke = function(client_id, token, callback) {
      var postBody = null;

      // verify the required parameter 'client_id' is set
      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling oauthRevoke");
      }

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling oauthRevoke");
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
        'client_id': client_id,
        'token': token
      };

      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OauthRevokeSuccessResponse;

      return this.apiClient.callApi(
        '/oauth/revoke', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
