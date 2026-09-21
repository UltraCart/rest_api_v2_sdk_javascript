# UltraCartRestApiV2.ConversationApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAgentProfileKnowledgeBaseDocument**](ConversationApi.md#deleteAgentProfileKnowledgeBaseDocument) | **DELETE** /conversation/agent/profiles/{user_id}/knowledge_base/{document_uuid} | Delete a knowledge base document
[**deleteAgentProfileMcp**](ConversationApi.md#deleteAgentProfileMcp) | **DELETE** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Delete an agent MCP server
[**deleteAgentStatusConfig**](ConversationApi.md#deleteAgentStatusConfig) | **DELETE** /conversation/agent/status/config/{conversation_status_uuid} | Soft-deactivate a custom agent status
[**deleteConversationCannedMessage**](ConversationApi.md#deleteConversationCannedMessage) | **DELETE** /conversation/canned_messages/{conversation_canned_message_oid} | Delete a conversation canned message
[**deleteDepartment**](ConversationApi.md#deleteDepartment) | **DELETE** /conversation/departments/{conversation_department_oid} | Delete a conversation department
[**deleteEngagement**](ConversationApi.md#deleteEngagement) | **DELETE** /conversation/engagements/{conversation_engagement_oid} | Delete a conversation engagement
[**deletePbxAddress**](ConversationApi.md#deletePbxAddress) | **DELETE** /conversation/pbx/address/{conversationPbxAddressUuid} | Delete pbx address
[**deletePbxAgentVoicemail**](ConversationApi.md#deletePbxAgentVoicemail) | **DELETE** /conversation/pbx/agent/voicemails/{recording_sid} | Delete Agent Voicemail
[**deletePbxAudio**](ConversationApi.md#deletePbxAudio) | **DELETE** /conversation/pbx/audio/{conversationPbxAudioUuid} | Delete pbx audio
[**deletePbxClassOfService**](ConversationApi.md#deletePbxClassOfService) | **DELETE** /conversation/pbx/class_of_service/{classOfServiceUuid} | Delete pbx class of service
[**deletePbxHardwarePhone**](ConversationApi.md#deletePbxHardwarePhone) | **DELETE** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Delete pbx hardware phone
[**deletePbxMenu**](ConversationApi.md#deletePbxMenu) | **DELETE** /conversation/pbx/menu/{conversationPbxMenuUuid} | Delete pbx menu
[**deletePbxPhoneNumber**](ConversationApi.md#deletePbxPhoneNumber) | **DELETE** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid} | Delete pbx phoneNumber
[**deletePbxQueue**](ConversationApi.md#deletePbxQueue) | **DELETE** /conversation/pbx/queue/{conversationPbxQueueUuid} | Delete pbx queue
[**deletePbxQueueVoicemail**](ConversationApi.md#deletePbxQueueVoicemail) | **DELETE** /conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid} | Delete Queue Voicemail
[**deletePbxTimeBased**](ConversationApi.md#deletePbxTimeBased) | **DELETE** /conversation/pbx/time_based/{conversationPbxTimeBasedUuid} | Delete pbx timeBased
[**deletePbxTimeRange**](ConversationApi.md#deletePbxTimeRange) | **DELETE** /conversation/pbx/time_range/{conversationPbxTimeRangeUuid} | Delete pbx timeRange
[**deletePbxVoicemailMailbox**](ConversationApi.md#deletePbxVoicemailMailbox) | **DELETE** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Delete pbx voicemailMailbox
[**deleteUserPbxAudio**](ConversationApi.md#deleteUserPbxAudio) | **DELETE** /conversation/pbx/audio/user/{conversationPbxAudioUuid} | Delete user pbx audio
[**getAgentKeepAlive**](ConversationApi.md#getAgentKeepAlive) | **GET** /conversation/agent/keepalive | Agent keep alive
[**getAgentProfile**](ConversationApi.md#getAgentProfile) | **GET** /conversation/agent/profile | Get agent profile
[**getAgentProfileKnowledgeBase**](ConversationApi.md#getAgentProfileKnowledgeBase) | **GET** /conversation/agent/profiles/{user_id}/knowledge_base | Get the list of knowledge base documents associated with this agent profile
[**getAgentProfileMcp**](ConversationApi.md#getAgentProfileMcp) | **GET** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Get an MCP server associated with this agent
[**getAgentProfileMcpTools**](ConversationApi.md#getAgentProfileMcpTools) | **GET** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}/tools | Get the tools available from the MCP server
[**getAgentProfileMcps**](ConversationApi.md#getAgentProfileMcps) | **GET** /conversation/agent/profiles/{user_id}/mcps | Get the list of MCP servers associated with this agent
[**getAgentProfiles**](ConversationApi.md#getAgentProfiles) | **GET** /conversation/agent/profiles | Get agent profiles
[**getAgentStatusConfigs**](ConversationApi.md#getAgentStatusConfigs) | **GET** /conversation/agent/status/config | List custom agent statuses
[**getAgentStatusHeatmap**](ConversationApi.md#getAgentStatusHeatmap) | **POST** /conversation/agent/status/heatmap | Agent x hour-of-day heatmap
[**getAgentStatusSummary**](ConversationApi.md#getAgentStatusSummary) | **GET** /conversation/agent/status/rollup/summary | Dashboard summary for a date range
[**getAgentStatusTimeline**](ConversationApi.md#getAgentStatusTimeline) | **GET** /conversation/agent/status/history/{agent_user_id}/timeline | Day timeline for a single agent
[**getAgentWebsocketAuthorization**](ConversationApi.md#getAgentWebsocketAuthorization) | **PUT** /conversation/agent/auth | Get agent websocket authorization
[**getConversation**](ConversationApi.md#getConversation) | **GET** /conversation/conversations/{conversation_uuid} | Retrieve a conversation
[**getConversationCannedMessages**](ConversationApi.md#getConversationCannedMessages) | **GET** /conversation/canned_messages | Retrieve a list of canned messages ordered by short_code
[**getConversationContext**](ConversationApi.md#getConversationContext) | **PUT** /conversation/conversations/{conversation_uuid}/context | Get a webchat conversation context
[**getConversationDepartmentMemberList**](ConversationApi.md#getConversationDepartmentMemberList) | **GET** /conversation/department_members | Retrieve a list of possible department members
[**getConversationDepartments**](ConversationApi.md#getConversationDepartments) | **GET** /conversation/departments | Retrieve a list of departments ordered by name
[**getConversationEngagement**](ConversationApi.md#getConversationEngagement) | **GET** /conversation/engagements/{conversation_engagement_oid} | Retrieve an engagement
[**getConversationEngagements**](ConversationApi.md#getConversationEngagements) | **GET** /conversation/engagements | Retrieve a list of engagements ordered by name
[**getConversationItemVariations**](ConversationApi.md#getConversationItemVariations) | **GET** /conversation/items/{merchant_item_id}/variations | Retrieve an item with sparse variations populated
[**getConversationKnowledgeBaseDocumentUploadUrl**](ConversationApi.md#getConversationKnowledgeBaseDocumentUploadUrl) | **GET** /conversation/agent/profiles/{user_id}/knowledge_base/upload_url/{extension} | Get a pre-signed conversation knowledge base document upload URL
[**getConversationMessages**](ConversationApi.md#getConversationMessages) | **GET** /conversation/conversations/{conversation_uuid}/messages/{since} | Retrieve conversation messages
[**getConversationMultimediaUploadUrl**](ConversationApi.md#getConversationMultimediaUploadUrl) | **GET** /conversation/upload_url/{extension} | Get a presigned conversation multimedia upload URL
[**getConversationPbxAudioUploadUrl**](ConversationApi.md#getConversationPbxAudioUploadUrl) | **GET** /conversation/pbx/audio/upload_url/{extension} | Get a pre-signed conversation multimedia upload URL
[**getConversationPbxCustomerSnapshot**](ConversationApi.md#getConversationPbxCustomerSnapshot) | **POST** /conversation/pbx/customer_snapshot | Get orders and customer information for a phone number
[**getConversationPermissions**](ConversationApi.md#getConversationPermissions) | **GET** /conversation/permissions | Retrieve conversation permissions
[**getConversationWebchatQueueStatuses**](ConversationApi.md#getConversationWebchatQueueStatuses) | **GET** /conversation/conversations/queues/statuses | Retrieve a conversation webchat queue statuses
[**getConversations**](ConversationApi.md#getConversations) | **GET** /conversation/conversations | Retrieve a list of conversation summaries newest to oldest
[**getConversationsAutocomplete**](ConversationApi.md#getConversationsAutocomplete) | **POST** /conversation/conversations/autocomplete | Retrieve a list of matching terms for a search field
[**getConversationsSearch**](ConversationApi.md#getConversationsSearch) | **POST** /conversation/conversations/search | Search conversations
[**getLocationsForEngagement**](ConversationApi.md#getLocationsForEngagement) | **POST** /conversation/locations | Get location data for engagement configuration
[**getPbxAddress**](ConversationApi.md#getPbxAddress) | **GET** /conversation/pbx/address/{conversationPbxAddressUuid} | Get pbx address
[**getPbxAddresses**](ConversationApi.md#getPbxAddresses) | **GET** /conversation/pbx/address | Get pbx addresses
[**getPbxAgent**](ConversationApi.md#getPbxAgent) | **GET** /conversation/pbx/agent/{conversationPbxAgentUuid} | Get pbx agent
[**getPbxAgentVoicemail**](ConversationApi.md#getPbxAgentVoicemail) | **GET** /conversation/pbx/agent/voicemails/{recording_sid} | Get Agent Voicemail
[**getPbxAgentVoicemails**](ConversationApi.md#getPbxAgentVoicemails) | **GET** /conversation/pbx/agent/voicemails | Get Agent Voicemails
[**getPbxAgents**](ConversationApi.md#getPbxAgents) | **GET** /conversation/pbx/agent | Get pbx agents
[**getPbxAudio**](ConversationApi.md#getPbxAudio) | **GET** /conversation/pbx/audio/{conversationPbxAudioUuid} | Get pbx audio
[**getPbxAudioUsage**](ConversationApi.md#getPbxAudioUsage) | **GET** /conversation/pbx/audio/{conversationPbxAudioUuid}/usage | Get pbx audio usage
[**getPbxAudios**](ConversationApi.md#getPbxAudios) | **GET** /conversation/pbx/audio | Get pbx audios
[**getPbxCall**](ConversationApi.md#getPbxCall) | **GET** /conversation/pbx/call/{callUuid} | Get pbx call record
[**getPbxClassOfService**](ConversationApi.md#getPbxClassOfService) | **GET** /conversation/pbx/class_of_service/{classOfServiceUuid} | Get pbx class of service
[**getPbxClassesOfService**](ConversationApi.md#getPbxClassesOfService) | **GET** /conversation/pbx/class_of_service | Get pbx classes of service
[**getPbxCosAuditLogs**](ConversationApi.md#getPbxCosAuditLogs) | **GET** /conversation/pbx/class_of_service/audit_log | Get pbx class of service audit logs
[**getPbxDefaultTimezone**](ConversationApi.md#getPbxDefaultTimezone) | **GET** /conversation/pbx/config/default-timezone | Get the merchant default timezone
[**getPbxHardwarePhone**](ConversationApi.md#getPbxHardwarePhone) | **GET** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Get pbx hardware phone
[**getPbxHardwarePhoneManufacturers**](ConversationApi.md#getPbxHardwarePhoneManufacturers) | **GET** /conversation/pbx/hardware_phone/manufacturers | Get pbx hardware phone manufacturers
[**getPbxHardwarePhones**](ConversationApi.md#getPbxHardwarePhones) | **GET** /conversation/pbx/hardware_phone | Get pbx hardware phones
[**getPbxMenu**](ConversationApi.md#getPbxMenu) | **GET** /conversation/pbx/menu/{conversationPbxMenuUuid} | Get pbx menu
[**getPbxMenus**](ConversationApi.md#getPbxMenus) | **GET** /conversation/pbx/menu | Get pbx menus
[**getPbxPayConnectors**](ConversationApi.md#getPbxPayConnectors) | **GET** /conversation/pbx/pay_connector | Get pbx pay connectors
[**getPbxPhoneNumber**](ConversationApi.md#getPbxPhoneNumber) | **GET** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid} | Get pbx phoneNumber
[**getPbxPhoneNumbers**](ConversationApi.md#getPbxPhoneNumbers) | **GET** /conversation/pbx/phone_number | Get pbx phoneNumbers
[**getPbxQueue**](ConversationApi.md#getPbxQueue) | **GET** /conversation/pbx/queue/{conversationPbxQueueUuid} | Get pbx queue
[**getPbxQueueVoicemail**](ConversationApi.md#getPbxQueueVoicemail) | **GET** /conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid} | Get Queue Voicemail
[**getPbxQueueVoicemails**](ConversationApi.md#getPbxQueueVoicemails) | **GET** /conversation/pbx/queues/{queue_uuid}/voicemails | Get Queue Voicemails
[**getPbxQueues**](ConversationApi.md#getPbxQueues) | **GET** /conversation/pbx/queue | Get pbx queues
[**getPbxTimeBased**](ConversationApi.md#getPbxTimeBased) | **GET** /conversation/pbx/time_based/{conversationPbxTimeBasedUuid} | Get pbx timeBased
[**getPbxTimeBaseds**](ConversationApi.md#getPbxTimeBaseds) | **GET** /conversation/pbx/time_based | Get pbx timeBaseds
[**getPbxTimeRange**](ConversationApi.md#getPbxTimeRange) | **GET** /conversation/pbx/time_range/{conversationPbxTimeRangeUuid} | Get pbx timeRange
[**getPbxTimeRanges**](ConversationApi.md#getPbxTimeRanges) | **GET** /conversation/pbx/time_range | Get pbx timeRanges
[**getPbxVoicemailCapabilities**](ConversationApi.md#getPbxVoicemailCapabilities) | **GET** /conversation/pbx/voicemail/capabilities | Get pbx voicemail capabilities
[**getPbxVoicemailMailbox**](ConversationApi.md#getPbxVoicemailMailbox) | **GET** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Get pbx voicemailMailbox
[**getPbxVoicemailMailboxes**](ConversationApi.md#getPbxVoicemailMailboxes) | **GET** /conversation/pbx/voicemail_mailbox | Get pbx voicemailMailboxes
[**getUserPbxAudio**](ConversationApi.md#getUserPbxAudio) | **GET** /conversation/pbx/audio/user/{conversationPbxAudioUuid} | Get user pbx audio
[**getUserPbxAudios**](ConversationApi.md#getUserPbxAudios) | **GET** /conversation/pbx/audio/user | Get user pbx audios
[**getVirtualAgentBudget**](ConversationApi.md#getVirtualAgentBudget) | **GET** /conversation/virtualagent/budget | Get virtual agent budget
[**getVirtualAgentCapabilities**](ConversationApi.md#getVirtualAgentCapabilities) | **GET** /conversation/virtualagent/capabilities | Get virtual agent capabilities
[**insertAgentProfileKnowledgeBaseDocument**](ConversationApi.md#insertAgentProfileKnowledgeBaseDocument) | **POST** /conversation/agent/profiles/{user_id}/knowledge_base | Insert a knowledge base document
[**insertAgentProfileMcp**](ConversationApi.md#insertAgentProfileMcp) | **POST** /conversation/agent/profiles/{user_id}/mcps | Insert an agent MCP server
[**insertAgentStatusConfig**](ConversationApi.md#insertAgentStatusConfig) | **POST** /conversation/agent/status/config | Create a custom agent status
[**insertConversationCannedMessage**](ConversationApi.md#insertConversationCannedMessage) | **POST** /conversation/canned_messages | Insert a canned message
[**insertConversationDepartment**](ConversationApi.md#insertConversationDepartment) | **POST** /conversation/departments | Insert a department
[**insertConversationEngagement**](ConversationApi.md#insertConversationEngagement) | **POST** /conversation/engagements | Insert a engagement
[**insertPbxAddress**](ConversationApi.md#insertPbxAddress) | **POST** /conversation/pbx/address | Insert pbx address
[**insertPbxAudio**](ConversationApi.md#insertPbxAudio) | **POST** /conversation/pbx/audio | Insert pbx audio
[**insertPbxClassOfService**](ConversationApi.md#insertPbxClassOfService) | **POST** /conversation/pbx/class_of_service | Insert pbx class of service
[**insertPbxHardwarePhone**](ConversationApi.md#insertPbxHardwarePhone) | **POST** /conversation/pbx/hardware_phone | Insert pbx hardware phone
[**insertPbxMenu**](ConversationApi.md#insertPbxMenu) | **POST** /conversation/pbx/menu | Insert pbx menu
[**insertPbxQueue**](ConversationApi.md#insertPbxQueue) | **POST** /conversation/pbx/queue | Insert pbx queue
[**insertPbxTimeBased**](ConversationApi.md#insertPbxTimeBased) | **POST** /conversation/pbx/time_based | Insert pbx timeBased
[**insertPbxTimeRange**](ConversationApi.md#insertPbxTimeRange) | **POST** /conversation/pbx/time_range | Insert pbx timeRange
[**insertPbxVoicemailMailbox**](ConversationApi.md#insertPbxVoicemailMailbox) | **POST** /conversation/pbx/voicemail_mailbox | Insert pbx voicemailMailbox
[**insertUserPbxAudio**](ConversationApi.md#insertUserPbxAudio) | **POST** /conversation/pbx/audio/user | Insert user pbx audio
[**joinAgentTestSession**](ConversationApi.md#joinAgentTestSession) | **PUT** /conversation/agent/profiles/{user_id}/test_session/{conversation_uuid}/join | Join a test conversation as the simulated customer
[**joinConversation**](ConversationApi.md#joinConversation) | **PUT** /conversation/conversations/{conversation_uuid}/join | Join a conversation
[**leaveConversation**](ConversationApi.md#leaveConversation) | **DELETE** /conversation/conversations/{conversation_uuid}/leave | Leave a conversation
[**listenedPbxAgentVoicemail**](ConversationApi.md#listenedPbxAgentVoicemail) | **GET** /conversation/pbx/agent/voicemails/{recording_sid}/listened | Listened Agent Voicemail
[**listenedPbxQueueVoicemail**](ConversationApi.md#listenedPbxQueueVoicemail) | **GET** /conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid}/listened | Listened Queue Voicemail
[**markReadConversation**](ConversationApi.md#markReadConversation) | **PUT** /conversation/conversations/{conversation_uuid}/markread | Mark a conversation as read
[**protectPbxPhoneNumber**](ConversationApi.md#protectPbxPhoneNumber) | **PUT** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}/protect | Protect pbx phoneNumber from deletion
[**purchasePbxPhoneNumber**](ConversationApi.md#purchasePbxPhoneNumber) | **POST** /conversation/pbx/phone_number | Purchase pbx phone number
[**regeneratePasswordForPbxHardwarePhone**](ConversationApi.md#regeneratePasswordForPbxHardwarePhone) | **POST** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}/regenerate_password | Update pbx hardware phone
[**resetConversationPbxQueueStatistics**](ConversationApi.md#resetConversationPbxQueueStatistics) | **POST** /conversation/pbx/queues/{queue_uuid}/reset_statistics | reset statistics within the queue
[**searchAgentStatusHistory**](ConversationApi.md#searchAgentStatusHistory) | **POST** /conversation/agent/status/history/search | Search agent status history
[**searchAgentStatusRollups**](ConversationApi.md#searchAgentStatusRollups) | **POST** /conversation/agent/status/rollup/search | Search per-(agent, day) rollups
[**searchConversationCannedMessages**](ConversationApi.md#searchConversationCannedMessages) | **POST** /conversation/canned_messages/search | Search for canned messages by short_code
[**searchPbxAvailablePhoneNumbers**](ConversationApi.md#searchPbxAvailablePhoneNumbers) | **GET** /conversation/pbx/phone_number/search | Search for available phone numbers
[**searchPbxCalls**](ConversationApi.md#searchPbxCalls) | **POST** /conversation/pbx/call/search | Search pbx call records
[**smsUnsubscribeConversation**](ConversationApi.md#smsUnsubscribeConversation) | **PUT** /conversation/conversations/{conversation_uuid}/sms_unsubscribe | Unsubscribe any SMS participants in this conversation
[**startAgentTestSession**](ConversationApi.md#startAgentTestSession) | **PUT** /conversation/agent/profiles/{user_id}/test_session | Start a test conversation with this AI agent
[**startConversation**](ConversationApi.md#startConversation) | **PUT** /conversation/conversations | Start a conversation
[**updateAgentProfile**](ConversationApi.md#updateAgentProfile) | **PUT** /conversation/agent/profile | Update agent profile
[**updateAgentProfileMcp**](ConversationApi.md#updateAgentProfileMcp) | **POST** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Update an agent MCP server
[**updateAgentStatusConfig**](ConversationApi.md#updateAgentStatusConfig) | **PUT** /conversation/agent/status/config/{conversation_status_uuid} | Update a custom agent status
[**updateConversationCannedMessage**](ConversationApi.md#updateConversationCannedMessage) | **PUT** /conversation/canned_messages/{conversation_canned_message_oid} | Update a canned message
[**updateConversationDepartment**](ConversationApi.md#updateConversationDepartment) | **PUT** /conversation/departments/{conversation_department_oid} | Update a department
[**updateConversationEngagement**](ConversationApi.md#updateConversationEngagement) | **PUT** /conversation/engagements/{conversation_engagement_oid} | Update a engagement
[**updateConversationWebchatQueueStatus**](ConversationApi.md#updateConversationWebchatQueueStatus) | **PUT** /conversation/conversations/queues/{queue_name}/status | Update status within the queue
[**updatePbxAddress**](ConversationApi.md#updatePbxAddress) | **PUT** /conversation/pbx/address/{conversationPbxAddressUuid} | Update pbx address
[**updatePbxAgent**](ConversationApi.md#updatePbxAgent) | **PUT** /conversation/pbx/agent/{conversationPbxAgentUuid} | Update pbx agent
[**updatePbxAudio**](ConversationApi.md#updatePbxAudio) | **PUT** /conversation/pbx/audio/{conversationPbxAudioUuid} | Update pbx audio
[**updatePbxCall**](ConversationApi.md#updatePbxCall) | **PUT** /conversation/pbx/call/{callUuid} | Update pbx call record
[**updatePbxClassOfService**](ConversationApi.md#updatePbxClassOfService) | **PUT** /conversation/pbx/class_of_service/{classOfServiceUuid} | Update pbx class of service
[**updatePbxDefaultTimezone**](ConversationApi.md#updatePbxDefaultTimezone) | **PUT** /conversation/pbx/config/default-timezone | Set the merchant default timezone
[**updatePbxHardwarePhone**](ConversationApi.md#updatePbxHardwarePhone) | **PUT** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Update pbx hardware phone
[**updatePbxMenu**](ConversationApi.md#updatePbxMenu) | **PUT** /conversation/pbx/menu/{conversationPbxMenuUuid} | Update pbx menu
[**updatePbxPhoneNumber**](ConversationApi.md#updatePbxPhoneNumber) | **PUT** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid} | Update pbx phoneNumber
[**updatePbxQueue**](ConversationApi.md#updatePbxQueue) | **PUT** /conversation/pbx/queue/{conversationPbxQueueUuid} | Update pbx queue
[**updatePbxTimeBased**](ConversationApi.md#updatePbxTimeBased) | **PUT** /conversation/pbx/time_based/{conversationPbxTimeBasedUuid} | Update pbx timeBased
[**updatePbxTimeRange**](ConversationApi.md#updatePbxTimeRange) | **PUT** /conversation/pbx/time_range/{conversationPbxTimeRangeUuid} | Update pbx timeRange
[**updatePbxVoicemailMailbox**](ConversationApi.md#updatePbxVoicemailMailbox) | **PUT** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Update pbx voicemailMailbox
[**updateUserPbxAudio**](ConversationApi.md#updateUserPbxAudio) | **PUT** /conversation/pbx/audio/user/{conversationPbxAudioUuid} | Update user pbx audio
[**updateVirtualAgentBudget**](ConversationApi.md#updateVirtualAgentBudget) | **PUT** /conversation/virtualagent/budget | Update virtual agent budget
[**updateVirtualAgentCapabilities**](ConversationApi.md#updateVirtualAgentCapabilities) | **PUT** /conversation/virtualagent/capabilities | Update virtual agent capabilities



## deleteAgentProfileKnowledgeBaseDocument

> ConversationDeleteKnowledgeBaseDocumentResponse deleteAgentProfileKnowledgeBaseDocument(user_id, document_uuid)

Delete a knowledge base document

Delete a knowledge base document 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **document_uuid** | **String**|  | 

### Return type

[**ConversationDeleteKnowledgeBaseDocumentResponse**](ConversationDeleteKnowledgeBaseDocumentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAgentProfileMcp

> deleteAgentProfileMcp(user_id, mcp_server_uuid)

Delete an agent MCP server

Delete an agent MCP server 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **mcp_server_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAgentStatusConfig

> deleteAgentStatusConfig(conversation_status_uuid)

Soft-deactivate a custom agent status

Sets active&#x3D;false on the row and the DDB sync record. The Twilio Activity is preserved (Round 2 decision) so historic worker reporting still resolves the SID. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_status_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteConversationCannedMessage

> deleteConversationCannedMessage(conversation_canned_message_oid)

Delete a conversation canned message

Delete a conversation canned message 


### Example

```javascript

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_canned_message_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDepartment

> deleteDepartment(conversation_department_oid)

Delete a conversation department

Delete a conversation department 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_department_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEngagement

> deleteEngagement(conversation_engagement_oid)

Delete a conversation engagement

Delete a conversation engagement 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_engagement_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxAddress

> ConversationPbxAddressResponse deletePbxAddress(conversationPbxAddressUuid)

Delete pbx address

Delete a pbx address 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAddressUuid** | **String**|  | 

### Return type

[**ConversationPbxAddressResponse**](ConversationPbxAddressResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxAgentVoicemail

> deletePbxAgentVoicemail(recording_sid)

Delete Agent Voicemail

Delete pbx agent Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recording_sid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxAudio

> ConversationPbxAudioResponse deletePbxAudio(conversationPbxAudioUuid)

Delete pbx audio

Delete a pbx audio 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxClassOfService

> BaseResponse deletePbxClassOfService(classOfServiceUuid)

Delete pbx class of service

Delete a class of service 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classOfServiceUuid** | **String**|  | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxHardwarePhone

> ConversationPbxHardwarePhoneResponse deletePbxHardwarePhone(conversationPbxHardwarePhoneUuid)

Delete pbx hardware phone

Delete a pbx hardware phone 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxHardwarePhoneUuid** | **String**|  | 

### Return type

[**ConversationPbxHardwarePhoneResponse**](ConversationPbxHardwarePhoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxMenu

> ConversationPbxMenuResponse deletePbxMenu(conversationPbxMenuUuid)

Delete pbx menu

Delete a pbx menu 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxMenuUuid** | **String**|  | 

### Return type

[**ConversationPbxMenuResponse**](ConversationPbxMenuResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxPhoneNumber

> deletePbxPhoneNumber(conversationPbxPhoneNumberUuid)

Delete pbx phoneNumber

Delete a pbx phoneNumber. Only works if deletion_protected is false. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxPhoneNumberUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxQueue

> ConversationPbxQueueResponse deletePbxQueue(conversationPbxQueueUuid)

Delete pbx queue

Delete a pbx queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxQueueUuid** | **String**|  | 

### Return type

[**ConversationPbxQueueResponse**](ConversationPbxQueueResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxQueueVoicemail

> deletePbxQueueVoicemail(queue_uuid, recording_sid)

Delete Queue Voicemail

Delete pbx queue Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_uuid** | **String**|  | 
 **recording_sid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxTimeBased

> ConversationPbxTimeBasedResponse deletePbxTimeBased(conversationPbxTimeBasedUuid)

Delete pbx timeBased

Delete a pbx timeBased 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeBasedUuid** | **String**|  | 

### Return type

[**ConversationPbxTimeBasedResponse**](ConversationPbxTimeBasedResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxTimeRange

> ConversationPbxTimeRangeResponse deletePbxTimeRange(conversationPbxTimeRangeUuid)

Delete pbx timeRange

Delete a pbx timeRange 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeRangeUuid** | **String**|  | 

### Return type

[**ConversationPbxTimeRangeResponse**](ConversationPbxTimeRangeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePbxVoicemailMailbox

> ConversationPbxVoicemailMailboxResponse deletePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid)

Delete pbx voicemailMailbox

Delete a pbx voicemailMailbox 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxVoicemailMailboxUuid** | **String**|  | 

### Return type

[**ConversationPbxVoicemailMailboxResponse**](ConversationPbxVoicemailMailboxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserPbxAudio

> ConversationPbxAudioResponse deleteUserPbxAudio(conversationPbxAudioUuid)

Delete user pbx audio

Delete a pbx audio file owned by the authenticated user 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentKeepAlive

> getAgentKeepAlive()

Agent keep alive

Called periodically by the conversation API to keep the session alive. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfile

> ConversationAgentProfileResponse getAgentProfile()

Get agent profile

Retrieve the agents profile 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationAgentProfileResponse**](ConversationAgentProfileResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfileKnowledgeBase

> ConversationKnowledgeBaseDocumentsResponse getAgentProfileKnowledgeBase(user_id)

Get the list of knowledge base documents associated with this agent profile

Retrieve knowledge base documents 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 

### Return type

[**ConversationKnowledgeBaseDocumentsResponse**](ConversationKnowledgeBaseDocumentsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfileMcp

> ConversationMcpServerResponse getAgentProfileMcp(user_id, mcp_server_uuid)

Get an MCP server associated with this agent

Retrieve MCP server associated with this agent 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **mcp_server_uuid** | **String**|  | 

### Return type

[**ConversationMcpServerResponse**](ConversationMcpServerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfileMcpTools

> ConversationMcpServerToolsResponse getAgentProfileMcpTools(user_id, mcp_server_uuid)

Get the tools available from the MCP server

Get the tools available from the MCP server 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **mcp_server_uuid** | **String**|  | 

### Return type

[**ConversationMcpServerToolsResponse**](ConversationMcpServerToolsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfileMcps

> ConversationMcpServersResponse getAgentProfileMcps(user_id)

Get the list of MCP servers associated with this agent

Retrieve MCP servers associated with this agent 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 

### Return type

[**ConversationMcpServersResponse**](ConversationMcpServersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentProfiles

> ConversationAgentProfilesResponse getAgentProfiles()

Get agent profiles

Retrieve the agents profile 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationAgentProfilesResponse**](ConversationAgentProfilesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentStatusConfigs

> ConversationAgentStatusConfigsResponse getAgentStatusConfigs()

List custom agent statuses

Returns all custom statuses (active and soft-deactivated) for the merchant. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationAgentStatusConfigsResponse**](ConversationAgentStatusConfigsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentStatusHeatmap

> ConversationAgentStatusHeatmapResponse getAgentStatusHeatmap(heatmap_request)

Agent x hour-of-day heatmap

Returns ECharts-shaped agent x hour grid for the requested metric (availability, call_volume, chat_volume). Multi-day requests average the cell values across the date range. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **heatmap_request** | [**ConversationAgentStatusHeatmapRequest**](ConversationAgentStatusHeatmapRequest.md)| Heatmap request | 

### Return type

[**ConversationAgentStatusHeatmapResponse**](ConversationAgentStatusHeatmapResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAgentStatusSummary

> ConversationAgentStatusSummaryResponse getAgentStatusSummary(date_start2, date_end2, opts)

Dashboard summary for a date range

Top-line summary: total_agents, avg_available_pct, status_breakdown, per-agent rollups. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_start2** | **String**| Range start (YYYY-MM-DD) | 
 **date_end2** | **String**| Range end (YYYY-MM-DD) | 
 **date_start** | **String**|  | [optional] 
 **date_end** | **String**|  | [optional] 

### Return type

[**ConversationAgentStatusSummaryResponse**](ConversationAgentStatusSummaryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentStatusTimeline

> ConversationAgentStatusTimelineResponse getAgentStatusTimeline(agent_user_id, date2, opts)

Day timeline for a single agent

Returns merged status events + PBX calls + chat conversations for the agent on the given date. Omitting the channel parameter returns both channels merged. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_user_id** | **String**|  | 
 **date2** | **String**| Day to retrieve (YYYY-MM-DD) | 
 **date** | **String**|  | [optional] 
 **channel** | **String**|  | [optional] 
 **channel2** | **String**| Restrict to one channel (omit for both) | [optional] 

### Return type

[**ConversationAgentStatusTimelineResponse**](ConversationAgentStatusTimelineResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentWebsocketAuthorization

> ConversationAgentAuthResponse getAgentWebsocketAuthorization()

Get agent websocket authorization

Retrieve a JWT to authorize an agent to make a websocket connection. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationAgentAuthResponse**](ConversationAgentAuthResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversation

> ConversationResponse getConversation(conversation_uuid, opts)

Retrieve a conversation

Retrieve a conversation including the participants and messages 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 
 **limit** | **Number**|  | [optional] 

### Return type

[**ConversationResponse**](ConversationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationCannedMessages

> ConversationCannedMessagesResponse getConversationCannedMessages()

Retrieve a list of canned messages ordered by short_code

Retrieve a list of canned messages ordered by short_code 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationCannedMessagesResponse**](ConversationCannedMessagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationContext

> ConversationWebchatContext getConversationContext(conversation_uuid)

Get a webchat conversation context

Get a webchat conversation context 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

[**ConversationWebchatContext**](ConversationWebchatContext.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationDepartmentMemberList

> ConversationDepartmentMembersResponse getConversationDepartmentMemberList()

Retrieve a list of possible department members

Retrieve a list of possible department members 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationDepartmentMembersResponse**](ConversationDepartmentMembersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationDepartments

> ConversationDepartmentsResponse getConversationDepartments()

Retrieve a list of departments ordered by name

Retrieve a list of departments ordered by name 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationDepartmentsResponse**](ConversationDepartmentsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationEngagement

> ConversationEngagementResponse getConversationEngagement(conversation_engagement_oid)

Retrieve an engagement

Retrieve an engagement 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_engagement_oid** | **Number**|  | 

### Return type

[**ConversationEngagementResponse**](ConversationEngagementResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationEngagements

> ConversationEngagementsResponse getConversationEngagements()

Retrieve a list of engagements ordered by name

Retrieve a list of engagements ordered by name 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationEngagementsResponse**](ConversationEngagementsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationItemVariations

> ItemResponse getConversationItemVariations(merchant_item_id)

Retrieve an item with sparse variations populated

Retrieve an item with sparse variations populated 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_id** | **String**|  | 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationKnowledgeBaseDocumentUploadUrl

> ConversationKnowledgeBaseDocumentUploadUrlResponse getConversationKnowledgeBaseDocumentUploadUrl(user_id, extension)

Get a pre-signed conversation knowledge base document upload URL

Get a pre-signed conversation knowledge base document upload URL 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **extension** | **String**|  | 

### Return type

[**ConversationKnowledgeBaseDocumentUploadUrlResponse**](ConversationKnowledgeBaseDocumentUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationMessages

> ConversationMessagesResponse getConversationMessages(conversation_uuid, since, opts)

Retrieve conversation messages

Retrieve conversation messages since a particular time 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 
 **since** | **Number**|  | 
 **limit** | **Number**|  | [optional] 

### Return type

[**ConversationMessagesResponse**](ConversationMessagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationMultimediaUploadUrl

> ConversationMultimediaUploadUrlResponse getConversationMultimediaUploadUrl(extension)

Get a presigned conversation multimedia upload URL

Get a presigned conversation multimedia upload URL 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extension** | **String**|  | 

### Return type

[**ConversationMultimediaUploadUrlResponse**](ConversationMultimediaUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationPbxAudioUploadUrl

> ConversationPbxAudioUploadUrlResponse getConversationPbxAudioUploadUrl(extension)

Get a pre-signed conversation multimedia upload URL

Get a pre-signed conversation multimedia upload URL 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extension** | **String**|  | 

### Return type

[**ConversationPbxAudioUploadUrlResponse**](ConversationPbxAudioUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationPbxCustomerSnapshot

> ConversationPbxCustomerSnapshotResponse getConversationPbxCustomerSnapshot(pbx_customer_snapshot_request)

Get orders and customer information for a phone number

Retrieves all the orders, auto orders, and customer profile for a given phone number 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_customer_snapshot_request** | [**ConversationPbxCustomerSnapshotRequest**](ConversationPbxCustomerSnapshotRequest.md)| Conversation pbx customer snapshot request | 

### Return type

[**ConversationPbxCustomerSnapshotResponse**](ConversationPbxCustomerSnapshotResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConversationPermissions

> ConversationPermissionsResponse getConversationPermissions()

Retrieve conversation permissions

Retrieve conversation permissions 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPermissionsResponse**](ConversationPermissionsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationWebchatQueueStatuses

> ConversationWebchatQueueStatusesResponse getConversationWebchatQueueStatuses()

Retrieve a conversation webchat queue statuses

Retrieve a conversation webchat queue statuses including agent status and queue entries 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationWebchatQueueStatusesResponse**](ConversationWebchatQueueStatusesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversations

> ConversationsResponse getConversations(opts)

Retrieve a list of conversation summaries newest to oldest

Retrieve a list of conversation summaries that are ordered newest to oldest, include the most recent message and whether its been read. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **medium** | **String**|  | [optional] 
 **before** | **String**|  | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]

### Return type

[**ConversationsResponse**](ConversationsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConversationsAutocomplete

> ConversationAutocompleteResponse getConversationsAutocomplete(autocomplete_request)

Retrieve a list of matching terms for a search field

Retrieve a list of matching terms for a search field 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autocomplete_request** | [**ConversationAutocompleteRequest**](ConversationAutocompleteRequest.md)| Autocomplete Request | 

### Return type

[**ConversationAutocompleteResponse**](ConversationAutocompleteResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConversationsSearch

> ConversationSearchResponse getConversationsSearch(search_request)

Search conversations

Search conversations 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**ConversationSearchRequest**](ConversationSearchRequest.md)| Search Request | 

### Return type

[**ConversationSearchResponse**](ConversationSearchResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLocationsForEngagement

> ConversationLocationsResponse getLocationsForEngagement()

Get location data for engagement configuration

Get location data for engagement configuration 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationLocationsResponse**](ConversationLocationsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAddress

> ConversationPbxAddressResponse getPbxAddress(conversationPbxAddressUuid)

Get pbx address

Retrieve a pbx address 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAddressUuid** | **String**|  | 

### Return type

[**ConversationPbxAddressResponse**](ConversationPbxAddressResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAddresses

> ConversationPbxAddressesResponse getPbxAddresses()

Get pbx addresses

Retrieve pbx addresses 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxAddressesResponse**](ConversationPbxAddressesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAgent

> ConversationPbxAgentResponse getPbxAgent(conversationPbxAgentUuid)

Get pbx agent

Retrieve a pbx agent 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAgentUuid** | **String**|  | 

### Return type

[**ConversationPbxAgentResponse**](ConversationPbxAgentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAgentVoicemail

> ConversationPbxVoicemailMessageResponse getPbxAgentVoicemail(recording_sid)

Get Agent Voicemail

Retrieve pbx agent Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recording_sid** | **String**|  | 

### Return type

[**ConversationPbxVoicemailMessageResponse**](ConversationPbxVoicemailMessageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAgentVoicemails

> ConversationPbxVoicemailMessageSummariesResponse getPbxAgentVoicemails()

Get Agent Voicemails

Retrieve pbx agent Voicemails 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxVoicemailMessageSummariesResponse**](ConversationPbxVoicemailMessageSummariesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAgents

> ConversationPbxAgentsResponse getPbxAgents()

Get pbx agents

Retrieve pbx agents 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxAgentsResponse**](ConversationPbxAgentsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAudio

> ConversationPbxAudioResponse getPbxAudio(conversationPbxAudioUuid)

Get pbx audio

Retrieve a pbx audio 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAudioUsage

> ConversationPbxAudioUsageResponse getPbxAudioUsage(conversationPbxAudioUuid)

Get pbx audio usage

Retrieve a pbx audio usage 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 

### Return type

[**ConversationPbxAudioUsageResponse**](ConversationPbxAudioUsageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxAudios

> ConversationPbxAudiosResponse getPbxAudios()

Get pbx audios

Retrieve pbx audios 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxAudiosResponse**](ConversationPbxAudiosResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxCall

> ConversationPbxCallResponse getPbxCall(callUuid)

Get pbx call record

Retrieve a single PBX call record with full details 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callUuid** | **String**|  | 

### Return type

[**ConversationPbxCallResponse**](ConversationPbxCallResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxClassOfService

> ConversationPbxClassOfServiceResponse getPbxClassOfService(classOfServiceUuid)

Get pbx class of service

Retrieve a single class of service 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classOfServiceUuid** | **String**|  | 

### Return type

[**ConversationPbxClassOfServiceResponse**](ConversationPbxClassOfServiceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxClassesOfService

> ConversationPbxClassOfServicesResponse getPbxClassesOfService()

Get pbx classes of service

Retrieve all classes of service for the merchant 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxClassOfServicesResponse**](ConversationPbxClassOfServicesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxCosAuditLogs

> ConversationPbxCosAuditLogsResponse getPbxCosAuditLogs(opts)

Get pbx class of service audit logs

Retrieve audit log entries for class of service enforcement 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| ISO timestamp to filter entries since | [optional] 
 **agent_login** | **String**| Filter by agent login | [optional] 
 **action** | **String**| Action | [optional] 
 **limit** | **Number**| Maximum number of entries to return (default 100) | [optional] 

### Return type

[**ConversationPbxCosAuditLogsResponse**](ConversationPbxCosAuditLogsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxDefaultTimezone

> ConversationPbxDefaultTimezoneResponse getPbxDefaultTimezone()

Get the merchant default timezone

Returns the merchant&#39;s stored default timezone (IANA name). Falls back to America/New_York when unset. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxDefaultTimezoneResponse**](ConversationPbxDefaultTimezoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxHardwarePhone

> ConversationPbxHardwarePhoneResponse getPbxHardwarePhone(conversationPbxHardwarePhoneUuid)

Get pbx hardware phone

Retrieve a pbx hardware phone 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxHardwarePhoneUuid** | **String**|  | 

### Return type

[**ConversationPbxHardwarePhoneResponse**](ConversationPbxHardwarePhoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxHardwarePhoneManufacturers

> ConversationPbxPhoneManufacturersResponse getPbxHardwarePhoneManufacturers()

Get pbx hardware phone manufacturers

Retrieve pbx hardware phone manufacturers and models for auto-provisioning 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxPhoneManufacturersResponse**](ConversationPbxPhoneManufacturersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxHardwarePhones

> ConversationPbxHardwarePhonesResponse getPbxHardwarePhones()

Get pbx hardware phones

Retrieve pbx hardware phones 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxHardwarePhonesResponse**](ConversationPbxHardwarePhonesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxMenu

> ConversationPbxMenuResponse getPbxMenu(conversationPbxMenuUuid)

Get pbx menu

Retrieve a pbx menu 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxMenuUuid** | **String**|  | 

### Return type

[**ConversationPbxMenuResponse**](ConversationPbxMenuResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxMenus

> ConversationPbxMenusResponse getPbxMenus()

Get pbx menus

Retrieve pbx menus 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxMenusResponse**](ConversationPbxMenusResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxPayConnectors

> ConversationPbxPayConnectorsResponse getPbxPayConnectors()

Get pbx pay connectors

Retrieve the Twilio Pay Connectors installed in the Twilio account for this merchant.  This list is refreshed each time the PBX configuration is deployed. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxPayConnectorsResponse**](ConversationPbxPayConnectorsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxPhoneNumber

> ConversationPbxPhoneNumberResponse getPbxPhoneNumber(conversationPbxPhoneNumberUuid)

Get pbx phoneNumber

Retrieve a pbx phoneNumber 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxPhoneNumberUuid** | **String**|  | 

### Return type

[**ConversationPbxPhoneNumberResponse**](ConversationPbxPhoneNumberResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxPhoneNumbers

> ConversationPbxPhoneNumbersResponse getPbxPhoneNumbers()

Get pbx phoneNumbers

Retrieve pbx phoneNumbers 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxPhoneNumbersResponse**](ConversationPbxPhoneNumbersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxQueue

> ConversationPbxQueueResponse getPbxQueue(conversationPbxQueueUuid)

Get pbx queue

Retrieve a pbx queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxQueueUuid** | **String**|  | 

### Return type

[**ConversationPbxQueueResponse**](ConversationPbxQueueResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxQueueVoicemail

> ConversationPbxVoicemailMessageResponse getPbxQueueVoicemail(queue_uuid, recording_sid)

Get Queue Voicemail

Retrieve pbx queue Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_uuid** | **String**|  | 
 **recording_sid** | **String**|  | 

### Return type

[**ConversationPbxVoicemailMessageResponse**](ConversationPbxVoicemailMessageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxQueueVoicemails

> ConversationPbxVoicemailMessageSummariesResponse getPbxQueueVoicemails(queue_uuid)

Get Queue Voicemails

Retrieve pbx queue voicemails 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_uuid** | **String**|  | 

### Return type

[**ConversationPbxVoicemailMessageSummariesResponse**](ConversationPbxVoicemailMessageSummariesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxQueues

> ConversationPbxQueuesResponse getPbxQueues()

Get pbx queues

Retrieve pbx queues 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxQueuesResponse**](ConversationPbxQueuesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxTimeBased

> ConversationPbxTimeBasedResponse getPbxTimeBased(conversationPbxTimeBasedUuid)

Get pbx timeBased

Retrieve a pbx timeBased 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeBasedUuid** | **String**|  | 

### Return type

[**ConversationPbxTimeBasedResponse**](ConversationPbxTimeBasedResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxTimeBaseds

> ConversationPbxTimeBasedsResponse getPbxTimeBaseds()

Get pbx timeBaseds

Retrieve pbx timeBaseds 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxTimeBasedsResponse**](ConversationPbxTimeBasedsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxTimeRange

> ConversationPbxTimeRangeResponse getPbxTimeRange(conversationPbxTimeRangeUuid)

Get pbx timeRange

Retrieve a pbx timeRange 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeRangeUuid** | **String**|  | 

### Return type

[**ConversationPbxTimeRangeResponse**](ConversationPbxTimeRangeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxTimeRanges

> ConversationPbxTimeRangesResponse getPbxTimeRanges()

Get pbx timeRanges

Retrieve pbx timeRanges 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxTimeRangesResponse**](ConversationPbxTimeRangesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxVoicemailCapabilities

> ConversationPbxVoicemailCapabilitiesResponse getPbxVoicemailCapabilities()

Get pbx voicemail capabilities

Retrieve voicemail notification capabilities including available channels 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxVoicemailCapabilitiesResponse**](ConversationPbxVoicemailCapabilitiesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxVoicemailMailbox

> ConversationPbxVoicemailMailboxResponse getPbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid)

Get pbx voicemailMailbox

Retrieve a pbx voicemailMailbox 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxVoicemailMailboxUuid** | **String**|  | 

### Return type

[**ConversationPbxVoicemailMailboxResponse**](ConversationPbxVoicemailMailboxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPbxVoicemailMailboxes

> ConversationPbxVoicemailMailboxesResponse getPbxVoicemailMailboxes()

Get pbx voicemailMailboxes

Retrieve pbx voicemailMailboxes 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxVoicemailMailboxesResponse**](ConversationPbxVoicemailMailboxesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserPbxAudio

> ConversationPbxAudioResponse getUserPbxAudio(conversationPbxAudioUuid)

Get user pbx audio

Retrieve a pbx audio file owned by the authenticated user 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserPbxAudios

> ConversationPbxAudiosResponse getUserPbxAudios()

Get user pbx audios

Retrieve pbx audio files owned by the authenticated user 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxAudiosResponse**](ConversationPbxAudiosResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAgentBudget

> ConversationVirtualAgentBudgetResponse getVirtualAgentBudget()

Get virtual agent budget

Retrieve virtual agent budget 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationVirtualAgentBudgetResponse**](ConversationVirtualAgentBudgetResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAgentCapabilities

> ConversationVirtualAgentCapabilitiesResponse getVirtualAgentCapabilities()

Get virtual agent capabilities

Retrieve virtual agent capabilities 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationVirtualAgentCapabilitiesResponse**](ConversationVirtualAgentCapabilitiesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertAgentProfileKnowledgeBaseDocument

> ConversationInsertKnowledgeBaseDocumentResponse insertAgentProfileKnowledgeBaseDocument(user_id, knowledge_base_document_request)

Insert a knowledge base document

Insert a knowledge base document 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **knowledge_base_document_request** | [**ConversationInsertKnowledgeBaseDocumentRequest**](ConversationInsertKnowledgeBaseDocumentRequest.md)| Insert request | 

### Return type

[**ConversationInsertKnowledgeBaseDocumentResponse**](ConversationInsertKnowledgeBaseDocumentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertAgentProfileMcp

> ConversationMcpServerResponse insertAgentProfileMcp(user_id, mcp_server)

Insert an agent MCP server

Insert an agent MCP server 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **mcp_server** | [**ConversationMcpServer**](ConversationMcpServer.md)| MCP Server | 

### Return type

[**ConversationMcpServerResponse**](ConversationMcpServerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertAgentStatusConfig

> ConversationAgentStatusConfigResponse insertAgentStatusConfig(status_config)

Create a custom agent status

Create a custom status. Enforces a 20-active-status-per-merchant cap and the 50-Twilio-Activity-per-workspace cap. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status_config** | [**ConversationAgentStatusConfig**](ConversationAgentStatusConfig.md)| Status config | 

### Return type

[**ConversationAgentStatusConfigResponse**](ConversationAgentStatusConfigResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertConversationCannedMessage

> ConversationCannedMessageResponse insertConversationCannedMessage(canned_message)

Insert a canned message

Insert a canned message 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canned_message** | [**ConversationCannedMessage**](ConversationCannedMessage.md)| Canned message | 

### Return type

[**ConversationCannedMessageResponse**](ConversationCannedMessageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertConversationDepartment

> ConversationDepartmentResponse insertConversationDepartment(department)

Insert a department

Insert a department 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | [**ConversationDepartment**](ConversationDepartment.md)| Department | 

### Return type

[**ConversationDepartmentResponse**](ConversationDepartmentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertConversationEngagement

> ConversationEngagementResponse insertConversationEngagement(engagement)

Insert a engagement

Insert a engagement 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engagement** | [**ConversationEngagement**](ConversationEngagement.md)| Engagement | 

### Return type

[**ConversationEngagementResponse**](ConversationEngagementResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxAddress

> ConversationPbxAddressResponse insertPbxAddress(pbx_address)

Insert pbx address

Insert a pbx address 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_address** | [**ConversationPbxAddress**](ConversationPbxAddress.md)| Pbx Address | 

### Return type

[**ConversationPbxAddressResponse**](ConversationPbxAddressResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxAudio

> ConversationPbxAudioResponse insertPbxAudio(pbx_audio)

Insert pbx audio

Insert a pbx audio 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_audio** | [**ConversationPbxAudio**](ConversationPbxAudio.md)| Pbx Audio | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxClassOfService

> ConversationPbxClassOfServiceResponse insertPbxClassOfService(class_of_service)

Insert pbx class of service

Create a new class of service 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **class_of_service** | [**ConversationPbxClassOfService**](ConversationPbxClassOfService.md)| Class of service | 

### Return type

[**ConversationPbxClassOfServiceResponse**](ConversationPbxClassOfServiceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertPbxHardwarePhone

> ConversationPbxHardwarePhoneResponse insertPbxHardwarePhone(pbx_hardware_phone)

Insert pbx hardware phone

Insert a pbx hardware phone 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_hardware_phone** | [**ConversationPbxHardwarePhone**](ConversationPbxHardwarePhone.md)| Pbx Hardware Phone | 

### Return type

[**ConversationPbxHardwarePhoneResponse**](ConversationPbxHardwarePhoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxMenu

> ConversationPbxMenuResponse insertPbxMenu(pbx_menu)

Insert pbx menu

Insert a pbx menu 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_menu** | [**ConversationPbxMenu**](ConversationPbxMenu.md)| Pbx Menu | 

### Return type

[**ConversationPbxMenuResponse**](ConversationPbxMenuResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxQueue

> ConversationPbxQueueResponse insertPbxQueue(pbx_queue)

Insert pbx queue

Insert a pbx queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_queue** | [**ConversationPbxQueue**](ConversationPbxQueue.md)| Pbx Queue | 

### Return type

[**ConversationPbxQueueResponse**](ConversationPbxQueueResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxTimeBased

> ConversationPbxTimeBasedResponse insertPbxTimeBased(pbx_timeBased)

Insert pbx timeBased

Insert a pbx timeBased 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_timeBased** | [**ConversationPbxTimeBased**](ConversationPbxTimeBased.md)| Pbx TimeBased | 

### Return type

[**ConversationPbxTimeBasedResponse**](ConversationPbxTimeBasedResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxTimeRange

> ConversationPbxTimeRangeResponse insertPbxTimeRange(pbx_timeRange)

Insert pbx timeRange

Insert a pbx timeRange 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_timeRange** | [**ConversationPbxTimeRange**](ConversationPbxTimeRange.md)| Pbx TimeRange | 

### Return type

[**ConversationPbxTimeRangeResponse**](ConversationPbxTimeRangeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertPbxVoicemailMailbox

> ConversationPbxVoicemailMailboxResponse insertPbxVoicemailMailbox(pbx_voicemailMailbox)

Insert pbx voicemailMailbox

Insert a pbx voicemailMailbox 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_voicemailMailbox** | [**ConversationPbxVoicemailMailbox**](ConversationPbxVoicemailMailbox.md)| Pbx VoicemailMailbox | 

### Return type

[**ConversationPbxVoicemailMailboxResponse**](ConversationPbxVoicemailMailboxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertUserPbxAudio

> ConversationPbxAudioResponse insertUserPbxAudio(pbx_audio)

Insert user pbx audio

Insert a pbx audio file for the authenticated user 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pbx_audio** | [**ConversationPbxAudio**](ConversationPbxAudio.md)| Pbx Audio | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## joinAgentTestSession

> joinAgentTestSession(user_id, conversation_uuid, join_request)

Join a test conversation as the simulated customer

Joins the simulated customer to the conversation the agent opened for a test session.  This mirrors what the storefront webchat widget does after an agent picks up its queue entry, and it is what gives the conversation a customer participant.  Requires a logged in user with conversations admin; an API key or OAuth application cannot call this. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **conversation_uuid** | **String**|  | 
 **join_request** | [**ConversationAgentTestSessionJoinRequest**](ConversationAgentTestSessionJoinRequest.md)| Test session join request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## joinConversation

> joinConversation(conversation_uuid, opts)

Join a conversation

Join a conversation 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 
 **join_request** | [**ConversationJoinRequest**](ConversationJoinRequest.md)| Join request | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveConversation

> leaveConversation(conversation_uuid)

Leave a conversation

Leave a conversation 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listenedPbxAgentVoicemail

> listenedPbxAgentVoicemail(recording_sid)

Listened Agent Voicemail

Listened pbx agent Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recording_sid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listenedPbxQueueVoicemail

> listenedPbxQueueVoicemail(queue_uuid, recording_sid)

Listened Queue Voicemail

Listened pbx queue Voicemail 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_uuid** | **String**|  | 
 **recording_sid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markReadConversation

> markReadConversation(conversation_uuid)

Mark a conversation as read

Mark a conversation as read 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## protectPbxPhoneNumber

> ConversationPbxPhoneNumberResponse protectPbxPhoneNumber(conversationPbxPhoneNumberUuid)

Protect pbx phoneNumber from deletion

Protect a pbx phoneNumber from deletion. This is a one-way operation and cannot be undone through the API. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxPhoneNumberUuid** | **String**|  | 

### Return type

[**ConversationPbxPhoneNumberResponse**](ConversationPbxPhoneNumberResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchasePbxPhoneNumber

> ConversationPbxPhoneNumberResponse purchasePbxPhoneNumber(phone_number_purchase_request)

Purchase pbx phone number

Purchase a phone number from Twilio. The phone_number must be from the available phone number search results. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number_purchase_request** | [**ConversationPbxPhoneNumberPurchaseRequest**](ConversationPbxPhoneNumberPurchaseRequest.md)| Phone number purchase request | 

### Return type

[**ConversationPbxPhoneNumberResponse**](ConversationPbxPhoneNumberResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## regeneratePasswordForPbxHardwarePhone

> ConversationPbxHardwarePhoneResponse regeneratePasswordForPbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone)

Update pbx hardware phone

Update a pbx hardware phone 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxHardwarePhoneUuid** | **String**|  | 
 **pbx_hardware_phone** | [**ConversationPbxHardwarePhone**](ConversationPbxHardwarePhone.md)| Pbx Hardware Phone | 

### Return type

[**ConversationPbxHardwarePhoneResponse**](ConversationPbxHardwarePhoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetConversationPbxQueueStatistics

> resetConversationPbxQueueStatistics(queue_uuid)

reset statistics within the queue

reset statistics within the queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAgentStatusHistory

> ConversationAgentStatusHistorySearchResponse searchAgentStatusHistory(search_request, opts)

Search agent status history

Paginated search over conversation_agent_status_events_all. Filters: agent_user_id, channel, status, trigger, date range. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**ConversationAgentStatusHistorySearchRequest**](ConversationAgentStatusHistorySearchRequest.md)| Search request | 
 **_limit** | **Number**| Maximum records per call (max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination offset (zero-based) | [optional] [default to 0]

### Return type

[**ConversationAgentStatusHistorySearchResponse**](ConversationAgentStatusHistorySearchResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchAgentStatusRollups

> ConversationAgentStatusRollupSearchResponse searchAgentStatusRollups(search_request)

Search per-(agent, day) rollups

Aggregated over conversation_agent_status_events_all via date_histogram + terms. Returns one row per (agent, day, channel). 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**ConversationAgentStatusRollupSearchRequest**](ConversationAgentStatusRollupSearchRequest.md)| Search request | 

### Return type

[**ConversationAgentStatusRollupSearchResponse**](ConversationAgentStatusRollupSearchResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchConversationCannedMessages

> ConversationCannedMessagesResponse searchConversationCannedMessages(search_request)

Search for canned messages by short_code

Search for canned messages by short_code 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**ConversationCannedMessagesSearch**](ConversationCannedMessagesSearch.md)| Search request | 

### Return type

[**ConversationCannedMessagesResponse**](ConversationCannedMessagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchPbxAvailablePhoneNumbers

> ConversationPbxAvailablePhoneNumbersResponse searchPbxAvailablePhoneNumbers(country, opts)

Search for available phone numbers

Search for available phone numbers from Twilio that can be purchased 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| ISO country code (e.g., US, CA, GB) | 
 **area_code** | **String**| Area code filter (e.g., 614) | [optional] 
 **contains** | **String**| Pattern to match (e.g., 555, *PIZZA) | [optional] 
 **sms_enabled** | **Boolean**| Filter for SMS capability | [optional] 
 **voice_enabled** | **Boolean**| Filter for voice capability | [optional] 
 **type** | **String**| Phone number type | [optional] 
 **limit** | **Number**| Max results (default 20, max 100) | [optional] 

### Return type

[**ConversationPbxAvailablePhoneNumbersResponse**](ConversationPbxAvailablePhoneNumbersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchPbxCalls

> ConversationPbxCallSearchResponse searchPbxCalls(search_request, opts)

Search pbx call records

Search and list PBX call records with filtering, sorting, and pagination 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**ConversationPbxCallSearchRequest**](ConversationPbxCallSearchRequest.md)| Search Request | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the calls. | [optional] 

### Return type

[**ConversationPbxCallSearchResponse**](ConversationPbxCallSearchResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## smsUnsubscribeConversation

> smsUnsubscribeConversation(conversation_uuid)

Unsubscribe any SMS participants in this conversation

Unsubscribe any SMS participants in this conversation 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startAgentTestSession

> ConversationAgentTestSessionResponse startAgentTestSession(user_id, test_session_request)

Start a test conversation with this AI agent

Opens a webchat conversation against this specific AI agent as if the given customer had started it from the storefront, so the agent can be tried out before it is put in front of anyone.  The session runs against live data: the cart is real, the customer is real, and anything the agent does during the conversation actually happens.  Requires a logged in user with conversations admin; an API key or OAuth application cannot call this. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **test_session_request** | [**ConversationAgentTestSessionRequest**](ConversationAgentTestSessionRequest.md)| Test session request | 

### Return type

[**ConversationAgentTestSessionResponse**](ConversationAgentTestSessionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startConversation

> ConversationStartResponse startConversation(start_request)

Start a conversation

Start a new conversation 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_request** | [**ConversationStartRequest**](ConversationStartRequest.md)| Start request | 

### Return type

[**ConversationStartResponse**](ConversationStartResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentProfile

> ConversationAgentProfileResponse updateAgentProfile(profile_request)

Update agent profile

Update agent profile 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_request** | [**ConversationAgentProfile**](ConversationAgentProfile.md)| Profile request | 

### Return type

[**ConversationAgentProfileResponse**](ConversationAgentProfileResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentProfileMcp

> ConversationMcpServerResponse updateAgentProfileMcp(user_id, mcp_server_uuid, mcp_server)

Update an agent MCP server

Update an agent MCP server 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Number**|  | 
 **mcp_server_uuid** | **String**|  | 
 **mcp_server** | [**ConversationMcpServer**](ConversationMcpServer.md)| MCP Server | 

### Return type

[**ConversationMcpServerResponse**](ConversationMcpServerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentStatusConfig

> ConversationAgentStatusConfigResponse updateAgentStatusConfig(conversation_status_uuid, status_config)

Update a custom agent status

Update a custom status. Renaming flows through to the Twilio Activity. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_status_uuid** | **String**|  | 
 **status_config** | [**ConversationAgentStatusConfig**](ConversationAgentStatusConfig.md)| Status config | 

### Return type

[**ConversationAgentStatusConfigResponse**](ConversationAgentStatusConfigResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConversationCannedMessage

> ConversationCannedMessageResponse updateConversationCannedMessage(conversation_canned_message_oid, canned_message)

Update a canned message

Update a canned message 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_canned_message_oid** | **Number**|  | 
 **canned_message** | [**ConversationCannedMessage**](ConversationCannedMessage.md)| Canned message | 

### Return type

[**ConversationCannedMessageResponse**](ConversationCannedMessageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConversationDepartment

> ConversationDepartmentResponse updateConversationDepartment(conversation_department_oid, department)

Update a department

Update a department 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_department_oid** | **Number**|  | 
 **department** | [**ConversationDepartment**](ConversationDepartment.md)| Department | 

### Return type

[**ConversationDepartmentResponse**](ConversationDepartmentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConversationEngagement

> ConversationEngagementResponse updateConversationEngagement(conversation_engagement_oid, engagement)

Update a engagement

Update a engagement 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_engagement_oid** | **Number**|  | 
 **engagement** | [**ConversationEngagement**](ConversationEngagement.md)| Engagement | 

### Return type

[**ConversationEngagementResponse**](ConversationEngagementResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConversationWebchatQueueStatus

> updateConversationWebchatQueueStatus(queue_name, status_request)

Update status within the queue

Update status within the queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **String**|  | 
 **status_request** | [**ConversationWebchatQueueStatusUpdateRequest**](ConversationWebchatQueueStatusUpdateRequest.md)| Status request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxAddress

> ConversationPbxAddressResponse updatePbxAddress(conversationPbxAddressUuid, pbx_address)

Update pbx address

Update a pbx address 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAddressUuid** | **String**|  | 
 **pbx_address** | [**ConversationPbxAddress**](ConversationPbxAddress.md)| Pbx Address | 

### Return type

[**ConversationPbxAddressResponse**](ConversationPbxAddressResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxAgent

> ConversationPbxAgentResponse updatePbxAgent(conversationPbxAgentUuid, pbx_agent)

Update pbx agent

Update a pbx agent 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAgentUuid** | **String**|  | 
 **pbx_agent** | [**ConversationPbxAgent**](ConversationPbxAgent.md)| Pbx Agent | 

### Return type

[**ConversationPbxAgentResponse**](ConversationPbxAgentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxAudio

> ConversationPbxAudioResponse updatePbxAudio(conversationPbxAudioUuid, pbx_audio)

Update pbx audio

Update a pbx audio 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 
 **pbx_audio** | [**ConversationPbxAudio**](ConversationPbxAudio.md)| Pbx Audio | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxCall

> ConversationPbxCallResponse updatePbxCall(callUuid, update_request)

Update pbx call record

Update the agent-authored fields (notes, finalize) on a PBX call record 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callUuid** | **String**|  | 
 **update_request** | [**ConversationPbxCallUpdateRequest**](ConversationPbxCallUpdateRequest.md)| Update Request | 

### Return type

[**ConversationPbxCallResponse**](ConversationPbxCallResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxClassOfService

> ConversationPbxClassOfServiceResponse updatePbxClassOfService(classOfServiceUuid, class_of_service)

Update pbx class of service

Update an existing class of service 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classOfServiceUuid** | **String**|  | 
 **class_of_service** | [**ConversationPbxClassOfService**](ConversationPbxClassOfService.md)| Class of service | 

### Return type

[**ConversationPbxClassOfServiceResponse**](ConversationPbxClassOfServiceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updatePbxDefaultTimezone

> ConversationPbxDefaultTimezoneResponse updatePbxDefaultTimezone(timezone_update)

Set the merchant default timezone

Persists the IANA timezone on the Config#&lt;merchant_id&gt;/default DDB record (creates on first PUT). 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timezone_update** | [**ConversationPbxDefaultTimezoneUpdateRequest**](ConversationPbxDefaultTimezoneUpdateRequest.md)| Timezone update | 

### Return type

[**ConversationPbxDefaultTimezoneResponse**](ConversationPbxDefaultTimezoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxHardwarePhone

> ConversationPbxHardwarePhoneResponse updatePbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone)

Update pbx hardware phone

Update a pbx hardware phone 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxHardwarePhoneUuid** | **String**|  | 
 **pbx_hardware_phone** | [**ConversationPbxHardwarePhone**](ConversationPbxHardwarePhone.md)| Pbx Hardware Phone | 

### Return type

[**ConversationPbxHardwarePhoneResponse**](ConversationPbxHardwarePhoneResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxMenu

> ConversationPbxMenuResponse updatePbxMenu(conversationPbxMenuUuid, pbx_menu)

Update pbx menu

Update a pbx menu 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxMenuUuid** | **String**|  | 
 **pbx_menu** | [**ConversationPbxMenu**](ConversationPbxMenu.md)| Pbx Menu | 

### Return type

[**ConversationPbxMenuResponse**](ConversationPbxMenuResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxPhoneNumber

> ConversationPbxPhoneNumberResponse updatePbxPhoneNumber(conversationPbxPhoneNumberUuid, pbx_phoneNumber)

Update pbx phoneNumber

Update a pbx phoneNumber 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxPhoneNumberUuid** | **String**|  | 
 **pbx_phoneNumber** | [**ConversationPbxPhoneNumber**](ConversationPbxPhoneNumber.md)| Pbx PhoneNumber | 

### Return type

[**ConversationPbxPhoneNumberResponse**](ConversationPbxPhoneNumberResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxQueue

> ConversationPbxQueueResponse updatePbxQueue(conversationPbxQueueUuid, pbx_queue)

Update pbx queue

Update a pbx queue 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxQueueUuid** | **String**|  | 
 **pbx_queue** | [**ConversationPbxQueue**](ConversationPbxQueue.md)| Pbx Queue | 

### Return type

[**ConversationPbxQueueResponse**](ConversationPbxQueueResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxTimeBased

> ConversationPbxTimeBasedResponse updatePbxTimeBased(conversationPbxTimeBasedUuid, pbx_timeBased)

Update pbx timeBased

Update a pbx timeBased 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeBasedUuid** | **String**|  | 
 **pbx_timeBased** | [**ConversationPbxTimeBased**](ConversationPbxTimeBased.md)| Pbx TimeBased | 

### Return type

[**ConversationPbxTimeBasedResponse**](ConversationPbxTimeBasedResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxTimeRange

> ConversationPbxTimeRangeResponse updatePbxTimeRange(conversationPbxTimeRangeUuid, pbx_timeRange)

Update pbx timeRange

Update a pbx timeRange 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxTimeRangeUuid** | **String**|  | 
 **pbx_timeRange** | [**ConversationPbxTimeRange**](ConversationPbxTimeRange.md)| Pbx TimeRange | 

### Return type

[**ConversationPbxTimeRangeResponse**](ConversationPbxTimeRangeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePbxVoicemailMailbox

> ConversationPbxVoicemailMailboxResponse updatePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, pbx_voicemailMailbox)

Update pbx voicemailMailbox

Update a pbx voicemailMailbox 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxVoicemailMailboxUuid** | **String**|  | 
 **pbx_voicemailMailbox** | [**ConversationPbxVoicemailMailbox**](ConversationPbxVoicemailMailbox.md)| Pbx VoicemailMailbox | 

### Return type

[**ConversationPbxVoicemailMailboxResponse**](ConversationPbxVoicemailMailboxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserPbxAudio

> ConversationPbxAudioResponse updateUserPbxAudio(conversationPbxAudioUuid, pbx_audio)

Update user pbx audio

Update a pbx audio file owned by the authenticated user 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationPbxAudioUuid** | **String**|  | 
 **pbx_audio** | [**ConversationPbxAudio**](ConversationPbxAudio.md)| Pbx Audio | 

### Return type

[**ConversationPbxAudioResponse**](ConversationPbxAudioResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVirtualAgentBudget

> ConversationVirtualAgentBudgetResponse updateVirtualAgentBudget(virtual_agent_budget)

Update virtual agent budget

Update virtual agent budget 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtual_agent_budget** | [**ConversationVirtualAgentBudget**](ConversationVirtualAgentBudget.md)| Virtual Agent Budget | 

### Return type

[**ConversationVirtualAgentBudgetResponse**](ConversationVirtualAgentBudgetResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVirtualAgentCapabilities

> ConversationVirtualAgentCapabilitiesResponse updateVirtualAgentCapabilities(virtual_agent_capabilities)

Update virtual agent capabilities

Update virtual agent capabilities 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtual_agent_capabilities** | [**ConversationVirtualAgentCapabilities**](ConversationVirtualAgentCapabilities.md)| Virtual Agent Capabilities | 

### Return type

[**ConversationVirtualAgentCapabilitiesResponse**](ConversationVirtualAgentCapabilitiesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

