# UltraCartRestApiV2.CustomerEmailSuppressionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_bounce** | **Boolean** | Clear bounce suppression for this address.  Bounce has no per-customer flag; it exists only on the suppression tables. | [optional] 
**clear_global_unsubscribe** | **Boolean** | Clear the global unsubscribe flag.  No-op if it is already clear. | [optional] 
**clear_spam_complaint** | **Boolean** | Clear the spam complaint flag.  Requires a reason.  No-op if it is already clear. | [optional] 
**consent_source** | **String** | How the customer communicated consent. | [optional] 
**reason** | **String** | Justification for the clear.  Required when clearing a spam complaint.  Retained on the audit record. | [optional] 



## Enum: ConsentSourceEnum


* `phone` (value: `"phone"`)

* `email` (value: `"email"`)

* `chat` (value: `"chat"`)

* `in_person` (value: `"in_person"`)

* `written` (value: `"written"`)

* `other` (value: `"other"`)




