# UltraCartRestApiV2.ConversationAgentTestSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_id** | **String** | Cart established for this session, soft logged in as the chosen customer profile.  Real, and anything the agent adds to it persists. | [optional] 
**conversation_webchat_queue_uuid** | **String** | Queue entry created for this session | [optional] 
**customer_auth** | [**ConversationCustomerAuth**](ConversationCustomerAuth.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**storefront_host_name** | **String** | Storefront the session is running against | [optional] 
**success** | **Boolean** |  | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


