# UltraCartRestApiV2.SfvbCommsEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_last_modified_dts** | **String** | When the email container was last changed (ISO 8601, UTC). | [optional] 
**deleted** | **Boolean** | True when the email was deleted. | [optional] 
**email_uuid** | **String** | The email uuid.  Use it with the email container (owner type email) and with the email render endpoint. | [optional] 
**pending_review** | **Boolean** | True while a change waits for review. | [optional] 
**preview_text** | **String** | The preview text an inbox shows after the subject. | [optional] 
**rejected** | **Boolean** | True when review rejected the email.  Don&#39;t edit it without the merchant. | [optional] 
**requires_review** | **Boolean** | True when a change to this email must be reviewed before it sends. | [optional] 
**step_uuid** | **String** | The step that sends this email. | [optional] 
**subject** | **String** | The subject line. | [optional] 
**transactional** | **Boolean** | True for a transactional email, which skips the marketing footer rules. | [optional] 
**version** | **Number** | The email version. | [optional] 


