# UltraCartRestApiV2.ReportPageVisualization

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **String** | A JSON representation of the configuration for this visualization | [optional] 
**data_source_name** | **String** |  | [optional] 
**dimensions** | [**[ReportPageVisualizationDimension]**](ReportPageVisualizationDimension.md) |  | [optional] 
**metrics** | [**[ReportPageVisualizationMetric]**](ReportPageVisualizationMetric.md) |  | [optional] 
**name** | **String** |  | [optional] 
**show_comparison** | **Boolean** | True if the visualization should show a comparison based upon the date range | [optional] 
**styles** | **String** | A JSON representation of the style configuration for this visualization | [optional] 
**type** | **String** | Type of visualization | [optional] 
**visualization_uuid** | **String** | A UUID for the visualization | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `score_card` (value: `"score card"`)

* `line_chart` (value: `"line chart"`)

* `bar_chart` (value: `"bar chart"`)

* `text` (value: `"text"`)

* `table` (value: `"table"`)

* `gauge` (value: `"gauge"`)

* `pie_chart` (value: `"pie chart"`)




