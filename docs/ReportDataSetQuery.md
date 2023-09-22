# UltraCartRestApiV2.ReportDataSetQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_results** | **Boolean** | True if a date range filter is provided with comparison date ranges and two results should be returned for the query. | [optional] 
**data_set_query_uuid** | **String** | A unique identifier assigned to the data set query that is returned. | [optional] 
**data_source** | [**ReportDataSource**](ReportDataSource.md) |  | [optional] 
**dimensions** | [**[ReportPageVisualizationDimension]**](ReportPageVisualizationDimension.md) |  | [optional] 
**filter** | [**ReportFilter**](ReportFilter.md) |  | [optional] 
**for_object_id** | **String** | An identifier that can be used to help match up the returned data set | [optional] 
**for_object_type** | **String** | The type of object this data set is for | [optional] 
**metrics** | [**[ReportPageVisualizationMetric]**](ReportPageVisualizationMetric.md) |  | [optional] 
**order_by_columns** | [**[ReportDataSetQueryOrderByColumn]**](ReportDataSetQueryOrderByColumn.md) | The columns to order by in the final result.  If not specified the dimensions will be used | [optional] 
**page_size** | **Number** | Result set page size.  The default value is 200 records.  Max is 10000. | [optional] 
**selected_filters** | [**[ReportFilter]**](ReportFilter.md) |  | [optional] 
**skip_cache** | **Boolean** | True if the 15 minute cache should be skipped. | [optional] 
**user_data** | **String** | Any other data that needs to be returned with the response to help the UI | [optional] 


<a name="ForObjectTypeEnum"></a>
## Enum: ForObjectTypeEnum


* `schema` (value: `"schema"`)

* `filter` (value: `"filter"`)

* `visualization` (value: `"visualization"`)




