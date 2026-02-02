# UltraCartRestApiV2.ConversationApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAgentProfileKnowledgeBaseDocument**](ConversationApi.md#deleteAgentProfileKnowledgeBaseDocument) | **DELETE** /conversation/agent/profiles/{user_id}/knowledge_base/{document_uuid} | Delete a knowledge base document
[**deleteAgentProfileMcp**](ConversationApi.md#deleteAgentProfileMcp) | **DELETE** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Delete an agent MCP server
[**deleteConversationCannedMessage**](ConversationApi.md#deleteConversationCannedMessage) | **DELETE** /conversation/canned_messages/{conversation_canned_message_oid} | Delete a conversation canned message
[**deleteDepartment**](ConversationApi.md#deleteDepartment) | **DELETE** /conversation/departments/{conversation_department_oid} | Delete a conversation department
[**deleteEngagement**](ConversationApi.md#deleteEngagement) | **DELETE** /conversation/engagements/{conversation_engagement_oid} | Delete a conversation engagement
[**deletePbxAddress**](ConversationApi.md#deletePbxAddress) | **DELETE** /conversation/pbx/address/{conversationPbxAddressUuid} | Delete pbx address
[**deletePbxAgentVoicemail**](ConversationApi.md#deletePbxAgentVoicemail) | **DELETE** /conversation/pbx/agent/voicemails/{recording_sid} | Delete Agent Voicemail
[**deletePbxAudio**](ConversationApi.md#deletePbxAudio) | **DELETE** /conversation/pbx/audio/{conversationPbxAudioUuid} | Delete pbx audio
[**deletePbxHardwarePhone**](ConversationApi.md#deletePbxHardwarePhone) | **DELETE** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Delete pbx hardware phone
[**deletePbxMenu**](ConversationApi.md#deletePbxMenu) | **DELETE** /conversation/pbx/menu/{conversationPbxMenuUuid} | Delete pbx menu
[**deletePbxPhoneNumber**](ConversationApi.md#deletePbxPhoneNumber) | **DELETE** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid} | Delete pbx phoneNumber
[**deletePbxQueue**](ConversationApi.md#deletePbxQueue) | **DELETE** /conversation/pbx/queue/{conversationPbxQueueUuid} | Delete pbx queue
[**deletePbxQueueVoicemail**](ConversationApi.md#deletePbxQueueVoicemail) | **DELETE** /conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid} | Delete Queue Voicemail
[**deletePbxTimeBased**](ConversationApi.md#deletePbxTimeBased) | **DELETE** /conversation/pbx/time_based/{conversationPbxTimeBasedUuid} | Delete pbx timeBased
[**deletePbxTimeRange**](ConversationApi.md#deletePbxTimeRange) | **DELETE** /conversation/pbx/time_range/{conversationPbxTimeRangeUuid} | Delete pbx timeRange
[**deletePbxVoicemailMailbox**](ConversationApi.md#deletePbxVoicemailMailbox) | **DELETE** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Delete pbx voicemailMailbox
[**getAgentKeepAlive**](ConversationApi.md#getAgentKeepAlive) | **GET** /conversation/agent/keepalive | Agent keep alive
[**getAgentProfile**](ConversationApi.md#getAgentProfile) | **GET** /conversation/agent/profile | Get agent profile
[**getAgentProfileKnowledgeBase**](ConversationApi.md#getAgentProfileKnowledgeBase) | **GET** /conversation/agent/profiles/{user_id}/knowledge_base | Get the list of knowledge base documents associated with this agent profile
[**getAgentProfileMcp**](ConversationApi.md#getAgentProfileMcp) | **GET** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Get an MCP server associated with this agent
[**getAgentProfileMcpTools**](ConversationApi.md#getAgentProfileMcpTools) | **GET** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid}/tools | Get the tools available from the MCP server
[**getAgentProfileMcps**](ConversationApi.md#getAgentProfileMcps) | **GET** /conversation/agent/profiles/{user_id}/mcps | Get the list of MCP servers associated with this agent
[**getAgentProfiles**](ConversationApi.md#getAgentProfiles) | **GET** /conversation/agent/profiles | Get agent profiles
[**getAgentWebsocketAuthorization**](ConversationApi.md#getAgentWebsocketAuthorization) | **PUT** /conversation/agent/auth | Get agent websocket authorization
[**getConversation**](ConversationApi.md#getConversation) | **GET** /conversation/conversations/{conversation_uuid} | Retrieve a conversation
[**getConversationCannedMessages**](ConversationApi.md#getConversationCannedMessages) | **GET** /conversation/canned_messages | Retrieve a list of canned messages ordered by short_code
[**getConversationContext**](ConversationApi.md#getConversationContext) | **PUT** /conversation/conversations/{conversation_uuid}/context | Get a webchat conversation context
[**getConversationDepartmentMemberList**](ConversationApi.md#getConversationDepartmentMemberList) | **GET** /conversation/department_members | Retrieve a list of possible department members
[**getConversationDepartments**](ConversationApi.md#getConversationDepartments) | **GET** /conversation/departments | Retrieve a list of departments ordered by name
[**getConversationEngagement**](ConversationApi.md#getConversationEngagement) | **GET** /conversation/engagements/{conversation_engagement_oid} | Retrieve an engagement
[**getConversationEngagements**](ConversationApi.md#getConversationEngagements) | **GET** /conversation/engagements | Retrieve a list of engagements ordered by name
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
[**getPbxHardwarePhone**](ConversationApi.md#getPbxHardwarePhone) | **GET** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Get pbx hardware phone
[**getPbxHardwarePhoneManufacturers**](ConversationApi.md#getPbxHardwarePhoneManufacturers) | **GET** /conversation/pbx/hardware_phone/manufacturers | Get pbx hardware phone manufacturers
[**getPbxHardwarePhones**](ConversationApi.md#getPbxHardwarePhones) | **GET** /conversation/pbx/hardware_phone | Get pbx hardware phones
[**getPbxMenu**](ConversationApi.md#getPbxMenu) | **GET** /conversation/pbx/menu/{conversationPbxMenuUuid} | Get pbx menu
[**getPbxMenus**](ConversationApi.md#getPbxMenus) | **GET** /conversation/pbx/menu | Get pbx menus
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
[**getPbxVoicemailMailbox**](ConversationApi.md#getPbxVoicemailMailbox) | **GET** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Get pbx voicemailMailbox
[**getPbxVoicemailMailboxes**](ConversationApi.md#getPbxVoicemailMailboxes) | **GET** /conversation/pbx/voicemail_mailbox | Get pbx voicemailMailboxes
[**getVirtualAgentBudget**](ConversationApi.md#getVirtualAgentBudget) | **GET** /conversation/virtualagent/budget | Get virtual agent budget
[**getVirtualAgentCapabilities**](ConversationApi.md#getVirtualAgentCapabilities) | **GET** /conversation/virtualagent/capabilities | Get virtual agent capabilities
[**insertAgentProfileKnowledgeBaseDocument**](ConversationApi.md#insertAgentProfileKnowledgeBaseDocument) | **POST** /conversation/agent/profiles/{user_id}/knowledge_base | Insert a knowledge base document
[**insertAgentProfileMcp**](ConversationApi.md#insertAgentProfileMcp) | **POST** /conversation/agent/profiles/{user_id}/mcps | Insert an agent MCP server
[**insertConversationCannedMessage**](ConversationApi.md#insertConversationCannedMessage) | **POST** /conversation/canned_messages | Insert a canned message
[**insertConversationDepartment**](ConversationApi.md#insertConversationDepartment) | **POST** /conversation/departments | Insert a department
[**insertConversationEngagement**](ConversationApi.md#insertConversationEngagement) | **POST** /conversation/engagements | Insert a engagement
[**insertPbxAddress**](ConversationApi.md#insertPbxAddress) | **POST** /conversation/pbx/address | Insert pbx address
[**insertPbxAudio**](ConversationApi.md#insertPbxAudio) | **POST** /conversation/pbx/audio | Insert pbx audio
[**insertPbxHardwarePhone**](ConversationApi.md#insertPbxHardwarePhone) | **POST** /conversation/pbx/hardware_phone | Insert pbx hardware phone
[**insertPbxMenu**](ConversationApi.md#insertPbxMenu) | **POST** /conversation/pbx/menu | Insert pbx menu
[**insertPbxQueue**](ConversationApi.md#insertPbxQueue) | **POST** /conversation/pbx/queue | Insert pbx queue
[**insertPbxTimeBased**](ConversationApi.md#insertPbxTimeBased) | **POST** /conversation/pbx/time_based | Insert pbx timeBased
[**insertPbxTimeRange**](ConversationApi.md#insertPbxTimeRange) | **POST** /conversation/pbx/time_range | Insert pbx timeRange
[**insertPbxVoicemailMailbox**](ConversationApi.md#insertPbxVoicemailMailbox) | **POST** /conversation/pbx/voicemail_mailbox | Insert pbx voicemailMailbox
[**joinConversation**](ConversationApi.md#joinConversation) | **PUT** /conversation/conversations/{conversation_uuid}/join | Join a conversation
[**leaveConversation**](ConversationApi.md#leaveConversation) | **DELETE** /conversation/conversations/{conversation_uuid}/leave | Leave a conversation
[**listenedPbxAgentVoicemail**](ConversationApi.md#listenedPbxAgentVoicemail) | **GET** /conversation/pbx/agent/voicemails/{recording_sid}/listened | Listened Agent Voicemail
[**listenedPbxQueueVoicemail**](ConversationApi.md#listenedPbxQueueVoicemail) | **GET** /conversation/pbx/queues/{queue_uuid}/voicemails/{recording_sid}/listened | Listened Queue Voicemail
[**markReadConversation**](ConversationApi.md#markReadConversation) | **PUT** /conversation/conversations/{conversation_uuid}/markread | Mark a conversation as read
[**protectPbxPhoneNumber**](ConversationApi.md#protectPbxPhoneNumber) | **PUT** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid}/protect | Protect pbx phoneNumber from deletion
[**purchasePbxPhoneNumber**](ConversationApi.md#purchasePbxPhoneNumber) | **POST** /conversation/pbx/phone_number | Purchase pbx phone number
[**regeneratePasswordForPbxHardwarePhone**](ConversationApi.md#regeneratePasswordForPbxHardwarePhone) | **POST** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid}/regenerate_password | Update pbx hardware phone
[**resetConversationPbxQueueStatistics**](ConversationApi.md#resetConversationPbxQueueStatistics) | **POST** /conversation/pbx/queues/{queue_uuid}/reset_statistics | reset statistics within the queue
[**searchConversationCannedMessages**](ConversationApi.md#searchConversationCannedMessages) | **POST** /conversation/canned_messages/search | Search for canned messages by short_code
[**searchPbxAvailablePhoneNumbers**](ConversationApi.md#searchPbxAvailablePhoneNumbers) | **GET** /conversation/pbx/phone_number/search | Search for available phone numbers
[**searchPbxCalls**](ConversationApi.md#searchPbxCalls) | **POST** /conversation/pbx/call/search | Search pbx call records
[**smsUnsubscribeConversation**](ConversationApi.md#smsUnsubscribeConversation) | **PUT** /conversation/conversations/{conversation_uuid}/sms_unsubscribe | Unsubscribe any SMS participants in this conversation
[**startConversation**](ConversationApi.md#startConversation) | **PUT** /conversation/conversations | Start a conversation
[**updateAgentProfile**](ConversationApi.md#updateAgentProfile) | **PUT** /conversation/agent/profile | Update agent profile
[**updateAgentProfileMcp**](ConversationApi.md#updateAgentProfileMcp) | **POST** /conversation/agent/profiles/{user_id}/mcps/{mcp_server_uuid} | Update an agent MCP server
[**updateConversationCannedMessage**](ConversationApi.md#updateConversationCannedMessage) | **PUT** /conversation/canned_messages/{conversation_canned_message_oid} | Update a canned message
[**updateConversationDepartment**](ConversationApi.md#updateConversationDepartment) | **PUT** /conversation/departments/{conversation_department_oid} | Update a department
[**updateConversationEngagement**](ConversationApi.md#updateConversationEngagement) | **PUT** /conversation/engagements/{conversation_engagement_oid} | Update a engagement
[**updateConversationWebchatQueueStatus**](ConversationApi.md#updateConversationWebchatQueueStatus) | **PUT** /conversation/conversations/queues/{queue_name}/status | Update status within the queue
[**updatePbxAddress**](ConversationApi.md#updatePbxAddress) | **PUT** /conversation/pbx/address/{conversationPbxAddressUuid} | Update pbx address
[**updatePbxAgent**](ConversationApi.md#updatePbxAgent) | **PUT** /conversation/pbx/agent/{conversationPbxAgentUuid} | Update pbx agent
[**updatePbxAudio**](ConversationApi.md#updatePbxAudio) | **PUT** /conversation/pbx/audio/{conversationPbxAudioUuid} | Update pbx audio
[**updatePbxHardwarePhone**](ConversationApi.md#updatePbxHardwarePhone) | **PUT** /conversation/pbx/hardware_phone/{conversationPbxHardwarePhoneUuid} | Update pbx hardware phone
[**updatePbxMenu**](ConversationApi.md#updatePbxMenu) | **PUT** /conversation/pbx/menu/{conversationPbxMenuUuid} | Update pbx menu
[**updatePbxPhoneNumber**](ConversationApi.md#updatePbxPhoneNumber) | **PUT** /conversation/pbx/phone_number/{conversationPbxPhoneNumberUuid} | Update pbx phoneNumber
[**updatePbxQueue**](ConversationApi.md#updatePbxQueue) | **PUT** /conversation/pbx/queue/{conversationPbxQueueUuid} | Update pbx queue
[**updatePbxTimeBased**](ConversationApi.md#updatePbxTimeBased) | **PUT** /conversation/pbx/time_based/{conversationPbxTimeBasedUuid} | Update pbx timeBased
[**updatePbxTimeRange**](ConversationApi.md#updatePbxTimeRange) | **PUT** /conversation/pbx/time_range/{conversationPbxTimeRangeUuid} | Update pbx timeRange
[**updatePbxVoicemailMailbox**](ConversationApi.md#updatePbxVoicemailMailbox) | **PUT** /conversation/pbx/voicemail_mailbox/{conversationPbxVoicemailMailboxUuid} | Update pbx voicemailMailbox
[**updateVirtualAgentBudget**](ConversationApi.md#updateVirtualAgentBudget) | **PUT** /conversation/virtualagent/budget | Update virtual agent budget
[**updateVirtualAgentCapabilities**](ConversationApi.md#updateVirtualAgentCapabilities) | **PUT** /conversation/virtualagent/capabilities | Update virtual agent capabilities



## deleteAgentProfileKnowledgeBaseDocument

> ConversationDeleteKnowledgeBaseDocumentResponse deleteAgentProfileKnowledgeBaseDocument(user_id, document_uuid)

Delete a knowledge base document

Delete a knowledge base document 


### Example

<!-- UC_START_EXAMPLE deleteAgentProfileKnowledgeBaseDocument -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let document_uuid = "document_uuid_example"; // String | 
apiInstance.deleteAgentProfileKnowledgeBaseDocument(user_id, document_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deleteAgentProfileKnowledgeBaseDocument -->

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

<!-- UC_START_EXAMPLE deleteAgentProfileMcp -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let mcp_server_uuid = "mcp_server_uuid_example"; // String | 
apiInstance.deleteAgentProfileMcp(user_id, mcp_server_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteAgentProfileMcp -->

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


## deleteConversationCannedMessage

> deleteConversationCannedMessage(conversation_canned_message_oid)

Delete a conversation canned message

Delete a conversation canned message 


### Example

<!-- UC_START_EXAMPLE deleteConversationCannedMessage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_canned_message_oid = 56; // Number | 
apiInstance.deleteConversationCannedMessage(conversation_canned_message_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteConversationCannedMessage -->

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

<!-- UC_START_EXAMPLE deleteDepartment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_department_oid = 56; // Number | 
apiInstance.deleteDepartment(conversation_department_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteDepartment -->

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

<!-- UC_START_EXAMPLE deleteEngagement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_engagement_oid = 56; // Number | 
apiInstance.deleteEngagement(conversation_engagement_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteEngagement -->

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

<!-- UC_START_EXAMPLE deletePbxAddress -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAddressUuid = "conversationPbxAddressUuid_example"; // String | 
apiInstance.deletePbxAddress(conversationPbxAddressUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxAddress -->

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

<!-- UC_START_EXAMPLE deletePbxAgentVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let recording_sid = "recording_sid_example"; // String | 
apiInstance.deletePbxAgentVoicemail(recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deletePbxAgentVoicemail -->

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

<!-- UC_START_EXAMPLE deletePbxAudio -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAudioUuid = "conversationPbxAudioUuid_example"; // String | 
apiInstance.deletePbxAudio(conversationPbxAudioUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxAudio -->

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


## deletePbxHardwarePhone

> ConversationPbxHardwarePhoneResponse deletePbxHardwarePhone(conversationPbxHardwarePhoneUuid)

Delete pbx hardware phone

Delete a pbx hardware phone 


### Example

<!-- UC_START_EXAMPLE deletePbxHardwarePhone -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxHardwarePhoneUuid = "conversationPbxHardwarePhoneUuid_example"; // String | 
apiInstance.deletePbxHardwarePhone(conversationPbxHardwarePhoneUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxHardwarePhone -->

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

<!-- UC_START_EXAMPLE deletePbxMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxMenuUuid = "conversationPbxMenuUuid_example"; // String | 
apiInstance.deletePbxMenu(conversationPbxMenuUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxMenu -->

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

<!-- UC_START_EXAMPLE deletePbxPhoneNumber -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxPhoneNumberUuid = "conversationPbxPhoneNumberUuid_example"; // String | 
apiInstance.deletePbxPhoneNumber(conversationPbxPhoneNumberUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deletePbxPhoneNumber -->

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

<!-- UC_START_EXAMPLE deletePbxQueue -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxQueueUuid = "conversationPbxQueueUuid_example"; // String | 
apiInstance.deletePbxQueue(conversationPbxQueueUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxQueue -->

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

<!-- UC_START_EXAMPLE deletePbxQueueVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_uuid = "queue_uuid_example"; // String | 
let recording_sid = "recording_sid_example"; // String | 
apiInstance.deletePbxQueueVoicemail(queue_uuid, recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deletePbxQueueVoicemail -->

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

<!-- UC_START_EXAMPLE deletePbxTimeBased -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeBasedUuid = "conversationPbxTimeBasedUuid_example"; // String | 
apiInstance.deletePbxTimeBased(conversationPbxTimeBasedUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxTimeBased -->

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

<!-- UC_START_EXAMPLE deletePbxTimeRange -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeRangeUuid = "conversationPbxTimeRangeUuid_example"; // String | 
apiInstance.deletePbxTimeRange(conversationPbxTimeRangeUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxTimeRange -->

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

<!-- UC_START_EXAMPLE deletePbxVoicemailMailbox -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxVoicemailMailboxUuid = "conversationPbxVoicemailMailboxUuid_example"; // String | 
apiInstance.deletePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE deletePbxVoicemailMailbox -->

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


## getAgentKeepAlive

> getAgentKeepAlive()

Agent keep alive

Called periodically by the conversation API to keep the session alive. 


### Example

<!-- UC_START_EXAMPLE getAgentKeepAlive -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getAgentKeepAlive((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE getAgentKeepAlive -->

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

<!-- UC_START_EXAMPLE getAgentProfile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getAgentProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfile -->

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

<!-- UC_START_EXAMPLE getAgentProfileKnowledgeBase -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
apiInstance.getAgentProfileKnowledgeBase(user_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfileKnowledgeBase -->

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

<!-- UC_START_EXAMPLE getAgentProfileMcp -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let mcp_server_uuid = "mcp_server_uuid_example"; // String | 
apiInstance.getAgentProfileMcp(user_id, mcp_server_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfileMcp -->

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

<!-- UC_START_EXAMPLE getAgentProfileMcpTools -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let mcp_server_uuid = "mcp_server_uuid_example"; // String | 
apiInstance.getAgentProfileMcpTools(user_id, mcp_server_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfileMcpTools -->

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

<!-- UC_START_EXAMPLE getAgentProfileMcps -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
apiInstance.getAgentProfileMcps(user_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfileMcps -->

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

<!-- UC_START_EXAMPLE getAgentProfiles -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getAgentProfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentProfiles -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationAgentProfilesResponse**](ConversationAgentProfilesResponse.md)

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

<!-- UC_START_EXAMPLE getAgentWebsocketAuthorization -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getAgentWebsocketAuthorization((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getAgentWebsocketAuthorization -->

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

<!-- UC_START_EXAMPLE getConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
let opts = {
  'limit': 56 // Number | 
};
apiInstance.getConversation(conversation_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversation -->

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

<!-- UC_START_EXAMPLE getConversationCannedMessages -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationCannedMessages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationCannedMessages -->

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

<!-- UC_START_EXAMPLE getConversationContext -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
apiInstance.getConversationContext(conversation_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationContext -->

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

<!-- UC_START_EXAMPLE getConversationDepartmentMemberList -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationDepartmentMemberList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationDepartmentMemberList -->

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

<!-- UC_START_EXAMPLE getConversationDepartments -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationDepartments((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationDepartments -->

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

<!-- UC_START_EXAMPLE getConversationEngagement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_engagement_oid = 56; // Number | 
apiInstance.getConversationEngagement(conversation_engagement_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationEngagement -->

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

<!-- UC_START_EXAMPLE getConversationEngagements -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationEngagements((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationEngagements -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationEngagementsResponse**](ConversationEngagementsResponse.md)

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

<!-- UC_START_EXAMPLE getConversationKnowledgeBaseDocumentUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let extension = "extension_example"; // String | 
apiInstance.getConversationKnowledgeBaseDocumentUploadUrl(user_id, extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationKnowledgeBaseDocumentUploadUrl -->

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

<!-- UC_START_EXAMPLE getConversationMessages -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
let since = 789; // Number | 
let opts = {
  'limit': 56 // Number | 
};
apiInstance.getConversationMessages(conversation_uuid, since, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationMessages -->

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

<!-- UC_START_EXAMPLE getConversationMultimediaUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let extension = "extension_example"; // String | 
apiInstance.getConversationMultimediaUploadUrl(extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationMultimediaUploadUrl -->

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

<!-- UC_START_EXAMPLE getConversationPbxAudioUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let extension = "extension_example"; // String | 
apiInstance.getConversationPbxAudioUploadUrl(extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationPbxAudioUploadUrl -->

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

<!-- UC_START_EXAMPLE getConversationPbxCustomerSnapshot -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_customer_snapshot_request = new UltraCartRestApiV2.ConversationPbxCustomerSnapshotRequest(); // ConversationPbxCustomerSnapshotRequest | Conversation pbx customer snapshot request
apiInstance.getConversationPbxCustomerSnapshot(pbx_customer_snapshot_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationPbxCustomerSnapshot -->

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

<!-- UC_START_EXAMPLE getConversationPermissions -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationPermissions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationPermissions -->

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

<!-- UC_START_EXAMPLE getConversationWebchatQueueStatuses -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getConversationWebchatQueueStatuses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationWebchatQueueStatuses -->

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

<!-- UC_START_EXAMPLE getConversations -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  'medium': "medium_example", // String | 
  'before': "before_example", // String | 
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0 // Number | Pagination of the record set.  Offset is a zero based index.
};
apiInstance.getConversations(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversations -->

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

<!-- UC_START_EXAMPLE getConversationsAutocomplete -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let autocomplete_request = new UltraCartRestApiV2.ConversationAutocompleteRequest(); // ConversationAutocompleteRequest | Autocomplete Request
apiInstance.getConversationsAutocomplete(autocomplete_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationsAutocomplete -->

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

<!-- UC_START_EXAMPLE getConversationsSearch -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let search_request = new UltraCartRestApiV2.ConversationSearchRequest(); // ConversationSearchRequest | Search Request
apiInstance.getConversationsSearch(search_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getConversationsSearch -->

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

<!-- UC_START_EXAMPLE getLocationsForEngagement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getLocationsForEngagement((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getLocationsForEngagement -->

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

<!-- UC_START_EXAMPLE getPbxAddress -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAddressUuid = "conversationPbxAddressUuid_example"; // String | 
apiInstance.getPbxAddress(conversationPbxAddressUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAddress -->

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

<!-- UC_START_EXAMPLE getPbxAddresses -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxAddresses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAddresses -->

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

<!-- UC_START_EXAMPLE getPbxAgent -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAgentUuid = "conversationPbxAgentUuid_example"; // String | 
apiInstance.getPbxAgent(conversationPbxAgentUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAgent -->

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

<!-- UC_START_EXAMPLE getPbxAgentVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let recording_sid = "recording_sid_example"; // String | 
apiInstance.getPbxAgentVoicemail(recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAgentVoicemail -->

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

<!-- UC_START_EXAMPLE getPbxAgentVoicemails -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxAgentVoicemails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAgentVoicemails -->

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

<!-- UC_START_EXAMPLE getPbxAgents -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxAgents((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAgents -->

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

<!-- UC_START_EXAMPLE getPbxAudio -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAudioUuid = "conversationPbxAudioUuid_example"; // String | 
apiInstance.getPbxAudio(conversationPbxAudioUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAudio -->

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

<!-- UC_START_EXAMPLE getPbxAudioUsage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAudioUuid = "conversationPbxAudioUuid_example"; // String | 
apiInstance.getPbxAudioUsage(conversationPbxAudioUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAudioUsage -->

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

<!-- UC_START_EXAMPLE getPbxAudios -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxAudios((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxAudios -->

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

<!-- UC_START_EXAMPLE getPbxCall -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let callUuid = "callUuid_example"; // String | 
apiInstance.getPbxCall(callUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxCall -->

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


## getPbxHardwarePhone

> ConversationPbxHardwarePhoneResponse getPbxHardwarePhone(conversationPbxHardwarePhoneUuid)

Get pbx hardware phone

Retrieve a pbx hardware phone 


### Example

<!-- UC_START_EXAMPLE getPbxHardwarePhone -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxHardwarePhoneUuid = "conversationPbxHardwarePhoneUuid_example"; // String | 
apiInstance.getPbxHardwarePhone(conversationPbxHardwarePhoneUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxHardwarePhone -->

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

<!-- UC_START_EXAMPLE getPbxHardwarePhoneManufacturers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxHardwarePhoneManufacturers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxHardwarePhoneManufacturers -->

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

<!-- UC_START_EXAMPLE getPbxHardwarePhones -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxHardwarePhones((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxHardwarePhones -->

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

<!-- UC_START_EXAMPLE getPbxMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxMenuUuid = "conversationPbxMenuUuid_example"; // String | 
apiInstance.getPbxMenu(conversationPbxMenuUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxMenu -->

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

<!-- UC_START_EXAMPLE getPbxMenus -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxMenus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxMenus -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxMenusResponse**](ConversationPbxMenusResponse.md)

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

<!-- UC_START_EXAMPLE getPbxPhoneNumber -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxPhoneNumberUuid = "conversationPbxPhoneNumberUuid_example"; // String | 
apiInstance.getPbxPhoneNumber(conversationPbxPhoneNumberUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxPhoneNumber -->

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

<!-- UC_START_EXAMPLE getPbxPhoneNumbers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxPhoneNumbers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxPhoneNumbers -->

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

<!-- UC_START_EXAMPLE getPbxQueue -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxQueueUuid = "conversationPbxQueueUuid_example"; // String | 
apiInstance.getPbxQueue(conversationPbxQueueUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxQueue -->

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

<!-- UC_START_EXAMPLE getPbxQueueVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_uuid = "queue_uuid_example"; // String | 
let recording_sid = "recording_sid_example"; // String | 
apiInstance.getPbxQueueVoicemail(queue_uuid, recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxQueueVoicemail -->

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

<!-- UC_START_EXAMPLE getPbxQueueVoicemails -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_uuid = "queue_uuid_example"; // String | 
apiInstance.getPbxQueueVoicemails(queue_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxQueueVoicemails -->

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

<!-- UC_START_EXAMPLE getPbxQueues -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxQueues((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxQueues -->

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

<!-- UC_START_EXAMPLE getPbxTimeBased -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeBasedUuid = "conversationPbxTimeBasedUuid_example"; // String | 
apiInstance.getPbxTimeBased(conversationPbxTimeBasedUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxTimeBased -->

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

<!-- UC_START_EXAMPLE getPbxTimeBaseds -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxTimeBaseds((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxTimeBaseds -->

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

<!-- UC_START_EXAMPLE getPbxTimeRange -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeRangeUuid = "conversationPbxTimeRangeUuid_example"; // String | 
apiInstance.getPbxTimeRange(conversationPbxTimeRangeUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxTimeRange -->

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

<!-- UC_START_EXAMPLE getPbxTimeRanges -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxTimeRanges((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxTimeRanges -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxTimeRangesResponse**](ConversationPbxTimeRangesResponse.md)

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

<!-- UC_START_EXAMPLE getPbxVoicemailMailbox -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxVoicemailMailboxUuid = "conversationPbxVoicemailMailboxUuid_example"; // String | 
apiInstance.getPbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxVoicemailMailbox -->

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

<!-- UC_START_EXAMPLE getPbxVoicemailMailboxes -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getPbxVoicemailMailboxes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getPbxVoicemailMailboxes -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationPbxVoicemailMailboxesResponse**](ConversationPbxVoicemailMailboxesResponse.md)

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

<!-- UC_START_EXAMPLE getVirtualAgentBudget -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getVirtualAgentBudget((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getVirtualAgentBudget -->

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

<!-- UC_START_EXAMPLE getVirtualAgentCapabilities -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getVirtualAgentCapabilities((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getVirtualAgentCapabilities -->

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

<!-- UC_START_EXAMPLE insertAgentProfileKnowledgeBaseDocument -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let knowledge_base_document_request = new UltraCartRestApiV2.ConversationInsertKnowledgeBaseDocumentRequest(); // ConversationInsertKnowledgeBaseDocumentRequest | Insert request
apiInstance.insertAgentProfileKnowledgeBaseDocument(user_id, knowledge_base_document_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertAgentProfileKnowledgeBaseDocument -->

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

<!-- UC_START_EXAMPLE insertAgentProfileMcp -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let mcp_server = new UltraCartRestApiV2.ConversationMcpServer(); // ConversationMcpServer | MCP Server
apiInstance.insertAgentProfileMcp(user_id, mcp_server, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertAgentProfileMcp -->

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


## insertConversationCannedMessage

> ConversationCannedMessageResponse insertConversationCannedMessage(canned_message)

Insert a canned message

Insert a canned message 


### Example

<!-- UC_START_EXAMPLE insertConversationCannedMessage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let canned_message = new UltraCartRestApiV2.ConversationCannedMessage(); // ConversationCannedMessage | Canned message
apiInstance.insertConversationCannedMessage(canned_message, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertConversationCannedMessage -->

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

<!-- UC_START_EXAMPLE insertConversationDepartment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let department = new UltraCartRestApiV2.ConversationDepartment(); // ConversationDepartment | Department
apiInstance.insertConversationDepartment(department, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertConversationDepartment -->

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

<!-- UC_START_EXAMPLE insertConversationEngagement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let engagement = new UltraCartRestApiV2.ConversationEngagement(); // ConversationEngagement | Engagement
apiInstance.insertConversationEngagement(engagement, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertConversationEngagement -->

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

<!-- UC_START_EXAMPLE insertPbxAddress -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_address = new UltraCartRestApiV2.ConversationPbxAddress(); // ConversationPbxAddress | Pbx Address
apiInstance.insertPbxAddress(pbx_address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxAddress -->

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

<!-- UC_START_EXAMPLE insertPbxAudio -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_audio = new UltraCartRestApiV2.ConversationPbxAudio(); // ConversationPbxAudio | Pbx Audio
apiInstance.insertPbxAudio(pbx_audio, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxAudio -->

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


## insertPbxHardwarePhone

> ConversationPbxHardwarePhoneResponse insertPbxHardwarePhone(pbx_hardware_phone)

Insert pbx hardware phone

Insert a pbx hardware phone 


### Example

<!-- UC_START_EXAMPLE insertPbxHardwarePhone -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_hardware_phone = new UltraCartRestApiV2.ConversationPbxHardwarePhone(); // ConversationPbxHardwarePhone | Pbx Hardware Phone
apiInstance.insertPbxHardwarePhone(pbx_hardware_phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxHardwarePhone -->

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

<!-- UC_START_EXAMPLE insertPbxMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_menu = new UltraCartRestApiV2.ConversationPbxMenu(); // ConversationPbxMenu | Pbx Menu
apiInstance.insertPbxMenu(pbx_menu, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxMenu -->

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

<!-- UC_START_EXAMPLE insertPbxQueue -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_queue = new UltraCartRestApiV2.ConversationPbxQueue(); // ConversationPbxQueue | Pbx Queue
apiInstance.insertPbxQueue(pbx_queue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxQueue -->

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

<!-- UC_START_EXAMPLE insertPbxTimeBased -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_timeBased = new UltraCartRestApiV2.ConversationPbxTimeBased(); // ConversationPbxTimeBased | Pbx TimeBased
apiInstance.insertPbxTimeBased(pbx_timeBased, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxTimeBased -->

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

<!-- UC_START_EXAMPLE insertPbxTimeRange -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_timeRange = new UltraCartRestApiV2.ConversationPbxTimeRange(); // ConversationPbxTimeRange | Pbx TimeRange
apiInstance.insertPbxTimeRange(pbx_timeRange, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxTimeRange -->

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

<!-- UC_START_EXAMPLE insertPbxVoicemailMailbox -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let pbx_voicemailMailbox = new UltraCartRestApiV2.ConversationPbxVoicemailMailbox(); // ConversationPbxVoicemailMailbox | Pbx VoicemailMailbox
apiInstance.insertPbxVoicemailMailbox(pbx_voicemailMailbox, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertPbxVoicemailMailbox -->

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


## joinConversation

> joinConversation(conversation_uuid, opts)

Join a conversation

Join a conversation 


### Example

<!-- UC_START_EXAMPLE joinConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
let opts = {
  'join_request': new UltraCartRestApiV2.ConversationJoinRequest() // ConversationJoinRequest | Join request
};
apiInstance.joinConversation(conversation_uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE joinConversation -->

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

<!-- UC_START_EXAMPLE leaveConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
apiInstance.leaveConversation(conversation_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE leaveConversation -->

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

<!-- UC_START_EXAMPLE listenedPbxAgentVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let recording_sid = "recording_sid_example"; // String | 
apiInstance.listenedPbxAgentVoicemail(recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE listenedPbxAgentVoicemail -->

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

<!-- UC_START_EXAMPLE listenedPbxQueueVoicemail -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_uuid = "queue_uuid_example"; // String | 
let recording_sid = "recording_sid_example"; // String | 
apiInstance.listenedPbxQueueVoicemail(queue_uuid, recording_sid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE listenedPbxQueueVoicemail -->

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

<!-- UC_START_EXAMPLE markReadConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
apiInstance.markReadConversation(conversation_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE markReadConversation -->

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

<!-- UC_START_EXAMPLE protectPbxPhoneNumber -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxPhoneNumberUuid = "conversationPbxPhoneNumberUuid_example"; // String | 
apiInstance.protectPbxPhoneNumber(conversationPbxPhoneNumberUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE protectPbxPhoneNumber -->

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

<!-- UC_START_EXAMPLE purchasePbxPhoneNumber -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let phone_number_purchase_request = new UltraCartRestApiV2.ConversationPbxPhoneNumberPurchaseRequest(); // ConversationPbxPhoneNumberPurchaseRequest | Phone number purchase request
apiInstance.purchasePbxPhoneNumber(phone_number_purchase_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE purchasePbxPhoneNumber -->

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

<!-- UC_START_EXAMPLE regeneratePasswordForPbxHardwarePhone -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxHardwarePhoneUuid = "conversationPbxHardwarePhoneUuid_example"; // String | 
let pbx_hardware_phone = new UltraCartRestApiV2.ConversationPbxHardwarePhone(); // ConversationPbxHardwarePhone | Pbx Hardware Phone
apiInstance.regeneratePasswordForPbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE regeneratePasswordForPbxHardwarePhone -->

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

<!-- UC_START_EXAMPLE resetConversationPbxQueueStatistics -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_uuid = "queue_uuid_example"; // String | 
apiInstance.resetConversationPbxQueueStatistics(queue_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE resetConversationPbxQueueStatistics -->

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


## searchConversationCannedMessages

> ConversationCannedMessagesResponse searchConversationCannedMessages(search_request)

Search for canned messages by short_code

Search for canned messages by short_code 


### Example

<!-- UC_START_EXAMPLE searchConversationCannedMessages -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let search_request = new UltraCartRestApiV2.ConversationCannedMessagesSearch(); // ConversationCannedMessagesSearch | Search request
apiInstance.searchConversationCannedMessages(search_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchConversationCannedMessages -->

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

<!-- UC_START_EXAMPLE searchPbxAvailablePhoneNumbers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let country = "country_example"; // String | ISO country code (e.g., US, CA, GB)
let opts = {
  'area_code': "area_code_example", // String | Area code filter (e.g., 614)
  'contains': "contains_example", // String | Pattern to match (e.g., 555, *PIZZA)
  'sms_enabled': true, // Boolean | Filter for SMS capability
  'voice_enabled': true, // Boolean | Filter for voice capability
  'type': "type_example", // String | Phone number type
  'limit': 56 // Number | Max results (default 20, max 100)
};
apiInstance.searchPbxAvailablePhoneNumbers(country, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchPbxAvailablePhoneNumbers -->

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

<!-- UC_START_EXAMPLE searchPbxCalls -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let search_request = new UltraCartRestApiV2.ConversationPbxCallSearchRequest(); // ConversationPbxCallSearchRequest | Search Request
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the calls.
};
apiInstance.searchPbxCalls(search_request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE searchPbxCalls -->

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

<!-- UC_START_EXAMPLE smsUnsubscribeConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_uuid = "conversation_uuid_example"; // String | 
apiInstance.smsUnsubscribeConversation(conversation_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE smsUnsubscribeConversation -->

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


## startConversation

> ConversationStartResponse startConversation(start_request)

Start a conversation

Start a new conversation 


### Example

<!-- UC_START_EXAMPLE startConversation -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let start_request = new UltraCartRestApiV2.ConversationStartRequest(); // ConversationStartRequest | Start request
apiInstance.startConversation(start_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE startConversation -->

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

<!-- UC_START_EXAMPLE updateAgentProfile -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let profile_request = new UltraCartRestApiV2.ConversationAgentProfile(); // ConversationAgentProfile | Profile request
apiInstance.updateAgentProfile(profile_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateAgentProfile -->

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

<!-- UC_START_EXAMPLE updateAgentProfileMcp -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let user_id = 56; // Number | 
let mcp_server_uuid = "mcp_server_uuid_example"; // String | 
let mcp_server = new UltraCartRestApiV2.ConversationMcpServer(); // ConversationMcpServer | MCP Server
apiInstance.updateAgentProfileMcp(user_id, mcp_server_uuid, mcp_server, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateAgentProfileMcp -->

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


## updateConversationCannedMessage

> ConversationCannedMessageResponse updateConversationCannedMessage(conversation_canned_message_oid, canned_message)

Update a canned message

Update a canned message 


### Example

<!-- UC_START_EXAMPLE updateConversationCannedMessage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_canned_message_oid = 56; // Number | 
let canned_message = new UltraCartRestApiV2.ConversationCannedMessage(); // ConversationCannedMessage | Canned message
apiInstance.updateConversationCannedMessage(conversation_canned_message_oid, canned_message, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateConversationCannedMessage -->

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

<!-- UC_START_EXAMPLE updateConversationDepartment -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_department_oid = 56; // Number | 
let department = new UltraCartRestApiV2.ConversationDepartment(); // ConversationDepartment | Department
apiInstance.updateConversationDepartment(conversation_department_oid, department, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateConversationDepartment -->

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

<!-- UC_START_EXAMPLE updateConversationEngagement -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversation_engagement_oid = 56; // Number | 
let engagement = new UltraCartRestApiV2.ConversationEngagement(); // ConversationEngagement | Engagement
apiInstance.updateConversationEngagement(conversation_engagement_oid, engagement, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateConversationEngagement -->

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

<!-- UC_START_EXAMPLE updateConversationWebchatQueueStatus -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let queue_name = "queue_name_example"; // String | 
let status_request = new UltraCartRestApiV2.ConversationWebchatQueueStatusUpdateRequest(); // ConversationWebchatQueueStatusUpdateRequest | Status request
apiInstance.updateConversationWebchatQueueStatus(queue_name, status_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE updateConversationWebchatQueueStatus -->

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

<!-- UC_START_EXAMPLE updatePbxAddress -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAddressUuid = "conversationPbxAddressUuid_example"; // String | 
let pbx_address = new UltraCartRestApiV2.ConversationPbxAddress(); // ConversationPbxAddress | Pbx Address
apiInstance.updatePbxAddress(conversationPbxAddressUuid, pbx_address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxAddress -->

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

<!-- UC_START_EXAMPLE updatePbxAgent -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAgentUuid = "conversationPbxAgentUuid_example"; // String | 
let pbx_agent = new UltraCartRestApiV2.ConversationPbxAgent(); // ConversationPbxAgent | Pbx Agent
apiInstance.updatePbxAgent(conversationPbxAgentUuid, pbx_agent, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxAgent -->

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

<!-- UC_START_EXAMPLE updatePbxAudio -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxAudioUuid = "conversationPbxAudioUuid_example"; // String | 
let pbx_audio = new UltraCartRestApiV2.ConversationPbxAudio(); // ConversationPbxAudio | Pbx Audio
apiInstance.updatePbxAudio(conversationPbxAudioUuid, pbx_audio, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxAudio -->

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


## updatePbxHardwarePhone

> ConversationPbxHardwarePhoneResponse updatePbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone)

Update pbx hardware phone

Update a pbx hardware phone 


### Example

<!-- UC_START_EXAMPLE updatePbxHardwarePhone -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxHardwarePhoneUuid = "conversationPbxHardwarePhoneUuid_example"; // String | 
let pbx_hardware_phone = new UltraCartRestApiV2.ConversationPbxHardwarePhone(); // ConversationPbxHardwarePhone | Pbx Hardware Phone
apiInstance.updatePbxHardwarePhone(conversationPbxHardwarePhoneUuid, pbx_hardware_phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxHardwarePhone -->

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

<!-- UC_START_EXAMPLE updatePbxMenu -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxMenuUuid = "conversationPbxMenuUuid_example"; // String | 
let pbx_menu = new UltraCartRestApiV2.ConversationPbxMenu(); // ConversationPbxMenu | Pbx Menu
apiInstance.updatePbxMenu(conversationPbxMenuUuid, pbx_menu, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxMenu -->

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

<!-- UC_START_EXAMPLE updatePbxPhoneNumber -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxPhoneNumberUuid = "conversationPbxPhoneNumberUuid_example"; // String | 
let pbx_phoneNumber = new UltraCartRestApiV2.ConversationPbxPhoneNumber(); // ConversationPbxPhoneNumber | Pbx PhoneNumber
apiInstance.updatePbxPhoneNumber(conversationPbxPhoneNumberUuid, pbx_phoneNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxPhoneNumber -->

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

<!-- UC_START_EXAMPLE updatePbxQueue -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxQueueUuid = "conversationPbxQueueUuid_example"; // String | 
let pbx_queue = new UltraCartRestApiV2.ConversationPbxQueue(); // ConversationPbxQueue | Pbx Queue
apiInstance.updatePbxQueue(conversationPbxQueueUuid, pbx_queue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxQueue -->

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

<!-- UC_START_EXAMPLE updatePbxTimeBased -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeBasedUuid = "conversationPbxTimeBasedUuid_example"; // String | 
let pbx_timeBased = new UltraCartRestApiV2.ConversationPbxTimeBased(); // ConversationPbxTimeBased | Pbx TimeBased
apiInstance.updatePbxTimeBased(conversationPbxTimeBasedUuid, pbx_timeBased, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxTimeBased -->

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

<!-- UC_START_EXAMPLE updatePbxTimeRange -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxTimeRangeUuid = "conversationPbxTimeRangeUuid_example"; // String | 
let pbx_timeRange = new UltraCartRestApiV2.ConversationPbxTimeRange(); // ConversationPbxTimeRange | Pbx TimeRange
apiInstance.updatePbxTimeRange(conversationPbxTimeRangeUuid, pbx_timeRange, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxTimeRange -->

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

<!-- UC_START_EXAMPLE updatePbxVoicemailMailbox -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let conversationPbxVoicemailMailboxUuid = "conversationPbxVoicemailMailboxUuid_example"; // String | 
let pbx_voicemailMailbox = new UltraCartRestApiV2.ConversationPbxVoicemailMailbox(); // ConversationPbxVoicemailMailbox | Pbx VoicemailMailbox
apiInstance.updatePbxVoicemailMailbox(conversationPbxVoicemailMailboxUuid, pbx_voicemailMailbox, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updatePbxVoicemailMailbox -->

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


## updateVirtualAgentBudget

> ConversationVirtualAgentBudgetResponse updateVirtualAgentBudget(virtual_agent_budget)

Update virtual agent budget

Update virtual agent budget 


### Example

<!-- UC_START_EXAMPLE updateVirtualAgentBudget -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let virtual_agent_budget = new UltraCartRestApiV2.ConversationVirtualAgentBudget(); // ConversationVirtualAgentBudget | Virtual Agent Budget
apiInstance.updateVirtualAgentBudget(virtual_agent_budget, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateVirtualAgentBudget -->

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

<!-- UC_START_EXAMPLE updateVirtualAgentCapabilities -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let virtual_agent_capabilities = new UltraCartRestApiV2.ConversationVirtualAgentCapabilities(); // ConversationVirtualAgentCapabilities | Virtual Agent Capabilities
apiInstance.updateVirtualAgentCapabilities(virtual_agent_capabilities, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateVirtualAgentCapabilities -->

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

