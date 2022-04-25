# UltraCartRestApiV2.AdjustInternalCertificateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment_amount** | **Number** | The adjustment amount | [optional] 
**description** | **String** | Description of this adjustment, 50 characters max | [optional] 
**entry_dts** | **String** | Optional timestamp for the adjustment, defaults to current time | [optional] 
**expiration_days** | **Number** | Optional expiration days from the entry_dts when these adjustment becomes worthless | [optional] 
**order_id** | **String** | Optional order id if this adjustment is related to a particular order | [optional] 
**vesting_days** | **Number** | Optional days required for this adjustment to vest | [optional] 


