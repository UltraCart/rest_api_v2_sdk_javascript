# UltraCartRestApiV2.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** |  | [optional] 
**data_sources** | [**[ReportDataSource]**](ReportDataSource.md) |  | [optional] 
**default_dataset_id** | **String** |  | [optional] 
**default_project_id** | **String** |  | [optional] 
**filters** | [**[ReportFilter]**](ReportFilter.md) |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**pages** | [**[ReportPage]**](ReportPage.md) |  | [optional] 
**report_oid** | **Number** | Object identifier for this report. | [optional] 
**security_level** | **String** | Security level to execute report under | [optional] 


<a name="SecurityLevelEnum"></a>
## Enum: SecurityLevelEnum


* `standard` (value: `"standard"`)

* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)




