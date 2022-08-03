"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _OauthRevokeSuccessResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OauthRevokeSuccessResponse"));

var _OauthTokenResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/OauthTokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Oauth service.
* @module com.ultracart.admin.v2/OauthApi
* @version 4.0.49-RC
*/
var OauthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OauthApi. 
  * @alias module:com.ultracart.admin.v2/OauthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OauthApi(apiClient) {
    _classCallCheck(this, OauthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(OauthApi, [{
    key: "oauthAccessToken",
    value: function oauthAccessToken(client_id, grant_type, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'client_id' is set

      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling oauthAccessToken");
      } // verify the required parameter 'grant_type' is set


      if (grant_type === undefined || grant_type === null) {
        throw new Error("Missing the required parameter 'grant_type' when calling oauthAccessToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
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
      var returnType = _OauthTokenResponse["default"];
      return this.apiClient.callApi('/oauth/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "oauthRevoke",
    value: function oauthRevoke(client_id, token, callback) {
      var postBody = null; // verify the required parameter 'client_id' is set

      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling oauthRevoke");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling oauthRevoke");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'client_id': client_id,
        'token': token
      };
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _OauthRevokeSuccessResponse["default"];
      return this.apiClient.callApi('/oauth/revoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OauthApi;
}();

exports["default"] = OauthApi;