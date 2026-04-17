# UltraCartRestApiV2.ReportPageVisualization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **String** | A JSON representation of the configuration for this visualization | [optional] 
**data_source_name** | **String** |  | [optional] 
**data_source_uuid** | **String** | A unique identifier assigned to the data source. | [optional] 
**dimensions** | [**[ReportPageVisualizationDimension]**](ReportPageVisualizationDimension.md) |  | [optional] 
**metrics** | [**[ReportPageVisualizationMetric]**](ReportPageVisualizationMetric.md) |  | [optional] 
**name** | **String** |  | [optional] 
**show_comparison** | **Boolean** | True if the visualization should show a comparison based upon the date range | [optional] 
**styles** | **String** | A JSON representation of the style configuration for this visualization | [optional] 
**type** | **String** | Type of visualization | [optional] 
**visualization_uuid** | **String** | A UUID for the visualization | [optional] 



## Enum: TypeEnum


* `score card` (value: `"score card"`)

* `line chart` (value: `"line chart"`)

* `bar chart` (value: `"bar chart"`)

* `text` (value: `"text"`)

* `table` (value: `"table"`)

* `gauge` (value: `"gauge"`)

* `pie chart` (value: `"pie chart"`)




