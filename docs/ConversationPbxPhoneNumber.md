# UltraCartRestApiV2.ConversationPbxPhoneNumber

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Action | [optional] 
**action_target** | **String** | Action target.  This is the UUID associated with the configuration object of that particular type. | [optional] 
**address_sid** | **String** | Twilio Address SID linked to this phone number for regulatory compliance | [optional] 
**conversation_pbx_phone_number_uuid** | **String** | Conversation Pbx Phone Number UUID | [optional] 
**deletion_protected** | **Boolean** | If true, this phone number cannot be deleted through the API. It must be deleted via the Twilio console. | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**phone_number** | **String** | Phone number | [optional] 



## Enum: ActionEnum


* `time based` (value: `"time based"`)

* `menu` (value: `"menu"`)

* `queue` (value: `"queue"`)

* `voicemail` (value: `"voicemail"`)

* `agent` (value: `"agent"`)




