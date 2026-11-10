# UltraCartRestApiV2.SfvbTrackingCheckPlanGate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **String** | Where the gate applies.  all, eea or non_us. | [optional] 
**service** | **String** | The cookie service the consent gate is stored under, for example openai or facebook (#1959). | [optional] 
**type** | **String** | The consent category that must be granted.  Statistics, Preferences or Marketing. | [optional] 



## Enum: RegionEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)





## Enum: TypeEnum


* `Statistics` (value: `"Statistics"`)

* `Preferences` (value: `"Preferences"`)

* `Marketing` (value: `"Marketing"`)




