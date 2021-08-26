# UltraCartRestApiV2.PaymentsConfigurationAmazon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_amazon** | **Boolean** | Master flag to determine if this merchant accepts Pay by Amazon | [optional] 
**access_key_id** | **String** | Amazon access key ID | [optional] 
**accounting_code** | **String** | Optional accounting code for use with Quickbooks integrations | [optional] 
**amazon_merchant_id** | **String** | Amazon merchant ID | [optional] 
**deposit_to_account** | **String** | Optional deposit to account field for use with Quickbooks integrations | [optional] 
**environment** | **String** | Environment | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 
**secret_access_key** | **String** | Amazon secret access key | [optional] 


<a name="EnvironmentEnum"></a>
## Enum: EnvironmentEnum


* `Live` (value: `"Live"`)

* `Sandbox` (value: `"Sandbox"`)




