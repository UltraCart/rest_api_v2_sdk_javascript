# UltraCartRestApiV2.ReportDataSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_query_uuid** | **String** | A unique identifier assigned to the data set query that is returned. | [optional] 
**data_set_uuid** | **String** | A unique identifier assigned to the data set that is returned. | [optional] 
**destination_table_id** | **String** | The BigQuery destination table id that contains the result. | [optional] 
**error_message** | **String** | Error message if the query failed. | [optional] 
**executed_sql** | **String** |  | [optional] 
**for_object_id** | **String** | An identifier that can be used to help match up the returned data set | [optional] 
**for_object_type** | **String** | The type of object this data set is for | [optional] 
**initial_pages** | [**[ReportDataSetPage]**](ReportDataSetPage.md) | Initial pages returned in the dataset | [optional] 
**max_results** | **Number** | The total number of results | [optional] 
**merchant_id** | **String** | Merchant that owns this data set | [optional] 
**page_count** | **Number** | The total number of pages in the result set | [optional] 
**page_size** | **Number** | The size of the pages | [optional] 
**schema** | [**[ReportDataSetSchema]**](ReportDataSetSchema.md) | The schema associated with the data set. | [optional] 
**security_level** | **String** | Security level this dataset was read from. | [optional] 
**timezone** | **String** |  | [optional] 
**user_data** | **String** | Any other data that needs to be returned with the response to help the UI | [optional] 


<a name="ForObjectTypeEnum"></a>
## Enum: ForObjectTypeEnum


* `schema` (value: `"schema"`)

* `filter` (value: `"filter"`)

* `visualization` (value: `"visualization"`)




