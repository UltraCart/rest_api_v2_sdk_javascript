# UltraCartRestApiV2.ConversationAgentProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai** | **Boolean** | AI powered chat bot | [optional] 
**ai_capabilities** | [**ConversationVirtualAgentCapabilities**](ConversationVirtualAgentCapabilities.md) |  | [optional] 
**ai_chat_instructions** | **String** | Additional instructions for this AI when handle web chats | [optional] 
**ai_persona** | **String** | Persona of this AI agent | [optional] 
**ai_sms_instructions** | **String** | Additional instructions for this AI when handle SMS messages | [optional] 
**ai_ticket_instructions** | **String** | Additional instructions for this AI when handling ticket draft replies | [optional] 
**chat_limit** | **Number** | The number of engagement chats that can be pushed on them at any given time. | [optional] 
**default_language_iso_code** | **String** | The default language the agent is chatting in | [optional] 
**default_status** | **String** | Default status when the agent loads conversations app. | [optional] 
**display_name** | **String** | An alternate name that the agent wants to use in chat. | [optional] 
**name** | **String** | Their actual user name for profile settings display as placeholder test | [optional] 
**profile_image_upload_key** | **String** | An upload key used to update the profile image. | [optional] 
**profile_image_url** | **String** | Their current profile image URL | [optional] 
**user_id** | **Number** | User ID associated with the agent.  Populated by getAgentProfiles call only. | [optional] 
**zohodesk_classifications** | **[String]** | Restrict this agent to drafting replies only to tickets with these classifications | [optional] 
**zohodesk_departments** | **[String]** | Restrict this agent to drafting replies only to these department ids | [optional] 



## Enum: DefaultStatusEnum


* `available` (value: `"available"`)

* `busy` (value: `"busy"`)

* `unavailable` (value: `"unavailable"`)




