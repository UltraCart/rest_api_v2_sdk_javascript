# UltraCartRestApiV2.ConversationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_conversation_participant_arn** | **String** |  | [optional] 
**author_conversation_participant_name** | **String** |  | [optional] 
**body** | **String** |  | [optional] 
**client_message_id** | **String** |  | [optional] 
**conversation_message_uuid** | **String** |  | [optional] 
**delay_until_dts** | **String** | Delay message transmission until date/time | [optional] 
**language_iso_code** | **String** |  | [optional] 
**media_urls** | **[String]** |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**message_dts** | **String** | Message date/time | [optional] 
**message_epoch** | **Number** | Message epoch milliseconds | [optional] 
**message_type** | **String** |  | [optional] 
**translations** | [**[ConversationMessageTranslation]**](ConversationMessageTranslation.md) |  | [optional] 
**transport_statuses** | [**[ConversationMessageTransportStatus]**](ConversationMessageTransportStatus.md) |  | [optional] 
**type** | **String** | Message type | [optional] 
**upload_keys** | **[String]** |  | [optional] 



## Enum: TypeEnum


* `message` (value: `"message"`)

* `notice` (value: `"notice"`)

* `engagement prompt` (value: `"engagement prompt"`)




