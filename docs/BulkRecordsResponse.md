# UltraCartRestApiV2.BulkRecordsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**next_cursor** | **String** | Opaque cursor for the next page, null when exhausted | [optional] 
**records** | [**[BulkRecord]**](BulkRecord.md) | Per-record results | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


