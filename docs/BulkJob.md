# UltraCartRestApiV2.BulkJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_at** | **String** | When the job reached a terminal status | [optional] 
**duplicate_count** | **Number** | Records short-circuited as duplicates | [optional] 
**error_code** | **String** | Job-level failure code when status is failed | [optional] 
**fail_count** | **Number** | Records that failed | [optional] 
**job_id** | **String** | Public-facing job id (uc-bulk-&lt;ulid&gt;) | [optional] 
**object** | **String** | Object type this job processes | [optional] 
**operation** | **String** | Mutation mode this job runs (the bulk surface is write-only) | [optional] 
**processed_records** | **Number** | Records processed so far | [optional] 
**queue_position** | **Number** | Position behind the merchant&#39;s active job (queued jobs only) | [optional] 
**results_summary_url** | **String** | Presigned S3 URL to the full per-record results NDJSON (set when finished) | [optional] 
**started_at** | **String** | When the worker started the job | [optional] 
**status** | **String** | Job status | [optional] 
**submitted_at** | **String** | When the job was submitted | [optional] 
**success_count** | **Number** | Records that landed | [optional] 
**total_records** | **Number** | Total records counted on the first pass (null until counted) | [optional] 



## Enum: ObjectEnum


* `order` (value: `"order"`)

* `customer` (value: `"customer"`)





## Enum: OperationEnum


* `insert` (value: `"insert"`)

* `upsert` (value: `"upsert"`)





## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `in_progress` (value: `"in_progress"`)

* `succeeded` (value: `"succeeded"`)

* `partial_success` (value: `"partial_success"`)

* `failed` (value: `"failed"`)

* `cancelled` (value: `"cancelled"`)




