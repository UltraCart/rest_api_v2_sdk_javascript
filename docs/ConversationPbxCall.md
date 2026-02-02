# UltraCartRestApiV2.ConversationPbxCall

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sid** | **String** | Twilio account SID | [optional] 
**agents** | [**[ConversationPbxCallAgent]**](ConversationPbxCallAgent.md) | List of agents who participated in this call | [optional] 
**ai_agent_engagements** | [**[ConversationPbxCallAiEngagement]**](ConversationPbxCallAiEngagement.md) | List of AI agent engagements during the call | [optional] 
**call_sid** | **String** | Twilio call SID for the primary (customer) call leg | [optional] 
**call_uuid** | **String** | Unique identifier for this call record | [optional] 
**caller** | [**ConversationPbxCallCaller**](ConversationPbxCallCaller.md) |  | [optional] 
**conference_sid** | **String** | Twilio conference SID if this call used conferencing | [optional] 
**created_at_dts** | **String** | Timestamp when the call record was created | [optional] 
**customer_name** | **String** | Customer name associated with this call | [optional] 
**customer_profile_oid** | **String** | UltraCart customer profile OID if the caller was matched to a customer | [optional] 
**disposition** | **String** | Call disposition describing how the call ended | [optional] 
**email** | **String** | Email address of the caller if known | [optional] 
**financial** | [**ConversationPbxCallFinancial**](ConversationPbxCallFinancial.md) |  | [optional] 
**holds** | [**[ConversationPbxCallHold]**](ConversationPbxCallHold.md) | List of hold events during the call | [optional] 
**merchant_id** | **String** | Merchant identifier | [optional] 
**recording_sids** | **[String]** | List of all Twilio recording SIDs associated with this call | [optional] 
**recordings** | [**[ConversationPbxCallRecording]**](ConversationPbxCallRecording.md) | List of recordings made during the call | [optional] 
**routing** | [**ConversationPbxCallRouting**](ConversationPbxCallRouting.md) |  | [optional] 
**status** | **String** | Final status of the call | [optional] 
**timeline** | [**ConversationPbxCallTimeline**](ConversationPbxCallTimeline.md) |  | [optional] 
**transfers** | [**[ConversationPbxCallTransfer]**](ConversationPbxCallTransfer.md) | List of transfer events during the call | [optional] 
**updated_at_dts** | **String** | Timestamp when the call record was last updated | [optional] 


