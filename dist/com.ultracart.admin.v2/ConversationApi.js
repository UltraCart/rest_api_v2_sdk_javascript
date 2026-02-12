"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BaseResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/BaseResponse"));
var _ConversationAgentAuthResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentAuthResponse"));
var _ConversationAgentProfile = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentProfile"));
var _ConversationAgentProfileResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentProfileResponse"));
var _ConversationAgentProfilesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentProfilesResponse"));
var _ConversationAutocompleteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAutocompleteRequest"));
var _ConversationAutocompleteResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAutocompleteResponse"));
var _ConversationCannedMessage = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessage"));
var _ConversationCannedMessageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessageResponse"));
var _ConversationCannedMessagesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessagesResponse"));
var _ConversationCannedMessagesSearch = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessagesSearch"));
var _ConversationDeleteKnowledgeBaseDocumentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDeleteKnowledgeBaseDocumentResponse"));
var _ConversationDepartment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartment"));
var _ConversationDepartmentMembersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartmentMembersResponse"));
var _ConversationDepartmentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartmentResponse"));
var _ConversationDepartmentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartmentsResponse"));
var _ConversationEngagement = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagement"));
var _ConversationEngagementResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagementResponse"));
var _ConversationEngagementsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagementsResponse"));
var _ConversationInsertKnowledgeBaseDocumentRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationInsertKnowledgeBaseDocumentRequest"));
var _ConversationInsertKnowledgeBaseDocumentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationInsertKnowledgeBaseDocumentResponse"));
var _ConversationJoinRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationJoinRequest"));
var _ConversationKnowledgeBaseDocumentUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentUploadUrlResponse"));
var _ConversationKnowledgeBaseDocumentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentsResponse"));
var _ConversationLocationsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationLocationsResponse"));
var _ConversationMcpServer = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMcpServer"));
var _ConversationMcpServerResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMcpServerResponse"));
var _ConversationMcpServerToolsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMcpServerToolsResponse"));
var _ConversationMcpServersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMcpServersResponse"));
var _ConversationMessagesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMessagesResponse"));
var _ConversationMultimediaUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse"));
var _ConversationPbxAddress = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAddress"));
var _ConversationPbxAddressResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAddressResponse"));
var _ConversationPbxAddressesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAddressesResponse"));
var _ConversationPbxAgent = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAgent"));
var _ConversationPbxAgentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAgentResponse"));
var _ConversationPbxAgentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAgentsResponse"));
var _ConversationPbxAudio = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAudio"));
var _ConversationPbxAudioResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAudioResponse"));
var _ConversationPbxAudioUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAudioUploadUrlResponse"));
var _ConversationPbxAudioUsageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse"));
var _ConversationPbxAudiosResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAudiosResponse"));
var _ConversationPbxAvailablePhoneNumbersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxAvailablePhoneNumbersResponse"));
var _ConversationPbxCallResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCallResponse"));
var _ConversationPbxCallSearchRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCallSearchRequest"));
var _ConversationPbxCallSearchResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCallSearchResponse"));
var _ConversationPbxClassOfService = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxClassOfService"));
var _ConversationPbxClassOfServiceResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse"));
var _ConversationPbxClassOfServicesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxClassOfServicesResponse"));
var _ConversationPbxCosAuditLogsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCosAuditLogsResponse"));
var _ConversationPbxCustomerSnapshotRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest"));
var _ConversationPbxCustomerSnapshotResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotResponse"));
var _ConversationPbxHardwarePhone = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxHardwarePhone"));
var _ConversationPbxHardwarePhoneResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse"));
var _ConversationPbxHardwarePhonesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxHardwarePhonesResponse"));
var _ConversationPbxMenu = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxMenu"));
var _ConversationPbxMenuResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxMenuResponse"));
var _ConversationPbxMenusResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxMenusResponse"));
var _ConversationPbxPhoneManufacturersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxPhoneManufacturersResponse"));
var _ConversationPbxPhoneNumber = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxPhoneNumber"));
var _ConversationPbxPhoneNumberPurchaseRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxPhoneNumberPurchaseRequest"));
var _ConversationPbxPhoneNumberResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse"));
var _ConversationPbxPhoneNumbersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxPhoneNumbersResponse"));
var _ConversationPbxQueue = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxQueue"));
var _ConversationPbxQueueResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxQueueResponse"));
var _ConversationPbxQueuesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxQueuesResponse"));
var _ConversationPbxTimeBased = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeBased"));
var _ConversationPbxTimeBasedResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse"));
var _ConversationPbxTimeBasedsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeBasedsResponse"));
var _ConversationPbxTimeRange = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeRange"));
var _ConversationPbxTimeRangeResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse"));
var _ConversationPbxTimeRangesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse"));
var _ConversationPbxVoicemailMailbox = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox"));
var _ConversationPbxVoicemailMailboxResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse"));
var _ConversationPbxVoicemailMailboxesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxesResponse"));
var _ConversationPbxVoicemailMessageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse"));
var _ConversationPbxVoicemailMessageSummariesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummariesResponse"));
var _ConversationPermissionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationPermissionsResponse"));
var _ConversationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationResponse"));
var _ConversationSearchRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationSearchRequest"));
var _ConversationSearchResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationSearchResponse"));
var _ConversationStartRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartRequest"));
var _ConversationStartResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartResponse"));
var _ConversationVirtualAgentBudget = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationVirtualAgentBudget"));
var _ConversationVirtualAgentBudgetResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationVirtualAgentBudgetResponse"));
var _ConversationVirtualAgentCapabilities = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilities"));
var _ConversationVirtualAgentCapabilitiesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilitiesResponse"));
var _ConversationWebchatContext = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatContext"));
var _ConversationWebchatQueueStatusUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest"));
var _ConversationWebchatQueueStatusesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse"));
var _ConversationsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationsResponse"));
var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));
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
* Conversation service.
* @module com.ultracart.admin.v2/ConversationApi
* @version 4.1.59
*/
var ConversationApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ConversationApi. 
  * @alias module:com.ultracart.admin.v2/ConversationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConversationApi(apiClient) {
    _classCallCheck(this, ConversationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteAgentProfileKnowledgeBaseDocument operation.
   * @callback module:com.ultracart.admin.v2/ConversationApi~deleteAgentProfileKnowledgeBaseDocumentCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/ConversationDeleteKnowledgeBaseDocumentResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a knowledge base document
   * Delete a knowledge base document 
   * @param {Number} user_id 
   * @param {String} document_uuid 
   * @param {module:com.ultracart.admin.v2/ConversationApi~deleteAgentProfileKnowledgeBaseDocumentCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDeleteKnowledgeBaseDocumentResponse}
   */
  return _createClass(ConversationApi, [{
    key: "deleteAgentProfileKnowledgeBaseDocument",
    value: function deleteAgentProfileKnowledgeBaseDocument(user_id, document_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteAgentProfileKnowledgeBaseDocument");
      }
      // verify the required parameter 'document_uuid' is set
      if (document_uuid === undefined || document_uuid === null) {
        throw new Error("Missing the required parameter 'document_uuid' when calling deleteAgentProfileKnowledgeBaseDocument");
      }
      var pathParams = {
        'user_id': user_id,
        'document_uuid': document_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationDeleteKnowledgeBaseDocumentResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/knowledge_base/{document_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteAgentProfileMcp operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteAgentProfileMcpCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an agent MCP server
     * Delete an agent MCP server 
     * @param {Number} user_id 
     * @param {String} mcp_server_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteAgentProfileMcpCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteAgentProfileMcp",
    value: function deleteAgentProfileMcp(user_id, mcp_server_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling deleteAgentProfileMcp");
      }
      // verify the required parameter 'mcp_server_uuid' is set
      if (mcp_server_uuid === undefined || mcp_server_uuid === null) {
        throw new Error("Missing the required parameter 'mcp_server_uuid' when calling deleteAgentProfileMcp");
      }
      var pathParams = {
        'user_id': user_id,
        'mcp_server_uuid': mcp_server_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteConversationCannedMessage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteConversationCannedMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a conversation canned message
     * Delete a conversation canned message 
     * @param {Number} conversation_canned_message_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteConversationCannedMessage",
    value: function deleteConversationCannedMessage(conversation_canned_message_oid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_canned_message_oid' is set
      if (conversation_canned_message_oid === undefined || conversation_canned_message_oid === null) {
        throw new Error("Missing the required parameter 'conversation_canned_message_oid' when calling deleteConversationCannedMessage");
      }
      var pathParams = {
        'conversation_canned_message_oid': conversation_canned_message_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/canned_messages/{conversation_canned_message_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteDepartmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a conversation department
     * Delete a conversation department 
     * @param {Number} conversation_department_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteDepartment",
    value: function deleteDepartment(conversation_department_oid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_department_oid' is set
      if (conversation_department_oid === undefined || conversation_department_oid === null) {
        throw new Error("Missing the required parameter 'conversation_department_oid' when calling deleteDepartment");
      }
      var pathParams = {
        'conversation_department_oid': conversation_department_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/departments/{conversation_department_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteEngagementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a conversation engagement
     * Delete a conversation engagement 
     * @param {Number} conversation_engagement_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteEngagement",
    value: function deleteEngagement(conversation_engagement_oid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_engagement_oid' is set
      if (conversation_engagement_oid === undefined || conversation_engagement_oid === null) {
        throw new Error("Missing the required parameter 'conversation_engagement_oid' when calling deleteEngagement");
      }
      var pathParams = {
        'conversation_engagement_oid': conversation_engagement_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/engagements/{conversation_engagement_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxAddress operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx address
     * Delete a pbx address 
     * @param {String} conversationPbxAddressUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse}
     */
  }, {
    key: "deletePbxAddress",
    value: function deletePbxAddress(conversationPbxAddressUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAddressUuid' is set
      if (conversationPbxAddressUuid === undefined || conversationPbxAddressUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAddressUuid' when calling deletePbxAddress");
      }
      var pathParams = {
        'conversationPbxAddressUuid': conversationPbxAddressUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAddressResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/address/{conversationPbxAddressUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxAgentVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxAgentVoicemailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Agent Voicemail
     * Delete pbx agent Voicemail 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxAgentVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deletePbxAgentVoicemail",
    value: function deletePbxAgentVoicemail(recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling deletePbxAgentVoicemail");
      }
      var pathParams = {
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/agent/voicemails/{recording_sid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxAudio operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx audio
     * Delete a pbx audio 
     * @param {String} conversationPbxAudioUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse}
     */
  }, {
    key: "deletePbxAudio",
    value: function deletePbxAudio(conversationPbxAudioUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAudioUuid' is set
      if (conversationPbxAudioUuid === undefined || conversationPbxAudioUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAudioUuid' when calling deletePbxAudio");
      }
      var pathParams = {
        'conversationPbxAudioUuid': conversationPbxAudioUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio/{conversationPbxAudioUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxClassOfService operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxClassOfServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/BaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx class of service
     * Delete a class of service 
     * @param {String} classOfServiceUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxClassOfServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/BaseResponse}
     */
  }, {
    key: "deletePbxClassOfService",
    value: function deletePbxClassOfService(classOfServiceUuid, callback) {
      var postBody = null;
      // verify the required parameter 'classOfServiceUuid' is set
      if (classOfServiceUuid === undefined || classOfServiceUuid === null) {
        throw new Error("Missing the required parameter 'classOfServiceUuid' when calling deletePbxClassOfService");
      }
      var pathParams = {
        'classOfServiceUuid': classOfServiceUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service/{classOfServiceUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxHardwarePhone operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxHardwarePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx hardware phone
     * Delete a pbx hardware phone 
     * @param {String} conversationPbxHardwarePhoneUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxHardwarePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse}
     */
  }, {
    key: "deletePbxHardwarePhone",
    value: function deletePbxHardwarePhone(conversationPbxHardwarePhoneUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxHardwarePhoneUuid' is set
      if (conversationPbxHardwarePhoneUuid === undefined || conversationPbxHardwarePhoneUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxHardwarePhoneUuid' when calling deletePbxHardwarePhone");
      }
      var pathParams = {
        'conversationPbxHardwarePhoneUuid': conversationPbxHardwarePhoneUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhoneResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxMenu operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx menu
     * Delete a pbx menu 
     * @param {String} conversationPbxMenuUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse}
     */
  }, {
    key: "deletePbxMenu",
    value: function deletePbxMenu(conversationPbxMenuUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxMenuUuid' is set
      if (conversationPbxMenuUuid === undefined || conversationPbxMenuUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxMenuUuid' when calling deletePbxMenu");
      }
      var pathParams = {
        'conversationPbxMenuUuid': conversationPbxMenuUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxMenuResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/menu/{conversationPbxMenuUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxPhoneNumber operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx phoneNumber
     * Delete a pbx phoneNumber. Only works if deletion_protected is false. 
     * @param {String} conversationPbxPhoneNumberUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deletePbxPhoneNumber",
    value: function deletePbxPhoneNumber(conversationPbxPhoneNumberUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxPhoneNumberUuid' is set
      if (conversationPbxPhoneNumberUuid === undefined || conversationPbxPhoneNumberUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxPhoneNumberUuid' when calling deletePbxPhoneNumber");
      }
      var pathParams = {
        'conversationPbxPhoneNumberUuid': conversationPbxPhoneNumberUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxQueue operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx queue
     * Delete a pbx queue 
     * @param {String} conversationPbxQueueUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse}
     */
  }, {
    key: "deletePbxQueue",
    value: function deletePbxQueue(conversationPbxQueueUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxQueueUuid' is set
      if (conversationPbxQueueUuid === undefined || conversationPbxQueueUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxQueueUuid' when calling deletePbxQueue");
      }
      var pathParams = {
        'conversationPbxQueueUuid': conversationPbxQueueUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxQueueResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queue/{conversationPbxQueueUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxQueueVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxQueueVoicemailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Queue Voicemail
     * Delete pbx queue Voicemail 
     * @param {String} queue_uuid 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxQueueVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deletePbxQueueVoicemail",
    value: function deletePbxQueueVoicemail(queue_uuid, recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling deletePbxQueueVoicemail");
      }
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling deletePbxQueueVoicemail");
      }
      var pathParams = {
        'queue_uuid': queue_uuid,
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxTimeBased operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxTimeBasedCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx timeBased
     * Delete a pbx timeBased 
     * @param {String} conversationPbxTimeBasedUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxTimeBasedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse}
     */
  }, {
    key: "deletePbxTimeBased",
    value: function deletePbxTimeBased(conversationPbxTimeBasedUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxTimeBasedUuid' is set
      if (conversationPbxTimeBasedUuid === undefined || conversationPbxTimeBasedUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeBasedUuid' when calling deletePbxTimeBased");
      }
      var pathParams = {
        'conversationPbxTimeBasedUuid': conversationPbxTimeBasedUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeBasedResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_based/{conversationPbxTimeBasedUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxTimeRange operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx timeRange
     * Delete a pbx timeRange 
     * @param {String} conversationPbxTimeRangeUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse}
     */
  }, {
    key: "deletePbxTimeRange",
    value: function deletePbxTimeRange(conversationPbxTimeRangeUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxTimeRangeUuid' is set
      if (conversationPbxTimeRangeUuid === undefined || conversationPbxTimeRangeUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeRangeUuid' when calling deletePbxTimeRange");
      }
      var pathParams = {
        'conversationPbxTimeRangeUuid': conversationPbxTimeRangeUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeRangeResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_range/{conversationPbxTimeRangeUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deletePbxVoicemailMailbox operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deletePbxVoicemailMailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pbx voicemailMailbox
     * Delete a pbx voicemailMailbox 
     * @param {String} conversationPbxVoicemailMailboxUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deletePbxVoicemailMailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse}
     */
  }, {
    key: "deletePbxVoicemailMailbox",
    value: function deletePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxVoicemailMailboxUuid' is set
      if (conversationPbxVoicemailMailboxUuid === undefined || conversationPbxVoicemailMailboxUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxVoicemailMailboxUuid' when calling deletePbxVoicemailMailbox");
      }
      var pathParams = {
        'conversationPbxVoicemailMailboxUuid': conversationPbxVoicemailMailboxUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMailboxResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentKeepAlive operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentKeepAliveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Agent keep alive
     * Called periodically by the conversation API to keep the session alive. 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentKeepAliveCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAgentKeepAlive",
    value: function getAgentKeepAlive(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/agent/keepalive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfile operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent profile
     * Retrieve the agents profile 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAgentProfileResponse}
     */
  }, {
    key: "getAgentProfile",
    value: function getAgentProfile(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationAgentProfileResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfileKnowledgeBase operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfileKnowledgeBaseCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of knowledge base documents associated with this agent profile
     * Retrieve knowledge base documents 
     * @param {Number} user_id 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfileKnowledgeBaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentsResponse}
     */
  }, {
    key: "getAgentProfileKnowledgeBase",
    value: function getAgentProfileKnowledgeBase(user_id, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getAgentProfileKnowledgeBase");
      }
      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationKnowledgeBaseDocumentsResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/knowledge_base', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfileMcp operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an MCP server associated with this agent
     * Retrieve MCP server associated with this agent 
     * @param {Number} user_id 
     * @param {String} mcp_server_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMcpServerResponse}
     */
  }, {
    key: "getAgentProfileMcp",
    value: function getAgentProfileMcp(user_id, mcp_server_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getAgentProfileMcp");
      }
      // verify the required parameter 'mcp_server_uuid' is set
      if (mcp_server_uuid === undefined || mcp_server_uuid === null) {
        throw new Error("Missing the required parameter 'mcp_server_uuid' when calling getAgentProfileMcp");
      }
      var pathParams = {
        'user_id': user_id,
        'mcp_server_uuid': mcp_server_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMcpServerResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfileMcpTools operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpToolsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServerToolsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tools available from the MCP server
     * Get the tools available from the MCP server 
     * @param {Number} user_id 
     * @param {String} mcp_server_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpToolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMcpServerToolsResponse}
     */
  }, {
    key: "getAgentProfileMcpTools",
    value: function getAgentProfileMcpTools(user_id, mcp_server_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getAgentProfileMcpTools");
      }
      // verify the required parameter 'mcp_server_uuid' is set
      if (mcp_server_uuid === undefined || mcp_server_uuid === null) {
        throw new Error("Missing the required parameter 'mcp_server_uuid' when calling getAgentProfileMcpTools");
      }
      var pathParams = {
        'user_id': user_id,
        'mcp_server_uuid': mcp_server_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMcpServerToolsResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}/tools', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfileMcps operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of MCP servers associated with this agent
     * Retrieve MCP servers associated with this agent 
     * @param {Number} user_id 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfileMcpsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMcpServersResponse}
     */
  }, {
    key: "getAgentProfileMcps",
    value: function getAgentProfileMcps(user_id, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getAgentProfileMcps");
      }
      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMcpServersResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentProfiles operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfilesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent profiles
     * Retrieve the agents profile 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAgentProfilesResponse}
     */
  }, {
    key: "getAgentProfiles",
    value: function getAgentProfiles(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationAgentProfilesResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAgentWebsocketAuthorization operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentWebsocketAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent websocket authorization
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentWebsocketAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse}
     */
  }, {
    key: "getAgentWebsocketAuthorization",
    value: function getAgentWebsocketAuthorization(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationAgentAuthResponse["default"];
      return this.apiClient.callApi('/conversation/agent/auth', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a conversation
     * Retrieve a conversation including the participants and messages 
     * @param {String} conversation_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationResponse}
     */
  }, {
    key: "getConversation",
    value: function getConversation(conversation_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversation");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationCannedMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationCannedMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of canned messages ordered by short_code
     * Retrieve a list of canned messages ordered by short_code 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationCannedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse}
     */
  }, {
    key: "getConversationCannedMessages",
    value: function getConversationCannedMessages(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationContext operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationContextCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a webchat conversation context
     * Get a webchat conversation context 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationContextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationWebchatContext}
     */
  }, {
    key: "getConversationContext",
    value: function getConversationContext(conversation_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversationContext");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationWebchatContext["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/context', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationDepartmentMemberList operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentMemberListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentMembersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of possible department members
     * Retrieve a list of possible department members 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentMemberListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentMembersResponse}
     */
  }, {
    key: "getConversationDepartmentMemberList",
    value: function getConversationDepartmentMemberList(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentMembersResponse["default"];
      return this.apiClient.callApi('/conversation/department_members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationDepartments operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of departments ordered by name
     * Retrieve a list of departments ordered by name 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse}
     */
  }, {
    key: "getConversationDepartments",
    value: function getConversationDepartments(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentsResponse["default"];
      return this.apiClient.callApi('/conversation/departments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an engagement
     * Retrieve an engagement 
     * @param {Number} conversation_engagement_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementResponse}
     */
  }, {
    key: "getConversationEngagement",
    value: function getConversationEngagement(conversation_engagement_oid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_engagement_oid' is set
      if (conversation_engagement_oid === undefined || conversation_engagement_oid === null) {
        throw new Error("Missing the required parameter 'conversation_engagement_oid' when calling getConversationEngagement");
      }
      var pathParams = {
        'conversation_engagement_oid': conversation_engagement_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementResponse["default"];
      return this.apiClient.callApi('/conversation/engagements/{conversation_engagement_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationEngagements operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of engagements ordered by name
     * Retrieve a list of engagements ordered by name 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementsResponse}
     */
  }, {
    key: "getConversationEngagements",
    value: function getConversationEngagements(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementsResponse["default"];
      return this.apiClient.callApi('/conversation/engagements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationKnowledgeBaseDocumentUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationKnowledgeBaseDocumentUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pre-signed conversation knowledge base document upload URL
     * Get a pre-signed conversation knowledge base document upload URL 
     * @param {Number} user_id 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationKnowledgeBaseDocumentUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationKnowledgeBaseDocumentUploadUrlResponse}
     */
  }, {
    key: "getConversationKnowledgeBaseDocumentUploadUrl",
    value: function getConversationKnowledgeBaseDocumentUploadUrl(user_id, extension, callback) {
      var postBody = null;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling getConversationKnowledgeBaseDocumentUploadUrl");
      }
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationKnowledgeBaseDocumentUploadUrl");
      }
      var pathParams = {
        'user_id': user_id,
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationKnowledgeBaseDocumentUploadUrlResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/knowledge_base/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve conversation messages
     * Retrieve conversation messages since a particular time 
     * @param {String} conversation_uuid 
     * @param {Number} since 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMessagesResponse}
     */
  }, {
    key: "getConversationMessages",
    value: function getConversationMessages(conversation_uuid, since, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversationMessages");
      }
      // verify the required parameter 'since' is set
      if (since === undefined || since === null) {
        throw new Error("Missing the required parameter 'since' when calling getConversationMessages");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid,
        'since': since
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/messages/{since}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationMultimediaUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationMultimediaUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a presigned conversation multimedia upload URL
     * Get a presigned conversation multimedia upload URL 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationMultimediaUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse}
     */
  }, {
    key: "getConversationMultimediaUploadUrl",
    value: function getConversationMultimediaUploadUrl(extension, callback) {
      var postBody = null;
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationMultimediaUploadUrl");
      }
      var pathParams = {
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMultimediaUploadUrlResponse["default"];
      return this.apiClient.callApi('/conversation/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationPbxAudioUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationPbxAudioUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pre-signed conversation multimedia upload URL
     * Get a pre-signed conversation multimedia upload URL 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationPbxAudioUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioUploadUrlResponse}
     */
  }, {
    key: "getConversationPbxAudioUploadUrl",
    value: function getConversationPbxAudioUploadUrl(extension, callback) {
      var postBody = null;
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationPbxAudioUploadUrl");
      }
      var pathParams = {
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioUploadUrlResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationPbxCustomerSnapshot operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationPbxCustomerSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get orders and customer information for a phone number
     * Retrieves all the orders, auto orders, and customer profile for a given phone number 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotRequest} pbx_customer_snapshot_request Conversation pbx customer snapshot request
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationPbxCustomerSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxCustomerSnapshotResponse}
     */
  }, {
    key: "getConversationPbxCustomerSnapshot",
    value: function getConversationPbxCustomerSnapshot(pbx_customer_snapshot_request, callback) {
      var postBody = pbx_customer_snapshot_request;
      // verify the required parameter 'pbx_customer_snapshot_request' is set
      if (pbx_customer_snapshot_request === undefined || pbx_customer_snapshot_request === null) {
        throw new Error("Missing the required parameter 'pbx_customer_snapshot_request' when calling getConversationPbxCustomerSnapshot");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxCustomerSnapshotResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/customer_snapshot', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationPermissions operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPermissionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve conversation permissions
     * Retrieve conversation permissions 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPermissionsResponse}
     */
  }, {
    key: "getConversationPermissions",
    value: function getConversationPermissions(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPermissionsResponse["default"];
      return this.apiClient.callApi('/conversation/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationWebchatQueueStatuses operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationWebchatQueueStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a conversation webchat queue statuses
     * Retrieve a conversation webchat queue statuses including agent status and queue entries 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationWebchatQueueStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse}
     */
  }, {
    key: "getConversationWebchatQueueStatuses",
    value: function getConversationWebchatQueueStatuses(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationWebchatQueueStatusesResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/queues/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversations operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of conversation summaries newest to oldest
     * Retrieve a list of conversation summaries that are ordered newest to oldest, include the most recent message and whether its been read. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.medium 
     * @param {String} opts.before 
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationsResponse}
     */
  }, {
    key: "getConversations",
    value: function getConversations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'medium': opts['medium'],
        'before': opts['before'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationsResponse["default"];
      return this.apiClient.callApi('/conversation/conversations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationsAutocomplete operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsAutocompleteCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAutocompleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of matching terms for a search field
     * Retrieve a list of matching terms for a search field 
     * @param {module:com.ultracart.admin.v2.models/ConversationAutocompleteRequest} autocomplete_request Autocomplete Request
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsAutocompleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAutocompleteResponse}
     */
  }, {
    key: "getConversationsAutocomplete",
    value: function getConversationsAutocomplete(autocomplete_request, callback) {
      var postBody = autocomplete_request;
      // verify the required parameter 'autocomplete_request' is set
      if (autocomplete_request === undefined || autocomplete_request === null) {
        throw new Error("Missing the required parameter 'autocomplete_request' when calling getConversationsAutocomplete");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationAutocompleteResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/autocomplete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationsSearch operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search conversations
     * Search conversations 
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchRequest} search_request Search Request
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationSearchResponse}
     */
  }, {
    key: "getConversationsSearch",
    value: function getConversationsSearch(search_request, callback) {
      var postBody = search_request;
      // verify the required parameter 'search_request' is set
      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling getConversationsSearch");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationSearchResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getLocationsForEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getLocationsForEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationLocationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get location data for engagement configuration
     * Get location data for engagement configuration 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getLocationsForEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationLocationsResponse}
     */
  }, {
    key: "getLocationsForEngagement",
    value: function getLocationsForEngagement(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationLocationsResponse["default"];
      return this.apiClient.callApi('/conversation/locations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAddress operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx address
     * Retrieve a pbx address 
     * @param {String} conversationPbxAddressUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse}
     */
  }, {
    key: "getPbxAddress",
    value: function getPbxAddress(conversationPbxAddressUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAddressUuid' is set
      if (conversationPbxAddressUuid === undefined || conversationPbxAddressUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAddressUuid' when calling getPbxAddress");
      }
      var pathParams = {
        'conversationPbxAddressUuid': conversationPbxAddressUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAddressResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/address/{conversationPbxAddressUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAddresses operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAddressesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddressesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx addresses
     * Retrieve pbx addresses 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAddressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAddressesResponse}
     */
  }, {
    key: "getPbxAddresses",
    value: function getPbxAddresses(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAddressesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/address', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAgent operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAgentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx agent
     * Retrieve a pbx agent 
     * @param {String} conversationPbxAgentUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAgentResponse}
     */
  }, {
    key: "getPbxAgent",
    value: function getPbxAgent(conversationPbxAgentUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAgentUuid' is set
      if (conversationPbxAgentUuid === undefined || conversationPbxAgentUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAgentUuid' when calling getPbxAgent");
      }
      var pathParams = {
        'conversationPbxAgentUuid': conversationPbxAgentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAgentResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/agent/{conversationPbxAgentUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAgentVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAgentVoicemailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Voicemail
     * Retrieve pbx agent Voicemail 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAgentVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse}
     */
  }, {
    key: "getPbxAgentVoicemail",
    value: function getPbxAgentVoicemail(recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling getPbxAgentVoicemail");
      }
      var pathParams = {
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMessageResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/agent/voicemails/{recording_sid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAgentVoicemails operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAgentVoicemailsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummariesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Voicemails
     * Retrieve pbx agent Voicemails 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAgentVoicemailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummariesResponse}
     */
  }, {
    key: "getPbxAgentVoicemails",
    value: function getPbxAgentVoicemails(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMessageSummariesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/agent/voicemails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAgents operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAgentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx agents
     * Retrieve pbx agents 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAgentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAgentsResponse}
     */
  }, {
    key: "getPbxAgents",
    value: function getPbxAgents(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAgentsResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/agent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAudio operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx audio
     * Retrieve a pbx audio 
     * @param {String} conversationPbxAudioUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse}
     */
  }, {
    key: "getPbxAudio",
    value: function getPbxAudio(conversationPbxAudioUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAudioUuid' is set
      if (conversationPbxAudioUuid === undefined || conversationPbxAudioUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAudioUuid' when calling getPbxAudio");
      }
      var pathParams = {
        'conversationPbxAudioUuid': conversationPbxAudioUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio/{conversationPbxAudioUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAudioUsage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAudioUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx audio usage
     * Retrieve a pbx audio usage 
     * @param {String} conversationPbxAudioUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAudioUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioUsageResponse}
     */
  }, {
    key: "getPbxAudioUsage",
    value: function getPbxAudioUsage(conversationPbxAudioUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxAudioUuid' is set
      if (conversationPbxAudioUuid === undefined || conversationPbxAudioUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAudioUuid' when calling getPbxAudioUsage");
      }
      var pathParams = {
        'conversationPbxAudioUuid': conversationPbxAudioUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioUsageResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio/{conversationPbxAudioUuid}/usage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxAudios operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxAudiosCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudiosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx audios
     * Retrieve pbx audios 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxAudiosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudiosResponse}
     */
  }, {
    key: "getPbxAudios",
    value: function getPbxAudios(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudiosResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxCall operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxCallCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx call record
     * Retrieve a single PBX call record with full details 
     * @param {String} callUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxCallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxCallResponse}
     */
  }, {
    key: "getPbxCall",
    value: function getPbxCall(callUuid, callback) {
      var postBody = null;
      // verify the required parameter 'callUuid' is set
      if (callUuid === undefined || callUuid === null) {
        throw new Error("Missing the required parameter 'callUuid' when calling getPbxCall");
      }
      var pathParams = {
        'callUuid': callUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxCallResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/call/{callUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxClassOfService operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxClassOfServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx class of service
     * Retrieve a single class of service 
     * @param {String} classOfServiceUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxClassOfServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse}
     */
  }, {
    key: "getPbxClassOfService",
    value: function getPbxClassOfService(classOfServiceUuid, callback) {
      var postBody = null;
      // verify the required parameter 'classOfServiceUuid' is set
      if (classOfServiceUuid === undefined || classOfServiceUuid === null) {
        throw new Error("Missing the required parameter 'classOfServiceUuid' when calling getPbxClassOfService");
      }
      var pathParams = {
        'classOfServiceUuid': classOfServiceUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxClassOfServiceResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service/{classOfServiceUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxClassesOfService operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxClassesOfServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfServicesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx classes of service
     * Retrieve all classes of service for the merchant 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxClassesOfServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxClassOfServicesResponse}
     */
  }, {
    key: "getPbxClassesOfService",
    value: function getPbxClassesOfService(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxClassOfServicesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxCosAuditLogs operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxCosAuditLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCosAuditLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx class of service audit logs
     * Retrieve audit log entries for class of service enforcement 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since ISO timestamp to filter entries since
     * @param {String} opts.agent_login Filter by agent login
     * @param {String} opts.action Action
     * @param {Number} opts.limit Maximum number of entries to return (default 100)
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxCosAuditLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxCosAuditLogsResponse}
     */
  }, {
    key: "getPbxCosAuditLogs",
    value: function getPbxCosAuditLogs(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'agent_login': opts['agent_login'],
        'action': opts['action'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxCosAuditLogsResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service/audit_log', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxHardwarePhone operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx hardware phone
     * Retrieve a pbx hardware phone 
     * @param {String} conversationPbxHardwarePhoneUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse}
     */
  }, {
    key: "getPbxHardwarePhone",
    value: function getPbxHardwarePhone(conversationPbxHardwarePhoneUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxHardwarePhoneUuid' is set
      if (conversationPbxHardwarePhoneUuid === undefined || conversationPbxHardwarePhoneUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxHardwarePhoneUuid' when calling getPbxHardwarePhone");
      }
      var pathParams = {
        'conversationPbxHardwarePhoneUuid': conversationPbxHardwarePhoneUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhoneResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxHardwarePhoneManufacturers operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhoneManufacturersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneManufacturersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx hardware phone manufacturers
     * Retrieve pbx hardware phone manufacturers and models for auto-provisioning 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhoneManufacturersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneManufacturersResponse}
     */
  }, {
    key: "getPbxHardwarePhoneManufacturers",
    value: function getPbxHardwarePhoneManufacturers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneManufacturersResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone/manufacturers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxHardwarePhones operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhonesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhonesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx hardware phones
     * Retrieve pbx hardware phones 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxHardwarePhonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhonesResponse}
     */
  }, {
    key: "getPbxHardwarePhones",
    value: function getPbxHardwarePhones(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhonesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxMenu operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx menu
     * Retrieve a pbx menu 
     * @param {String} conversationPbxMenuUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse}
     */
  }, {
    key: "getPbxMenu",
    value: function getPbxMenu(conversationPbxMenuUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxMenuUuid' is set
      if (conversationPbxMenuUuid === undefined || conversationPbxMenuUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxMenuUuid' when calling getPbxMenu");
      }
      var pathParams = {
        'conversationPbxMenuUuid': conversationPbxMenuUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxMenuResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/menu/{conversationPbxMenuUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxMenus operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxMenusCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx menus
     * Retrieve pbx menus 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxMenusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxMenusResponse}
     */
  }, {
    key: "getPbxMenus",
    value: function getPbxMenus(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxMenusResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/menu', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxPhoneNumber operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx phoneNumber
     * Retrieve a pbx phoneNumber 
     * @param {String} conversationPbxPhoneNumberUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse}
     */
  }, {
    key: "getPbxPhoneNumber",
    value: function getPbxPhoneNumber(conversationPbxPhoneNumberUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxPhoneNumberUuid' is set
      if (conversationPbxPhoneNumberUuid === undefined || conversationPbxPhoneNumberUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxPhoneNumberUuid' when calling getPbxPhoneNumber");
      }
      var pathParams = {
        'conversationPbxPhoneNumberUuid': conversationPbxPhoneNumberUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneNumberResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxPhoneNumbers operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxPhoneNumbersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumbersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx phoneNumbers
     * Retrieve pbx phoneNumbers 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxPhoneNumbersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumbersResponse}
     */
  }, {
    key: "getPbxPhoneNumbers",
    value: function getPbxPhoneNumbers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneNumbersResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxQueue operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx queue
     * Retrieve a pbx queue 
     * @param {String} conversationPbxQueueUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse}
     */
  }, {
    key: "getPbxQueue",
    value: function getPbxQueue(conversationPbxQueueUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxQueueUuid' is set
      if (conversationPbxQueueUuid === undefined || conversationPbxQueueUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxQueueUuid' when calling getPbxQueue");
      }
      var pathParams = {
        'conversationPbxQueueUuid': conversationPbxQueueUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxQueueResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queue/{conversationPbxQueueUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxQueueVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxQueueVoicemailCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Queue Voicemail
     * Retrieve pbx queue Voicemail 
     * @param {String} queue_uuid 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxQueueVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageResponse}
     */
  }, {
    key: "getPbxQueueVoicemail",
    value: function getPbxQueueVoicemail(queue_uuid, recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling getPbxQueueVoicemail");
      }
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling getPbxQueueVoicemail");
      }
      var pathParams = {
        'queue_uuid': queue_uuid,
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMessageResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxQueueVoicemails operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxQueueVoicemailsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummariesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Queue Voicemails
     * Retrieve pbx queue voicemails 
     * @param {String} queue_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxQueueVoicemailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummariesResponse}
     */
  }, {
    key: "getPbxQueueVoicemails",
    value: function getPbxQueueVoicemails(queue_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling getPbxQueueVoicemails");
      }
      var pathParams = {
        'queue_uuid': queue_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMessageSummariesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queues/{queue_uuid}/voicemails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxQueues operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxQueuesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx queues
     * Retrieve pbx queues 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxQueuesResponse}
     */
  }, {
    key: "getPbxQueues",
    value: function getPbxQueues(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxQueuesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queue', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxTimeBased operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxTimeBasedCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx timeBased
     * Retrieve a pbx timeBased 
     * @param {String} conversationPbxTimeBasedUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxTimeBasedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse}
     */
  }, {
    key: "getPbxTimeBased",
    value: function getPbxTimeBased(conversationPbxTimeBasedUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxTimeBasedUuid' is set
      if (conversationPbxTimeBasedUuid === undefined || conversationPbxTimeBasedUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeBasedUuid' when calling getPbxTimeBased");
      }
      var pathParams = {
        'conversationPbxTimeBasedUuid': conversationPbxTimeBasedUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeBasedResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_based/{conversationPbxTimeBasedUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxTimeBaseds operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxTimeBasedsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx timeBaseds
     * Retrieve pbx timeBaseds 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxTimeBasedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedsResponse}
     */
  }, {
    key: "getPbxTimeBaseds",
    value: function getPbxTimeBaseds(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeBasedsResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_based', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxTimeRange operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx timeRange
     * Retrieve a pbx timeRange 
     * @param {String} conversationPbxTimeRangeUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse}
     */
  }, {
    key: "getPbxTimeRange",
    value: function getPbxTimeRange(conversationPbxTimeRangeUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxTimeRangeUuid' is set
      if (conversationPbxTimeRangeUuid === undefined || conversationPbxTimeRangeUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeRangeUuid' when calling getPbxTimeRange");
      }
      var pathParams = {
        'conversationPbxTimeRangeUuid': conversationPbxTimeRangeUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeRangeResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_range/{conversationPbxTimeRangeUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxTimeRanges operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxTimeRangesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx timeRanges
     * Retrieve pbx timeRanges 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxTimeRangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeRangesResponse}
     */
  }, {
    key: "getPbxTimeRanges",
    value: function getPbxTimeRanges(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeRangesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_range', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxVoicemailMailbox operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxVoicemailMailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx voicemailMailbox
     * Retrieve a pbx voicemailMailbox 
     * @param {String} conversationPbxVoicemailMailboxUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxVoicemailMailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse}
     */
  }, {
    key: "getPbxVoicemailMailbox",
    value: function getPbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxVoicemailMailboxUuid' is set
      if (conversationPbxVoicemailMailboxUuid === undefined || conversationPbxVoicemailMailboxUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxVoicemailMailboxUuid' when calling getPbxVoicemailMailbox");
      }
      var pathParams = {
        'conversationPbxVoicemailMailboxUuid': conversationPbxVoicemailMailboxUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMailboxResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getPbxVoicemailMailboxes operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getPbxVoicemailMailboxesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pbx voicemailMailboxes
     * Retrieve pbx voicemailMailboxes 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getPbxVoicemailMailboxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxesResponse}
     */
  }, {
    key: "getPbxVoicemailMailboxes",
    value: function getPbxVoicemailMailboxes(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMailboxesResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/voicemail_mailbox', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getVirtualAgentBudget operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getVirtualAgentBudgetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentBudgetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get virtual agent budget
     * Retrieve virtual agent budget 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getVirtualAgentBudgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationVirtualAgentBudgetResponse}
     */
  }, {
    key: "getVirtualAgentBudget",
    value: function getVirtualAgentBudget(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationVirtualAgentBudgetResponse["default"];
      return this.apiClient.callApi('/conversation/virtualagent/budget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getVirtualAgentCapabilities operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getVirtualAgentCapabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilitiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get virtual agent capabilities
     * Retrieve virtual agent capabilities 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getVirtualAgentCapabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilitiesResponse}
     */
  }, {
    key: "getVirtualAgentCapabilities",
    value: function getVirtualAgentCapabilities(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationVirtualAgentCapabilitiesResponse["default"];
      return this.apiClient.callApi('/conversation/virtualagent/capabilities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertAgentProfileKnowledgeBaseDocument operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertAgentProfileKnowledgeBaseDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationInsertKnowledgeBaseDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a knowledge base document
     * Insert a knowledge base document 
     * @param {Number} user_id 
     * @param {module:com.ultracart.admin.v2.models/ConversationInsertKnowledgeBaseDocumentRequest} knowledge_base_document_request Insert request
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertAgentProfileKnowledgeBaseDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationInsertKnowledgeBaseDocumentResponse}
     */
  }, {
    key: "insertAgentProfileKnowledgeBaseDocument",
    value: function insertAgentProfileKnowledgeBaseDocument(user_id, knowledge_base_document_request, callback) {
      var postBody = knowledge_base_document_request;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling insertAgentProfileKnowledgeBaseDocument");
      }
      // verify the required parameter 'knowledge_base_document_request' is set
      if (knowledge_base_document_request === undefined || knowledge_base_document_request === null) {
        throw new Error("Missing the required parameter 'knowledge_base_document_request' when calling insertAgentProfileKnowledgeBaseDocument");
      }
      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationInsertKnowledgeBaseDocumentResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/knowledge_base', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertAgentProfileMcp operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertAgentProfileMcpCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert an agent MCP server
     * Insert an agent MCP server 
     * @param {Number} user_id 
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServer} mcp_server MCP Server
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertAgentProfileMcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMcpServerResponse}
     */
  }, {
    key: "insertAgentProfileMcp",
    value: function insertAgentProfileMcp(user_id, mcp_server, callback) {
      var postBody = mcp_server;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling insertAgentProfileMcp");
      }
      // verify the required parameter 'mcp_server' is set
      if (mcp_server === undefined || mcp_server === null) {
        throw new Error("Missing the required parameter 'mcp_server' when calling insertAgentProfileMcp");
      }
      var pathParams = {
        'user_id': user_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationMcpServerResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertConversationCannedMessage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationCannedMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a canned message
     * Insert a canned message 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} canned_message Canned message
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse}
     */
  }, {
    key: "insertConversationCannedMessage",
    value: function insertConversationCannedMessage(canned_message, callback) {
      var postBody = canned_message;
      // verify the required parameter 'canned_message' is set
      if (canned_message === undefined || canned_message === null) {
        throw new Error("Missing the required parameter 'canned_message' when calling insertConversationCannedMessage");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessageResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertConversationDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationDepartmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a department
     * Insert a department 
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} department Department
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentResponse}
     */
  }, {
    key: "insertConversationDepartment",
    value: function insertConversationDepartment(department, callback) {
      var postBody = department;
      // verify the required parameter 'department' is set
      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling insertConversationDepartment");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentResponse["default"];
      return this.apiClient.callApi('/conversation/departments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertConversationEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a engagement
     * Insert a engagement 
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} engagement Engagement
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementResponse}
     */
  }, {
    key: "insertConversationEngagement",
    value: function insertConversationEngagement(engagement, callback) {
      var postBody = engagement;
      // verify the required parameter 'engagement' is set
      if (engagement === undefined || engagement === null) {
        throw new Error("Missing the required parameter 'engagement' when calling insertConversationEngagement");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementResponse["default"];
      return this.apiClient.callApi('/conversation/engagements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxAddress operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx address
     * Insert a pbx address 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddress} pbx_address Pbx Address
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse}
     */
  }, {
    key: "insertPbxAddress",
    value: function insertPbxAddress(pbx_address, callback) {
      var postBody = pbx_address;
      // verify the required parameter 'pbx_address' is set
      if (pbx_address === undefined || pbx_address === null) {
        throw new Error("Missing the required parameter 'pbx_address' when calling insertPbxAddress");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAddressResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxAudio operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx audio
     * Insert a pbx audio 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudio} pbx_audio Pbx Audio
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse}
     */
  }, {
    key: "insertPbxAudio",
    value: function insertPbxAudio(pbx_audio, callback) {
      var postBody = pbx_audio;
      // verify the required parameter 'pbx_audio' is set
      if (pbx_audio === undefined || pbx_audio === null) {
        throw new Error("Missing the required parameter 'pbx_audio' when calling insertPbxAudio");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxClassOfService operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxClassOfServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx class of service
     * Create a new class of service 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfService} class_of_service Class of service
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxClassOfServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse}
     */
  }, {
    key: "insertPbxClassOfService",
    value: function insertPbxClassOfService(class_of_service, callback) {
      var postBody = class_of_service;
      // verify the required parameter 'class_of_service' is set
      if (class_of_service === undefined || class_of_service === null) {
        throw new Error("Missing the required parameter 'class_of_service' when calling insertPbxClassOfService");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxClassOfServiceResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxHardwarePhone operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxHardwarePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx hardware phone
     * Insert a pbx hardware phone 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhone} pbx_hardware_phone Pbx Hardware Phone
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxHardwarePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse}
     */
  }, {
    key: "insertPbxHardwarePhone",
    value: function insertPbxHardwarePhone(pbx_hardware_phone, callback) {
      var postBody = pbx_hardware_phone;
      // verify the required parameter 'pbx_hardware_phone' is set
      if (pbx_hardware_phone === undefined || pbx_hardware_phone === null) {
        throw new Error("Missing the required parameter 'pbx_hardware_phone' when calling insertPbxHardwarePhone");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhoneResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxMenu operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx menu
     * Insert a pbx menu 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenu} pbx_menu Pbx Menu
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse}
     */
  }, {
    key: "insertPbxMenu",
    value: function insertPbxMenu(pbx_menu, callback) {
      var postBody = pbx_menu;
      // verify the required parameter 'pbx_menu' is set
      if (pbx_menu === undefined || pbx_menu === null) {
        throw new Error("Missing the required parameter 'pbx_menu' when calling insertPbxMenu");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxMenuResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/menu', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxQueue operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx queue
     * Insert a pbx queue 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueue} pbx_queue Pbx Queue
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse}
     */
  }, {
    key: "insertPbxQueue",
    value: function insertPbxQueue(pbx_queue, callback) {
      var postBody = pbx_queue;
      // verify the required parameter 'pbx_queue' is set
      if (pbx_queue === undefined || pbx_queue === null) {
        throw new Error("Missing the required parameter 'pbx_queue' when calling insertPbxQueue");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxQueueResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queue', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxTimeBased operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxTimeBasedCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx timeBased
     * Insert a pbx timeBased 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBased} pbx_timeBased Pbx TimeBased
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxTimeBasedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse}
     */
  }, {
    key: "insertPbxTimeBased",
    value: function insertPbxTimeBased(pbx_timeBased, callback) {
      var postBody = pbx_timeBased;
      // verify the required parameter 'pbx_timeBased' is set
      if (pbx_timeBased === undefined || pbx_timeBased === null) {
        throw new Error("Missing the required parameter 'pbx_timeBased' when calling insertPbxTimeBased");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeBasedResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_based', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxTimeRange operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx timeRange
     * Insert a pbx timeRange 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} pbx_timeRange Pbx TimeRange
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse}
     */
  }, {
    key: "insertPbxTimeRange",
    value: function insertPbxTimeRange(pbx_timeRange, callback) {
      var postBody = pbx_timeRange;
      // verify the required parameter 'pbx_timeRange' is set
      if (pbx_timeRange === undefined || pbx_timeRange === null) {
        throw new Error("Missing the required parameter 'pbx_timeRange' when calling insertPbxTimeRange");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeRangeResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_range', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertPbxVoicemailMailbox operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertPbxVoicemailMailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert pbx voicemailMailbox
     * Insert a pbx voicemailMailbox 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox} pbx_voicemailMailbox Pbx VoicemailMailbox
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertPbxVoicemailMailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse}
     */
  }, {
    key: "insertPbxVoicemailMailbox",
    value: function insertPbxVoicemailMailbox(pbx_voicemailMailbox, callback) {
      var postBody = pbx_voicemailMailbox;
      // verify the required parameter 'pbx_voicemailMailbox' is set
      if (pbx_voicemailMailbox === undefined || pbx_voicemailMailbox === null) {
        throw new Error("Missing the required parameter 'pbx_voicemailMailbox' when calling insertPbxVoicemailMailbox");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMailboxResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/voicemail_mailbox', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the joinConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~joinConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join a conversation
     * Join a conversation 
     * @param {String} conversation_uuid 
     * @param {Object} opts Optional parameters
     * @param {module:com.ultracart.admin.v2.models/ConversationJoinRequest} opts.join_request Join request
     * @param {module:com.ultracart.admin.v2/ConversationApi~joinConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "joinConversation",
    value: function joinConversation(conversation_uuid, opts, callback) {
      opts = opts || {};
      var postBody = opts['join_request'];
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling joinConversation");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/join', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the leaveConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~leaveConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave a conversation
     * Leave a conversation 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~leaveConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "leaveConversation",
    value: function leaveConversation(conversation_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling leaveConversation");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/leave', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listenedPbxAgentVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~listenedPbxAgentVoicemailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listened Agent Voicemail
     * Listened pbx agent Voicemail 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~listenedPbxAgentVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "listenedPbxAgentVoicemail",
    value: function listenedPbxAgentVoicemail(recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling listenedPbxAgentVoicemail");
      }
      var pathParams = {
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/agent/voicemails/{recording_sid}/listened', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the listenedPbxQueueVoicemail operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~listenedPbxQueueVoicemailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listened Queue Voicemail
     * Listened pbx queue Voicemail 
     * @param {String} queue_uuid 
     * @param {String} recording_sid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~listenedPbxQueueVoicemailCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "listenedPbxQueueVoicemail",
    value: function listenedPbxQueueVoicemail(queue_uuid, recording_sid, callback) {
      var postBody = null;
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling listenedPbxQueueVoicemail");
      }
      // verify the required parameter 'recording_sid' is set
      if (recording_sid === undefined || recording_sid === null) {
        throw new Error("Missing the required parameter 'recording_sid' when calling listenedPbxQueueVoicemail");
      }
      var pathParams = {
        'queue_uuid': queue_uuid,
        'recording_sid': recording_sid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid}/listened', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the markReadConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~markReadConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a conversation as read
     * Mark a conversation as read 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~markReadConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "markReadConversation",
    value: function markReadConversation(conversation_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling markReadConversation");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/markread', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the protectPbxPhoneNumber operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~protectPbxPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Protect pbx phoneNumber from deletion
     * Protect a pbx phoneNumber from deletion. This is a one-way operation and cannot be undone through the API. 
     * @param {String} conversationPbxPhoneNumberUuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~protectPbxPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse}
     */
  }, {
    key: "protectPbxPhoneNumber",
    value: function protectPbxPhoneNumber(conversationPbxPhoneNumberUuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversationPbxPhoneNumberUuid' is set
      if (conversationPbxPhoneNumberUuid === undefined || conversationPbxPhoneNumberUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxPhoneNumberUuid' when calling protectPbxPhoneNumber");
      }
      var pathParams = {
        'conversationPbxPhoneNumberUuid': conversationPbxPhoneNumberUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneNumberResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}/protect', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasePbxPhoneNumber operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~purchasePbxPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purchase pbx phone number
     * Purchase a phone number from Twilio. The phone_number must be from the available phone number search results. 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberPurchaseRequest} phone_number_purchase_request Phone number purchase request
     * @param {module:com.ultracart.admin.v2/ConversationApi~purchasePbxPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse}
     */
  }, {
    key: "purchasePbxPhoneNumber",
    value: function purchasePbxPhoneNumber(phone_number_purchase_request, callback) {
      var postBody = phone_number_purchase_request;
      // verify the required parameter 'phone_number_purchase_request' is set
      if (phone_number_purchase_request === undefined || phone_number_purchase_request === null) {
        throw new Error("Missing the required parameter 'phone_number_purchase_request' when calling purchasePbxPhoneNumber");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneNumberResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the regeneratePasswordForPbxHardwarePhone operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~regeneratePasswordForPbxHardwarePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx hardware phone
     * Update a pbx hardware phone 
     * @param {String} conversationPbxHardwarePhoneUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhone} pbx_hardware_phone Pbx Hardware Phone
     * @param {module:com.ultracart.admin.v2/ConversationApi~regeneratePasswordForPbxHardwarePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse}
     */
  }, {
    key: "regeneratePasswordForPbxHardwarePhone",
    value: function regeneratePasswordForPbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone, callback) {
      var postBody = pbx_hardware_phone;
      // verify the required parameter 'conversationPbxHardwarePhoneUuid' is set
      if (conversationPbxHardwarePhoneUuid === undefined || conversationPbxHardwarePhoneUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxHardwarePhoneUuid' when calling regeneratePasswordForPbxHardwarePhone");
      }
      // verify the required parameter 'pbx_hardware_phone' is set
      if (pbx_hardware_phone === undefined || pbx_hardware_phone === null) {
        throw new Error("Missing the required parameter 'pbx_hardware_phone' when calling regeneratePasswordForPbxHardwarePhone");
      }
      var pathParams = {
        'conversationPbxHardwarePhoneUuid': conversationPbxHardwarePhoneUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhoneResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}/regenerate_password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the resetConversationPbxQueueStatistics operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~resetConversationPbxQueueStatisticsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reset statistics within the queue
     * reset statistics within the queue 
     * @param {String} queue_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~resetConversationPbxQueueStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "resetConversationPbxQueueStatistics",
    value: function resetConversationPbxQueueStatistics(queue_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling resetConversationPbxQueueStatistics");
      }
      var pathParams = {
        'queue_uuid': queue_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/pbx/queues/{queue_uuid}/reset_statistics', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchConversationCannedMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~searchConversationCannedMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for canned messages by short_code
     * Search for canned messages by short_code 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} search_request Search request
     * @param {module:com.ultracart.admin.v2/ConversationApi~searchConversationCannedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse}
     */
  }, {
    key: "searchConversationCannedMessages",
    value: function searchConversationCannedMessages(search_request, callback) {
      var postBody = search_request;
      // verify the required parameter 'search_request' is set
      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling searchConversationCannedMessages");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchPbxAvailablePhoneNumbers operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~searchPbxAvailablePhoneNumbersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAvailablePhoneNumbersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for available phone numbers
     * Search for available phone numbers from Twilio that can be purchased 
     * @param {String} country ISO country code (e.g., US, CA, GB)
     * @param {Object} opts Optional parameters
     * @param {String} opts.area_code Area code filter (e.g., 614)
     * @param {String} opts.contains Pattern to match (e.g., 555, *PIZZA)
     * @param {Boolean} opts.sms_enabled Filter for SMS capability
     * @param {Boolean} opts.voice_enabled Filter for voice capability
     * @param {String} opts.type Phone number type
     * @param {Number} opts.limit Max results (default 20, max 100)
     * @param {module:com.ultracart.admin.v2/ConversationApi~searchPbxAvailablePhoneNumbersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAvailablePhoneNumbersResponse}
     */
  }, {
    key: "searchPbxAvailablePhoneNumbers",
    value: function searchPbxAvailablePhoneNumbers(country, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling searchPbxAvailablePhoneNumbers");
      }
      var pathParams = {};
      var queryParams = {
        'country': country,
        'area_code': opts['area_code'],
        'contains': opts['contains'],
        'sms_enabled': opts['sms_enabled'],
        'voice_enabled': opts['voice_enabled'],
        'type': opts['type'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAvailablePhoneNumbersResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchPbxCalls operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~searchPbxCallsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCallSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search pbx call records
     * Search and list PBX call records with filtering, sorting, and pagination 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxCallSearchRequest} search_request Search Request
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Maximum 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the calls.
     * @param {module:com.ultracart.admin.v2/ConversationApi~searchPbxCallsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxCallSearchResponse}
     */
  }, {
    key: "searchPbxCalls",
    value: function searchPbxCalls(search_request, opts, callback) {
      opts = opts || {};
      var postBody = search_request;
      // verify the required parameter 'search_request' is set
      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling searchPbxCalls");
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
      var returnType = _ConversationPbxCallSearchResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/call/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the smsUnsubscribeConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~smsUnsubscribeConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsubscribe any SMS participants in this conversation
     * Unsubscribe any SMS participants in this conversation 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~smsUnsubscribeConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "smsUnsubscribeConversation",
    value: function smsUnsubscribeConversation(conversation_uuid, callback) {
      var postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling smsUnsubscribeConversation");
      }
      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/sms_unsubscribe', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the startConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~startConversationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationStartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a conversation
     * Start a new conversation 
     * @param {module:com.ultracart.admin.v2.models/ConversationStartRequest} start_request Start request
     * @param {module:com.ultracart.admin.v2/ConversationApi~startConversationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationStartResponse}
     */
  }, {
    key: "startConversation",
    value: function startConversation(start_request, callback) {
      var postBody = start_request;
      // verify the required parameter 'start_request' is set
      if (start_request === undefined || start_request === null) {
        throw new Error("Missing the required parameter 'start_request' when calling startConversation");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationStartResponse["default"];
      return this.apiClient.callApi('/conversation/conversations', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateAgentProfile operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateAgentProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update agent profile
     * Update agent profile 
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfile} profile_request Profile request
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateAgentProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAgentProfileResponse}
     */
  }, {
    key: "updateAgentProfile",
    value: function updateAgentProfile(profile_request, callback) {
      var postBody = profile_request;
      // verify the required parameter 'profile_request' is set
      if (profile_request === undefined || profile_request === null) {
        throw new Error("Missing the required parameter 'profile_request' when calling updateAgentProfile");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationAgentProfileResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profile', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateAgentProfileMcp operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateAgentProfileMcpCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an agent MCP server
     * Update an agent MCP server 
     * @param {Number} user_id 
     * @param {String} mcp_server_uuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationMcpServer} mcp_server MCP Server
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateAgentProfileMcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMcpServerResponse}
     */
  }, {
    key: "updateAgentProfileMcp",
    value: function updateAgentProfileMcp(user_id, mcp_server_uuid, mcp_server, callback) {
      var postBody = mcp_server;
      // verify the required parameter 'user_id' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling updateAgentProfileMcp");
      }
      // verify the required parameter 'mcp_server_uuid' is set
      if (mcp_server_uuid === undefined || mcp_server_uuid === null) {
        throw new Error("Missing the required parameter 'mcp_server_uuid' when calling updateAgentProfileMcp");
      }
      // verify the required parameter 'mcp_server' is set
      if (mcp_server === undefined || mcp_server === null) {
        throw new Error("Missing the required parameter 'mcp_server' when calling updateAgentProfileMcp");
      }
      var pathParams = {
        'user_id': user_id,
        'mcp_server_uuid': mcp_server_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationMcpServerResponse["default"];
      return this.apiClient.callApi('/conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateConversationCannedMessage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationCannedMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a canned message
     * Update a canned message 
     * @param {Number} conversation_canned_message_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} canned_message Canned message
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse}
     */
  }, {
    key: "updateConversationCannedMessage",
    value: function updateConversationCannedMessage(conversation_canned_message_oid, canned_message, callback) {
      var postBody = canned_message;
      // verify the required parameter 'conversation_canned_message_oid' is set
      if (conversation_canned_message_oid === undefined || conversation_canned_message_oid === null) {
        throw new Error("Missing the required parameter 'conversation_canned_message_oid' when calling updateConversationCannedMessage");
      }
      // verify the required parameter 'canned_message' is set
      if (canned_message === undefined || canned_message === null) {
        throw new Error("Missing the required parameter 'canned_message' when calling updateConversationCannedMessage");
      }
      var pathParams = {
        'conversation_canned_message_oid': conversation_canned_message_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessageResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages/{conversation_canned_message_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateConversationDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationDepartmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a department
     * Update a department 
     * @param {Number} conversation_department_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} department Department
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentResponse}
     */
  }, {
    key: "updateConversationDepartment",
    value: function updateConversationDepartment(conversation_department_oid, department, callback) {
      var postBody = department;
      // verify the required parameter 'conversation_department_oid' is set
      if (conversation_department_oid === undefined || conversation_department_oid === null) {
        throw new Error("Missing the required parameter 'conversation_department_oid' when calling updateConversationDepartment");
      }
      // verify the required parameter 'department' is set
      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling updateConversationDepartment");
      }
      var pathParams = {
        'conversation_department_oid': conversation_department_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentResponse["default"];
      return this.apiClient.callApi('/conversation/departments/{conversation_department_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateConversationEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a engagement
     * Update a engagement 
     * @param {Number} conversation_engagement_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} engagement Engagement
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementResponse}
     */
  }, {
    key: "updateConversationEngagement",
    value: function updateConversationEngagement(conversation_engagement_oid, engagement, callback) {
      var postBody = engagement;
      // verify the required parameter 'conversation_engagement_oid' is set
      if (conversation_engagement_oid === undefined || conversation_engagement_oid === null) {
        throw new Error("Missing the required parameter 'conversation_engagement_oid' when calling updateConversationEngagement");
      }
      // verify the required parameter 'engagement' is set
      if (engagement === undefined || engagement === null) {
        throw new Error("Missing the required parameter 'engagement' when calling updateConversationEngagement");
      }
      var pathParams = {
        'conversation_engagement_oid': conversation_engagement_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementResponse["default"];
      return this.apiClient.callApi('/conversation/engagements/{conversation_engagement_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateConversationWebchatQueueStatus operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationWebchatQueueStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update status within the queue
     * Update status within the queue 
     * @param {String} queue_name 
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} status_request Status request
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationWebchatQueueStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateConversationWebchatQueueStatus",
    value: function updateConversationWebchatQueueStatus(queue_name, status_request, callback) {
      var postBody = status_request;
      // verify the required parameter 'queue_name' is set
      if (queue_name === undefined || queue_name === null) {
        throw new Error("Missing the required parameter 'queue_name' when calling updateConversationWebchatQueueStatus");
      }
      // verify the required parameter 'status_request' is set
      if (status_request === undefined || status_request === null) {
        throw new Error("Missing the required parameter 'status_request' when calling updateConversationWebchatQueueStatus");
      }
      var pathParams = {
        'queue_name': queue_name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/queues/{queue_name}/status', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxAddress operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx address
     * Update a pbx address 
     * @param {String} conversationPbxAddressUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAddress} pbx_address Pbx Address
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAddressResponse}
     */
  }, {
    key: "updatePbxAddress",
    value: function updatePbxAddress(conversationPbxAddressUuid, pbx_address, callback) {
      var postBody = pbx_address;
      // verify the required parameter 'conversationPbxAddressUuid' is set
      if (conversationPbxAddressUuid === undefined || conversationPbxAddressUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAddressUuid' when calling updatePbxAddress");
      }
      // verify the required parameter 'pbx_address' is set
      if (pbx_address === undefined || pbx_address === null) {
        throw new Error("Missing the required parameter 'pbx_address' when calling updatePbxAddress");
      }
      var pathParams = {
        'conversationPbxAddressUuid': conversationPbxAddressUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAddressResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/address/{conversationPbxAddressUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxAgent operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxAgentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx agent
     * Update a pbx agent 
     * @param {String} conversationPbxAgentUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgent} pbx_agent Pbx Agent
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAgentResponse}
     */
  }, {
    key: "updatePbxAgent",
    value: function updatePbxAgent(conversationPbxAgentUuid, pbx_agent, callback) {
      var postBody = pbx_agent;
      // verify the required parameter 'conversationPbxAgentUuid' is set
      if (conversationPbxAgentUuid === undefined || conversationPbxAgentUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAgentUuid' when calling updatePbxAgent");
      }
      // verify the required parameter 'pbx_agent' is set
      if (pbx_agent === undefined || pbx_agent === null) {
        throw new Error("Missing the required parameter 'pbx_agent' when calling updatePbxAgent");
      }
      var pathParams = {
        'conversationPbxAgentUuid': conversationPbxAgentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAgentResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/agent/{conversationPbxAgentUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxAudio operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx audio
     * Update a pbx audio 
     * @param {String} conversationPbxAudioUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxAudio} pbx_audio Pbx Audio
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxAudioResponse}
     */
  }, {
    key: "updatePbxAudio",
    value: function updatePbxAudio(conversationPbxAudioUuid, pbx_audio, callback) {
      var postBody = pbx_audio;
      // verify the required parameter 'conversationPbxAudioUuid' is set
      if (conversationPbxAudioUuid === undefined || conversationPbxAudioUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxAudioUuid' when calling updatePbxAudio");
      }
      // verify the required parameter 'pbx_audio' is set
      if (pbx_audio === undefined || pbx_audio === null) {
        throw new Error("Missing the required parameter 'pbx_audio' when calling updatePbxAudio");
      }
      var pathParams = {
        'conversationPbxAudioUuid': conversationPbxAudioUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxAudioResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/audio/{conversationPbxAudioUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxClassOfService operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxClassOfServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx class of service
     * Update an existing class of service 
     * @param {String} classOfServiceUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxClassOfService} class_of_service Class of service
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxClassOfServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxClassOfServiceResponse}
     */
  }, {
    key: "updatePbxClassOfService",
    value: function updatePbxClassOfService(classOfServiceUuid, class_of_service, callback) {
      var postBody = class_of_service;
      // verify the required parameter 'classOfServiceUuid' is set
      if (classOfServiceUuid === undefined || classOfServiceUuid === null) {
        throw new Error("Missing the required parameter 'classOfServiceUuid' when calling updatePbxClassOfService");
      }
      // verify the required parameter 'class_of_service' is set
      if (class_of_service === undefined || class_of_service === null) {
        throw new Error("Missing the required parameter 'class_of_service' when calling updatePbxClassOfService");
      }
      var pathParams = {
        'classOfServiceUuid': classOfServiceUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxClassOfServiceResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/class_of_service/{classOfServiceUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxHardwarePhone operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxHardwarePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx hardware phone
     * Update a pbx hardware phone 
     * @param {String} conversationPbxHardwarePhoneUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhone} pbx_hardware_phone Pbx Hardware Phone
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxHardwarePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxHardwarePhoneResponse}
     */
  }, {
    key: "updatePbxHardwarePhone",
    value: function updatePbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone, callback) {
      var postBody = pbx_hardware_phone;
      // verify the required parameter 'conversationPbxHardwarePhoneUuid' is set
      if (conversationPbxHardwarePhoneUuid === undefined || conversationPbxHardwarePhoneUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxHardwarePhoneUuid' when calling updatePbxHardwarePhone");
      }
      // verify the required parameter 'pbx_hardware_phone' is set
      if (pbx_hardware_phone === undefined || pbx_hardware_phone === null) {
        throw new Error("Missing the required parameter 'pbx_hardware_phone' when calling updatePbxHardwarePhone");
      }
      var pathParams = {
        'conversationPbxHardwarePhoneUuid': conversationPbxHardwarePhoneUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxHardwarePhoneResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxMenu operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxMenuCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx menu
     * Update a pbx menu 
     * @param {String} conversationPbxMenuUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenu} pbx_menu Pbx Menu
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxMenuCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxMenuResponse}
     */
  }, {
    key: "updatePbxMenu",
    value: function updatePbxMenu(conversationPbxMenuUuid, pbx_menu, callback) {
      var postBody = pbx_menu;
      // verify the required parameter 'conversationPbxMenuUuid' is set
      if (conversationPbxMenuUuid === undefined || conversationPbxMenuUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxMenuUuid' when calling updatePbxMenu");
      }
      // verify the required parameter 'pbx_menu' is set
      if (pbx_menu === undefined || pbx_menu === null) {
        throw new Error("Missing the required parameter 'pbx_menu' when calling updatePbxMenu");
      }
      var pathParams = {
        'conversationPbxMenuUuid': conversationPbxMenuUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxMenuResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/menu/{conversationPbxMenuUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxPhoneNumber operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx phoneNumber
     * Update a pbx phoneNumber 
     * @param {String} conversationPbxPhoneNumberUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumber} pbx_phoneNumber Pbx PhoneNumber
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumberResponse}
     */
  }, {
    key: "updatePbxPhoneNumber",
    value: function updatePbxPhoneNumber(conversationPbxPhoneNumberUuid, pbx_phoneNumber, callback) {
      var postBody = pbx_phoneNumber;
      // verify the required parameter 'conversationPbxPhoneNumberUuid' is set
      if (conversationPbxPhoneNumberUuid === undefined || conversationPbxPhoneNumberUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxPhoneNumberUuid' when calling updatePbxPhoneNumber");
      }
      // verify the required parameter 'pbx_phoneNumber' is set
      if (pbx_phoneNumber === undefined || pbx_phoneNumber === null) {
        throw new Error("Missing the required parameter 'pbx_phoneNumber' when calling updatePbxPhoneNumber");
      }
      var pathParams = {
        'conversationPbxPhoneNumberUuid': conversationPbxPhoneNumberUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxPhoneNumberResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxQueue operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx queue
     * Update a pbx queue 
     * @param {String} conversationPbxQueueUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueue} pbx_queue Pbx Queue
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxQueueResponse}
     */
  }, {
    key: "updatePbxQueue",
    value: function updatePbxQueue(conversationPbxQueueUuid, pbx_queue, callback) {
      var postBody = pbx_queue;
      // verify the required parameter 'conversationPbxQueueUuid' is set
      if (conversationPbxQueueUuid === undefined || conversationPbxQueueUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxQueueUuid' when calling updatePbxQueue");
      }
      // verify the required parameter 'pbx_queue' is set
      if (pbx_queue === undefined || pbx_queue === null) {
        throw new Error("Missing the required parameter 'pbx_queue' when calling updatePbxQueue");
      }
      var pathParams = {
        'conversationPbxQueueUuid': conversationPbxQueueUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxQueueResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/queue/{conversationPbxQueueUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxTimeBased operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxTimeBasedCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx timeBased
     * Update a pbx timeBased 
     * @param {String} conversationPbxTimeBasedUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBased} pbx_timeBased Pbx TimeBased
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxTimeBasedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedResponse}
     */
  }, {
    key: "updatePbxTimeBased",
    value: function updatePbxTimeBased(conversationPbxTimeBasedUuid, pbx_timeBased, callback) {
      var postBody = pbx_timeBased;
      // verify the required parameter 'conversationPbxTimeBasedUuid' is set
      if (conversationPbxTimeBasedUuid === undefined || conversationPbxTimeBasedUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeBasedUuid' when calling updatePbxTimeBased");
      }
      // verify the required parameter 'pbx_timeBased' is set
      if (pbx_timeBased === undefined || pbx_timeBased === null) {
        throw new Error("Missing the required parameter 'pbx_timeBased' when calling updatePbxTimeBased");
      }
      var pathParams = {
        'conversationPbxTimeBasedUuid': conversationPbxTimeBasedUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeBasedResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_based/{conversationPbxTimeBasedUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxTimeRange operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx timeRange
     * Update a pbx timeRange 
     * @param {String} conversationPbxTimeRangeUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} pbx_timeRange Pbx TimeRange
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeResponse}
     */
  }, {
    key: "updatePbxTimeRange",
    value: function updatePbxTimeRange(conversationPbxTimeRangeUuid, pbx_timeRange, callback) {
      var postBody = pbx_timeRange;
      // verify the required parameter 'conversationPbxTimeRangeUuid' is set
      if (conversationPbxTimeRangeUuid === undefined || conversationPbxTimeRangeUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxTimeRangeUuid' when calling updatePbxTimeRange");
      }
      // verify the required parameter 'pbx_timeRange' is set
      if (pbx_timeRange === undefined || pbx_timeRange === null) {
        throw new Error("Missing the required parameter 'pbx_timeRange' when calling updatePbxTimeRange");
      }
      var pathParams = {
        'conversationPbxTimeRangeUuid': conversationPbxTimeRangeUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxTimeRangeResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/time_range/{conversationPbxTimeRangeUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updatePbxVoicemailMailbox operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updatePbxVoicemailMailboxCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pbx voicemailMailbox
     * Update a pbx voicemailMailbox 
     * @param {String} conversationPbxVoicemailMailboxUuid 
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox} pbx_voicemailMailbox Pbx VoicemailMailbox
     * @param {module:com.ultracart.admin.v2/ConversationApi~updatePbxVoicemailMailboxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailboxResponse}
     */
  }, {
    key: "updatePbxVoicemailMailbox",
    value: function updatePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, pbx_voicemailMailbox, callback) {
      var postBody = pbx_voicemailMailbox;
      // verify the required parameter 'conversationPbxVoicemailMailboxUuid' is set
      if (conversationPbxVoicemailMailboxUuid === undefined || conversationPbxVoicemailMailboxUuid === null) {
        throw new Error("Missing the required parameter 'conversationPbxVoicemailMailboxUuid' when calling updatePbxVoicemailMailbox");
      }
      // verify the required parameter 'pbx_voicemailMailbox' is set
      if (pbx_voicemailMailbox === undefined || pbx_voicemailMailbox === null) {
        throw new Error("Missing the required parameter 'pbx_voicemailMailbox' when calling updatePbxVoicemailMailbox");
      }
      var pathParams = {
        'conversationPbxVoicemailMailboxUuid': conversationPbxVoicemailMailboxUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationPbxVoicemailMailboxResponse["default"];
      return this.apiClient.callApi('/conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateVirtualAgentBudget operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateVirtualAgentBudgetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentBudgetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update virtual agent budget
     * Update virtual agent budget 
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentBudget} virtual_agent_budget Virtual Agent Budget
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateVirtualAgentBudgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationVirtualAgentBudgetResponse}
     */
  }, {
    key: "updateVirtualAgentBudget",
    value: function updateVirtualAgentBudget(virtual_agent_budget, callback) {
      var postBody = virtual_agent_budget;
      // verify the required parameter 'virtual_agent_budget' is set
      if (virtual_agent_budget === undefined || virtual_agent_budget === null) {
        throw new Error("Missing the required parameter 'virtual_agent_budget' when calling updateVirtualAgentBudget");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationVirtualAgentBudgetResponse["default"];
      return this.apiClient.callApi('/conversation/virtualagent/budget', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateVirtualAgentCapabilities operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateVirtualAgentCapabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilitiesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update virtual agent capabilities
     * Update virtual agent capabilities 
     * @param {module:com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilities} virtual_agent_capabilities Virtual Agent Capabilities
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateVirtualAgentCapabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationVirtualAgentCapabilitiesResponse}
     */
  }, {
    key: "updateVirtualAgentCapabilities",
    value: function updateVirtualAgentCapabilities(virtual_agent_capabilities, callback) {
      var postBody = virtual_agent_capabilities;
      // verify the required parameter 'virtual_agent_capabilities' is set
      if (virtual_agent_capabilities === undefined || virtual_agent_capabilities === null) {
        throw new Error("Missing the required parameter 'virtual_agent_capabilities' when calling updateVirtualAgentCapabilities");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationVirtualAgentCapabilitiesResponse["default"];
      return this.apiClient.callApi('/conversation/virtualagent/capabilities', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
}();