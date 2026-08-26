# UltraCartRestApiV2.ConversationPbxPhoneNumberPurchaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Initial action for incoming calls | [optional] 
**action_target** | **String** | Initial action target UUID | [optional] 
**address_sid** | **String** | Address SID if required for regulatory compliance | [optional] 
**friendly_name** | **String** | Friendly name for the phone number | [optional] 
**phone_number** | **String** | Phone number to purchase in E.164 format (from search results) | [optional] 



## Enum: ActionEnum


* `time based` (value: `"time based"`)

* `menu` (value: `"menu"`)

* `queue` (value: `"queue"`)

* `voicemail` (value: `"voicemail"`)

* `agent` (value: `"agent"`)




