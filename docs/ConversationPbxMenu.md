# UltraCartRestApiV2.ConversationPbxMenu

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_direct_extensions** | **Boolean** | If true, the customer is allowed to input direct extensions within this menu | [optional] 
**conversation_pbx_menu_uuid** | **String** | Conversation Pbx Menu UUID | [optional] 
**default_action** | **String** | The default action for this menu | [optional] 
**default_action_target** | **String** | The default action target for this menu | [optional] 
**mappings** | [**[ConversationPbxMenuMapping]**](ConversationPbxMenuMapping.md) | Action mappings for this menu | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**name** | **String** | Menu name | [optional] 
**play_audio_uuid** | **String** | An optional audio clip that plays when a customer enters this menu | [optional] 
**say** | **String** | An optional saying that plays when a customer enters this menu | [optional] 
**say_voice** | **String** | say voice | [optional] 
**timeout** | **Number** | The idle seconds before this menu times out | [optional] 


<a name="SayVoiceEnum"></a>
## Enum: SayVoiceEnum


* `man` (value: `"man"`)

* `woman` (value: `"woman"`)




