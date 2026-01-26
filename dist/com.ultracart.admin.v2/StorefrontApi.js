"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddLibraryItemRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/AddLibraryItemRequest"));
var _ApplyLibraryItemRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ApplyLibraryItemRequest"));
var _ApplyLibraryItemResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ApplyLibraryItemResponse"));
var _BaseResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/BaseResponse"));
var _CountriesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CountriesResponse"));
var _EmailBaseTemplateListResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailBaseTemplateListResponse"));
var _EmailCampaign = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaign"));
var _EmailCampaignFolder = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaignFolder"));
var _EmailCampaignFolderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaignFolderResponse"));
var _EmailCampaignFoldersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaignFoldersResponse"));
var _EmailCampaignResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaignResponse"));
var _EmailCampaignsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCampaignsResponse"));
var _EmailClicksResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailClicksResponse"));
var _EmailCommseq = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseq"));
var _EmailCommseqEmail = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmail"));
var _EmailCommseqEmailResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmailResponse"));
var _EmailCommseqEmailSendTestRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest"));
var _EmailCommseqEmailSendTestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmailSendTestResponse"));
var _EmailCommseqEmailsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmailsRequest"));
var _EmailCommseqEmailsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqEmailsResponse"));
var _EmailCommseqPostcard = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcard"));
var _EmailCommseqPostcardResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcardResponse"));
var _EmailCommseqPostcardSendTestRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest"));
var _EmailCommseqPostcardSendTestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse"));
var _EmailCommseqPostcardsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest"));
var _EmailCommseqPostcardsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse"));
var _EmailCommseqResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqResponse"));
var _EmailCommseqSequenceTestRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest"));
var _EmailCommseqSequenceTestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqSequenceTestResponse"));
var _EmailCommseqSmsSendTestRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest"));
var _EmailCommseqSmsSendTestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqSmsSendTestResponse"));
var _EmailCommseqStatResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqStatResponse"));
var _EmailCommseqStepLogsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqStepLogsResponse"));
var _EmailCommseqWebhookSendTestRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest"));
var _EmailCommseqWebhookSendTestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse"));
var _EmailCommseqsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCommseqsResponse"));
var _EmailCustomer = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCustomer"));
var _EmailCustomerEditorUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse"));
var _EmailCustomersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailCustomersResponse"));
var _EmailDashboardActivityResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailDashboardActivityResponse"));
var _EmailDashboardStatsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailDashboardStatsResponse"));
var _EmailDomain = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailDomain"));
var _EmailEditorTokenResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailEditorTokenResponse"));
var _EmailEditorValuesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailEditorValuesResponse"));
var _EmailFlow = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlow"));
var _EmailFlowBackPopulateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest"));
var _EmailFlowBackPopulateResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowBackPopulateResponse"));
var _EmailFlowFolder = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowFolder"));
var _EmailFlowFolderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowFolderResponse"));
var _EmailFlowFoldersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowFoldersResponse"));
var _EmailFlowResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowResponse"));
var _EmailFlowsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailFlowsResponse"));
var _EmailGlobalSettings = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailGlobalSettings"));
var _EmailGlobalSettingsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailGlobalSettingsResponse"));
var _EmailGlobalUnsubscribeRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest"));
var _EmailGlobalUnsubscribeResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse"));
var _EmailHistogramPropertyNamesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse"));
var _EmailHistogramPropertyValuesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailHistogramPropertyValuesResponse"));
var _EmailList = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailList"));
var _EmailListArchiveResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListArchiveResponse"));
var _EmailListCustomersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListCustomersResponse"));
var _EmailListResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListResponse"));
var _EmailListSegmentFolder = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListSegmentFolder"));
var _EmailListSegmentFolderResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListSegmentFolderResponse"));
var _EmailListSegmentFoldersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListSegmentFoldersResponse"));
var _EmailListSubscribeResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListSubscribeResponse"));
var _EmailListsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailListsResponse"));
var _EmailOrdersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailOrdersResponse"));
var _EmailPerformanceResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailPerformanceResponse"));
var _EmailPlan = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailPlan"));
var _EmailPlanResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailPlanResponse"));
var _EmailPostcardTrackingResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailPostcardTrackingResponse"));
var _EmailRateLimitersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailRateLimitersResponse"));
var _EmailSegment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegment"));
var _EmailSegmentArchiveResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegmentArchiveResponse"));
var _EmailSegmentCustomersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegmentCustomersResponse"));
var _EmailSegmentDownloadPrepareResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse"));
var _EmailSegmentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegmentResponse"));
var _EmailSegmentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSegmentsResponse"));
var _EmailSendingDomainResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSendingDomainResponse"));
var _EmailSendingDomainsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSendingDomainsResponse"));
var _EmailSettings = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSettings"));
var _EmailSettingsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSettingsResponse"));
var _EmailSmsOrdersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailSmsOrdersResponse"));
var _EmailStatPostcardSummaryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest"));
var _EmailStatPostcardSummaryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse"));
var _EmailStatSmsSummaryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatSmsSummaryRequest"));
var _EmailStatSmsSummaryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatSmsSummaryResponse"));
var _EmailStatSummaryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatSummaryRequest"));
var _EmailStatSummaryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStatSummaryResponse"));
var _EmailStepStatRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStepStatRequest"));
var _EmailStepStatResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStepStatResponse"));
var _EmailStepWaitingRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStepWaitingRequest"));
var _EmailStepWaitingResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailStepWaitingResponse"));
var _EmailTemplate = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailTemplate"));
var _EmailTemplatesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailTemplatesResponse"));
var _EmailThirdPartyListImportRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest"));
var _EmailThirdPartyProvidersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse"));
var _EmailWebhookEditorValuesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
var _Experiment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Experiment"));
var _ExperimentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ExperimentResponse"));
var _ExperimentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ExperimentsResponse"));
var _FileManagerPageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/FileManagerPageResponse"));
var _FileManagerUploadRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/FileManagerUploadRequest"));
var _FileManagerUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/FileManagerUploadUrlResponse"));
var _GeocodeRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GeocodeRequest"));
var _GeocodeResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/GeocodeResponse"));
var _LibraryFilterValuesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LibraryFilterValuesResponse"));
var _LibraryItem = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LibraryItem"));
var _LibraryItemQuery = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LibraryItemQuery"));
var _LibraryItemResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LibraryItemResponse"));
var _LibraryItemsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LibraryItemsResponse"));
var _LookupRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LookupRequest"));
var _LookupResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/LookupResponse"));
var _PricingTiersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/PricingTiersResponse"));
var _PublishLibraryItemRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/PublishLibraryItemRequest"));
var _RulerValidationRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/RulerValidationRequest"));
var _RulerValidationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/RulerValidationResponse"));
var _ScreenRecordingHeatmapIndexRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest"));
var _ScreenRecordingHeatmapIndexResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse"));
var _ScreenRecordingHeatmapRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest"));
var _ScreenRecordingHeatmapReset = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset"));
var _ScreenRecordingHeatmapResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingHeatmapResponse"));
var _ScreenRecordingMerchantNotesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingMerchantNotesRequest"));
var _ScreenRecordingPageViewDataResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingPageViewDataResponse"));
var _ScreenRecordingQueryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingQueryRequest"));
var _ScreenRecordingQueryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingQueryResponse"));
var _ScreenRecordingResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingResponse"));
var _ScreenRecordingSegment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingSegment"));
var _ScreenRecordingSegmentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse"));
var _ScreenRecordingSegmentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingSegmentsResponse"));
var _ScreenRecordingSettings = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingSettings"));
var _ScreenRecordingSettingsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingSettingsResponse"));
var _ScreenRecordingTagsRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingTagsRequest"));
var _ScreenRecordingTagsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenRecordingTagsResponse"));
var _ScreenshotsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ScreenshotsResponse"));
var _StoreFrontPageContentAttribute = _interopRequireDefault(require("../com.ultracart.admin.v2.models/StoreFrontPageContentAttribute"));
var _StoreFrontsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/StoreFrontsResponse"));
var _ThumbnailParametersRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ThumbnailParametersRequest"));
var _ThumbnailParametersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ThumbnailParametersResponse"));
var _TransactionEmail = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TransactionEmail"));
var _TransactionEmailListResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TransactionEmailListResponse"));
var _TransactionEmailResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TransactionEmailResponse"));
var _Twilio = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Twilio"));
var _TwilioResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TwilioResponse"));
var _TwiliosResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TwiliosResponse"));
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
* Storefront service.
* @module com.ultracart.admin.v2/StorefrontApi
* @version 4.1.44
*/
var StorefrontApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new StorefrontApi. 
  * @alias module:com.ultracart.admin.v2/StorefrontApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StorefrontApi(apiClient) {
    _classCallCheck(this, StorefrontApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addToLibrary operation.
   * @callback module:com.ultracart.admin.v2/StorefrontApi~addToLibraryCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add to library
   * @param {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} add_library_request New library item request
   * @param {module:com.ultracart.admin.v2/StorefrontApi~addToLibraryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
   */
  return _createClass(StorefrontApi, [{
    key: "addToLibrary",
    value: function addToLibrary(add_library_request, callback) {
      var postBody = add_library_request;
      // verify the required parameter 'add_library_request' is set
      if (add_library_request === undefined || add_library_request === null) {
        throw new Error("Missing the required parameter 'add_library_request' when calling addToLibrary");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the applyToStoreFront operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~applyToStoreFrontCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply library item to storefront.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} apply_library_request New library item
     * @param {module:com.ultracart.admin.v2/StorefrontApi~applyToStoreFrontCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ApplyLibraryItemResponse}
     */
  }, {
    key: "applyToStoreFront",
    value: function applyToStoreFront(apply_library_request, callback) {
      var postBody = apply_library_request;
      // verify the required parameter 'apply_library_request' is set
      if (apply_library_request === undefined || apply_library_request === null) {
        throw new Error("Missing the required parameter 'apply_library_request' when calling applyToStoreFront");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplyLibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/apply', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the archiveEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~archiveEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListArchiveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive email list
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~archiveEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListArchiveResponse}
     */
  }, {
    key: "archiveEmailList",
    value: function archiveEmailList(storefront_oid, email_list_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling archiveEmailList");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling archiveEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListArchiveResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/archive', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the archiveEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~archiveEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentArchiveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~archiveEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentArchiveResponse}
     */
  }, {
    key: "archiveEmailSegment",
    value: function archiveEmailSegment(storefront_oid, email_segment_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling archiveEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling archiveEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentArchiveResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/archive', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the backPopulateEmailFlow operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~backPopulateEmailFlowCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Back populate email flow
     * @param {Number} storefront_oid 
     * @param {String} email_flow_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} back_populate_request The request to back populate
     * @param {module:com.ultracart.admin.v2/StorefrontApi~backPopulateEmailFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowBackPopulateResponse}
     */
  }, {
    key: "backPopulateEmailFlow",
    value: function backPopulateEmailFlow(storefront_oid, email_flow_uuid, back_populate_request, callback) {
      var postBody = back_populate_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling backPopulateEmailFlow");
      }
      // verify the required parameter 'email_flow_uuid' is set
      if (email_flow_uuid === undefined || email_flow_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_uuid' when calling backPopulateEmailFlow");
      }
      // verify the required parameter 'back_populate_request' is set
      if (back_populate_request === undefined || back_populate_request === null) {
        throw new Error("Missing the required parameter 'back_populate_request' when calling backPopulateEmailFlow");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_uuid': email_flow_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailFlowBackPopulateResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows/{email_flow_uuid}/backfill', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the checkDownloadEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~checkDownloadEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check download of email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {String} email_segment_rebuild_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~checkDownloadEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse}
     */
  }, {
    key: "checkDownloadEmailSegment",
    value: function checkDownloadEmailSegment(storefront_oid, email_segment_uuid, email_segment_rebuild_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling checkDownloadEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling checkDownloadEmailSegment");
      }
      // verify the required parameter 'email_segment_rebuild_uuid' is set
      if (email_segment_rebuild_uuid === undefined || email_segment_rebuild_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_rebuild_uuid' when calling checkDownloadEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid,
        'email_segment_rebuild_uuid': email_segment_rebuild_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentDownloadPrepareResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/downloadPrepare/{email_segment_rebuild_uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the cloneEmailCampaign operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~cloneEmailCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone email campaign
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.target_storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~cloneEmailCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignResponse}
     */
  }, {
    key: "cloneEmailCampaign",
    value: function cloneEmailCampaign(storefront_oid, email_campaign_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling cloneEmailCampaign");
      }
      // verify the required parameter 'email_campaign_uuid' is set
      if (email_campaign_uuid === undefined || email_campaign_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_uuid' when calling cloneEmailCampaign");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_uuid': email_campaign_uuid
      };
      var queryParams = {
        'target_storefront_oid': opts['target_storefront_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/clone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the cloneEmailFlow operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~cloneEmailFlowCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone email flow
     * @param {Number} storefront_oid 
     * @param {String} email_flow_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.target_storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~cloneEmailFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowResponse}
     */
  }, {
    key: "cloneEmailFlow",
    value: function cloneEmailFlow(storefront_oid, email_flow_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling cloneEmailFlow");
      }
      // verify the required parameter 'email_flow_uuid' is set
      if (email_flow_uuid === undefined || email_flow_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_uuid' when calling cloneEmailFlow");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_uuid': email_flow_uuid
      };
      var queryParams = {
        'target_storefront_oid': opts['target_storefront_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailFlowResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows/{email_flow_uuid}/clone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createEmailSendingDomain operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~createEmailSendingDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create email campaign
     * @param {String} domain 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~createEmailSendingDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainResponse}
     */
  }, {
    key: "createEmailSendingDomain",
    value: function createEmailSendingDomain(domain, callback) {
      var postBody = null;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling createEmailSendingDomain");
      }
      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains/{domain}/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createEmailSendingDomain2 operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~createEmailSendingDomain2Callback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create email sending domain for various providers
     * @param {module:com.ultracart.admin.v2.models/EmailDomain} email_domain EmailDomain
     * @param {module:com.ultracart.admin.v2/StorefrontApi~createEmailSendingDomain2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainResponse}
     */
  }, {
    key: "createEmailSendingDomain2",
    value: function createEmailSendingDomain2(email_domain, callback) {
      var postBody = email_domain;
      // verify the required parameter 'email_domain' is set
      if (email_domain === undefined || email_domain === null) {
        throw new Error("Missing the required parameter 'email_domain' when calling createEmailSendingDomain2");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createFsDirectory operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~createFsDirectoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create file manager directory
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {Number} opts.parent_storefront_fs_directory_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~createFsDirectoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/FileManagerPageResponse}
     */
  }, {
    key: "createFsDirectory",
    value: function createFsDirectory(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createFsDirectory");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'name': opts['name'],
        'parent_storefront_fs_directory_oid': opts['parent_storefront_fs_directory_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileManagerPageResponse["default"];
      return this.apiClient.callApi('/storefront/{id}/fs/dir', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createTwilioAccount operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~createTwilioAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TwilioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Twilio account
     * @param {module:com.ultracart.admin.v2.models/Twilio} twilio Twilio
     * @param {module:com.ultracart.admin.v2/StorefrontApi~createTwilioAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TwilioResponse}
     */
  }, {
    key: "createTwilioAccount",
    value: function createTwilioAccount(twilio, callback) {
      var postBody = twilio;
      // verify the required parameter 'twilio' is set
      if (twilio === undefined || twilio === null) {
        throw new Error("Missing the required parameter 'twilio' when calling createTwilioAccount");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TwilioResponse["default"];
      return this.apiClient.callApi('/storefront/twilio/accounts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailCampaignFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailCampaignFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email campaignFolder
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailCampaignFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailCampaignFolder",
    value: function deleteEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailCampaignFolder");
      }
      // verify the required parameter 'email_campaign_folder_uuid' is set
      if (email_campaign_folder_uuid === undefined || email_campaign_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_folder_uuid' when calling deleteEmailCampaignFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_folder_uuid': email_campaign_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailCommseqStat operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailCommseqStatCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete communication sequence stats
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailCommseqStatCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteEmailCommseqStat",
    value: function deleteEmailCommseqStat(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailCommseqStat");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling deleteEmailCommseqStat");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stat', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email email
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailEmail",
    value: function deleteEmailEmail(storefront_oid, commseq_email_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailEmail");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling deleteEmailEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailFlowFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailFlowFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email flowFolder
     * @param {Number} storefront_oid 
     * @param {String} email_flow_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailFlowFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailFlowFolder",
    value: function deleteEmailFlowFolder(storefront_oid, email_flow_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailFlowFolder");
      }
      // verify the required parameter 'email_flow_folder_uuid' is set
      if (email_flow_folder_uuid === undefined || email_flow_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_folder_uuid' when calling deleteEmailFlowFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_folder_uuid': email_flow_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailListCustomer operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailListCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email list customer
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {String} email_customer_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailListCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailListCustomer",
    value: function deleteEmailListCustomer(storefront_oid, email_list_uuid, email_customer_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailListCustomer");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling deleteEmailListCustomer");
      }
      // verify the required parameter 'email_customer_uuid' is set
      if (email_customer_uuid === undefined || email_customer_uuid === null) {
        throw new Error("Missing the required parameter 'email_customer_uuid' when calling deleteEmailListCustomer");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid,
        'email_customer_uuid': email_customer_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers/{email_customer_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailListSegmentFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailListSegmentFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email ListSegmentFolder
     * @param {Number} storefront_oid 
     * @param {String} email_list_segment_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailListSegmentFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailListSegmentFolder",
    value: function deleteEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailListSegmentFolder");
      }
      // verify the required parameter 'email_list_segment_folder_uuid' is set
      if (email_list_segment_folder_uuid === undefined || email_list_segment_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_segment_folder_uuid' when calling deleteEmailListSegmentFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_segment_folder_uuid': email_list_segment_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailPostcard operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailPostcardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete email postcard
     * @param {Number} storefront_oid 
     * @param {String} commseq_postcard_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailPostcardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailPostcard",
    value: function deleteEmailPostcard(storefront_oid, commseq_postcard_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteEmailPostcard");
      }
      // verify the required parameter 'commseq_postcard_uuid' is set
      if (commseq_postcard_uuid === undefined || commseq_postcard_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_postcard_uuid' when calling deleteEmailPostcard");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_postcard_uuid': commseq_postcard_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEmailSendingDomain operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteEmailSendingDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete email campaign
     * @param {String} domain 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteEmailSendingDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteEmailSendingDomain",
    value: function deleteEmailSendingDomain(domain, callback) {
      var postBody = null;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling deleteEmailSendingDomain");
      }
      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains/{domain}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteExperiment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteExperimentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete experiment
     * @param {Number} storefront_oid 
     * @param {Number} storefront_experiment_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteExperimentCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteExperiment",
    value: function deleteExperiment(storefront_oid, storefront_experiment_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteExperiment");
      }
      // verify the required parameter 'storefront_experiment_oid' is set
      if (storefront_experiment_oid === undefined || storefront_experiment_oid === null) {
        throw new Error("Missing the required parameter 'storefront_experiment_oid' when calling deleteExperiment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'storefront_experiment_oid': storefront_experiment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/experiments/{storefront_experiment_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFsFile operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteFsFileCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete file manager directory
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parent_storefront_fs_directory_oid 
     * @param {Number} opts.storefront_fs_file_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteFsFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/FileManagerPageResponse}
     */
  }, {
    key: "deleteFsFile",
    value: function deleteFsFile(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFsFile");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'parent_storefront_fs_directory_oid': opts['parent_storefront_fs_directory_oid'],
        'storefront_fs_file_oid': opts['storefront_fs_file_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileManagerPageResponse["default"];
      return this.apiClient.callApi('/storefront/{id}/fs/file', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteHeatmap operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteHeatmapCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete screen recording heatmap
     * Delete screen recording heatmap 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset} query Query
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteHeatmapCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteHeatmap",
    value: function deleteHeatmap(storefront_oid, query, callback) {
      var postBody = query;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteHeatmap");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling deleteHeatmap");
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
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/heatmap', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete library item
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteLibraryItem",
    value: function deleteLibraryItem(library_item_oid, callback) {
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling deleteLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteLibraryItemPublishedVersions operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteLibraryItemPublishedVersionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all published versions for a library item, including anything in review.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteLibraryItemPublishedVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteLibraryItemPublishedVersions",
    value: function deleteLibraryItemPublishedVersions(library_item_oid, callback) {
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling deleteLibraryItemPublishedVersions");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}/published_versions', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteScreenRecordingSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteScreenRecordingSegmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete screen recording segment
     * @param {Number} storefront_oid 
     * @param {Number} screen_recording_segment_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteScreenRecordingSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteScreenRecordingSegment",
    value: function deleteScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling deleteScreenRecordingSegment");
      }
      // verify the required parameter 'screen_recording_segment_oid' is set
      if (screen_recording_segment_oid === undefined || screen_recording_segment_oid === null) {
        throw new Error("Missing the required parameter 'screen_recording_segment_oid' when calling deleteScreenRecordingSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_segment_oid': screen_recording_segment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteTwilioAccount operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~deleteTwilioAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete Twilio account
     * @param {String} esp_twilio_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~deleteTwilioAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deleteTwilioAccount",
    value: function deleteTwilioAccount(esp_twilio_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'esp_twilio_uuid' is set
      if (esp_twilio_uuid === undefined || esp_twilio_uuid === null) {
        throw new Error("Missing the required parameter 'esp_twilio_uuid' when calling deleteTwilioAccount");
      }
      var pathParams = {
        'esp_twilio_uuid': esp_twilio_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/twilio/accounts/{esp_twilio_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the duplicateLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~duplicateLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate library item.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~duplicateLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
     */
  }, {
    key: "duplicateLibraryItem",
    value: function duplicateLibraryItem(library_item_oid, callback) {
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling duplicateLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}/duplicate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the favoriteScreenRecording operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~favoriteScreenRecordingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update favorite flag on screen recording
     * Update favorite flag on screen recording 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~favoriteScreenRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "favoriteScreenRecording",
    value: function favoriteScreenRecording(storefront_oid, screen_recording_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling favoriteScreenRecording");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling favoriteScreenRecording");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/favorite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the geocodeAddress operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~geocodeAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/GeocodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain lat/long for an address
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/GeocodeRequest} geocode_request geocode request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~geocodeAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/GeocodeResponse}
     */
  }, {
    key: "geocodeAddress",
    value: function geocodeAddress(storefront_oid, geocode_request, callback) {
      var postBody = geocode_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling geocodeAddress");
      }
      // verify the required parameter 'geocode_request' is set
      if (geocode_request === undefined || geocode_request === null) {
        throw new Error("Missing the required parameter 'geocode_request' when calling geocodeAddress");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeocodeResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/geocode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCountries operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get countries
     * Obtain a list of all the countries 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CountriesResponse}
     */
  }, {
    key: "getCountries",
    value: function getCountries(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getCountries");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CountriesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/countries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEditorToken operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEditorTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailEditorTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets editor token
     * Fetches a temporary authentication token for the editor 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEditorTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailEditorTokenResponse}
     */
  }, {
    key: "getEditorToken",
    value: function getEditorToken(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEditorToken");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailEditorTokenResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/editor_token', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailBaseTemplates operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailBaseTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailBaseTemplateListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication base templates
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailBaseTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailBaseTemplateListResponse}
     */
  }, {
    key: "getEmailBaseTemplates",
    value: function getEmailBaseTemplates(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailBaseTemplates");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailBaseTemplateListResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/baseTemplates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaign operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignResponse}
     */
  }, {
    key: "getEmailCampaign",
    value: function getEmailCampaign(storefront_oid, email_campaign_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaign");
      }
      // verify the required parameter 'email_campaign_uuid' is set
      if (email_campaign_uuid === undefined || email_campaign_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_uuid' when calling getEmailCampaign");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_uuid': email_campaign_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaignFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign folder
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse}
     */
  }, {
    key: "getEmailCampaignFolder",
    value: function getEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaignFolder");
      }
      // verify the required parameter 'email_campaign_folder_uuid' is set
      if (email_campaign_folder_uuid === undefined || email_campaign_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_folder_uuid' when calling getEmailCampaignFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_folder_uuid': email_campaign_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaignFolders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign folders
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignFoldersResponse}
     */
  }, {
    key: "getEmailCampaignFolders",
    value: function getEmailCampaignFolders(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaignFolders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignFoldersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaign_folders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaignScreenshots operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignScreenshotsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenshotsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign screenshots
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignScreenshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenshotsResponse}
     */
  }, {
    key: "getEmailCampaignScreenshots",
    value: function getEmailCampaignScreenshots(storefront_oid, email_campaign_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaignScreenshots");
      }
      // verify the required parameter 'email_campaign_uuid' is set
      if (email_campaign_uuid === undefined || email_campaign_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_uuid' when calling getEmailCampaignScreenshots");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_uuid': email_campaign_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenshotsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/screenshots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaigns operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaigns
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignsResponse}
     */
  }, {
    key: "getEmailCampaigns",
    value: function getEmailCampaigns(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaigns");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCampaignsWithStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignsWithStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaigns with stats
     * @param {Number} storefront_oid 
     * @param {String} stat_days 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCampaignsWithStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignsResponse}
     */
  }, {
    key: "getEmailCampaignsWithStats",
    value: function getEmailCampaignsWithStats(storefront_oid, stat_days, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCampaignsWithStats");
      }
      // verify the required parameter 'stat_days' is set
      if (stat_days === undefined || stat_days === null) {
        throw new Error("Missing the required parameter 'stat_days' when calling getEmailCampaignsWithStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'stat_days': stat_days
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaignsWithStats/{stat_days}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseq operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email commseq
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqResponse}
     */
  }, {
    key: "getEmailCommseq",
    value: function getEmailCommseq(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseq");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseq");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqEditorValues operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqEditorValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailEditorValuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email merchant specific editor values
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqEditorValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailEditorValuesResponse}
     */
  }, {
    key: "getEmailCommseqEditorValues",
    value: function getEmailCommseqEditorValues(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqEditorValues");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailEditorValuesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/editorValues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqEmailStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqEmailStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailStatSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication sequence emails stats
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailStatSummaryRequest} statsRequest StatsRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqEmailStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailStatSummaryResponse}
     */
  }, {
    key: "getEmailCommseqEmailStats",
    value: function getEmailCommseqEmailStats(storefront_oid, commseq_uuid, statsRequest, callback) {
      var postBody = statsRequest;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqEmailStats");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqEmailStats");
      }
      // verify the required parameter 'statsRequest' is set
      if (statsRequest === undefined || statsRequest === null) {
        throw new Error("Missing the required parameter 'statsRequest' when calling getEmailCommseqEmailStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailStatSummaryResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/emailStats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqPostcardStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqPostcardStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication sequence postcard stats
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryRequest} statsRequest StatsRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqPostcardStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailStatPostcardSummaryResponse}
     */
  }, {
    key: "getEmailCommseqPostcardStats",
    value: function getEmailCommseqPostcardStats(storefront_oid, commseq_uuid, statsRequest, callback) {
      var postBody = statsRequest;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqPostcardStats");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqPostcardStats");
      }
      // verify the required parameter 'statsRequest' is set
      if (statsRequest === undefined || statsRequest === null) {
        throw new Error("Missing the required parameter 'statsRequest' when calling getEmailCommseqPostcardStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailStatPostcardSummaryResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/postcardStats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqPostcardTracking operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqPostcardTrackingCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailPostcardTrackingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication postcard tracking
     * @param {Number} storefront_oid 
     * @param {String} commseq_postcard_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqPostcardTrackingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailPostcardTrackingResponse}
     */
  }, {
    key: "getEmailCommseqPostcardTracking",
    value: function getEmailCommseqPostcardTracking(storefront_oid, commseq_postcard_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqPostcardTracking");
      }
      // verify the required parameter 'commseq_postcard_uuid' is set
      if (commseq_postcard_uuid === undefined || commseq_postcard_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_postcard_uuid' when calling getEmailCommseqPostcardTracking");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_postcard_uuid': commseq_postcard_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailPostcardTrackingResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}/tracking', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqRateLimiters operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqRateLimitersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailRateLimitersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email commseq rate limiters
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqRateLimitersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailRateLimitersResponse}
     */
  }, {
    key: "getEmailCommseqRateLimiters",
    value: function getEmailCommseqRateLimiters(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqRateLimiters");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqRateLimiters");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailRateLimitersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/rate_limiters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqSmsStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqSmsStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailStatSmsSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication sequence sms stats
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailStatSmsSummaryRequest} statsRequest StatsRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqSmsStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailStatSmsSummaryResponse}
     */
  }, {
    key: "getEmailCommseqSmsStats",
    value: function getEmailCommseqSmsStats(storefront_oid, commseq_uuid, statsRequest, callback) {
      var postBody = statsRequest;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqSmsStats");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqSmsStats");
      }
      // verify the required parameter 'statsRequest' is set
      if (statsRequest === undefined || statsRequest === null) {
        throw new Error("Missing the required parameter 'statsRequest' when calling getEmailCommseqSmsStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailStatSmsSummaryResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/smsStats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqStatOverall operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStatOverallCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStatResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get communication sequence stats overall
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStatOverallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqStatResponse}
     */
  }, {
    key: "getEmailCommseqStatOverall",
    value: function getEmailCommseqStatOverall(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqStatOverall");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqStatOverall");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqStatResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stat', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqStepStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStepStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailStepStatResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication sequence step stats
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailStepStatRequest} statsRequest StatsRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStepStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailStepStatResponse}
     */
  }, {
    key: "getEmailCommseqStepStats",
    value: function getEmailCommseqStepStats(storefront_oid, commseq_uuid, statsRequest, callback) {
      var postBody = statsRequest;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqStepStats");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqStepStats");
      }
      // verify the required parameter 'statsRequest' is set
      if (statsRequest === undefined || statsRequest === null) {
        throw new Error("Missing the required parameter 'statsRequest' when calling getEmailCommseqStepStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailStepStatResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/stepStats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqStepWaiting operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStepWaitingCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailStepWaitingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email communication sequence customers waiting at each requested step
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailStepWaitingRequest} waitingRequest WaitingRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqStepWaitingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailStepWaitingResponse}
     */
  }, {
    key: "getEmailCommseqStepWaiting",
    value: function getEmailCommseqStepWaiting(storefront_oid, commseq_uuid, waitingRequest, callback) {
      var postBody = waitingRequest;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqStepWaiting");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqStepWaiting");
      }
      // verify the required parameter 'waitingRequest' is set
      if (waitingRequest === undefined || waitingRequest === null) {
        throw new Error("Missing the required parameter 'waitingRequest' when calling getEmailCommseqStepWaiting");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailStepWaitingResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/waiting', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqWebhookEditorValues operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqWebhookEditorValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email webhook editor values
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqWebhookEditorValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailWebhookEditorValuesResponse}
     */
  }, {
    key: "getEmailCommseqWebhookEditorValues",
    value: function getEmailCommseqWebhookEditorValues(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqWebhookEditorValues");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailCommseqWebhookEditorValues");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailWebhookEditorValuesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/webhookEditorValues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCommseqs operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email commseqs
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCommseqsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqsResponse}
     */
  }, {
    key: "getEmailCommseqs",
    value: function getEmailCommseqs(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCommseqs");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCustomerEditorUrl operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCustomerEditorUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customers editor URL
     * @param {Number} storefront_oid 
     * @param {String} email_customer_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCustomerEditorUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse}
     */
  }, {
    key: "getEmailCustomerEditorUrl",
    value: function getEmailCustomerEditorUrl(storefront_oid, email_customer_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCustomerEditorUrl");
      }
      // verify the required parameter 'email_customer_uuid' is set
      if (email_customer_uuid === undefined || email_customer_uuid === null) {
        throw new Error("Missing the required parameter 'email_customer_uuid' when calling getEmailCustomerEditorUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_customer_uuid': email_customer_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCustomerEditorUrlResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/customers/{email_customer_uuid}/editor_url', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailCustomers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email customers
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {String} opts.searchEmailPrefix 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCustomersResponse}
     */
  }, {
    key: "getEmailCustomers",
    value: function getEmailCustomers(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailCustomers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize'],
        'searchEmailPrefix': opts['searchEmailPrefix']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCustomersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailDashboardActivity operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailDashboardActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailDashboardActivityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email dashboard activity
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.last_records 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailDashboardActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailDashboardActivityResponse}
     */
  }, {
    key: "getEmailDashboardActivity",
    value: function getEmailDashboardActivity(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailDashboardActivity");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'last_records': opts['last_records']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailDashboardActivityResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/dashboard_activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailDashboardStats operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailDashboardStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailDashboardStatsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dashboard stats
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.days 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailDashboardStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailDashboardStatsResponse}
     */
  }, {
    key: "getEmailDashboardStats",
    value: function getEmailDashboardStats(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailDashboardStats");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'days': opts['days']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailDashboardStatsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/dashboard_stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailDispatchLogs operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailDispatchLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStepLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email dispatch logs
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailDispatchLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqStepLogsResponse}
     */
  }, {
    key: "getEmailDispatchLogs",
    value: function getEmailDispatchLogs(storefront_oid, commseq_uuid, commseq_step_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailDispatchLogs");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailDispatchLogs");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling getEmailDispatchLogs");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqStepLogsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email email
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse}
     */
  }, {
    key: "getEmailEmail",
    value: function getEmailEmail(storefront_oid, commseq_email_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmail");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling getEmailEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmailClicks operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailClicksCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailClicksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email email clicks
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {String} commseq_email_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.days 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailClicksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailClicksResponse}
     */
  }, {
    key: "getEmailEmailClicks",
    value: function getEmailEmailClicks(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmailClicks");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailEmailClicks");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling getEmailEmailClicks");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling getEmailEmailClicks");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {
        'days': opts['days']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailClicksResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/emails/{commseq_email_uuid}/clicks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmailCustomerEditorUrl operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailCustomerEditorUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email order customer editor url
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {String} order_id 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailCustomerEditorUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse}
     */
  }, {
    key: "getEmailEmailCustomerEditorUrl",
    value: function getEmailEmailCustomerEditorUrl(storefront_oid, commseq_email_uuid, order_id, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmailCustomerEditorUrl");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling getEmailEmailCustomerEditorUrl");
      }
      // verify the required parameter 'order_id' is set
      if (order_id === undefined || order_id === null) {
        throw new Error("Missing the required parameter 'order_id' when calling getEmailEmailCustomerEditorUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid,
        'order_id': order_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCustomerEditorUrlResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/orders/{order_id}/editor_url', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmailOrders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email email orders
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {String} commseq_email_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.days 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailOrdersResponse}
     */
  }, {
    key: "getEmailEmailOrders",
    value: function getEmailEmailOrders(storefront_oid, commseq_uuid, commseq_step_uuid, commseq_email_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmailOrders");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailEmailOrders");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling getEmailEmailOrders");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling getEmailEmailOrders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {
        'days': opts['days']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailOrdersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/emails/{commseq_email_uuid}/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmails operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email emails
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailsResponse}
     */
  }, {
    key: "getEmailEmails",
    value: function getEmailEmails(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmails");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailEmailsMultiple operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailsMultipleCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email emails multiple
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailsRequest} email_commseq_emails_request Request of email uuids
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailEmailsMultipleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailsResponse}
     */
  }, {
    key: "getEmailEmailsMultiple",
    value: function getEmailEmailsMultiple(storefront_oid, email_commseq_emails_request, callback) {
      var postBody = email_commseq_emails_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailEmailsMultiple");
      }
      // verify the required parameter 'email_commseq_emails_request' is set
      if (email_commseq_emails_request === undefined || email_commseq_emails_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_emails_request' when calling getEmailEmailsMultiple");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/multiple', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailFlow operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email flow
     * @param {Number} storefront_oid 
     * @param {String} email_flow_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowResponse}
     */
  }, {
    key: "getEmailFlow",
    value: function getEmailFlow(storefront_oid, email_flow_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailFlow");
      }
      // verify the required parameter 'email_flow_uuid' is set
      if (email_flow_uuid === undefined || email_flow_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_uuid' when calling getEmailFlow");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_uuid': email_flow_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailFlowResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows/{email_flow_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailFlowFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email flow folder
     * @param {Number} storefront_oid 
     * @param {String} email_flow_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowFolderResponse}
     */
  }, {
    key: "getEmailFlowFolder",
    value: function getEmailFlowFolder(storefront_oid, email_flow_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailFlowFolder");
      }
      // verify the required parameter 'email_flow_folder_uuid' is set
      if (email_flow_folder_uuid === undefined || email_flow_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_folder_uuid' when calling getEmailFlowFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_folder_uuid': email_flow_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailFlowFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailFlowFolders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email flow folders
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowFoldersResponse}
     */
  }, {
    key: "getEmailFlowFolders",
    value: function getEmailFlowFolders(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailFlowFolders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailFlowFoldersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flow_folders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailFlowScreenshots operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowScreenshotsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenshotsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email flow screenshots
     * @param {Number} storefront_oid 
     * @param {String} email_flow_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowScreenshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenshotsResponse}
     */
  }, {
    key: "getEmailFlowScreenshots",
    value: function getEmailFlowScreenshots(storefront_oid, email_flow_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailFlowScreenshots");
      }
      // verify the required parameter 'email_flow_uuid' is set
      if (email_flow_uuid === undefined || email_flow_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_uuid' when calling getEmailFlowScreenshots");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_uuid': email_flow_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenshotsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows/{email_flow_uuid}/screenshots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailFlows operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email flows
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailFlowsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowsResponse}
     */
  }, {
    key: "getEmailFlows",
    value: function getEmailFlows(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailFlows");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailFlowsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailGlobalSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailGlobalSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email globalsettings
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailGlobalSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailGlobalSettingsResponse}
     */
  }, {
    key: "getEmailGlobalSettings",
    value: function getEmailGlobalSettings(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailGlobalSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/email/global_settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email list
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListResponse}
     */
  }, {
    key: "getEmailList",
    value: function getEmailList(storefront_oid, email_list_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailList");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling getEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailListCustomerEditorUrl operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListCustomerEditorUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email list customer editor url
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {String} email_customer_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListCustomerEditorUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse}
     */
  }, {
    key: "getEmailListCustomerEditorUrl",
    value: function getEmailListCustomerEditorUrl(storefront_oid, email_list_uuid, email_customer_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailListCustomerEditorUrl");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling getEmailListCustomerEditorUrl");
      }
      // verify the required parameter 'email_customer_uuid' is set
      if (email_customer_uuid === undefined || email_customer_uuid === null) {
        throw new Error("Missing the required parameter 'email_customer_uuid' when calling getEmailListCustomerEditorUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid,
        'email_customer_uuid': email_customer_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCustomerEditorUrlResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers/{email_customer_uuid}/editor_url', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailListCustomers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email list customers
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListCustomersResponse}
     */
  }, {
    key: "getEmailListCustomers",
    value: function getEmailListCustomers(storefront_oid, email_list_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailListCustomers");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling getEmailListCustomers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListCustomersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailListSegmentFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListSegmentFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign folder
     * @param {Number} storefront_oid 
     * @param {String} email_list_segment_folder_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListSegmentFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse}
     */
  }, {
    key: "getEmailListSegmentFolder",
    value: function getEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailListSegmentFolder");
      }
      // verify the required parameter 'email_list_segment_folder_uuid' is set
      if (email_list_segment_folder_uuid === undefined || email_list_segment_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_segment_folder_uuid' when calling getEmailListSegmentFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_segment_folder_uuid': email_list_segment_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListSegmentFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailListSegmentFolders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListSegmentFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email campaign folders
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListSegmentFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListSegmentFoldersResponse}
     */
  }, {
    key: "getEmailListSegmentFolders",
    value: function getEmailListSegmentFolders(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailListSegmentFolders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListSegmentFoldersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/list_segment_folders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailLists operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailListsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email lists
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListsResponse}
     */
  }, {
    key: "getEmailLists",
    value: function getEmailLists(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailLists");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailPerformance operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailPerformanceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email performance
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailPerformanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailPerformanceResponse}
     */
  }, {
    key: "getEmailPerformance",
    value: function getEmailPerformance(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailPerformance");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailPerformanceResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/performance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailPlan operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailPlanResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email plan
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailPlanResponse}
     */
  }, {
    key: "getEmailPlan",
    value: function getEmailPlan(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailPlan");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailPlanResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/plan', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailPostcard operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email postcard
     * @param {Number} storefront_oid 
     * @param {String} commseq_postcard_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse}
     */
  }, {
    key: "getEmailPostcard",
    value: function getEmailPostcard(storefront_oid, commseq_postcard_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailPostcard");
      }
      // verify the required parameter 'commseq_postcard_uuid' is set
      if (commseq_postcard_uuid === undefined || commseq_postcard_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_postcard_uuid' when calling getEmailPostcard");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_postcard_uuid': commseq_postcard_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailPostcards operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email postcards
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse}
     */
  }, {
    key: "getEmailPostcards",
    value: function getEmailPostcards(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailPostcards");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailPostcardsMultiple operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardsMultipleCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email postcards multiple
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest} email_commseq_postcards_request Request of postcard uuids
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailPostcardsMultipleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardsResponse}
     */
  }, {
    key: "getEmailPostcardsMultiple",
    value: function getEmailPostcardsMultiple(storefront_oid, email_commseq_postcards_request, callback) {
      var postBody = email_commseq_postcards_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailPostcardsMultiple");
      }
      // verify the required parameter 'email_commseq_postcards_request' is set
      if (email_commseq_postcards_request === undefined || email_commseq_postcards_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_postcards_request' when calling getEmailPostcardsMultiple");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/multiple', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentResponse}
     */
  }, {
    key: "getEmailSegment",
    value: function getEmailSegment(storefront_oid, email_segment_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling getEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSegmentCustomerEditorUrl operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCustomerEditorUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email segment customers editor URL
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {String} email_customer_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCustomerEditorUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCustomerEditorUrlResponse}
     */
  }, {
    key: "getEmailSegmentCustomerEditorUrl",
    value: function getEmailSegmentCustomerEditorUrl(storefront_oid, email_segment_uuid, email_customer_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSegmentCustomerEditorUrl");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling getEmailSegmentCustomerEditorUrl");
      }
      // verify the required parameter 'email_customer_uuid' is set
      if (email_customer_uuid === undefined || email_customer_uuid === null) {
        throw new Error("Missing the required parameter 'email_customer_uuid' when calling getEmailSegmentCustomerEditorUrl");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid,
        'email_customer_uuid': email_customer_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailCustomerEditorUrlResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/customers/{email_customer_uuid}/editor_url', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSegmentCustomers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email segment customers
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse}
     */
  }, {
    key: "getEmailSegmentCustomers",
    value: function getEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSegmentCustomers");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling getEmailSegmentCustomers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentCustomersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSegments operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email segments
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentsResponse}
     */
  }, {
    key: "getEmailSegments",
    value: function getEmailSegments(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSegments");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSendingDomain operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email sending domain
     * @param {String} domain 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainResponse}
     */
  }, {
    key: "getEmailSendingDomain",
    value: function getEmailSendingDomain(domain, callback) {
      var postBody = null;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling getEmailSendingDomain");
      }
      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domain/{domain}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSendingDomainStatus operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email sending domain status
     * @param {String} domain 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainResponse}
     */
  }, {
    key: "getEmailSendingDomainStatus",
    value: function getEmailSendingDomainStatus(domain, callback) {
      var postBody = null;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling getEmailSendingDomainStatus");
      }
      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains/{domain}/status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSendingDomains operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email sending domains
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSendingDomainsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainsResponse}
     */
  }, {
    key: "getEmailSendingDomains",
    value: function getEmailSendingDomains(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainsResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email settings
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSettingsResponse}
     */
  }, {
    key: "getEmailSettings",
    value: function getEmailSettings(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSettings");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailSmsOrders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailSmsOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSmsOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email sms orders
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.days 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailSmsOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSmsOrdersResponse}
     */
  }, {
    key: "getEmailSmsOrders",
    value: function getEmailSmsOrders(storefront_oid, commseq_uuid, commseq_step_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailSmsOrders");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling getEmailSmsOrders");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling getEmailSmsOrders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid
      };
      var queryParams = {
        'days': opts['days']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSmsOrdersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/steps/{commseq_step_uuid}/sms/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailTemplate operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email template
     * @param {Number} storefront_oid 
     * @param {Number} email_template_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailTemplate}
     */
  }, {
    key: "getEmailTemplate",
    value: function getEmailTemplate(storefront_oid, email_template_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailTemplate");
      }
      // verify the required parameter 'email_template_oid' is set
      if (email_template_oid === undefined || email_template_oid === null) {
        throw new Error("Missing the required parameter 'email_template_oid' when calling getEmailTemplate");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_template_oid': email_template_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailTemplate["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/templates/{email_template_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailTemplates operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailTemplatesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get email templates
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.trigger_type 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailTemplatesResponse}
     */
  }, {
    key: "getEmailTemplates",
    value: function getEmailTemplates(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailTemplates");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'trigger_type': opts['trigger_type']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailTemplatesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getEmailThirdPartyProviders operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getEmailThirdPartyProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of third party email providers
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getEmailThirdPartyProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailThirdPartyProvidersResponse}
     */
  }, {
    key: "getEmailThirdPartyProviders",
    value: function getEmailThirdPartyProviders(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getEmailThirdPartyProviders");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailThirdPartyProvidersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/third_party_providers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getExperiments operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getExperimentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ExperimentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get experiments
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getExperimentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ExperimentsResponse}
     */
  }, {
    key: "getExperiments",
    value: function getExperiments(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getExperiments");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExperimentsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/experiments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFsDirectory operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getFsDirectoryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file manager directory
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.path 
     * @param {Number} opts.storefront_fs_directory_oid 
     * @param {Number} opts.storefront_theme_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getFsDirectoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/FileManagerPageResponse}
     */
  }, {
    key: "getFsDirectory",
    value: function getFsDirectory(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFsDirectory");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'path': opts['path'],
        'storefront_fs_directory_oid': opts['storefront_fs_directory_oid'],
        'storefront_theme_oid': opts['storefront_theme_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileManagerPageResponse["default"];
      return this.apiClient.callApi('/storefront/{id}/fs/dir', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHeatmap operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getHeatmapCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording heatmap
     * Get screen recording heatmap 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} query Query
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getHeatmapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapResponse}
     */
  }, {
    key: "getHeatmap",
    value: function getHeatmap(storefront_oid, query, callback) {
      var postBody = query;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getHeatmap");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getHeatmap");
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
      var returnType = _ScreenRecordingHeatmapResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/heatmap', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHeatmapIndex operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getHeatmapIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording heatmap index
     * Get screen recording heatmap index 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest} query Query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 500) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getHeatmapIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse}
     */
  }, {
    key: "getHeatmapIndex",
    value: function getHeatmapIndex(storefront_oid, query, opts, callback) {
      opts = opts || {};
      var postBody = query;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getHeatmapIndex");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getHeatmapIndex");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingHeatmapIndexResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/heatmap/index', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHistogramPropertyNames operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getHistogramPropertyNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get histogram property names
     * Obtain a list of property names for a given property type 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.property_type 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getHistogramPropertyNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse}
     */
  }, {
    key: "getHistogramPropertyNames",
    value: function getHistogramPropertyNames(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getHistogramPropertyNames");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'property_type': opts['property_type']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailHistogramPropertyNamesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/histogram/property_names', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHistogramPropertyValues operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getHistogramPropertyValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailHistogramPropertyValuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get histogram property values
     * Obtain a list of property values for a given property name and type 
     * @param {Number} storefront_oid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.property_name 
     * @param {String} opts.property_type 
     * @param {Number} opts.limit 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getHistogramPropertyValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailHistogramPropertyValuesResponse}
     */
  }, {
    key: "getHistogramPropertyValues",
    value: function getHistogramPropertyValues(storefront_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getHistogramPropertyValues");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        'property_name': opts['property_name'],
        'property_type': opts['property_type'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailHistogramPropertyValuesResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/histogram/property_values', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getLibraryFilterValues operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getLibraryFilterValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryFilterValuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get library values used to populate drop down boxes for filtering.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getLibraryFilterValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryFilterValuesResponse}
     */
  }, {
    key: "getLibraryFilterValues",
    value: function getLibraryFilterValues(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LibraryFilterValuesResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/filter_values', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get library item.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
     */
  }, {
    key: "getLibraryItem",
    value: function getLibraryItem(library_item_oid, callback) {
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling getLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getLibraryItemPublishedVersions operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getLibraryItemPublishedVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all published versions for a library item.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getLibraryItemPublishedVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemsResponse}
     */
  }, {
    key: "getLibraryItemPublishedVersions",
    value: function getLibraryItemPublishedVersions(library_item_oid, callback) {
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling getLibraryItemPublishedVersions");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LibraryItemsResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}/published_versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecording operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording
     * Get screen recording 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingResponse}
     */
  }, {
    key: "getScreenRecording",
    value: function getScreenRecording(storefront_oid, screen_recording_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecording");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling getScreenRecording");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingPageViewData operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingPageViewDataCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewDataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording page view data
     * Get screen recording page view data 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {String} screen_recording_page_view_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingPageViewDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingPageViewDataResponse}
     */
  }, {
    key: "getScreenRecordingPageViewData",
    value: function getScreenRecordingPageViewData(storefront_oid, screen_recording_uuid, screen_recording_page_view_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingPageViewData");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling getScreenRecordingPageViewData");
      }
      // verify the required parameter 'screen_recording_page_view_uuid' is set
      if (screen_recording_page_view_uuid === undefined || screen_recording_page_view_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_page_view_uuid' when calling getScreenRecordingPageViewData");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid,
        'screen_recording_page_view_uuid': screen_recording_page_view_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingPageViewDataResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/page_view_data/{screen_recording_page_view_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording segment
     * @param {Number} storefront_oid 
     * @param {Number} screen_recording_segment_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse}
     */
  }, {
    key: "getScreenRecordingSegment",
    value: function getScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingSegment");
      }
      // verify the required parameter 'screen_recording_segment_oid' is set
      if (screen_recording_segment_oid === undefined || screen_recording_segment_oid === null) {
        throw new Error("Missing the required parameter 'screen_recording_segment_oid' when calling getScreenRecordingSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_segment_oid': screen_recording_segment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingSegments operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording segments
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSegmentsResponse}
     */
  }, {
    key: "getScreenRecordingSegments",
    value: function getScreenRecordingSegments(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingSegments");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSegmentsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recording settings
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSettingsResponse}
     */
  }, {
    key: "getScreenRecordingSettings",
    value: function getScreenRecordingSettings(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingSettings");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingTags operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingTagsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tags used by screen recording
     * Get tags used by screen recording 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingTagsResponse}
     */
  }, {
    key: "getScreenRecordingTags",
    value: function getScreenRecordingTags(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingTags");
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
      var returnType = _ScreenRecordingTagsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingsByQuery operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query screen recordings
     * Query screen recordings 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryRequest} query Query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 500) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse}
     */
  }, {
    key: "getScreenRecordingsByQuery",
    value: function getScreenRecordingsByQuery(storefront_oid, query, opts, callback) {
      opts = opts || {};
      var postBody = query;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingsByQuery");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getScreenRecordingsByQuery");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingQueryResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getScreenRecordingsBySegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingsBySegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen recordings by segment
     * Get screen recordings by segment 
     * @param {Number} storefront_oid 
     * @param {Number} screen_recording_segment_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 500) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getScreenRecordingsBySegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse}
     */
  }, {
    key: "getScreenRecordingsBySegment",
    value: function getScreenRecordingsBySegment(storefront_oid, screen_recording_segment_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getScreenRecordingsBySegment");
      }
      // verify the required parameter 'screen_recording_segment_oid' is set
      if (screen_recording_segment_oid === undefined || screen_recording_segment_oid === null) {
        throw new Error("Missing the required parameter 'screen_recording_segment_oid' when calling getScreenRecordingsBySegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_segment_oid': screen_recording_segment_oid
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingQueryResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid}/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getStoreFrontPricingTiers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getStoreFrontPricingTiersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/PricingTiersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve pricing tiers
     * Retrieves the pricing tiers 
     * @param {Object} opts Optional parameters
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getStoreFrontPricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/PricingTiersResponse}
     */
  }, {
    key: "getStoreFrontPricingTiers",
    value: function getStoreFrontPricingTiers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PricingTiersResponse["default"];
      return this.apiClient.callApi('/storefront/pricing_tiers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getStoreFronts operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getStoreFrontsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/StoreFrontsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storefronts (internal use only for security reasons)
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getStoreFrontsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/StoreFrontsResponse}
     */
  }, {
    key: "getStoreFronts",
    value: function getStoreFronts(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StoreFrontsResponse["default"];
      return this.apiClient.callApi('/storefront', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getThumbnailParameters operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getThumbnailParametersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ThumbnailParametersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get thumbnail parameters
     * @param {module:com.ultracart.admin.v2.models/ThumbnailParametersRequest} thumbnail_parameters Thumbnail Parameters
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getThumbnailParametersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ThumbnailParametersResponse}
     */
  }, {
    key: "getThumbnailParameters",
    value: function getThumbnailParameters(thumbnail_parameters, callback) {
      var postBody = thumbnail_parameters;
      // verify the required parameter 'thumbnail_parameters' is set
      if (thumbnail_parameters === undefined || thumbnail_parameters === null) {
        throw new Error("Missing the required parameter 'thumbnail_parameters' when calling getThumbnailParameters");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ThumbnailParametersResponse["default"];
      return this.apiClient.callApi('/storefront/thumbnailParameters', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTransactionEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a transaction email object
     * Fetch a transactional email 
     * @param {Number} storefront_oid 
     * @param {String} email_id 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TransactionEmailResponse}
     */
  }, {
    key: "getTransactionEmail",
    value: function getTransactionEmail(storefront_oid, email_id, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getTransactionEmail");
      }
      // verify the required parameter 'email_id' is set
      if (email_id === undefined || email_id === null) {
        throw new Error("Missing the required parameter 'email_id' when calling getTransactionEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_id': email_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TransactionEmailResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/transaction_email/list/{email_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTransactionEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of transaction email names
     * Obtain a list of all transactional emails and return back just their names 
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TransactionEmailListResponse}
     */
  }, {
    key: "getTransactionEmailList",
    value: function getTransactionEmailList(storefront_oid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getTransactionEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TransactionEmailListResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/transaction_email/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTransactionEmailScreenshots operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailScreenshotsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenshotsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transactional email screenshots
     * @param {Number} storefront_oid 
     * @param {String} email_id 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getTransactionEmailScreenshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenshotsResponse}
     */
  }, {
    key: "getTransactionEmailScreenshots",
    value: function getTransactionEmailScreenshots(storefront_oid, email_id, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling getTransactionEmailScreenshots");
      }
      // verify the required parameter 'email_id' is set
      if (email_id === undefined || email_id === null) {
        throw new Error("Missing the required parameter 'email_id' when calling getTransactionEmailScreenshots");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_id': email_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenshotsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/transaction_email/list/{email_id}/screenshots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTwilioAccount operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getTwilioAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TwilioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Twilio account
     * @param {String} esp_twilio_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getTwilioAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TwilioResponse}
     */
  }, {
    key: "getTwilioAccount",
    value: function getTwilioAccount(esp_twilio_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'esp_twilio_uuid' is set
      if (esp_twilio_uuid === undefined || esp_twilio_uuid === null) {
        throw new Error("Missing the required parameter 'esp_twilio_uuid' when calling getTwilioAccount");
      }
      var pathParams = {
        'esp_twilio_uuid': esp_twilio_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TwilioResponse["default"];
      return this.apiClient.callApi('/storefront/twilio/accounts/{esp_twilio_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTwilioAccounts operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getTwilioAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TwiliosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Twilio accounts
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getTwilioAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TwiliosResponse}
     */
  }, {
    key: "getTwilioAccounts",
    value: function getTwilioAccounts(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TwiliosResponse["default"];
      return this.apiClient.callApi('/storefront/twilio/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getUploadFsFileUrl operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~getUploadFsFileUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/FileManagerUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a S3 url where a file may be uploaded. Once uploaded, use uploadFsFile to trigger the server into reading the S3 bucket and retrieving the file.
     * @param {Number} id 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~getUploadFsFileUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/FileManagerUploadUrlResponse}
     */
  }, {
    key: "getUploadFsFileUrl",
    value: function getUploadFsFileUrl(id, extension, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUploadFsFileUrl");
      }
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getUploadFsFileUrl");
      }
      var pathParams = {
        'id': id,
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileManagerUploadUrlResponse["default"];
      return this.apiClient.callApi('/storefront/{id}/fs/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the globalUnsubscribe operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~globalUnsubscribeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Globally unsubscribe a customer
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeRequest} unsubscribe Unsubscribe
     * @param {module:com.ultracart.admin.v2/StorefrontApi~globalUnsubscribeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailGlobalUnsubscribeResponse}
     */
  }, {
    key: "globalUnsubscribe",
    value: function globalUnsubscribe(storefront_oid, unsubscribe, callback) {
      var postBody = unsubscribe;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling globalUnsubscribe");
      }
      // verify the required parameter 'unsubscribe' is set
      if (unsubscribe === undefined || unsubscribe === null) {
        throw new Error("Missing the required parameter 'unsubscribe' when calling globalUnsubscribe");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailGlobalUnsubscribeResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/globalUnsubscribe', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the importEmailThirdPartyProviderList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~importEmailThirdPartyProviderListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import a third party provider list
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} import_request lists to import
     * @param {module:com.ultracart.admin.v2/StorefrontApi~importEmailThirdPartyProviderListCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "importEmailThirdPartyProviderList",
    value: function importEmailThirdPartyProviderList(storefront_oid, import_request, callback) {
      var postBody = import_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling importEmailThirdPartyProviderList");
      }
      // verify the required parameter 'import_request' is set
      if (import_request === undefined || import_request === null) {
        throw new Error("Missing the required parameter 'import_request' when calling importEmailThirdPartyProviderList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/third_party_providers/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailCampaign operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email campaign
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCampaign} email_campaign Email campaign
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignResponse}
     */
  }, {
    key: "insertEmailCampaign",
    value: function insertEmailCampaign(storefront_oid, email_campaign, callback) {
      var postBody = email_campaign;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailCampaign");
      }
      // verify the required parameter 'email_campaign' is set
      if (email_campaign === undefined || email_campaign === null) {
        throw new Error("Missing the required parameter 'email_campaign' when calling insertEmailCampaign");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailCampaignFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailCampaignFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email campaign folder
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolder} email_campaign_folder Email campaign folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailCampaignFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse}
     */
  }, {
    key: "insertEmailCampaignFolder",
    value: function insertEmailCampaignFolder(storefront_oid, email_campaign_folder, callback) {
      var postBody = email_campaign_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailCampaignFolder");
      }
      // verify the required parameter 'email_campaign_folder' is set
      if (email_campaign_folder === undefined || email_campaign_folder === null) {
        throw new Error("Missing the required parameter 'email_campaign_folder' when calling insertEmailCampaignFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaign_folders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailCommseq operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailCommseqCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email commseq
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseq} email_commseq Email commseq
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailCommseqCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqResponse}
     */
  }, {
    key: "insertEmailCommseq",
    value: function insertEmailCommseq(storefront_oid, email_commseq, callback) {
      var postBody = email_commseq;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailCommseq");
      }
      // verify the required parameter 'email_commseq' is set
      if (email_commseq === undefined || email_commseq === null) {
        throw new Error("Missing the required parameter 'email_commseq' when calling insertEmailCommseq");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email email
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmail} email_commseq_email Email email
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse}
     */
  }, {
    key: "insertEmailEmail",
    value: function insertEmailEmail(storefront_oid, email_commseq_email, callback) {
      var postBody = email_commseq_email;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailEmail");
      }
      // verify the required parameter 'email_commseq_email' is set
      if (email_commseq_email === undefined || email_commseq_email === null) {
        throw new Error("Missing the required parameter 'email_commseq_email' when calling insertEmailEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailFlow operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailFlowCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email flow
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailFlow} email_flow Email flow
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowResponse}
     */
  }, {
    key: "insertEmailFlow",
    value: function insertEmailFlow(storefront_oid, email_flow, callback) {
      var postBody = email_flow;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailFlow");
      }
      // verify the required parameter 'email_flow' is set
      if (email_flow === undefined || email_flow === null) {
        throw new Error("Missing the required parameter 'email_flow' when calling insertEmailFlow");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailFlowResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailFlowFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailFlowFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email flow folder
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolder} email_flow_folder Email flow folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailFlowFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowFolderResponse}
     */
  }, {
    key: "insertEmailFlowFolder",
    value: function insertEmailFlowFolder(storefront_oid, email_flow_folder, callback) {
      var postBody = email_flow_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailFlowFolder");
      }
      // verify the required parameter 'email_flow_folder' is set
      if (email_flow_folder === undefined || email_flow_folder === null) {
        throw new Error("Missing the required parameter 'email_flow_folder' when calling insertEmailFlowFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailFlowFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flow_folders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email list
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailList} email_list Email list
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListResponse}
     */
  }, {
    key: "insertEmailList",
    value: function insertEmailList(storefront_oid, email_list, callback) {
      var postBody = email_list;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailList");
      }
      // verify the required parameter 'email_list' is set
      if (email_list === undefined || email_list === null) {
        throw new Error("Missing the required parameter 'email_list' when calling insertEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailListSegmentFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailListSegmentFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email campaign folder
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolder} email_list_segment_folder Email campaign folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailListSegmentFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse}
     */
  }, {
    key: "insertEmailListSegmentFolder",
    value: function insertEmailListSegmentFolder(storefront_oid, email_list_segment_folder, callback) {
      var postBody = email_list_segment_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailListSegmentFolder");
      }
      // verify the required parameter 'email_list_segment_folder' is set
      if (email_list_segment_folder === undefined || email_list_segment_folder === null) {
        throw new Error("Missing the required parameter 'email_list_segment_folder' when calling insertEmailListSegmentFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListSegmentFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/list_segment_folders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailPostcard operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailPostcardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email postcard
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} email_commseq_postcard Email postcard
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailPostcardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse}
     */
  }, {
    key: "insertEmailPostcard",
    value: function insertEmailPostcard(storefront_oid, email_commseq_postcard, callback) {
      var postBody = email_commseq_postcard;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailPostcard");
      }
      // verify the required parameter 'email_commseq_postcard' is set
      if (email_commseq_postcard === undefined || email_commseq_postcard === null) {
        throw new Error("Missing the required parameter 'email_commseq_postcard' when calling insertEmailPostcard");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert email segment
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailSegment} email_segment Email segment
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentResponse}
     */
  }, {
    key: "insertEmailSegment",
    value: function insertEmailSegment(storefront_oid, email_segment, callback) {
      var postBody = email_segment;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertEmailSegment");
      }
      // verify the required parameter 'email_segment' is set
      if (email_segment === undefined || email_segment === null) {
        throw new Error("Missing the required parameter 'email_segment' when calling insertEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertScreenRecordingSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertScreenRecordingSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert screen recording segment
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} segment Segment
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertScreenRecordingSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse}
     */
  }, {
    key: "insertScreenRecordingSegment",
    value: function insertScreenRecordingSegment(storefront_oid, segment, callback) {
      var postBody = segment;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertScreenRecordingSegment");
      }
      // verify the required parameter 'segment' is set
      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling insertScreenRecordingSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertUpdatePageContentAttribute operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~insertUpdatePageContentAttributeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert a page content attribute
     * Update a page content attribute, creating it new if it does not yet exist. 
     * @param {Number} storefront_oid 
     * @param {Number} page_oid The page oid to modify.
     * @param {module:com.ultracart.admin.v2.models/StoreFrontPageContentAttribute} page_attribute Page content attribute to upsert
     * @param {module:com.ultracart.admin.v2/StorefrontApi~insertUpdatePageContentAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "insertUpdatePageContentAttribute",
    value: function insertUpdatePageContentAttribute(storefront_oid, page_oid, page_attribute, callback) {
      var postBody = page_attribute;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling insertUpdatePageContentAttribute");
      }
      // verify the required parameter 'page_oid' is set
      if (page_oid === undefined || page_oid === null) {
        throw new Error("Missing the required parameter 'page_oid' when calling insertUpdatePageContentAttribute");
      }
      // verify the required parameter 'page_attribute' is set
      if (page_attribute === undefined || page_attribute === null) {
        throw new Error("Missing the required parameter 'page_attribute' when calling insertUpdatePageContentAttribute");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'page_oid': page_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/pages/{page_oid}/content/attributes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the prepareDownloadEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~prepareDownloadEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Prepare download of email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~prepareDownloadEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentDownloadPrepareResponse}
     */
  }, {
    key: "prepareDownloadEmailSegment",
    value: function prepareDownloadEmailSegment(storefront_oid, email_segment_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling prepareDownloadEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling prepareDownloadEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentDownloadPrepareResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/downloadPrepare', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the publishLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~publishLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish library item.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2.models/PublishLibraryItemRequest} publish_library_request Publish library item request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~publishLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
     */
  }, {
    key: "publishLibraryItem",
    value: function publishLibraryItem(library_item_oid, publish_library_request, callback) {
      var postBody = publish_library_request;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling publishLibraryItem");
      }
      // verify the required parameter 'publish_library_request' is set
      if (publish_library_request === undefined || publish_library_request === null) {
        throw new Error("Missing the required parameter 'publish_library_request' when calling publishLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}/publish', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchaseLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~purchaseLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purchase public library item, which creates a copy of the item in your personal code library
     * @param {Number} library_item_oid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.storefront_oid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~purchaseLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
     */
  }, {
    key: "purchaseLibraryItem",
    value: function purchaseLibraryItem(library_item_oid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling purchaseLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {
        'storefront_oid': opts['storefront_oid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}/purchase', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the releaseEmailCommseqStepWaiting operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~releaseEmailCommseqStepWaitingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Release email communication sequence customers waiting at the specified step
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~releaseEmailCommseqStepWaitingCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "releaseEmailCommseqStepWaiting",
    value: function releaseEmailCommseqStepWaiting(storefront_oid, commseq_uuid, commseq_step_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling releaseEmailCommseqStepWaiting");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling releaseEmailCommseqStepWaiting");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling releaseEmailCommseqStepWaiting");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/waiting/{commseq_step_uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the resetEmailCommseqRateLimiters operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~resetEmailCommseqRateLimitersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset email commseq rate limiters (only callable by UltraCart Support)
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~resetEmailCommseqRateLimitersCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "resetEmailCommseqRateLimiters",
    value: function resetEmailCommseqRateLimiters(storefront_oid, commseq_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling resetEmailCommseqRateLimiters");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling resetEmailCommseqRateLimiters");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/rate_limiters', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the review operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~reviewCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a review of an email
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest} email_commseq_email_review_request Email commseq email review request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~reviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestResponse}
     */
  }, {
    key: "review",
    value: function review(storefront_oid, commseq_email_uuid, email_commseq_email_review_request, callback) {
      var postBody = email_commseq_email_review_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling review");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling review");
      }
      // verify the required parameter 'email_commseq_email_review_request' is set
      if (email_commseq_email_review_request === undefined || email_commseq_email_review_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_email_review_request' when calling review");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailSendTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/review', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for all matching values
     * @param {Object} opts Optional parameters
     * @param {String} opts.category 
     * @param {String} opts.matches 
     * @param {String} opts.storefront_oid 
     * @param {Number} opts.max_hits 
     * @param {String} opts.subcategory 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LookupResponse}
     */
  }, {
    key: "search",
    value: function search(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'category': opts['category'],
        'matches': opts['matches'],
        'storefront_oid': opts['storefront_oid'],
        'max_hits': opts['max_hits'],
        'subcategory': opts['subcategory']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LookupResponse["default"];
      return this.apiClient.callApi('/storefront/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the search2 operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~search2Callback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LookupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for all matching values (using POST)
     * @param {module:com.ultracart.admin.v2.models/LookupRequest} lookup_request LookupRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~search2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LookupResponse}
     */
  }, {
    key: "search2",
    value: function search2(lookup_request, callback) {
      var postBody = lookup_request;
      // verify the required parameter 'lookup_request' is set
      if (lookup_request === undefined || lookup_request === null) {
        throw new Error("Missing the required parameter 'lookup_request' when calling search2");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LookupResponse["default"];
      return this.apiClient.callApi('/storefront/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchEmailListCustomers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchEmailListCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListCustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search email list customers
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startsWith 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchEmailListCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListCustomersResponse}
     */
  }, {
    key: "searchEmailListCustomers",
    value: function searchEmailListCustomers(storefront_oid, email_list_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling searchEmailListCustomers");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling searchEmailListCustomers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {
        'startsWith': opts['startsWith']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailListCustomersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchEmailSegmentCustomers operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchEmailSegmentCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search email segment customers
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startsWith 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchEmailSegmentCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentCustomersResponse}
     */
  }, {
    key: "searchEmailSegmentCustomers",
    value: function searchEmailSegmentCustomers(storefront_oid, email_segment_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling searchEmailSegmentCustomers");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling searchEmailSegmentCustomers");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {
        'startsWith': opts['startsWith']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentCustomersResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchLibraryItems operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchLibraryItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve library items
     * Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} item_query Item query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchLibraryItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemsResponse}
     */
  }, {
    key: "searchLibraryItems",
    value: function searchLibraryItems(item_query, opts, callback) {
      opts = opts || {};
      var postBody = item_query;
      // verify the required parameter 'item_query' is set
      if (item_query === undefined || item_query === null) {
        throw new Error("Missing the required parameter 'item_query' when calling searchLibraryItems");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemsResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchPublishedItems operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchPublishedItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve library items
     * Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} item_query Item query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchPublishedItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemsResponse}
     */
  }, {
    key: "searchPublishedItems",
    value: function searchPublishedItems(item_query, opts, callback) {
      opts = opts || {};
      var postBody = item_query;
      // verify the required parameter 'item_query' is set
      if (item_query === undefined || item_query === null) {
        throw new Error("Missing the required parameter 'item_query' when calling searchPublishedItems");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemsResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/search_published', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchReviewItems operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchReviewItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve library items needing review or rejected
     * Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} item_query Item query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchReviewItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemsResponse}
     */
  }, {
    key: "searchReviewItems",
    value: function searchReviewItems(item_query, opts, callback) {
      opts = opts || {};
      var postBody = item_query;
      // verify the required parameter 'item_query' is set
      if (item_query === undefined || item_query === null) {
        throw new Error("Missing the required parameter 'item_query' when calling searchReviewItems");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemsResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/search_review', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchSharedItems operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~searchSharedItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve library items
     * Retrieves a library items based on a query object.  If no parameters are specified, the API call will default to the merchant id only.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @param {module:com.ultracart.admin.v2.models/LibraryItemQuery} item_query Item query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 10000) (default to 10000)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the library items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/StorefrontApi~searchSharedItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemsResponse}
     */
  }, {
    key: "searchSharedItems",
    value: function searchSharedItems(item_query, opts, callback) {
      opts = opts || {};
      var postBody = item_query;
      // verify the required parameter 'item_query' is set
      if (item_query === undefined || item_query === null) {
        throw new Error("Missing the required parameter 'item_query' when calling searchSharedItems");
      }
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemsResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/search_shared', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sendEmailTest operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sendEmailTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send email test
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest} email_commseq_email_test_request Email commseq email test request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sendEmailTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestResponse}
     */
  }, {
    key: "sendEmailTest",
    value: function sendEmailTest(storefront_oid, commseq_email_uuid, email_commseq_email_test_request, callback) {
      var postBody = email_commseq_email_test_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sendEmailTest");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling sendEmailTest");
      }
      // verify the required parameter 'email_commseq_email_test_request' is set
      if (email_commseq_email_test_request === undefined || email_commseq_email_test_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_email_test_request' when calling sendEmailTest");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailSendTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}/test', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sendPostcardTest operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sendPostcardTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send postcard test
     * @param {Number} storefront_oid 
     * @param {String} commseq_postcard_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} email_commseq_postcard_test_request Email commseq email test request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sendPostcardTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse}
     */
  }, {
    key: "sendPostcardTest",
    value: function sendPostcardTest(storefront_oid, commseq_postcard_uuid, email_commseq_postcard_test_request, callback) {
      var postBody = email_commseq_postcard_test_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sendPostcardTest");
      }
      // verify the required parameter 'commseq_postcard_uuid' is set
      if (commseq_postcard_uuid === undefined || commseq_postcard_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_postcard_uuid' when calling sendPostcardTest");
      }
      // verify the required parameter 'email_commseq_postcard_test_request' is set
      if (email_commseq_postcard_test_request === undefined || email_commseq_postcard_test_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_postcard_test_request' when calling sendPostcardTest");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_postcard_uuid': commseq_postcard_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardSendTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}/test', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sendSmsTest operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sendSmsTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send SMS test
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {String} commseq_step_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestRequest} email_commseq_sms_test_request Email commseq sms test request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sendSmsTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqSmsSendTestResponse}
     */
  }, {
    key: "sendSmsTest",
    value: function sendSmsTest(storefront_oid, commseq_uuid, commseq_step_uuid, email_commseq_sms_test_request, callback) {
      var postBody = email_commseq_sms_test_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sendSmsTest");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling sendSmsTest");
      }
      // verify the required parameter 'commseq_step_uuid' is set
      if (commseq_step_uuid === undefined || commseq_step_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_step_uuid' when calling sendSmsTest");
      }
      // verify the required parameter 'email_commseq_sms_test_request' is set
      if (email_commseq_sms_test_request === undefined || email_commseq_sms_test_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_sms_test_request' when calling sendSmsTest");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid,
        'commseq_step_uuid': commseq_step_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqSmsSendTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/sms/{commseq_uuid}/{commseq_step_uuid}/test', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sendWebhookTest operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sendWebhookTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send webhook test
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest} email_commseq_webhook_test_request Email commseq webhook test request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sendWebhookTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestResponse}
     */
  }, {
    key: "sendWebhookTest",
    value: function sendWebhookTest(storefront_oid, email_commseq_webhook_test_request, callback) {
      var postBody = email_commseq_webhook_test_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sendWebhookTest");
      }
      // verify the required parameter 'email_commseq_webhook_test_request' is set
      if (email_commseq_webhook_test_request === undefined || email_commseq_webhook_test_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_webhook_test_request' when calling sendWebhookTest");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqWebhookSendTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/webhooks/test', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sequenceTest operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sequenceTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sequence test
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest} email_commseq_sequence_test_request Commseq test request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sequenceTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestResponse}
     */
  }, {
    key: "sequenceTest",
    value: function sequenceTest(storefront_oid, commseq_uuid, email_commseq_sequence_test_request, callback) {
      var postBody = email_commseq_sequence_test_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sequenceTest");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling sequenceTest");
      }
      // verify the required parameter 'email_commseq_sequence_test_request' is set
      if (email_commseq_sequence_test_request === undefined || email_commseq_sequence_test_request === null) {
        throw new Error("Missing the required parameter 'email_commseq_sequence_test_request' when calling sequenceTest");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqSequenceTestResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}/test', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the startEmailCampaign operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~startEmailCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start email campaign
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~startEmailCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "startEmailCampaign",
    value: function startEmailCampaign(storefront_oid, email_campaign_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling startEmailCampaign");
      }
      // verify the required parameter 'email_campaign_uuid' is set
      if (email_campaign_uuid === undefined || email_campaign_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_uuid' when calling startEmailCampaign");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_uuid': email_campaign_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}/start', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the subscribeToEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~subscribeToEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListSubscribeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe customers to email list
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {Array.<module:com.ultracart.admin.v2.models/EmailCustomer>} customers Customers
     * @param {module:com.ultracart.admin.v2/StorefrontApi~subscribeToEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListSubscribeResponse}
     */
  }, {
    key: "subscribeToEmailList",
    value: function subscribeToEmailList(storefront_oid, email_list_uuid, customers, callback) {
      var postBody = customers;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling subscribeToEmailList");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling subscribeToEmailList");
      }
      // verify the required parameter 'customers' is set
      if (customers === undefined || customers === null) {
        throw new Error("Missing the required parameter 'customers' when calling subscribeToEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListSubscribeResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}/subscribe', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the sunsetEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~sunsetEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sunset email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~sunsetEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "sunsetEmailSegment",
    value: function sunsetEmailSegment(storefront_oid, email_segment_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling sunsetEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling sunsetEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}/sunset', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the unfavoriteScreenRecording operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~unfavoriteScreenRecordingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove favorite flag on screen recording
     * Remove favorite flag on screen recording 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {module:com.ultracart.admin.v2/StorefrontApi~unfavoriteScreenRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "unfavoriteScreenRecording",
    value: function unfavoriteScreenRecording(storefront_oid, screen_recording_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling unfavoriteScreenRecording");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling unfavoriteScreenRecording");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/favorite', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailCampaign operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email campaign
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCampaign} email_campaign Email campaign
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignResponse}
     */
  }, {
    key: "updateEmailCampaign",
    value: function updateEmailCampaign(storefront_oid, email_campaign_uuid, email_campaign, callback) {
      var postBody = email_campaign;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailCampaign");
      }
      // verify the required parameter 'email_campaign_uuid' is set
      if (email_campaign_uuid === undefined || email_campaign_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_uuid' when calling updateEmailCampaign");
      }
      // verify the required parameter 'email_campaign' is set
      if (email_campaign === undefined || email_campaign === null) {
        throw new Error("Missing the required parameter 'email_campaign' when calling updateEmailCampaign");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_uuid': email_campaign_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaigns/{email_campaign_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailCampaignFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailCampaignFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email campaign folder
     * @param {Number} storefront_oid 
     * @param {String} email_campaign_folder_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCampaignFolder} email_campaign_folder Email campaign folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailCampaignFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCampaignFolderResponse}
     */
  }, {
    key: "updateEmailCampaignFolder",
    value: function updateEmailCampaignFolder(storefront_oid, email_campaign_folder_uuid, email_campaign_folder, callback) {
      var postBody = email_campaign_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailCampaignFolder");
      }
      // verify the required parameter 'email_campaign_folder_uuid' is set
      if (email_campaign_folder_uuid === undefined || email_campaign_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_campaign_folder_uuid' when calling updateEmailCampaignFolder");
      }
      // verify the required parameter 'email_campaign_folder' is set
      if (email_campaign_folder === undefined || email_campaign_folder === null) {
        throw new Error("Missing the required parameter 'email_campaign_folder' when calling updateEmailCampaignFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_campaign_folder_uuid': email_campaign_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCampaignFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/campaign_folders/{email_campaign_folder_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailCommseq operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailCommseqCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email commseq
     * @param {Number} storefront_oid 
     * @param {String} commseq_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseq} email_commseq Email commseq
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailCommseqCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqResponse}
     */
  }, {
    key: "updateEmailCommseq",
    value: function updateEmailCommseq(storefront_oid, commseq_uuid, email_commseq, callback) {
      var postBody = email_commseq;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailCommseq");
      }
      // verify the required parameter 'commseq_uuid' is set
      if (commseq_uuid === undefined || commseq_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_uuid' when calling updateEmailCommseq");
      }
      // verify the required parameter 'email_commseq' is set
      if (email_commseq === undefined || email_commseq === null) {
        throw new Error("Missing the required parameter 'email_commseq' when calling updateEmailCommseq");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_uuid': commseq_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/commseqs/{commseq_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailCustomer operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email customer
     * @param {Number} storefront_oid 
     * @param {String} email_customer_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCustomer} email_customer Email customer
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateEmailCustomer",
    value: function updateEmailCustomer(storefront_oid, email_customer_uuid, email_customer, callback) {
      var postBody = email_customer;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailCustomer");
      }
      // verify the required parameter 'email_customer_uuid' is set
      if (email_customer_uuid === undefined || email_customer_uuid === null) {
        throw new Error("Missing the required parameter 'email_customer_uuid' when calling updateEmailCustomer");
      }
      // verify the required parameter 'email_customer' is set
      if (email_customer === undefined || email_customer === null) {
        throw new Error("Missing the required parameter 'email_customer' when calling updateEmailCustomer");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_customer_uuid': email_customer_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/customers/{email_customer_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email email
     * @param {Number} storefront_oid 
     * @param {String} commseq_email_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmail} email_commseq_email Email commseq email
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqEmailResponse}
     */
  }, {
    key: "updateEmailEmail",
    value: function updateEmailEmail(storefront_oid, commseq_email_uuid, email_commseq_email, callback) {
      var postBody = email_commseq_email;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailEmail");
      }
      // verify the required parameter 'commseq_email_uuid' is set
      if (commseq_email_uuid === undefined || commseq_email_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_email_uuid' when calling updateEmailEmail");
      }
      // verify the required parameter 'email_commseq_email' is set
      if (email_commseq_email === undefined || email_commseq_email === null) {
        throw new Error("Missing the required parameter 'email_commseq_email' when calling updateEmailEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_email_uuid': commseq_email_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqEmailResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/emails/{commseq_email_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailFlow operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailFlowCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email flow
     * @param {Number} storefront_oid 
     * @param {String} email_flow_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailFlow} email_flow Email flow
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowResponse}
     */
  }, {
    key: "updateEmailFlow",
    value: function updateEmailFlow(storefront_oid, email_flow_uuid, email_flow, callback) {
      var postBody = email_flow;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailFlow");
      }
      // verify the required parameter 'email_flow_uuid' is set
      if (email_flow_uuid === undefined || email_flow_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_uuid' when calling updateEmailFlow");
      }
      // verify the required parameter 'email_flow' is set
      if (email_flow === undefined || email_flow === null) {
        throw new Error("Missing the required parameter 'email_flow' when calling updateEmailFlow");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_uuid': email_flow_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailFlowResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flows/{email_flow_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailFlowFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailFlowFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email flow folder
     * @param {Number} storefront_oid 
     * @param {String} email_flow_folder_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolder} email_flow_folder Email flow folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailFlowFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailFlowFolderResponse}
     */
  }, {
    key: "updateEmailFlowFolder",
    value: function updateEmailFlowFolder(storefront_oid, email_flow_folder_uuid, email_flow_folder, callback) {
      var postBody = email_flow_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailFlowFolder");
      }
      // verify the required parameter 'email_flow_folder_uuid' is set
      if (email_flow_folder_uuid === undefined || email_flow_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_flow_folder_uuid' when calling updateEmailFlowFolder");
      }
      // verify the required parameter 'email_flow_folder' is set
      if (email_flow_folder === undefined || email_flow_folder === null) {
        throw new Error("Missing the required parameter 'email_flow_folder' when calling updateEmailFlowFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_flow_folder_uuid': email_flow_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailFlowFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/flow_folders/{email_flow_folder_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailGlobalSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailGlobalSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email global settings
     * @param {module:com.ultracart.admin.v2.models/EmailGlobalSettings} global_settings global settings request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailGlobalSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailGlobalSettingsResponse}
     */
  }, {
    key: "updateEmailGlobalSettings",
    value: function updateEmailGlobalSettings(global_settings, callback) {
      var postBody = global_settings;
      // verify the required parameter 'global_settings' is set
      if (global_settings === undefined || global_settings === null) {
        throw new Error("Missing the required parameter 'global_settings' when calling updateEmailGlobalSettings");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailGlobalSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/email/global_settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailList operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email list
     * @param {Number} storefront_oid 
     * @param {String} email_list_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailList} email_list Email list
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListResponse}
     */
  }, {
    key: "updateEmailList",
    value: function updateEmailList(storefront_oid, email_list_uuid, email_list, callback) {
      var postBody = email_list;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailList");
      }
      // verify the required parameter 'email_list_uuid' is set
      if (email_list_uuid === undefined || email_list_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_uuid' when calling updateEmailList");
      }
      // verify the required parameter 'email_list' is set
      if (email_list === undefined || email_list === null) {
        throw new Error("Missing the required parameter 'email_list' when calling updateEmailList");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_uuid': email_list_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/lists/{email_list_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailListSegmentFolder operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailListSegmentFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email campaign folder
     * @param {Number} storefront_oid 
     * @param {String} email_list_segment_folder_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentFolder} email_list_segment_folder Email campaign folder
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailListSegmentFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailListSegmentFolderResponse}
     */
  }, {
    key: "updateEmailListSegmentFolder",
    value: function updateEmailListSegmentFolder(storefront_oid, email_list_segment_folder_uuid, email_list_segment_folder, callback) {
      var postBody = email_list_segment_folder;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailListSegmentFolder");
      }
      // verify the required parameter 'email_list_segment_folder_uuid' is set
      if (email_list_segment_folder_uuid === undefined || email_list_segment_folder_uuid === null) {
        throw new Error("Missing the required parameter 'email_list_segment_folder_uuid' when calling updateEmailListSegmentFolder");
      }
      // verify the required parameter 'email_list_segment_folder' is set
      if (email_list_segment_folder === undefined || email_list_segment_folder === null) {
        throw new Error("Missing the required parameter 'email_list_segment_folder' when calling updateEmailListSegmentFolder");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_list_segment_folder_uuid': email_list_segment_folder_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailListSegmentFolderResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/list_segment_folders/{email_list_segment_folder_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailPlan operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailPlanResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email plan
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailPlan} settings plan request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailPlanResponse}
     */
  }, {
    key: "updateEmailPlan",
    value: function updateEmailPlan(storefront_oid, settings, callback) {
      var postBody = settings;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailPlan");
      }
      // verify the required parameter 'settings' is set
      if (settings === undefined || settings === null) {
        throw new Error("Missing the required parameter 'settings' when calling updateEmailPlan");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailPlanResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/plan', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailPostcard operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailPostcardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email postcard
     * @param {Number} storefront_oid 
     * @param {String} commseq_postcard_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcard} email_commseq_postcard Email commseq postcard
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailPostcardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailCommseqPostcardResponse}
     */
  }, {
    key: "updateEmailPostcard",
    value: function updateEmailPostcard(storefront_oid, commseq_postcard_uuid, email_commseq_postcard, callback) {
      var postBody = email_commseq_postcard;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailPostcard");
      }
      // verify the required parameter 'commseq_postcard_uuid' is set
      if (commseq_postcard_uuid === undefined || commseq_postcard_uuid === null) {
        throw new Error("Missing the required parameter 'commseq_postcard_uuid' when calling updateEmailPostcard");
      }
      // verify the required parameter 'email_commseq_postcard' is set
      if (email_commseq_postcard === undefined || email_commseq_postcard === null) {
        throw new Error("Missing the required parameter 'email_commseq_postcard' when calling updateEmailPostcard");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'commseq_postcard_uuid': commseq_postcard_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailCommseqPostcardResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/postcards/{commseq_postcard_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email segment
     * @param {Number} storefront_oid 
     * @param {String} email_segment_uuid 
     * @param {module:com.ultracart.admin.v2.models/EmailSegment} email_segment Email segment
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSegmentResponse}
     */
  }, {
    key: "updateEmailSegment",
    value: function updateEmailSegment(storefront_oid, email_segment_uuid, email_segment, callback) {
      var postBody = email_segment;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailSegment");
      }
      // verify the required parameter 'email_segment_uuid' is set
      if (email_segment_uuid === undefined || email_segment_uuid === null) {
        throw new Error("Missing the required parameter 'email_segment_uuid' when calling updateEmailSegment");
      }
      // verify the required parameter 'email_segment' is set
      if (email_segment === undefined || email_segment === null) {
        throw new Error("Missing the required parameter 'email_segment' when calling updateEmailSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_segment_uuid': email_segment_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/segments/{email_segment_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailSendingDomain operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailSendingDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSendingDomainResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email sending domain
     * @param {String} domain 
     * @param {module:com.ultracart.admin.v2.models/EmailDomain} email_domain EmailDomain
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailSendingDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSendingDomainResponse}
     */
  }, {
    key: "updateEmailSendingDomain",
    value: function updateEmailSendingDomain(domain, email_domain, callback) {
      var postBody = email_domain;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling updateEmailSendingDomain");
      }
      // verify the required parameter 'email_domain' is set
      if (email_domain === undefined || email_domain === null) {
        throw new Error("Missing the required parameter 'email_domain' when calling updateEmailSendingDomain");
      }
      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSendingDomainResponse["default"];
      return this.apiClient.callApi('/storefront/email/sending_domains/{domain}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateEmailSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/EmailSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email settings
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/EmailSettings} settings settings request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/EmailSettingsResponse}
     */
  }, {
    key: "updateEmailSettings",
    value: function updateEmailSettings(storefront_oid, settings, callback) {
      var postBody = settings;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateEmailSettings");
      }
      // verify the required parameter 'settings' is set
      if (settings === undefined || settings === null) {
        throw new Error("Missing the required parameter 'settings' when calling updateEmailSettings");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/email/settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateExperiment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateExperimentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ExperimentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update experiment
     * @param {Number} storefront_oid 
     * @param {Number} storefront_experiment_oid 
     * @param {module:com.ultracart.admin.v2.models/Experiment} experiment Experiment
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateExperimentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ExperimentResponse}
     */
  }, {
    key: "updateExperiment",
    value: function updateExperiment(storefront_oid, storefront_experiment_oid, experiment, callback) {
      var postBody = experiment;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateExperiment");
      }
      // verify the required parameter 'storefront_experiment_oid' is set
      if (storefront_experiment_oid === undefined || storefront_experiment_oid === null) {
        throw new Error("Missing the required parameter 'storefront_experiment_oid' when calling updateExperiment");
      }
      // verify the required parameter 'experiment' is set
      if (experiment === undefined || experiment === null) {
        throw new Error("Missing the required parameter 'experiment' when calling updateExperiment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'storefront_experiment_oid': storefront_experiment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ExperimentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/experiments/{storefront_experiment_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateLibraryItem operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateLibraryItemCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update library item. Note that only certain fields may be updated via this method.
     * @param {Number} library_item_oid 
     * @param {module:com.ultracart.admin.v2.models/LibraryItem} library_item Library item
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateLibraryItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/LibraryItemResponse}
     */
  }, {
    key: "updateLibraryItem",
    value: function updateLibraryItem(library_item_oid, library_item, callback) {
      var postBody = library_item;
      // verify the required parameter 'library_item_oid' is set
      if (library_item_oid === undefined || library_item_oid === null) {
        throw new Error("Missing the required parameter 'library_item_oid' when calling updateLibraryItem");
      }
      // verify the required parameter 'library_item' is set
      if (library_item === undefined || library_item === null) {
        throw new Error("Missing the required parameter 'library_item' when calling updateLibraryItem");
      }
      var pathParams = {
        'library_item_oid': library_item_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LibraryItemResponse["default"];
      return this.apiClient.callApi('/storefront/code_library/{library_item_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateScreenRecordingMerchantNotes operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingMerchantNotesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update merchant notes on a screen recording
     * Update merchant notes on a screen recording 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingMerchantNotesRequest} merchant_notes_request Merchant Notes
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingMerchantNotesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateScreenRecordingMerchantNotes",
    value: function updateScreenRecordingMerchantNotes(storefront_oid, screen_recording_uuid, merchant_notes_request, callback) {
      var postBody = merchant_notes_request;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateScreenRecordingMerchantNotes");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling updateScreenRecordingMerchantNotes");
      }
      // verify the required parameter 'merchant_notes_request' is set
      if (merchant_notes_request === undefined || merchant_notes_request === null) {
        throw new Error("Missing the required parameter 'merchant_notes_request' when calling updateScreenRecordingMerchantNotes");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/merchant_notes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateScreenRecordingSegment operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update screen recording segment
     * @param {Number} storefront_oid 
     * @param {Number} screen_recording_segment_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} segment Segment
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSegmentResponse}
     */
  }, {
    key: "updateScreenRecordingSegment",
    value: function updateScreenRecordingSegment(storefront_oid, screen_recording_segment_oid, segment, callback) {
      var postBody = segment;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateScreenRecordingSegment");
      }
      // verify the required parameter 'screen_recording_segment_oid' is set
      if (screen_recording_segment_oid === undefined || screen_recording_segment_oid === null) {
        throw new Error("Missing the required parameter 'screen_recording_segment_oid' when calling updateScreenRecordingSegment");
      }
      // verify the required parameter 'segment' is set
      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling updateScreenRecordingSegment");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_segment_oid': screen_recording_segment_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSegmentResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/segments/{screen_recording_segment_oid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateScreenRecordingSettings operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettingsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update screen recording settings
     * @param {Number} storefront_oid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} settings Settings
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ScreenRecordingSettingsResponse}
     */
  }, {
    key: "updateScreenRecordingSettings",
    value: function updateScreenRecordingSettings(storefront_oid, settings, callback) {
      var postBody = settings;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateScreenRecordingSettings");
      }
      // verify the required parameter 'settings' is set
      if (settings === undefined || settings === null) {
        throw new Error("Missing the required parameter 'settings' when calling updateScreenRecordingSettings");
      }
      var pathParams = {
        'storefront_oid': storefront_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenRecordingSettingsResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateScreenRecordingTags operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update tags on a screen recording
     * Update tags on a screen recording 
     * @param {Number} storefront_oid 
     * @param {String} screen_recording_uuid 
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingTagsRequest} tags Tags
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateScreenRecordingTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateScreenRecordingTags",
    value: function updateScreenRecordingTags(storefront_oid, screen_recording_uuid, tags, callback) {
      var postBody = tags;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateScreenRecordingTags");
      }
      // verify the required parameter 'screen_recording_uuid' is set
      if (screen_recording_uuid === undefined || screen_recording_uuid === null) {
        throw new Error("Missing the required parameter 'screen_recording_uuid' when calling updateScreenRecordingTags");
      }
      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling updateScreenRecordingTags");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'screen_recording_uuid': screen_recording_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{storefront_oid}/screen_recordings/{screen_recording_uuid}/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateTransactionEmail operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateTransactionEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a transaction email object
     * Updates a transactional email 
     * @param {Number} storefront_oid 
     * @param {String} email_id 
     * @param {module:com.ultracart.admin.v2.models/TransactionEmail} transaction_email TransactionEmail
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateTransactionEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TransactionEmailResponse}
     */
  }, {
    key: "updateTransactionEmail",
    value: function updateTransactionEmail(storefront_oid, email_id, transaction_email, callback) {
      var postBody = transaction_email;
      // verify the required parameter 'storefront_oid' is set
      if (storefront_oid === undefined || storefront_oid === null) {
        throw new Error("Missing the required parameter 'storefront_oid' when calling updateTransactionEmail");
      }
      // verify the required parameter 'email_id' is set
      if (email_id === undefined || email_id === null) {
        throw new Error("Missing the required parameter 'email_id' when calling updateTransactionEmail");
      }
      // verify the required parameter 'transaction_email' is set
      if (transaction_email === undefined || transaction_email === null) {
        throw new Error("Missing the required parameter 'transaction_email' when calling updateTransactionEmail");
      }
      var pathParams = {
        'storefront_oid': storefront_oid,
        'email_id': email_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionEmailResponse["default"];
      return this.apiClient.callApi('/storefront/{storefront_oid}/transaction_email/list/{email_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateTwilioAccount operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~updateTwilioAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TwilioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Twilio account
     * @param {String} esp_twilio_uuid 
     * @param {module:com.ultracart.admin.v2.models/Twilio} twilio Twilio
     * @param {module:com.ultracart.admin.v2/StorefrontApi~updateTwilioAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TwilioResponse}
     */
  }, {
    key: "updateTwilioAccount",
    value: function updateTwilioAccount(esp_twilio_uuid, twilio, callback) {
      var postBody = twilio;
      // verify the required parameter 'esp_twilio_uuid' is set
      if (esp_twilio_uuid === undefined || esp_twilio_uuid === null) {
        throw new Error("Missing the required parameter 'esp_twilio_uuid' when calling updateTwilioAccount");
      }
      // verify the required parameter 'twilio' is set
      if (twilio === undefined || twilio === null) {
        throw new Error("Missing the required parameter 'twilio' when calling updateTwilioAccount");
      }
      var pathParams = {
        'esp_twilio_uuid': esp_twilio_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TwilioResponse["default"];
      return this.apiClient.callApi('/storefront/twilio/accounts/{esp_twilio_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the uploadFsFile operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~uploadFsFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This is the last step in uploading a file after 1) calling getUploadFsFileUrl and 2) uploading a file to the provided url, then finally 3) calling this method and providing the key to trigger the server into reading the S3 bucket and retrieving the file.
     * @param {Number} id 
     * @param {module:com.ultracart.admin.v2.models/FileManagerUploadRequest} upload_request UploadRequest
     * @param {module:com.ultracart.admin.v2/StorefrontApi~uploadFsFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "uploadFsFile",
    value: function uploadFsFile(id, upload_request, callback) {
      var postBody = upload_request;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling uploadFsFile");
      }
      // verify the required parameter 'upload_request' is set
      if (upload_request === undefined || upload_request === null) {
        throw new Error("Missing the required parameter 'upload_request' when calling uploadFsFile");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/storefront/{id}/fs/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the validateRuler operation.
     * @callback module:com.ultracart.admin.v2/StorefrontApi~validateRulerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/RulerValidationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate AWS Event Ruler
     * @param {module:com.ultracart.admin.v2.models/RulerValidationRequest} ruler_validate_request Ruler Validate Request
     * @param {module:com.ultracart.admin.v2/StorefrontApi~validateRulerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/RulerValidationResponse}
     */
  }, {
    key: "validateRuler",
    value: function validateRuler(ruler_validate_request, callback) {
      var postBody = ruler_validate_request;
      // verify the required parameter 'ruler_validate_request' is set
      if (ruler_validate_request === undefined || ruler_validate_request === null) {
        throw new Error("Missing the required parameter 'ruler_validate_request' when calling validateRuler");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartBrowserApiKey', 'ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RulerValidationResponse["default"];
      return this.apiClient.callApi('/storefront/ruler/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();