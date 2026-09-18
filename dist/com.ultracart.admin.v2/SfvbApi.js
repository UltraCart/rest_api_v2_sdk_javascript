"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
var _SfvbBlogPostsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbBlogPostsResponse"));
var _SfvbCompileRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbCompileRequest"));
var _SfvbCompileResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbCompileResponse"));
var _SfvbContainerResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerResponse"));
var _SfvbContainerRevertRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerRevertRequest"));
var _SfvbContainerVersion = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerVersion"));
var _SfvbContainerVersionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerVersionsResponse"));
var _SfvbContainerWriteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbContainerWriteRequest"));
var _SfvbElementSchemaResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbElementSchemaResponse"));
var _SfvbElementsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbElementsResponse"));
var _SfvbExperiment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperiment"));
var _SfvbExperimentEndRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperimentEndRequest"));
var _SfvbExperimentObjectivesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperimentObjectivesResponse"));
var _SfvbExperimentStartRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperimentStartRequest"));
var _SfvbExperimentVariationUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperimentVariationUpdateRequest"));
var _SfvbExperimentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbExperimentsResponse"));
var _SfvbFileContentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileContentResponse"));
var _SfvbFileRevertRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileRevertRequest"));
var _SfvbFileSearchRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileSearchRequest"));
var _SfvbFileSearchResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileSearchResponse"));
var _SfvbFileUploadRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileUploadRequest"));
var _SfvbFileUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileUploadUrlResponse"));
var _SfvbFileVersionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileVersionsResponse"));
var _SfvbFileWriteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileWriteRequest"));
var _SfvbFileWriteResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFileWriteResponse"));
var _SfvbFilesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbFilesResponse"));
var _SfvbLibraryEntry = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbLibraryEntry"));
var _SfvbLibraryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbLibraryResponse"));
var _SfvbMenu = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbMenu"));
var _SfvbMenuWriteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbMenuWriteRequest"));
var _SfvbMenusResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbMenusResponse"));
var _SfvbPageAttributeUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageAttributeUpdateRequest"));
var _SfvbPageBlogPostsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageBlogPostsRequest"));
var _SfvbPageBlogPostsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse"));
var _SfvbPageCreateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageCreateRequest"));
var _SfvbPageDuplicateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageDuplicateRequest"));
var _SfvbPageItemsAddRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageItemsAddRequest"));
var _SfvbPageItemsRemoveRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageItemsRemoveRequest"));
var _SfvbPageItemsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageItemsResponse"));
var _SfvbPageListResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageListResponse"));
var _SfvbPageMultimediaRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageMultimediaRequest"));
var _SfvbPageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageResponse"));
var _SfvbPageSelectors = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageSelectors"));
var _SfvbPageSettingsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPageSettingsRequest"));
var _SfvbPreviewAccessRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewAccessRequest"));
var _SfvbPreviewAccessResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewAccessResponse"));
var _SfvbPreviewSessionRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewSessionRequest"));
var _SfvbPreviewSessionResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewSessionResponse"));
var _SfvbPreviewUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbPreviewUrlResponse"));
var _SfvbRenderRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbRenderRequest"));
var _SfvbRenderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbRenderResponse"));
var _SfvbSiteAttributeUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbSiteAttributeUpdateRequest"));
var _SfvbSiteAttributesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbSiteAttributesResponse"));
var _SfvbStorefrontsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbStorefrontsResponse"));
var _SfvbTemplatesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbTemplatesResponse"));
var _SfvbTheme = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbTheme"));
var _SfvbThemeAttributeUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbThemeAttributeUpdateRequest"));
var _SfvbThemeAttributesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/SfvbThemeAttributesResponse"));
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
* @version 4.1.161
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
   * Callback function to receive the result of the addSfvbPageBlogPosts operation.
   * @callback module:com.ultracart.admin.v2/SfvbApi~addSfvbPageBlogPostsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Assign blog posts to a page
   * Adds posts by blog_post_oid, at most 500 at a time.  Every oid must be a post on this storefront, and one that is not changes nothing.  Refused on a page whose selectors choose its blog posts.  Always needs sfvb_publish. 
   * @param {Number} storefront_oid 
   * @param {String} path Page path, for example /blog/
   * @param {module:com.ultracart.admin.v2.models/SfvbPageBlogPostsRequest} page_blog_posts_request Blog posts to assign
   * @param {module:com.ultracart.admin.v2/SfvbApi~addSfvbPageBlogPostsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse}
   */
  return _createClass(SfvbApi, [{
    key: "addSfvbPageBlogPosts",
    value: function addSfvbPageBlogPosts(storefront_oid, path, page_blog_posts_request, callback) {
      var postBody = page_blog_posts_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling addSfvbPageBlogPosts");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling addSfvbPageBlogPosts");
      }
      // verify the required parameter 'page_blog_posts_request' is set
      if (page_blog_posts_request === undefined || page_blog_posts_request === null) {
        throw new Error("Missing the required parameter 'page_blog_posts_request' when calling addSfvbPageBlogPosts");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageBlogPostsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/blog_posts/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addSfvbPageItems operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~addSfvbPageItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign items to a page
     * Adds items by item id, at most 500 at a time, or changes the sort order or url part of items already on the page.  Every id is checked first and one unknown id changes nothing.  Refused on a page whose selectors choose its items.  sort_order is refused unless the page sorts its items by a custom order.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageItemsAddRequest} page_items_add_request Items to assign
     * @param {module:com.ultracart.admin.v2/SfvbApi~addSfvbPageItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageItemsResponse}
     */
  }, {
    key: "addSfvbPageItems",
    value: function addSfvbPageItems(storefront_oid, path, page_items_add_request, callback) {
      var postBody = page_items_add_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling addSfvbPageItems");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling addSfvbPageItems");
      }
      // verify the required parameter 'page_items_add_request' is set
      if (page_items_add_request === undefined || page_items_add_request === null) {
        throw new Error("Missing the required parameter 'page_items_add_request' when calling addSfvbPageItems");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageItemsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/items/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
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
     * Callback function to receive the result of the createSfvbPreviewAccess operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~createSfvbPreviewAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewAccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * One time link that opens a preview in a browser with no UltraCart login
     * The preview URL only works in a browser already signed in to UltraCart on the storefront's own host, and an agent's built in browser never is.  This returns a single use access_url on the storefront host instead.  Opening it gets past the storefront lock, shows the requested theme and applies the requested preview session for the rest of that browser session, then redirects to path.  It expires two minutes after issue or on first use.  Pages opened afterwards carry an X-UltraCart-Preview header of applied or not-applied.  Requires a token that resolves to a user, so use the device authorization flow. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {module:com.ultracart.admin.v2.models/SfvbPreviewAccessRequest} opts.preview_access What the browser should see
     * @param {module:com.ultracart.admin.v2/SfvbApi~createSfvbPreviewAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPreviewAccessResponse}
     */
  }, {
    key: "createSfvbPreviewAccess",
    value: function createSfvbPreviewAccess(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = opts['preview_access'];
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling createSfvbPreviewAccess");
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
      var returnType = _SfvbPreviewAccessResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/preview_access', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Returns a server generated session id to push containers into, and opens the session so that id exists rather than merely being random.  The id is not caller supplied, because concurrent agents choosing their own would be free to collide, and the browser editor's habit of minting one with Math.random is not a property worth carrying into an API.  Expires after eight hours and can be deleted sooner.  Requires a token that resolves to a user, so use the device authorization flow. 
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
     * Callback function to receive the result of the deleteSfvbPageMultimedia operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~deleteSfvbPageMultimediaCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detach an image from a page
     * Name exactly one of code or default.  Removes the page's copy of the image; the source file in the page folder is left alone.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /catalog/dispensers/
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Image code to detach
     * @param {Boolean} opts._default True to detach the default image
     * @param {module:com.ultracart.admin.v2/SfvbApi~deleteSfvbPageMultimediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "deleteSfvbPageMultimedia",
    value: function deleteSfvbPageMultimedia(storefront_oid, path, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteSfvbPageMultimedia");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling deleteSfvbPageMultimedia");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path,
        'code': opts['code'],
        'default': opts['_default']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/multimedia', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the downloadSfvbFile operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~downloadSfvbFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a storefront file's raw bytes
     * Returns the file itself rather than a JSON envelope, for any type including binaries that files/content refuses.  Use this to verify what you uploaded, and note it is the only way to read a file inside a theme that is not active - such a file is served to nobody until the theme is promoted, so it has no public URL to fetch instead.  On success the body is the file; on failure it is the usual JSON error object, so do not assume the content type without checking the status. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {module:com.ultracart.admin.v2/SfvbApi~downloadSfvbFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "downloadSfvbFile",
    value: function downloadSfvbFile(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling downloadSfvbFile");
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
      var accepts = ['application/octet-stream'];
      var returnType = null;
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/download', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the duplicateSfvbPage operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~duplicateSfvbPageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy a page to a new path
     * Copies what the store admin's duplicate copies - settings, items, blog posts, permissions, attributes, selectors, images and the page folder with its body.  The copy goes to the path you choose, under any existing page, with the same path rules as creating a page, and a 409 with the code sfvb.page_exists when that path is taken.  The root page and pages with pages under them cannot be copied.  A page whose folder holds a started experiment is refused, because the copy would share the experiment - end it first.  Translated title and description text is not copied.  Always needs sfvb_publish, because the copy is live as soon as it exists. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbPageDuplicateRequest} page_duplicate_request The page to copy and where
     * @param {module:com.ultracart.admin.v2/SfvbApi~duplicateSfvbPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "duplicateSfvbPage",
    value: function duplicateSfvbPage(storefront_oid, page_duplicate_request, callback) {
      var postBody = page_duplicate_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling duplicateSfvbPage");
      }
      // verify the required parameter 'page_duplicate_request' is set
      if (page_duplicate_request === undefined || page_duplicate_request === null) {
        throw new Error("Missing the required parameter 'page_duplicate_request' when calling duplicateSfvbPage");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/duplicate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the endSfvbExperiment operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~endSfvbExperimentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * End an experiment
     * Ends a running experiment.  With winner_variation_number the winner gets all new visitors, and a page experiment's winning content is promoted into the page by the completion job on its next run, which also emails the merchant.  Without a winner a page experiment's id is cleared from its page body so the page shows variation 0, and a url experiment sends everyone to variation 0.  Visitors already assigned to a url experiment keep their page for up to 30 days.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {Number} experiment_oid 
     * @param {Object} opts Optional parameters
     * @param {module:com.ultracart.admin.v2.models/SfvbExperimentEndRequest} opts.experiment_end_request The winner, if any
     * @param {module:com.ultracart.admin.v2/SfvbApi~endSfvbExperimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperiment}
     */
  }, {
    key: "endSfvbExperiment",
    value: function endSfvbExperiment(storefront_oid, experiment_oid, opts, callback) {
      opts = opts || {};
      var postBody = opts['experiment_end_request'];
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling endSfvbExperiment");
      }
      // verify the required parameter 'experiment_oid' is set
      if (experiment_oid === undefined || experiment_oid === null) {
        throw new Error("Missing the required parameter 'experiment_oid' when calling endSfvbExperiment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'experiment_oid': experiment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbExperiment["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/end', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * owner_type is one of upsell, email, postcardfront, postcardback, item or itemid.  It also says how owner_object_id is read - item and upsell take an oid, itemid takes a merchant item id, and the rest take an esp uuid.  itemid reaches the same containers as item and is the way to address one from a storefront, where data-context-item-id carries the merchant item id and the oid appears nowhere.  Item containers also require container_name.  Theme and page containers are files; read those through files/content. 
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
     * Inspect or diff an earlier version without reverting to it.  The version is addressed through the container that owns it, so a history oid belonging to some other resource cannot be read through this route.  owner_type also says how owner_object_id is read, and itemid addresses an item container by merchant item id. 
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
     * Configuration schema and field card for one element type
     * schema is the draft-07 JSON schema for the element config object and doc is the markdown field card, both as strings.  Either is omitted when none has been published for the element, which is still a 200.  The catalog is published by the visual builder release process, and a republish can take up to an hour to appear here. 
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
     * Callback function to receive the result of the getSfvbExperiment operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbExperimentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read one experiment and its statistics
     * The experiment, its variations and their statistics, and with daily=true each variation's daily rows.  p95_sessions_needed is estimated only after 1000 sessions, and sessions_needed_computed_dts says when.  For a url experiment, router_url is the address visitors must enter through. 
     * @param {Number} storefront_oid 
     * @param {Number} experiment_oid 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.daily Include each variation's daily statistics
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbExperimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperiment}
     */
  }, {
    key: "getSfvbExperiment",
    value: function getSfvbExperiment(storefront_oid, experiment_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbExperiment");
      }
      // verify the required parameter 'experiment_oid' is set
      if (experiment_oid === undefined || experiment_oid === null) {
        throw new Error("Missing the required parameter 'experiment_oid' when calling getSfvbExperiment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'experiment_oid': experiment_oid
      };
      var queryParams = {
        'daily': opts['daily']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbExperiment["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbExperimentObjectives operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbExperimentObjectivesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperimentObjectivesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the objectives an experiment can optimize
     * Each objective with what is measured per session and compared between variations, the usual optimization type, and whether it needs an event name. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbExperimentObjectivesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperimentObjectivesResponse}
     */
  }, {
    key: "getSfvbExperimentObjectives",
    value: function getSfvbExperimentObjectives(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbExperimentObjectives");
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
      var returnType = _SfvbExperimentObjectivesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments/objectives', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Returns the current content, or an earlier version when version is supplied.  Send the body's hash_sha256 back as If-Match when writing.  The ETag header carries the same hash, but a compressing proxy may append a suffix such as -gzip to it, so prefer the body value. 
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
     * Callback function to receive the result of the getSfvbFileUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbFileUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a URL to upload a binary asset to
     * Binary content does not travel through this API as JSON, so uploading an image, font, video or PDF is two steps.  Ask here for a URL, PUT the raw bytes straight to it, then call uploadSfvbFile quoting the key you were given.  The bytes never pass through the API server.  The extension is checked against the accepted type list before a URL is issued, so an unsupported type fails here rather than after you have sent the file.  The URL is short lived and the key is bound to your account. 
     * @param {Number} storefront_oid 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbFileUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileUploadUrlResponse}
     */
  }, {
    key: "getSfvbFileUploadUrl",
    value: function getSfvbFileUploadUrl(storefront_oid, extension, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbFileUploadUrl");
      }
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getSfvbFileUploadUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbFileUploadUrlResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the getSfvbMenu operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbMenu} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read one store menu and its entries
     * The whole tree, in render order.  Page entries carry the page_path they resolve to and item entries the merchant_item_id, rather than the oids the storage keeps.  Menu item oids are not returned at all because a write regenerates every one of them.  Keep hash_sha256 - it is the If-Match a write needs. 
     * @param {Number} storefront_oid 
     * @param {String} code Menu code, matched without regard to case
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbMenu}
     */
  }, {
    key: "getSfvbMenu",
    value: function getSfvbMenu(storefront_oid, code, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbMenu");
      }
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getSfvbMenu");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'code': code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbMenu["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/menus/{code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbMenus operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbMenusCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbMenusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List a storefront's store menus
     * The menus a menu element's menuName can name, sorted by code and without their entries.  A code the active theme's templates ask for but nothing has created is included with unconfigured true - that code renders an empty list today, and writing it creates it.  A menu no template names is marked undeclared, which usually means a menuName is misspelled. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbMenusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbMenusResponse}
     */
  }, {
    key: "getSfvbMenus",
    value: function getSfvbMenus(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbMenus");
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
      var returnType = _SfvbMenusResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/menus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbPage operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbPageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a page's attributes and images
     * What the pageattribute and pageimage elements render for this page.  These are not in any file, which is why a page folder can be empty and its elements still render something.  Attributes and image codes a template declares but nothing has set are included, so the response describes what the page can show rather than only what has been saved. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /catalog/dispensers/
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "getSfvbPage",
    value: function getSfvbPage(storefront_oid, path, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbPage");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getSfvbPage");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbPageBlogPosts operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbPageBlogPostsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read the blog posts assigned to a page
     * The posts the page shows.  uses_selectors is true when the page's blog post selectors choose them instead. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /blog/
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbPageBlogPostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse}
     */
  }, {
    key: "getSfvbPageBlogPosts",
    value: function getSfvbPageBlogPosts(storefront_oid, path, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbPageBlogPosts");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getSfvbPageBlogPosts");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageBlogPostsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/blog_posts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbPageItems operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbPageItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read the items assigned to a page
     * The items on the page with their sort order and url part.  uses_selectors is true when the page's selectors choose its items instead. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbPageItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageItemsResponse}
     */
  }, {
    key: "getSfvbPageItems",
    value: function getSfvbPageItems(storefront_oid, path, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbPageItems");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getSfvbPageItems");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageItemsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSfvbPageSelectors operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbPageSelectorsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageSelectors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a page's selectors
     * The conditions that choose the page's items and blog posts, and whether each set must all match. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbPageSelectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageSelectors}
     */
  }, {
    key: "getSfvbPageSelectors",
    value: function getSfvbPageSelectors(storefront_oid, path, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbPageSelectors");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getSfvbPageSelectors");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageSelectors["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/selectors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Refuses a session that does not exist, so a URL you receive is for a session that was really there.  expires_in_seconds is the time actually remaining, not the configured lifetime.  Needs a token that resolves to a user, because a preview session belongs to the person who created it. 
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
     * Callback function to receive the result of the getSfvbSiteAttributes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbSiteAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbSiteAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a storefront's site attributes
     * The values the siteattribute element and $site.attr render.  These are not in any file or theme.  Attributes a template declares but nothing has set are included with the template's default, so the response describes what the templates can render rather than only what has been saved.  Credentials stored as site attributes are never included. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbSiteAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbSiteAttributesResponse}
     */
  }, {
    key: "getSfvbSiteAttributes",
    value: function getSfvbSiteAttributes(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbSiteAttributes");
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
      var returnType = _SfvbSiteAttributesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/attributes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the getSfvbThemeAttributes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a theme's colors, fonts and settings
     * The values theme.css and the compiled containers resolve at render time.  These do NOT live in any file.  settings.json contains a palette and looks like the answer, but it is the theme's factory template - it supplies defaults for slots that have never been set and is ignored for slots that have, so editing it will not change a color and reading it will not tell you the current one.  Slots a template declares but nothing has ever set are included here, carrying the default they will render with, so the response describes the whole theme rather than the rows that happen to exist. 
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2/SfvbApi~getSfvbThemeAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbThemeAttributesResponse}
     */
  }, {
    key: "getSfvbThemeAttributes",
    value: function getSfvbThemeAttributes(storefront_oid, theme_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getSfvbThemeAttributes");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling getSfvbThemeAttributes");
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
      var returnType = _SfvbThemeAttributesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the insertSfvbPage operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~insertSfvbPageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a page
     * Creates the page and its folder, the way the store admin's add page does.  The parent page must already exist, and the last part of the path may only contain letters, digits, hyphens and underscores - it is refused, not cleaned.  A path that already has a page is refused with a 409 and the code sfvb.page_exists.  Without a group_template the page inherits its parent's templates, or catalog_group.vm directly under the root.  Set attributes and images afterwards with the page attribute and image endpoints, and push the body to the page folder.  Always needs sfvb_publish, because the page is live as soon as it exists.  Deleting, moving and renaming pages stay in the store admin. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbPageCreateRequest} page_create_request The page to create
     * @param {module:com.ultracart.admin.v2/SfvbApi~insertSfvbPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "insertSfvbPage",
    value: function insertSfvbPage(storefront_oid, page_create_request, callback) {
      var postBody = page_create_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertSfvbPage");
      }
      // verify the required parameter 'page_create_request' is set
      if (page_create_request === undefined || page_create_request === null) {
        throw new Error("Missing the required parameter 'page_create_request' when calling insertSfvbPage");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the listSfvbBlogPosts operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbBlogPostsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbBlogPostsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the storefront's blog posts
     * One page of blog posts, newest first, without their bodies.  search matches the title, body, excerpt, url part or author, or a tag exactly.  unassigned marks posts no page shows yet.  Use a post's blog_post_oid to assign it to a page. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Text to search for
     * @param {Number} opts.page Page number, starting at 1
     * @param {Number} opts.page_size Posts per page, 1 to 100, default 50
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbBlogPostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbBlogPostsResponse}
     */
  }, {
    key: "listSfvbBlogPosts",
    value: function listSfvbBlogPosts(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbBlogPosts");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'search': opts['search'],
        'page': opts['page'],
        'page_size': opts['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbBlogPostsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/blog_posts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Addressed the same way as the container itself, so owner_type also says how owner_object_id is read and itemid lists the history of the item container that merchant item id names. 
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
     * Callback function to receive the result of the listSfvbExperiments operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbExperimentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperimentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the storefront's experiments
     * Every experiment that is not deleted, with its variations and their statistics - the same numbers the store admin shows.  Filter by status, by type (page, url, theme, openai), or by the page an experiment runs on.  auto_ends_at says when the engine will end an experiment by itself, and p_value is a one-way ANOVA across all variations.  Read one experiment for its daily statistics. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.status Running or Ended
     * @param {String} opts.type page, url, theme or openai
     * @param {String} opts.path Only experiments on this page, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbExperimentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperimentsResponse}
     */
  }, {
    key: "listSfvbExperiments",
    value: function listSfvbExperiments(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbExperiments");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'status': opts['status'],
        'type': opts['type'],
        'path': opts['path']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbExperimentsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the listSfvbPages operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbPagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the storefront's pages
     * Every page with its settings, sorted by path with the root first.  Hidden pages are included.  Pass under to list one page and everything below it.  Read from the same cached catalog the admin page tree uses, so a page created a moment ago can take a moment to appear here - read it directly with the single-page read to confirm a write. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.under Only this page and the pages below it, for example /lp/
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageListResponse}
     */
  }, {
    key: "listSfvbPages",
    value: function listSfvbPages(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbPages");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'under': opts['under']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbPageListResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the listSfvbTemplates operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~listSfvbTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbTemplatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the active theme's templates
     * Each template with the page type it declares and what it can render - items, sub-pages, blog posts, pagination, visual builder containers.  A page's group_template names one of these.  The storefront's fixed templates, such as checkout and my account, are flagged system and must never be assigned to a page. 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.page_type Only templates declaring this page type, for example group
     * @param {module:com.ultracart.admin.v2/SfvbApi~listSfvbTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbTemplatesResponse}
     */
  }, {
    key: "listSfvbTemplates",
    value: function listSfvbTemplates(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling listSfvbTemplates");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'page_type': opts['page_type']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SfvbTemplatesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Validation is mandatory and runs here regardless of whether the caller validated first.  The previous value is snapshotted before the write, so the change can be reverted.  Side effects the visual builder performs on save, such as upsell screenshot regeneration and email content review flagging, are applied too.  owner_type also says how owner_object_id is read; send itemid to address an item container by merchant item id rather than by oid.  Either way the history records the one canonical address, so a container written under one spelling is listed and reverted under the other. 
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
     * Callback function to receive the result of the putSfvbExperimentVariation operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbExperimentVariationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause or resume a variation
     * Stops or resumes sending new visitors to one variation of a running experiment.  Visitors already assigned keep seeing it.  Variation 0 cannot be paused, because the split falls back to it, and the last variation still receiving visitors cannot be paused.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {Number} experiment_oid 
     * @param {Number} variation_number 
     * @param {module:com.ultracart.admin.v2.models/SfvbExperimentVariationUpdateRequest} experiment_variation_update_request Pause or resume
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbExperimentVariationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperiment}
     */
  }, {
    key: "putSfvbExperimentVariation",
    value: function putSfvbExperimentVariation(storefront_oid, experiment_oid, variation_number, experiment_variation_update_request, callback) {
      var postBody = experiment_variation_update_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbExperimentVariation");
      }
      // verify the required parameter 'experiment_oid' is set
      if (experiment_oid === undefined || experiment_oid === null) {
        throw new Error("Missing the required parameter 'experiment_oid' when calling putSfvbExperimentVariation");
      }
      // verify the required parameter 'variation_number' is set
      if (variation_number === undefined || variation_number === null) {
        throw new Error("Missing the required parameter 'variation_number' when calling putSfvbExperimentVariation");
      }
      // verify the required parameter 'experiment_variation_update_request' is set
      if (experiment_variation_update_request === undefined || experiment_variation_update_request === null) {
        throw new Error("Missing the required parameter 'experiment_variation_update_request' when calling putSfvbExperimentVariation");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'experiment_oid': experiment_oid,
        'variation_number': variation_number
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbExperiment["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments/{experiment_oid}/variations/{variation_number}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Callback function to receive the result of the putSfvbMenu operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbMenu} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a store menu's entries
     * A whole menu replace, not a merge - what you send is what the menu holds afterwards, so read it, change the tree and send it back.  Omitting items changes only the title; sending an empty array empties the menu.  Writing a code that does not exist creates it.  Every entry is checked before any of it is written, including that a merchant_item_id and a page_path actually resolve, so a tree with one bad entry changes nothing.  Always needs sfvb_publish, because a menu is shared by every theme and there is no dormant copy to change instead. 
     * @param {Number} storefront_oid 
     * @param {String} code Menu code, matched without regard to case
     * @param {module:com.ultracart.admin.v2.models/SfvbMenuWriteRequest} menu_write_request The menu's replacement contents
     * @param {Object} opts Optional parameters
     * @param {String} opts.If_Match Content hash from the last read.  Required when the menu already exists; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbMenu}
     */
  }, {
    key: "putSfvbMenu",
    value: function putSfvbMenu(storefront_oid, code, menu_write_request, opts, callback) {
      opts = opts || {};
      var postBody = menu_write_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbMenu");
      }
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling putSfvbMenu");
      }
      // verify the required parameter 'menu_write_request' is set
      if (menu_write_request === undefined || menu_write_request === null) {
        throw new Error("Missing the required parameter 'menu_write_request' when calling putSfvbMenu");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'code': code
      };
      var queryParams = {};
      var headerParams = {
        'If-Match': opts['If_Match']
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbMenu["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/menus/{code}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbPageAttributes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbPageAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a page's attributes
     * A partial update.  Only the attributes you name are changed.  Every entry is checked before any is written.  List, slider, item set, page collection and video list attributes are refused - edit those in the page editor.  Always needs sfvb_publish, because a page's attributes are shared by every theme and there is no dormant copy to change instead. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /catalog/dispensers/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageAttributeUpdateRequest} page_attribute_update_request Attributes to change
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbPageAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "putSfvbPageAttributes",
    value: function putSfvbPageAttributes(storefront_oid, path, page_attribute_update_request, callback) {
      var postBody = page_attribute_update_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbPageAttributes");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putSfvbPageAttributes");
      }
      // verify the required parameter 'page_attribute_update_request' is set
      if (page_attribute_update_request === undefined || page_attribute_update_request === null) {
        throw new Error("Missing the required parameter 'page_attribute_update_request' when calling putSfvbPageAttributes");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/attributes', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbPageMultimedia operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbPageMultimediaCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach an image to a page
     * Upload the image with files/upload to the page path followed by a filename first, then name that filename here as either the default image or an image code.  The default image is what a pageimage element with no pageImageCode renders, and what a subgroup tile shows.  Replaces whatever that slot held.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /catalog/dispensers/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageMultimediaRequest} page_multimedia_request Image to attach
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbPageMultimediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "putSfvbPageMultimedia",
    value: function putSfvbPageMultimedia(storefront_oid, path, page_multimedia_request, callback) {
      var postBody = page_multimedia_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbPageMultimedia");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putSfvbPageMultimedia");
      }
      // verify the required parameter 'page_multimedia_request' is set
      if (page_multimedia_request === undefined || page_multimedia_request === null) {
        throw new Error("Missing the required parameter 'page_multimedia_request' when calling putSfvbPageMultimedia");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/multimedia', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbPageSelectors operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbPageSelectorsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageSelectors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a page's selectors
     * Each list you send replaces that whole set, and an empty list clears it.  A list you leave out is not touched.  The page's items or blog posts are recalculated from the new selectors straight away.  While a page has item selectors its items cannot be assigned by hand.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageSelectors} page_selectors_request The selector sets to replace
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbPageSelectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageSelectors}
     */
  }, {
    key: "putSfvbPageSelectors",
    value: function putSfvbPageSelectors(storefront_oid, path, page_selectors_request, callback) {
      var postBody = page_selectors_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbPageSelectors");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putSfvbPageSelectors");
      }
      // verify the required parameter 'page_selectors_request' is set
      if (page_selectors_request === undefined || page_selectors_request === null) {
        throw new Error("Missing the required parameter 'page_selectors_request' when calling putSfvbPageSelectors");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageSelectors["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/selectors', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbPageSettings operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbPageSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a page's settings
     * A partial update.  Only the fields you send change - title, description, templates, visibility, sitemap exclusion, sort orders, items per page and page type.  Unlike the store admin's page save, the page's attributes, images, items, selectors and permissions are left exactly as they are.  Fields that would move or rename the page, and fields this endpoint does not know, are refused.  The root page cannot be hidden.  Always needs sfvb_publish, because page settings are live. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageSettingsRequest} page_settings_request The settings to change
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbPageSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageResponse}
     */
  }, {
    key: "putSfvbPageSettings",
    value: function putSfvbPageSettings(storefront_oid, path, page_settings_request, callback) {
      var postBody = page_settings_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbPageSettings");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putSfvbPageSettings");
      }
      // verify the required parameter 'page_settings_request' is set
      if (page_settings_request === undefined || page_settings_request === null) {
        throw new Error("Missing the required parameter 'page_settings_request' when calling putSfvbPageSettings");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/settings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * Stores compiled containers against a session created by createSfvbPreviewSession.  Replaces whatever the session held.  The session must exist - this does not create one, so a deleted, expired or never issued id is a 404 rather than a new session.  Nothing durable is written.  Requires a token that resolves to a user, so use the device authorization flow. 
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
     * Callback function to receive the result of the putSfvbSiteAttributes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbSiteAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbSiteAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a storefront's site attributes
     * A partial update.  Only the attributes you name are changed.  Every entry is checked before any is written.  List, video list, mailing list and item set attributes are refused, and so are the General screen settings other than the title, the SEO description and keywords and the social account names.  Credentials are refused.  Always needs sfvb_publish, because every theme reads the same attributes and there is no dormant copy to change instead.  The admin General screen saves the whole storefront, so a merchant with it open can still overwrite a change made here. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbSiteAttributeUpdateRequest} site_attribute_update_request Attributes to change
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbSiteAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbSiteAttributesResponse}
     */
  }, {
    key: "putSfvbSiteAttributes",
    value: function putSfvbSiteAttributes(storefront_oid, site_attribute_update_request, callback) {
      var postBody = site_attribute_update_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbSiteAttributes");
      }
      // verify the required parameter 'site_attribute_update_request' is set
      if (site_attribute_update_request === undefined || site_attribute_update_request === null) {
        throw new Error("Missing the required parameter 'site_attribute_update_request' when calling putSfvbSiteAttributes");
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
      var returnType = _SfvbSiteAttributesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/attributes', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the putSfvbThemeAttributes operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~putSfvbThemeAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeAttributesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a theme's colors, fonts and settings
     * A partial update.  Only the slots you name are changed and every other slot on the theme keeps its value, so there is no need to send the whole set back to change one color.  Send a whole palette in one call rather than one call per color - they are applied together, so the storefront never renders half of a change.  Needs sfvb_publish when the theme is the one serving live traffic, because a color is referenced by name from every template that uses it and one write repaints the whole storefront at once.  On a dormant theme sfvb_write is enough, which is what makes duplicate-then-restyle work. 
     * @param {Number} storefront_oid 
     * @param {Number} theme_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbThemeAttributeUpdateRequest} attribute_update_request Slots to change
     * @param {module:com.ultracart.admin.v2/SfvbApi~putSfvbThemeAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbThemeAttributesResponse}
     */
  }, {
    key: "putSfvbThemeAttributes",
    value: function putSfvbThemeAttributes(storefront_oid, theme_oid, attribute_update_request, callback) {
      var postBody = attribute_update_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling putSfvbThemeAttributes");
      }
      // verify the required parameter 'theme_oid' is set
      if (theme_oid === undefined || theme_oid === null) {
        throw new Error("Missing the required parameter 'theme_oid' when calling putSfvbThemeAttributes");
      }
      // verify the required parameter 'attribute_update_request' is set
      if (attribute_update_request === undefined || attribute_update_request === null) {
        throw new Error("Missing the required parameter 'attribute_update_request' when calling putSfvbThemeAttributes");
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
      var returnType = _SfvbThemeAttributesResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/themes/{theme_oid}/attributes', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the removeSfvbPageBlogPosts operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~removeSfvbPageBlogPostsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Take blog posts off a page
     * Removes posts by blog_post_oid, at most 500 at a time.  Every oid must be on the page, and one that is not changes nothing.  The posts themselves are not touched.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /blog/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageBlogPostsRequest} page_blog_posts_request Blog posts to take off the page
     * @param {module:com.ultracart.admin.v2/SfvbApi~removeSfvbPageBlogPostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageBlogPostsResponse}
     */
  }, {
    key: "removeSfvbPageBlogPosts",
    value: function removeSfvbPageBlogPosts(storefront_oid, path, page_blog_posts_request, callback) {
      var postBody = page_blog_posts_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling removeSfvbPageBlogPosts");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling removeSfvbPageBlogPosts");
      }
      // verify the required parameter 'page_blog_posts_request' is set
      if (page_blog_posts_request === undefined || page_blog_posts_request === null) {
        throw new Error("Missing the required parameter 'page_blog_posts_request' when calling removeSfvbPageBlogPosts");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageBlogPostsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/blog_posts/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the removeSfvbPageItems operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~removeSfvbPageItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbPageItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Take items off a page
     * Removes items by item id, at most 500 at a time.  Every id must be on the page, and one that is not changes nothing.  The items themselves are not touched.  Refused on a page whose selectors choose its items.  Always needs sfvb_publish. 
     * @param {Number} storefront_oid 
     * @param {String} path Page path, for example /lp/spring-sale/
     * @param {module:com.ultracart.admin.v2.models/SfvbPageItemsRemoveRequest} page_items_remove_request Items to take off the page
     * @param {module:com.ultracart.admin.v2/SfvbApi~removeSfvbPageItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbPageItemsResponse}
     */
  }, {
    key: "removeSfvbPageItems",
    value: function removeSfvbPageItems(storefront_oid, path, page_items_remove_request, callback) {
      var postBody = page_items_remove_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling removeSfvbPageItems");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling removeSfvbPageItems");
      }
      // verify the required parameter 'page_items_remove_request' is set
      if (page_items_remove_request === undefined || page_items_remove_request === null) {
        throw new Error("Missing the required parameter 'page_items_remove_request' when calling removeSfvbPageItems");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbPageItemsResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/pages/items/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * The restore is itself snapshotted, so a revert can be undone in turn.  Reverting to an entry recorded before the container existed removes it again.  Addressed through the owning container and guarded by If-Match, because a revert overwrites live content just as much as an ordinary write does.  owner_type also says how owner_object_id is read, so a version written by oid can be reverted by merchant item id and the other way round. 
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
     * Callback function to receive the result of the startSfvbExperiment operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~startSfvbExperimentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbExperiment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start an experiment
     * type page starts an experiment element already saved in a page body - send path, slot and widget_id, and its name, objective, duration and variations are read from the element with the builder's rules (2 to 5 variations numbered 0 up with no gaps, 3 to 90 days, traffic on all or none adding up to 100).  The new id is written into the element and the body is saved, so pull it again before the next edit.  type url splits visitors between existing pages at router_url, and always ends by itself after duration_days.  Always needs sfvb_publish, because visitors are split as soon as it starts. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbExperimentStartRequest} experiment_start_request The experiment to start
     * @param {module:com.ultracart.admin.v2/SfvbApi~startSfvbExperimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbExperiment}
     */
  }, {
    key: "startSfvbExperiment",
    value: function startSfvbExperiment(storefront_oid, experiment_start_request, callback) {
      var postBody = experiment_start_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling startSfvbExperiment");
      }
      // verify the required parameter 'experiment_start_request' is set
      if (experiment_start_request === undefined || experiment_start_request === null) {
        throw new Error("Missing the required parameter 'experiment_start_request' when calling startSfvbExperiment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _SfvbExperiment["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/experiments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the uploadSfvbFile operation.
     * @callback module:com.ultracart.admin.v2/SfvbApi~uploadSfvbFileCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/SfvbFileWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Store a binary asset that was already uploaded
     * The second half of the two step upload.  The bytes are fetched from the key, checked against the extension they claim to be, and written exactly as a text write is - so the same If-Match precondition, the same read only refusal and the same publish gate apply.  An SVG is sanitized before it is stored.  Writing outside /themes/ requires sfvb_publish, because anything served off the storefront root is live by definition. 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/SfvbFileUploadRequest} file_upload_request Where to store the uploaded bytes
     * @param {Object} opts Optional parameters
     * @param {String} opts.If_Match Content hash from the last read.  Required when the file already exists; 428 when absent, 412 when stale.
     * @param {module:com.ultracart.admin.v2/SfvbApi~uploadSfvbFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/SfvbFileWriteResponse}
     */
  }, {
    key: "uploadSfvbFile",
    value: function uploadSfvbFile(storefront_oid, file_upload_request, opts, callback) {
      opts = opts || {};
      var postBody = file_upload_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling uploadSfvbFile");
      }
      // verify the required parameter 'file_upload_request' is set
      if (file_upload_request === undefined || file_upload_request === null) {
        throw new Error("Missing the required parameter 'file_upload_request' when calling uploadSfvbFile");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {
        'If-Match': opts['If_Match']
      };
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SfvbFileWriteResponse["default"];
      return this.apiClient.callApi('/sfvb/storefronts/{storefront_oid}/files/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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