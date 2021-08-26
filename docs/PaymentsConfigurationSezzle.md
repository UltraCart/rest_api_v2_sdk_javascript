# UltraCartRestApiV2.PaymentsConfigurationSezzle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_sezzle** | **Boolean** | Master flag for this merchant accepting Sezzle payments | [optional] 
**accounting_code** | **String** | Optional Quickbooks code for this payment method | [optional] 
**business_id** | **String** | Business ID | [optional] 
**deposit_to_account** | **String** | Optional Quickbooks Deposit to Account value | [optional] 
**environment** | **String** | Sezzle environment | [optional] 
**private_api_key** | **String** | Private API key | [optional] 
**public_api_key** | **String** | Public API key | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 


<a name="EnvironmentEnum"></a>
## Enum: EnvironmentEnum


* `Live` (value: `"Live"`)

* `Sandbox` (value: `"Sandbox"`)




