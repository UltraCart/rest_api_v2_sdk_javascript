# UltraCartRestApiV2.TaxCounty

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_code** | **String** | Accounting code for programs such as QuickBooks | [optional] 
**cities** | [**[TaxCity]**](TaxCity.md) | Cities within this city | [optional] 
**county** | **String** | County | [optional] 
**county_oid** | **Number** | Tax record object identifier used internally by database | [optional] 
**dont_collect_city** | **Boolean** | Flag instructing engine to not collect city tax for this county | [optional] 
**dont_collect_county** | **Boolean** | Flag instructing engine to not collect county tax for this county | [optional] 
**dont_collect_postal_code** | **Boolean** | Flag instructing engine to not collect postal code tax for this county | [optional] 
**state_oid** | **Number** | Tax record object identifier used internally by database | [optional] 
**tax_rate** | **Number** | Tax Rate | [optional] 
**tax_rate_formatted** | **String** | Tax rate formatted | [optional] 


