# UltraCartRestApiV2.ReportDataSetSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_uuid** | **String** | A unique identifier assigned to the data set that is returned. | [optional] 
**error_message** | **String** | Error message if the query failed. | [optional] 
**for_object_id** | **String** | An identifier that can be used to help match up the returned data set | [optional] 
**for_object_type** | **String** | The type of object this data set is for | [optional] 
**max_results** | **Number** | The total number of results | [optional] 
**schema** | [**[ReportDataSetSchema]**](ReportDataSetSchema.md) | The schema associated with the data set. | [optional] 
**user_data** | **String** | Any other data that needs to be returned with the response to help the UI | [optional] 


<a name="ForObjectTypeEnum"></a>
## Enum: ForObjectTypeEnum


* `schema` (value: `"schema"`)

* `filter` (value: `"filter"`)

* `visualization` (value: `"visualization"`)




