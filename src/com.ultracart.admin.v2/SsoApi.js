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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest', 'com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse', 'com.ultracart.admin.v2.models/SingleSignOnTokenRequest', 'com.ultracart.admin.v2.models/SingleSignOnTokenResponse', 'com.ultracart.admin.v2.models/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest'), require('../com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse'), require('../com.ultracart.admin.v2.models/SingleSignOnTokenRequest'), require('../com.ultracart.admin.v2.models/SingleSignOnTokenResponse'), require('../com.ultracart.admin.v2.models/User'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.SsoApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.SingleSignOnAuthorizeRequest, root.UltraCartRestApiV2.SingleSignOnAuthorizeResponse, root.UltraCartRestApiV2.SingleSignOnTokenRequest, root.UltraCartRestApiV2.SingleSignOnTokenResponse, root.UltraCartRestApiV2.User);
  }
}(this, function(ApiClient, ErrorResponse, SingleSignOnAuthorizeRequest, SingleSignOnAuthorizeResponse, SingleSignOnTokenRequest, SingleSignOnTokenResponse, User) {
  'use strict';

  /**
   * Sso service.
   * @module com.ultracart.admin.v2/SsoApi
   * @version 3.10.214
   */

  /**
   * Constructs a new SsoApi. 
   * @alias module:com.ultracart.admin.v2/SsoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
    this.getSsoSessionUser = function(callback) {
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
      var returnType = User;

      return this.apiClient.callApi(
        '/sso/session/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.ssoAuthorize = function(authorization_request, callback) {
      var postBody = authorization_request;

      // verify the required parameter 'authorization_request' is set
      if (authorization_request === undefined || authorization_request === null) {
        throw new Error("Missing the required parameter 'authorization_request' when calling ssoAuthorize");
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
      var returnType = SingleSignOnAuthorizeResponse;

      return this.apiClient.callApi(
        '/sso/authorize', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.ssoSessionRevoke = function(callback) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/sso/session/revoke', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.ssoToken = function(token_request, callback) {
      var postBody = token_request;

      // verify the required parameter 'token_request' is set
      if (token_request === undefined || token_request === null) {
        throw new Error("Missing the required parameter 'token_request' when calling ssoToken");
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
      var returnType = SingleSignOnTokenResponse;

      return this.apiClient.callApi(
        '/sso/token', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
