# UltraCartRestApiV2.ReportExecuteQueriesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_uuid** | **String** | Unique UUID assigned to this client during the auth.  This will be used to locate the websocket connect id. | [optional] 
**connection_id** | **String** | The websocket connection id that should receive back notices of query completion. | [optional] 
**default_dataset_id** | **String** |  | [optional] 
**default_project_id** | **String** |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**queries** | [**[ReportDataSetQuery]**](ReportDataSetQuery.md) | An array of queries that we want the lambda function to execute. | [optional] 
**request_dts** | **String** | Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results | [optional] 
**security_level** | **String** | Security level to execute report under | [optional] 


<a name="SecurityLevelEnum"></a>
## Enum: SecurityLevelEnum


* `standard` (value: `"standard"`)

* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)




