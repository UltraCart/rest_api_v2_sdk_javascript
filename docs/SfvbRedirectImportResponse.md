# UltraCartRestApiV2.SfvbRedirectImportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied** | **Boolean** | True when the rows were written. | [optional] 
**blocked** | **Number** | How many rows have a blocking finding.  Any blocked row means nothing is applied. | [optional] 
**flagged** | **Number** | How many rows have only warnings. | [optional] 
**limit** | **Number** | The most rules a storefront may have through SFVB. | [optional] 
**plan_hash** | **String** | Send back with the same rows to apply exactly this plan. | [optional] 
**rows** | [**[SfvbRedirectImportRowResult]**](SfvbRedirectImportRowResult.md) | The rows with findings. | [optional] 
**rule_count** | **Number** | How many rules the storefront has, or would have after applying. | [optional] 
**total** | **Number** | How many rows were sent. | [optional] 


