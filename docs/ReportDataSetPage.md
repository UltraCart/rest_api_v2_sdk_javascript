# UltraCartRestApiV2.ReportDataSetPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_uuid** | **String** | A unique identifier assigned to the data set that is returned. | [optional] 
**merchant_id** | **String** | Merchant that owns this data set | [optional] 
**next_page_token** | **String** |  | [optional] 
**next_start_index** | **Number** |  | [optional] 
**page_number** | **Number** |  | [optional] 
**row_count** | **Number** |  | [optional] 
**rows** | [**[ReportDataSetRow]**](ReportDataSetRow.md) | Rows returned for the data set | [optional] 
**rows_s3_url** | **String** | Signed S3 URL where the page rows can be downloaded from | [optional] 
**start_index** | **Number** | Zero based index of the starting row | [optional] 
**table_id** | **String** | The BigQuery destination table id that contains the result. | [optional] 


