# UltraCartRestApiV2.ReportFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **String** | A JSON representation of the configuration for this visualization | [optional] 
**connections** | [**[ReportFilterConnection]**](ReportFilterConnection.md) | How this filter connects to the data sources and columns | [optional] 
**name** | **String** |  | [optional] 
**styles** | **String** | A JSON representation of the style configuration for this visualization | [optional] 
**timezone** | **String** | The timezone that the date range is querying on. | [optional] 
**type** | **String** | Type of filter | [optional] 
**uuid** | **String** | Unique UUID assigned to the filter.  Assists when returning values that the filter can use. | [optional] 
**values** | **[String]** | The selected values for the filter.  When used, some type conversion will need to occur. | [optional] 



## Enum: TypeEnum


* `date range` (value: `"date range"`)

* `date comparison` (value: `"date comparison"`)

* `single value` (value: `"single value"`)

* `multiple values` (value: `"multiple values"`)




