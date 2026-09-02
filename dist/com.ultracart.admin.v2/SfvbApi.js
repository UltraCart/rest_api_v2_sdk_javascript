"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
var _SfvbCompileRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbCompileRequest"));
var _SfvbCompileResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbCompileResponse"));
var _SfvbContainerResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerResponse"));
var _SfvbContainerRevertRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerRevertRequest"));
var _SfvbContainerVersion = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerVersion"));
var _SfvbContainerVersionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerVersionsResponse"));
var _SfvbContainerWriteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerWriteRequest"));
var _SfvbElementSchemaResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbElementSchemaResponse"));
var _SfvbElementsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbElementsResponse"));
var _SfvbFileContentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileContentResponse"));
var _SfvbFileRevertRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileRevertRequest"));
var _SfvbFileSearchRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileSearchRequest"));
var _SfvbFileSearchResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileSearchResponse"));
var _SfvbFileVersionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileVersionsResponse"));
var _SfvbFileWriteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileWriteRequest"));
var _SfvbFileWriteResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileWriteResponse"));
var _SfvbFilesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFilesResponse"));
var _SfvbLibraryEntry = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbLibraryEntry"));
var _SfvbLibraryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbLibraryResponse"));
var _SfvbPreviewSessionRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewSessionRequest"));
var _SfvbPreviewSessionResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewSessionResponse"));
var _SfvbPreviewUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewUrlResponse"));
var _SfvbRenderRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbRenderRequest"));
var _SfvbRenderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbRenderResponse"));
var _SfvbStorefrontsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbStorefrontsResponse"));
var _SfvbTheme = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbTheme"));
var _SfvbThemeDuplicateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbThemeDuplicateRequest"));
var _SfvbThemeJobResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbThemeJobResponse"));
var _SfvbThemesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbThemesResponse"));
var _SfvbUpsellOffersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbUpsellOffersResponse"));
var _SfvbValidateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbValidateRequest"));
var _SfvbValidationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbValidationResponse"));
var _SfvbVelocityValidateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbVelocityValidateRequest"));
var _SfvbVersionResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbVersionResponse"));
var _SfvbWhoamiResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbWhoamiResponse"));
var _SfvbWidgetIdsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbWidgetIdsResponse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
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
/**
* Sfvb service.
* @module com.ultracart.admin.v2/SfvbApi
* @version 4.1.143
*/
var SfvbApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new SfvbApi. 
  * @alias module:com.ultracart.admin.v2/SfvbApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SfvbApi(apiClient) {
    _classCallCheck(this, SfvbApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the compileSfvbCjson operation.
   * @callback module:com.ultracart.admin.v2/SfvbApi~compileSfvbCjsonCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/SfvbCompileResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Compile CJSON to Velocity
   * Compiles a container document to Velocity without storing anything.  Supply theme_oid to compile with the theme's inherit groups applied; omit it to compile standalone. 
   * @param {module:com.ultracart.admin.v2.models/SfvbCompileRequest} compile_request CJSON to compile
   * @param {module:com.ultracart.admin.v2/SfvbApi~compileSfvbCjsonCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbCompileResponse}
   */
  return _createClass(SfvbApi, [{
    key: "compileSfvbCjson",
    value: function compileSfvbCjson(compile_request, callback) {
      var postBody = compile_request;
      // verify the required parameter 'compile_request' is set
      if (compile_request === undefined || compile_request === null) {
        throw new Error("Missing the required parameter 'compile_request' when calling compileSfvbCjson");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbCompileResponse["default"];
      return this.apiClient.callApi('/sfvb/cjson/compile', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createSfvbPreviewSession operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~createSfvbPreviewSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewSessionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a preview session
     * Returns a server generated session id to push containers into.  The id is not caller supplied, because concurrent agents choosing their own would be free to collide, and the browser editor's habit of minting one with Math.random is not a property worth carrying into an API.  Expires after eight hours and can be deleted sooner.  Requires a token that resolves to a user, so use the device authorization flow. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~createSfvbPreviewSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPreviewSessionResponse}
     */
  }, {
    key: "createSfvbPreviewSession",
    value: function createSfvbPreviewSession(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling createSfvbPreviewSession");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPreviewSessionResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/preview_sessions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteSfvbFile operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~deleteSfvbFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a storefront file
     * Recoverable from the recycle bin. 
     * @param {Number} storefront_oid 
     * @param {String} If_Match Content hash of the file being deleted.  Required; 428 when absent, 412 when stale.
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:com.ultracart.admin.v2/SfvbApi~deleteSfvbFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteSfvbFile",
    value: function deleteSfvbFile(storefront_oid, If_Match, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteSfvbFile");
      }
      // verify the required parameter 'If_Match' is set
      if (If_Match === undefined || If_Match === null) {
        throw new Error("Missing the required parameter 'If_Match' when calling deleteSfvbFile");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': opts['path']
      };
      var headerParams = {
        'If-Match': If_Match
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteSfvbPreviewSession operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~deleteSfvbPreviewSessionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a preview session
     * Releases the session before its eight hour expiry.  Without this the only way to free one is to wait, which is a poor answer for a tool that may open a dozen in an afternoon. 
     * @param {Number} storefront_oid 
     * @param {String} preview_session_id 
     * @param {module:com.ultracart.admin.v2/SfvbApi~deleteSfvbPreviewSessionCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteSfvbPreviewSession",
    value: function deleteSfvbPreviewSession(storefront_oid, preview_session_id, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteSfvbPreviewSession");
      }
      // verify the required parameter 'preview_session_id' is set
      if (preview_session_id === undefined || preview_session_id === null) {
        throw new Error("Missing the required parameter 'preview_session_id' when calling deleteSfvbPreviewSession");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'preview_session_id': preview_session_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the duplicateSfvbTheme operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~duplicateSfvbThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate a theme
     * Copies a theme into a new one and returns a job handle to poll.  Asynchronous, because copying a theme copies every file in it.  Needs sfvb_write rather than sfvb_publish, because the job explicitly does not activate what it creates, so the worst outcome of a mistaken call is a spare theme.  This is how you get somewhere safe to work - duplicate, edit the copy with an ordinary write scope, and let a human promote it. 
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeDuplicateRequest} duplicate_request Theme duplication details
     * @param {module:com.ultracart.admin.v2/SfvbApi~duplicateSfvbThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbThemeJobResponse}
     */
  }, {
    key: "duplicateSfvbTheme",
    value: function duplicateSfvbTheme(storefront_oid, theme_oid, duplicate_request, callback) {
      var postBody = duplicate_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling duplicateSfvbTheme");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling duplicateSfvbTheme");
      }
      // verify the required parameter 'duplicate_request' is set
      if (duplicate_request === undefined || duplicate_request === null) {
        throw new Error("Missing the required parameter 'duplicate_request' when calling duplicateSfvbTheme");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'theme_oid': theme_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbThemeJobResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/duplicate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbCjsonUsedElements operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbCjsonUsedElementsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbElementsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Element types used by a container
     * @param {module:com.ultracart.admin.v2.models/SfvbCompileRequest} compile_request CJSON to inspect
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbCjsonUsedElementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbElementsResponse}
     */
  }, {
    key: "getSfvbCjsonUsedElements",
    value: function getSfvbCjsonUsedElements(compile_request, callback) {
      var postBody = compile_request;
      // verify the required parameter 'compile_request' is set
      if (compile_request === undefined || compile_request === null) {
        throw new Error("Missing the required parameter 'compile_request' when calling getSfvbCjsonUsedElements");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbElementsResponse["default"];
      return this.apiClient.callApi('/sfvb/cjson/elements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbContainer operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a container stored outside the file system
     * owner_type is one of upsell, email, postcardfront, postcardback or item.  Item containers also require container_name.  Theme and page containers are files; read those through files/content. 
     * @param {Number} storefront_oid 
     * @param {String} owner_type 
     * @param {String} owner_object_id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.container_name 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbContainerResponse}
     */
  }, {
    key: "getSfvbContainer",
    value: function getSfvbContainer(storefront_oid, owner_type, owner_object_id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbContainer");
      }
      // verify the required parameter 'owner_type' is set
      if (owner_type === undefined || owner_type === null) {
        throw new Error("Missing the required parameter 'owner_type' when calling getSfvbContainer");
      }
      // verify the required parameter 'owner_object_id' is set
      if (owner_object_id === undefined || owner_object_id === null) {
        throw new Error("Missing the required parameter 'owner_object_id' when calling getSfvbContainer");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'owner_type': owner_type,
        'owner_object_id': owner_object_id
      };
      var queryParams = {
        'container_name': opts['container_name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbContainerResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbContainerVersion operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbContainerVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read the CJSON stored in one container history entry
     * Inspect or diff an earlier version without reverting to it.  The version is addressed through the container that owns it, so a history oid belonging to some other resource cannot be read through this route. 
     * @param {Number} storefront_oid 
     * @param {Number} container_history_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.owner_type 
     * @param {String} opts.owner_object_id 
     * @param {String} opts.container_name 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbContainerVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbContainerVersion}
     */
  }, {
    key: "getSfvbContainerVersion",
    value: function getSfvbContainerVersion(storefront_oid, container_history_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbContainerVersion");
      }
      // verify the required parameter 'container_history_oid' is set
      if (container_history_oid === undefined || container_history_oid === null) {
        throw new Error("Missing the required parameter 'container_history_oid' when calling getSfvbContainerVersion");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'container_history_oid': container_history_oid
      };
      var queryParams = {
        'owner_type': opts['owner_type'],
        'owner_object_id': opts['owner_object_id'],
        'container_name': opts['container_name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbContainerVersion["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/container_versions/{container_history_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbElement operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbElementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbElementSchemaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configuration schema for one element type
     * @param {String} element_type 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbElementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbElementSchemaResponse}
     */
  }, {
    key: "getSfvbElement",
    value: function getSfvbElement(element_type, callback) {
      var postBody = null;
      // verify the required parameter 'element_type' is set
      if (element_type === undefined || element_type === null) {
        throw new Error("Missing the required parameter 'element_type' when calling getSfvbElement");
      }
      var pathParams = {
        'element_type': element_type
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbElementSchemaResponse["default"];
      return this.apiClient.callApi('/sfvb/elements/{element_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbFileContent operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbFileContentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileContentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a storefront file
     * Returns the current content, or an earlier version when version is supplied.  The content hash is returned as an ETag; send it back as If-Match when writing. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {Number} opts.version 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbFileContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileContentResponse}
     */
  }, {
    key: "getSfvbFileContent",
    value: function getSfvbFileContent(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbFileContent");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': opts['path'],
        'version': opts['version']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbFileContentResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/content', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbLibraryEntry operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbLibraryEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbLibraryEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read one library entry including its CJSON
     * Returns the fragment as authored.  If it references images or other storefront files those paths will not resolve on this storefront until the entry is installed, so use install rather than this when the intent is to place the fragment. 
     * @param {Number} storefront_oid 
     * @param {Number} library_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbLibraryEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbLibraryEntry}
     */
  }, {
    key: "getSfvbLibraryEntry",
    value: function getSfvbLibraryEntry(storefront_oid, library_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbLibraryEntry");
      }
      // verify the required parameter 'library_oid' is set
      if (library_oid === undefined || library_oid === null) {
        throw new Error("Missing the required parameter 'library_oid' when calling getSfvbLibraryEntry");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'library_oid': library_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbLibraryEntry["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/library/{library_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbPreviewUrl operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbPreviewUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * URL that renders a preview session
     * @param {Number} storefront_oid 
     * @param {String} preview_session_id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbPreviewUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPreviewUrlResponse}
     */
  }, {
    key: "getSfvbPreviewUrl",
    value: function getSfvbPreviewUrl(storefront_oid, preview_session_id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbPreviewUrl");
      }
      // verify the required parameter 'preview_session_id' is set
      if (preview_session_id === undefined || preview_session_id === null) {
        throw new Error("Missing the required parameter 'preview_session_id' when calling getSfvbPreviewUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'preview_session_id': preview_session_id
      };
      var queryParams = {
        'path': opts['path']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPreviewUrlResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}/url', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbTheme operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbTheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a theme
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbTheme}
     */
  }, {
    key: "getSfvbTheme",
    value: function getSfvbTheme(storefront_oid, theme_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbTheme");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling getSfvbTheme");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'theme_oid': theme_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbTheme["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbThemeJob operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeJobCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Status of an asynchronous theme job
     * Poll until complete is true, then check success.  Note that the new theme's oid is not returned.  The job's product is a plain text report rather than a structured result, so once it completes, list themes and match on the target_path the start call gave you. 
     * @param {Number} storefront_oid 
     * @param {Number} job_id 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbThemeJobResponse}
     */
  }, {
    key: "getSfvbThemeJob",
    value: function getSfvbThemeJob(storefront_oid, job_id, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbThemeJob");
      }
      // verify the required parameter 'job_id' is set
      if (job_id === undefined || job_id === null) {
        throw new Error("Missing the required parameter 'job_id' when calling getSfvbThemeJob");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'job_id': job_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbThemeJobResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/theme_jobs/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbVersion operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbVersionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compiler version for this merchant
     * The visual builder release channel is per merchant, so a CLI holding cached schema or element data should compare against this to know when it has gone stale. 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbVersionResponse}
     */
  }, {
    key: "getSfvbVersion",
    value: function getSfvbVersion(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbVersionResponse["default"];
      return this.apiClient.callApi('/sfvb/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbWhoami operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbWhoamiCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbWhoamiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Who this token is
     * Returns the merchant, user, granted scopes and reachable storefronts for the calling token.  Declared for any scope so an application can always discover which account it is connected to. 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbWhoamiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbWhoamiResponse}
     */
  }, {
    key: "getSfvbWhoami",
    value: function getSfvbWhoami(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbWhoamiResponse["default"];
      return this.apiClient.callApi('/sfvb/whoami', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the installSfvbLibraryEntry operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~installSfvbLibraryEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbLibraryEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Install a library entry into a storefront
     * Copies the fragment's referenced assets into the storefront file system and returns the CJSON with its paths resolved, ready to place.  This writes, which is why it is a POST rather than the GET the internal admin endpoint uses.  It also requires sfvb_publish, because the assets land in the shared storefront file system, which is served to shoppers regardless of which theme is active, so no amount of working inside a duplicate theme isolates them. 
     * @param {Number} storefront_oid 
     * @param {Number} library_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~installSfvbLibraryEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbLibraryEntry}
     */
  }, {
    key: "installSfvbLibraryEntry",
    value: function installSfvbLibraryEntry(storefront_oid, library_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling installSfvbLibraryEntry");
      }
      // verify the required parameter 'library_oid' is set
      if (library_oid === undefined || library_oid === null) {
        throw new Error("Missing the required parameter 'library_oid' when calling installSfvbLibraryEntry");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'library_oid': library_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbLibraryEntry["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/library/{library_oid}/install', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbContainerVersions operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbContainerVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerVersionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Version history for a container stored outside the file system
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.owner_type 
     * @param {String} opts.owner_object_id 
     * @param {String} opts.container_name 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbContainerVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbContainerVersionsResponse}
     */
  }, {
    key: "listSfvbContainerVersions",
    value: function listSfvbContainerVersions(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbContainerVersions");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'owner_type': opts['owner_type'],
        'owner_object_id': opts['owner_object_id'],
        'container_name': opts['container_name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbContainerVersionsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/container_versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbElements operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbElementsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbElementsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List every SFVB element type
     * The authoritative vocabulary, taken from the same lookup the compiler uses.  A type absent from this list compiles to a literal placeholder line in the page rather than failing, which is why validation treats an unknown type as an error. 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbElementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbElementsResponse}
     */
  }, {
    key: "listSfvbElements",
    value: function listSfvbElements(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbElementsResponse["default"];
      return this.apiClient.callApi('/sfvb/elements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbFileVersions operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbFileVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileVersionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Version history for a storefront file
     * Version history is the undo for anything in the storefront file system, which is what makes an agent's writes recoverable. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbFileVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileVersionsResponse}
     */
  }, {
    key: "listSfvbFileVersions",
    value: function listSfvbFileVersions(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbFileVersions");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': opts['path']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbFileVersionsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbFiles operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFilesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List a storefront directory
     * Directories first, then files, each sorted by name.  Address by path or by directory oid; supplying theme_oid also retries a path that does not resolve at the storefront root relative to that theme, so /theme/css/ works without knowing the theme's directory name.  Each file carries its content hash, so a listing is enough to start an If-Match write without a separate read. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {Number} opts.storefront_fs_directory_oid 
     * @param {Number} opts.theme_oid 
     * @param {Number} opts.max_entries 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFilesResponse}
     */
  }, {
    key: "listSfvbFiles",
    value: function listSfvbFiles(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbFiles");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': opts['path'],
        'storefront_fs_directory_oid': opts['storefront_fs_directory_oid'],
        'theme_oid': opts['theme_oid'],
        'max_entries': opts['max_entries']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbFilesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbStorefronts operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbStorefrontsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbStorefrontsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List storefronts
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbStorefrontsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbStorefrontsResponse}
     */
  }, {
    key: "listSfvbStorefronts",
    value: function listSfvbStorefronts(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbStorefrontsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbThemes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbThemesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbThemesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List themes for a storefront
     * Exactly one theme is flagged active.  Writing to the active theme is writing live and requires the sfvb_publish scope. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbThemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbThemesResponse}
     */
  }, {
    key: "listSfvbThemes",
    value: function listSfvbThemes(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbThemes");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbThemesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listSfvbUpsellOffers operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbUpsellOffersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbUpsellOffersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List upsell offers
     * Without container JSON, so the funnel can be surveyed cheaply.  A large container size alongside a small element count is the signature of markup pasted into a single html element. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbUpsellOffersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbUpsellOffersResponse}
     */
  }, {
    key: "listSfvbUpsellOffers",
    value: function listSfvbUpsellOffers(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbUpsellOffers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbUpsellOffersResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/upsell_offers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbContainer operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Write a container stored outside the file system
     * Validation is mandatory and runs here regardless of whether the caller validated first.  The previous value is snapshotted before the write, so the change can be reverted.  Side effects the visual builder performs on save, such as upsell screenshot regeneration and email content review flagging, are applied too. 
     * @param {Number} storefront_oid 
     * @param {String} owner_type 
     * @param {String} owner_object_id 
     * @param {String} If_Match CJSON hash from the last read.  Required; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerWriteRequest} container_write_request Container CJSON to write
     * @param {Object} opts Optional parameters
     * @param {String} opts.container_name 
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbContainerResponse}
     */
  }, {
    key: "putSfvbContainer",
    value: function putSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_write_request, opts, callback) {
      opts = opts || {};
      var postBody = container_write_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbContainer");
      }
      // verify the required parameter 'owner_type' is set
      if (owner_type === undefined || owner_type === null) {
        throw new Error("Missing the required parameter 'owner_type' when calling putSfvbContainer");
      }
      // verify the required parameter 'owner_object_id' is set
      if (owner_object_id === undefined || owner_object_id === null) {
        throw new Error("Missing the required parameter 'owner_object_id' when calling putSfvbContainer");
      }
      // verify the required parameter 'If_Match' is set
      if (If_Match === undefined || If_Match === null) {
        throw new Error("Missing the required parameter 'If_Match' when calling putSfvbContainer");
      }
      // verify the required parameter 'container_write_request' is set
      if (container_write_request === undefined || container_write_request === null) {
        throw new Error("Missing the required parameter 'container_write_request' when calling putSfvbContainer");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'owner_type': owner_type,
        'owner_object_id': owner_object_id
      };
      var queryParams = {
        'container_name': opts['container_name']
      };
      var headerParams = {
        'If-Match': If_Match
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbContainerResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbFileContent operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbFileContentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Write a storefront file
     * Runs the template sandbox, Velocity validation and the internationalization check, records a version, and compiles the sibling .vm when the file is a .cjson under a theme.  Send If-Match with the hash from the last read to avoid clobbering a concurrent change.  Writing into the active theme requires sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} If_Match Content hash from the last read.  Required; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileWriteRequest} file_write_request File content to write
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbFileContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileWriteResponse}
     */
  }, {
    key: "putSfvbFileContent",
    value: function putSfvbFileContent(storefront_oid, If_Match, file_write_request, opts, callback) {
      opts = opts || {};
      var postBody = file_write_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbFileContent");
      }
      // verify the required parameter 'If_Match' is set
      if (If_Match === undefined || If_Match === null) {
        throw new Error("Missing the required parameter 'If_Match' when calling putSfvbFileContent");
      }
      // verify the required parameter 'file_write_request' is set
      if (file_write_request === undefined || file_write_request === null) {
        throw new Error("Missing the required parameter 'file_write_request' when calling putSfvbFileContent");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': opts['path']
      };
      var headerParams = {
        'If-Match': If_Match
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbFileWriteResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/content', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbPreviewSession operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbPreviewSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewSessionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Push containers into a preview session
     * Stores compiled containers against a session created by createSfvbPreviewSession.  Replaces whatever the session held.  Nothing durable is written.  Requires a token that resolves to a user, so use the device authorization flow. 
     * @param {Number} storefront_oid 
     * @param {String} preview_session_id 
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewSessionRequest} preview_session Containers to stage in the preview session
     * @param {Object} opts Optional parameters
     * @param {Number} opts.theme_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbPreviewSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPreviewSessionResponse}
     */
  }, {
    key: "putSfvbPreviewSession",
    value: function putSfvbPreviewSession(storefront_oid, preview_session_id, preview_session, opts, callback) {
      opts = opts || {};
      var postBody = preview_session;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbPreviewSession");
      }
      // verify the required parameter 'preview_session_id' is set
      if (preview_session_id === undefined || preview_session_id === null) {
        throw new Error("Missing the required parameter 'preview_session_id' when calling putSfvbPreviewSession");
      }
      // verify the required parameter 'preview_session' is set
      if (preview_session === undefined || preview_session === null) {
        throw new Error("Missing the required parameter 'preview_session' when calling putSfvbPreviewSession");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'preview_session_id': preview_session_id
      };
      var queryParams = {
        'theme_oid': opts['theme_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbPreviewSessionResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/preview_sessions/{preview_session_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the renderSfvbWidgets operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~renderSfvbWidgetsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbRenderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render a CJSON node to HTML
     * Renders one node in the context of a theme and a page.  Unlike compile this is stateful.  Rendering resolves merchant data, so an element bound to an item renders wrongly, and silently, without a context item id.  One node per call, so a node that fails to render fails on its own rather than taking a batch with it, and a failure says why. 
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbRenderRequest} render_request Widgets to render
     * @param {module:com.ultracart.admin.v2/SfvbApi~renderSfvbWidgetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbRenderResponse}
     */
  }, {
    key: "renderSfvbWidgets",
    value: function renderSfvbWidgets(storefront_oid, theme_oid, render_request, callback) {
      var postBody = render_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling renderSfvbWidgets");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling renderSfvbWidgets");
      }
      // verify the required parameter 'render_request' is set
      if (render_request === undefined || render_request === null) {
        throw new Error("Missing the required parameter 'render_request' when calling renderSfvbWidgets");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'theme_oid': theme_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbRenderResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/render', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the reserveSfvbWidgetIds operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~reserveSfvbWidgetIdsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbWidgetIdsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserve a block of widget ids
     * Widget ids are allocated by the server, not invented by the caller.  Reserve a block, then form ids as elementType-number.  This is the single most likely thing to get wrong on a first write.  A POST rather than a GET because it consumes a sequence.  A GET that mutates will eventually be prefetched, retried or cached by something that assumed it was safe. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count 
     * @param {module:com.ultracart.admin.v2/SfvbApi~reserveSfvbWidgetIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbWidgetIdsResponse}
     */
  }, {
    key: "reserveSfvbWidgetIds",
    value: function reserveSfvbWidgetIds(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling reserveSfvbWidgetIds");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'count': opts['count']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbWidgetIdsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/widget_ids', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the revertSfvbContainer operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~revertSfvbContainerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revert a container stored outside the file system
     * The restore is itself snapshotted, so a revert can be undone in turn.  Reverting to an entry recorded before the container existed removes it again.  Addressed through the owning container and guarded by If-Match, because a revert overwrites live content just as much as an ordinary write does. 
     * @param {Number} storefront_oid 
     * @param {String} owner_type 
     * @param {String} owner_object_id 
     * @param {String} If_Match CJSON hash of the container being reverted.  Required; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2.models/SfvbContainerRevertRequest} container_revert_request Version to revert the container to
     * @param {Object} opts Optional parameters
     * @param {String} opts.container_name 
     * @param {module:com.ultracart.admin.v2/SfvbApi~revertSfvbContainerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbContainerResponse}
     */
  }, {
    key: "revertSfvbContainer",
    value: function revertSfvbContainer(storefront_oid, owner_type, owner_object_id, If_Match, container_revert_request, opts, callback) {
      opts = opts || {};
      var postBody = container_revert_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling revertSfvbContainer");
      }
      // verify the required parameter 'owner_type' is set
      if (owner_type === undefined || owner_type === null) {
        throw new Error("Missing the required parameter 'owner_type' when calling revertSfvbContainer");
      }
      // verify the required parameter 'owner_object_id' is set
      if (owner_object_id === undefined || owner_object_id === null) {
        throw new Error("Missing the required parameter 'owner_object_id' when calling revertSfvbContainer");
      }
      // verify the required parameter 'If_Match' is set
      if (If_Match === undefined || If_Match === null) {
        throw new Error("Missing the required parameter 'If_Match' when calling revertSfvbContainer");
      }
      // verify the required parameter 'container_revert_request' is set
      if (container_revert_request === undefined || container_revert_request === null) {
        throw new Error("Missing the required parameter 'container_revert_request' when calling revertSfvbContainer");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'owner_type': owner_type,
        'owner_object_id': owner_object_id
      };
      var queryParams = {
        'container_name': opts['container_name']
      };
      var headerParams = {
        'If-Match': If_Match
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbContainerResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/containers/{owner_type}/{owner_object_id}/revert', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the revertSfvbFile operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~revertSfvbFileCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revert a storefront file to an earlier version
     * The revert lands as a new version, so it is itself undoable. 
     * @param {Number} storefront_oid 
     * @param {String} If_Match Content hash of the file being reverted.  Required; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileRevertRequest} file_revert_request Version to revert the file to
     * @param {module:com.ultracart.admin.v2/SfvbApi~revertSfvbFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileWriteResponse}
     */
  }, {
    key: "revertSfvbFile",
    value: function revertSfvbFile(storefront_oid, If_Match, file_revert_request, callback) {
      var postBody = file_revert_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling revertSfvbFile");
      }
      // verify the required parameter 'If_Match' is set
      if (If_Match === undefined || If_Match === null) {
        throw new Error("Missing the required parameter 'If_Match' when calling revertSfvbFile");
      }
      // verify the required parameter 'file_revert_request' is set
      if (file_revert_request === undefined || file_revert_request === null) {
        throw new Error("Missing the required parameter 'file_revert_request' when calling revertSfvbFile");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {
        'If-Match': If_Match
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbFileWriteResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/revert', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchSfvbFiles operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~searchSfvbFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search storefront files
     * Searches names and, when text is supplied, file contents.  For a CLI with no local copy this is the only way to answer where something is defined without walking the whole tree.  Results are capped and truncation is always reported. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbFileSearchRequest} search_request File search
     * @param {module:com.ultracart.admin.v2/SfvbApi~searchSfvbFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileSearchResponse}
     */
  }, {
    key: "searchSfvbFiles",
    value: function searchSfvbFiles(storefront_oid, search_request, callback) {
      var postBody = search_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling searchSfvbFiles");
      }
      // verify the required parameter 'search_request' is set
      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling searchSfvbFiles");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbFileSearchResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchSfvbLibrary operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~searchSfvbLibraryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbLibraryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search the element library
     * Known-good CJSON fragments a human already built out of real elements.  This is what a lint warning about a monolithic html element should point at - a warning that names a fragment solving the same problem is an instruction, where a warning on its own is only criticism.  Results are terse; fetch a single entry for its CJSON.  Narrow with facet_{name}={option} query parameters. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.segment 
     * @param {String} opts.search 
     * @param {Number} opts.page_number 
     * @param {Number} opts.results_per_page 
     * @param {module:com.ultracart.admin.v2/SfvbApi~searchSfvbLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbLibraryResponse}
     */
  }, {
    key: "searchSfvbLibrary",
    value: function searchSfvbLibrary(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling searchSfvbLibrary");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'segment': opts['segment'],
        'search': opts['search'],
        'page_number': opts['page_number'],
        'results_per_page': opts['results_per_page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbLibraryResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/library', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the validateSfvbCjson operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~validateSfvbCjsonCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate CJSON
     * Runs the structural schema, the contextual business rules for the destination owner type, and the quality lint.  A document that fails returns HTTP 200 with valid false rather than a transport error - the request was well formed, the document was not. 
     * @param {module:com.ultracart.admin.v2.models/SfvbValidateRequest} validate_request CJSON to validate
     * @param {module:com.ultracart.admin.v2/SfvbApi~validateSfvbCjsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbValidationResponse}
     */
  }, {
    key: "validateSfvbCjson",
    value: function validateSfvbCjson(validate_request, callback) {
      var postBody = validate_request;
      // verify the required parameter 'validate_request' is set
      if (validate_request === undefined || validate_request === null) {
        throw new Error("Missing the required parameter 'validate_request' when calling validateSfvbCjson");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbValidationResponse["default"];
      return this.apiClient.callApi('/sfvb/cjson/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the validateSfvbVelocity operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~validateSfvbVelocityCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Velocity template against a theme
     * Theme scoped rather than stateless.  Validation builds a theme template context and evaluates against it.  Also applies the template sandbox, so an agent learns the rule before a write fails. 
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbVelocityValidateRequest} velocity_validate_request Velocity template to validate
     * @param {module:com.ultracart.admin.v2/SfvbApi~validateSfvbVelocityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbValidationResponse}
     */
  }, {
    key: "validateSfvbVelocity",
    value: function validateSfvbVelocity(storefront_oid, theme_oid, velocity_validate_request, callback) {
      var postBody = velocity_validate_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling validateSfvbVelocity");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling validateSfvbVelocity");
      }
      // verify the required parameter 'velocity_validate_request' is set
      if (velocity_validate_request === undefined || velocity_validate_request === null) {
        throw new Error("Missing the required parameter 'velocity_validate_request' when calling validateSfvbVelocity");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'theme_oid': theme_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbValidationResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/velocity/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();