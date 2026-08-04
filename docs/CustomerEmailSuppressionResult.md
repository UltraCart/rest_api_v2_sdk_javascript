# UltraCartRestApiV2.CustomerEmailSuppressionResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce_cleared** | **Boolean** | True only if this call actually removed bounce suppression.  Bounce has no per-customer flag, so there is no corresponding state field. | [optional] 
**customer_profile_oid** | **Number** | The customer profile oid that was operated on | [optional] 
**email** | **String** | The email address that was operated on | [optional] 
**esp_suppression_removed** | **Boolean** | True only if every requested suppression surface was successfully cleared.  When false, see esp_warning -- the profile was still modified. | [optional] 
**esp_warning** | **String** | Human readable explanation when esp_suppression_removed is false.  Suitable for display to a support agent. | [optional] 
**global_unsubscribe_cleared** | **Boolean** | True only if this call actually changed the global unsubscribe flag.  False if it was already clear. | [optional] 
**global_unsubscribed** | **Boolean** | Global unsubscribe state AFTER this call | [optional] 
**global_unsubscribed_dts** | **String** | Global unsubscribe timestamp after this call.  Nulled when cleared; the prior value is retained on the audit record. | [optional] 
**spam_complaint** | **Boolean** | Spam complaint state AFTER this call | [optional] 
**spam_complaint_cleared** | **Boolean** | True only if this call actually changed the spam complaint flag.  False if it was already clear. | [optional] 
**spam_complaint_dts** | **String** | Spam complaint timestamp after this call.  Nulled when cleared; the prior value is retained on the audit record. | [optional] 
**suppression_surfaces** | [**EmailSuppressionSurfaces**](EmailSuppressionSurfaces.md) |  | [optional] 


