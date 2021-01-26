# UltraCartRestApiV2.TaxCity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_code** | **String** | Accounting code for programs such as QuickBooks | [optional] 
**city** | **String** | City | [optional] 
**city_oid** | **Number** | Tax record object identifier used internally by database | [optional] 
**county_oid** | **Number** | Tax record object identifier used internally by database | [optional] 
**dont_collect_city** | **Boolean** | Flag instructing engine to not collect city tax for this city | [optional] 
**dont_collect_postal_code** | **Boolean** | Flag instructing engine to not collect postal code tax for this city | [optional] 
**postal_codes** | [**[TaxPostalCode]**](TaxPostalCode.md) | Postal Codes within this city | [optional] 
**tax_rate** | **Number** | Tax Rate | [optional] 
**tax_rate_formatted** | **String** | Tax rate formatted | [optional] 


