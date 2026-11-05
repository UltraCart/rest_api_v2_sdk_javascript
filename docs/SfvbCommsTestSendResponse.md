# UltraCartRestApiV2.SfvbCommsTestSendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | For an SMS, the message as sent. | [optional] 
**channel** | **String** | email, sms or postcard. | [optional] 
**cost** | **Number** | For a postcard, what this card costs the account. | [optional] 
**dry_run** | **Boolean** | True when nothing was sent. | [optional] 
**notes** | **[String]** | What else happened, such as records created by the test. | [optional] 
**recipient** | **String** | Who it went to, as a user on this account (their login), or the postcard&#39;s city and state. | [optional] 
**sent** | **Boolean** | True when it was sent or mailed.  False on a dry run or when it was skipped. | [optional] 
**skipped_reason** | **String** | Why it wasn&#39;t sent or mailed, when it wasn&#39;t. | [optional] 


