# UltraCartRestApiV2.PaymentsConfigurationWireTransfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_wire_transfer** | **Boolean** | Master flag indicating this merchant accepts wire transfers | [optional] 
**account_number** | **String** | account_number | [optional] 
**accounting_code** | **String** | Optional Quickbooks accounting code | [optional] 
**bank_address** | **String** | Bank address | [optional] 
**deposit_to_account** | **String** | Optional Quickbooks deposit to account | [optional] 
**intermediate_routing_number** | **String** | Intermediate routing number | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 
**routing_number** | **String** | Routing number | [optional] 
**surcharge_accounting_code** | **String** | If a surcharge is present and this merchant is integrated with Quickbooks, this is the accounting code for the surcharge amount | [optional] 
**surcharge_fee** | **Number** | surcharge_fee | [optional] 
**surcharge_percentage** | **Number** | surcharge_percentage | [optional] 


