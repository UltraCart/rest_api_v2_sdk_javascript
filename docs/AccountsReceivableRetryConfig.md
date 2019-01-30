# UltraCartRestApiV2.AccountsReceivableRetryConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **String** | The date when trial mode expires.  If this date is reached without exiting trial mode, the service will de-activate. | [optional] 
**allow_process_linked_accounts** | **Boolean** | True if this account has linked accounts that it can process. | [optional] 
**daily_activity_list** | [**[AccountsReceivableRetryDayActivity]**](AccountsReceivableRetryDayActivity.md) | A list of days and what actions should take place on those days after an order reaches accounts receivable | [optional] 
**managed_by_linked_account_merchant_id** | **Boolean** | If not null, this account is managed by the specified parent merchant id. | [optional] 
**merchant_id** | **String** | UltraCart merchant ID | [optional] 
**notify_emails** | **[String]** | A list of email addresses to receive summary notifications from the retry service. | [optional] 
**notify_rejections** | **Boolean** | If true, email addresses are notified of rejections. | [optional] 
**notify_successes** | **Boolean** | If true, email addresses are notified of successful charges. | [optional] 
**process_linked_accounts** | **Boolean** | If true, all linked accounts are also processed using the same rules. | [optional] 
**reject_at_end** | **Boolean** | If true, the order is rejected the day after the last configured activity day | [optional] 
**trialMode** | **Boolean** | True if the account is currently in trial mode.  Set to false to exit trial mode. | [optional] 


