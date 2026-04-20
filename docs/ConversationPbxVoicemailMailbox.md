# UltraCartRestApiV2.ConversationPbxVoicemailMailbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_merchant_id** | **String** | Optional child merchant ID this resource is assigned to. Null &#x3D; shared across the linked merchant group. | [optional] 
**conversation_pbx_voicemail_mailbox_uuid** | **String** | Conversation Pbx Voicemail Mailbox UUID | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**send_notices_to_channel** | **String** | Send notices to channel | [optional] 
**send_notices_to_email** | **String** | Send notices to email | [optional] 
**send_notices_to_zoho_desk_department_id** | **String** | Send notices to Zoho Desk department id | [optional] 
**user_id** | **Number** | User Id | [optional] 
**voicemail_followup_play_audio_uuid** | **String** | Voicemail follow play audio UUID | [optional] 
**voicemail_followup_say** | **String** | Voicemail followup say | [optional] 
**voicemail_followup_say_voice** | **String** | Voicemail followup say voice | [optional] 
**voicemail_mailbox_id** | **String** | Voicemail mailbox id | [optional] 
**voicemail_mailbox_type** | **String** | Voicemail mailbox type | [optional] 
**voicemail_prompt_play_audio_uuid** | **String** | Voicemail prompt play audio UUID | [optional] 
**voicemail_prompt_say** | **String** | Voicemail prompt say | [optional] 
**voicemail_prompt_say_voice** | **String** | Voicemail prompt say voice | [optional] 



## Enum: SendNoticesToChannelEnum


* `none` (value: `"none"`)

* `email` (value: `"email"`)

* `zoho_desk_ticket` (value: `"zoho_desk_ticket"`)

* `ultracart_task` (value: `"ultracart_task"`)





## Enum: VoicemailFollowupSayVoiceEnum


* `man` (value: `"man"`)

* `woman` (value: `"woman"`)





## Enum: VoicemailMailboxTypeEnum


* `agent` (value: `"agent"`)

* `shared` (value: `"shared"`)





## Enum: VoicemailPromptSayVoiceEnum


* `man` (value: `"man"`)

* `woman` (value: `"woman"`)




