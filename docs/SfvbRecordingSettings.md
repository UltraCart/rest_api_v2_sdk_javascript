# UltraCartRestApiV2.SfvbRecordingSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_thousand** | **Number** | What 1,000 recorded sessions cost after the trial, in US dollars. | [optional] 
**enabled** | **Boolean** | True when real shoppers&#39; sessions on this storefront are being recorded. | [optional] 
**retention_interval** | **String** | How long recordings are kept, such as 1 year. | [optional] 
**sessions_current_billing_period** | **Number** | Sessions recorded so far in the current billing period. | [optional] 
**sessions_last_billing_period** | **Number** | Sessions recorded in the previous billing period. | [optional] 
**sessions_trial_billing_period** | **Number** | Sessions recorded during the free trial. | [optional] 
**trial_expiration** | **String** | When the free trial ends, as an ISO-8601 time.  Absent until the trial has started. | [optional] 
**trial_expired** | **Boolean** | True when the free trial is over and recorded sessions are billed. | [optional] 
**trial_started** | **Boolean** | True once recording has been turned on at least once, which starts a 14 day free trial. | [optional] 


