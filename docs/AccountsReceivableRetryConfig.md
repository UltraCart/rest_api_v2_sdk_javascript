# UltraCartRestApiV2.AccountsReceivableRetryConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | True if the retry should run daily.  False puts the retry service into an inactive state for this merchant. | [optional] 
**merchant_id** | **String** | UltraCart merchant ID | [optional] 
**notify_rejections** | **Boolean** | If true, email addresses are notified of rejections. | [optional] 
**notify_successes** | **Boolean** | If true, email addresses are notified of successful charges. | [optional] 
**process_linked_accounts** | **Boolean** | If true, all linked accounts are also processed using the same rules. | [optional] 
**reject_at_end** | **Boolean** | If true, the order is rejected the day after the last configured activity day | [optional] 


