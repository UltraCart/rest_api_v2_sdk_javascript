"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _SingleSignOnAuthorizeRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SingleSignOnAuthorizeRequest"));

var _SingleSignOnAuthorizeResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse"));

var _SingleSignOnTokenRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SingleSignOnTokenRequest"));

var _SingleSignOnTokenResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SingleSignOnTokenResponse"));

var _User = _interopRequireDefault(require("../com.ultracart.admin.v2.models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Sso service.
* @module com.ultracart.admin.v2/SsoApi
* @version 4.0.60-RC
*/
var SsoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SsoApi. 
  * @alias module:com.ultracart.admin.v2/SsoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SsoApi(apiClient) {
    _classCallCheck(this, SsoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(SsoApi, [{
    key: "getSsoSessionUser",
    value: function getSsoSessionUser(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/sso/session/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "ssoAuthorize",
    value: function ssoAuthorize(authorization_request, callback) {
      var postBody = authorization_request; // verify the required parameter 'authorization_request' is set

      if (authorization_request === undefined || authorization_request === null) {
        throw new Error("Missing the required parameter 'authorization_request' when calling ssoAuthorize");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SingleSignOnAuthorizeResponse["default"];
      return this.apiClient.callApi('/sso/authorize', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "ssoSessionRevoke",
    value: function ssoSessionRevoke(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/sso/session/revoke', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "ssoToken",
    value: function ssoToken(token_request, callback) {
      var postBody = token_request; // verify the required parameter 'token_request' is set

      if (token_request === undefined || token_request === null) {
        throw new Error("Missing the required parameter 'token_request' when calling ssoToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SingleSignOnTokenResponse["default"];
      return this.apiClient.callApi('/sso/token', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SsoApi;
}();

exports["default"] = SsoApi;