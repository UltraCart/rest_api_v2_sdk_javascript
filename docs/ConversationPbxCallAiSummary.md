# UltraCartRestApiV2.ConversationPbxCallAiSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_items** | **[String]** | Action items identified during the call | [optional] 
**call_category** | **String** | Category of the call (e.g. support, sales, billing) | [optional] 
**completion_tokens** | **Number** | Number of output tokens used to generate the summary | [optional] 
**cost** | **Number** | Cost of generating the summary in the specified currency | [optional] 
**cost_currency** | **String** | Currency code for the summary cost (always USD) | [optional] 
**generated_at_dts** | **String** | Timestamp when the summary was generated | [optional] 
**key_topics** | **[String]** | Key topics discussed during the call | [optional] 
**model** | **String** | AI model used to generate the summary (e.g. grok-4.1-fast) | [optional] 
**prompt_tokens** | **Number** | Number of input tokens used to generate the summary | [optional] 
**sentiment** | **String** | Overall sentiment of the call | [optional] 
**summary** | **String** | 2-3 sentence synopsis of the call | [optional] 



## Enum: SentimentEnum


* `positive` (value: `"positive"`)

* `neutral` (value: `"neutral"`)

* `negative` (value: `"negative"`)




