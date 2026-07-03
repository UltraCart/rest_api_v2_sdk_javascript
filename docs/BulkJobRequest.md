# UltraCartRestApiV2.BulkJobRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **String** | Mutation mode - insert (create only) or upsert (create or update). Defaults to insert. This is always a mutation verb â€” the bulk surface writes only and has no read / query mode. upsert is currently supported for customer only. | [optional] 
**s3_key** | **String** | The s3_key returned by the upload-url endpoint | [optional] 
**webhook_secret** | **String** | Optional shared secret echoed in the completion POST&#39;s Authorization header | [optional] 
**webhook_url** | **String** | Optional URL to POST once, on completion | [optional] 



## Enum: OperationEnum


* `insert` (value: `"insert"`)

* `upsert` (value: `"upsert"`)




