# UltraCartRestApiV2.PaymentsConfigurationAffirm

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_affirm** | **Boolean** | Master flag indicating this merchant accepts Affirm payments | [optional] 
**accounting_code** | **String** | Optional Quickbooks code for this payment method | [optional] 
**deposit_to_account** | **String** | Optional Quickbooks Deposit to Account value | [optional] 
**environment** | **String** | Environment | [optional] 
**financial_product_key** | **String** | Financial product key | [optional] 
**private_api_key** | **String** | Private API key | [optional] 
**public_api_key** | **String** | Public API key | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 


<a name="EnvironmentEnum"></a>
## Enum: EnvironmentEnum


* `Live` (value: `"Live"`)

* `Sandbox` (value: `"Sandbox"`)




