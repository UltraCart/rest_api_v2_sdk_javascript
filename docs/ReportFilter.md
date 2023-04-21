# UltraCartRestApiV2.ReportFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**[ReportFilterConnection]**](ReportFilterConnection.md) | How this filter connects to the data sources and columns | [optional] 
**name** | **String** |  | [optional] 
**timezone** | **String** | The timezone that the date range is querying on. | [optional] 
**type** | **String** | Type of filter | [optional] 
**uuid** | **String** | Unique UUID assigned to the filter.  Assists when returning values that the filter can use. | [optional] 
**values** | **[String]** | The selected values for the filter.  When used, some type conversion will need to occur. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `date_range` (value: `"date range"`)

* `date_comparison` (value: `"date comparison"`)

* `single_value` (value: `"single value"`)

* `multiple_values` (value: `"multiple values"`)




