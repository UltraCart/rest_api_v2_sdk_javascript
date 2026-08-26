# UltraCartRestApiV2.SfvbThemeJobResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete** | **Boolean** | True once the job has stopped, whether it succeeded or failed. | [optional] 
**description** | **String** | Human readable description of the job. | [optional] 
**errorMessage** | **String** | Failure detail.  Populated only when status is error. | [optional] 
**finishedDts** | **String** | When the job stopped.  Null until it does. | [optional] 
**jobId** | **Number** | Job handle.  Poll getSfvbThemeJob with this. | [optional] 
**progress** | **Number** | Percent complete, 0-100. | [optional] 
**progressDescription** | **String** | What the job is doing right now, for example &#39;Duplicating locale text&#39;. | [optional] 
**startedDts** | **String** | When the job started running.  Null until it does. | [optional] 
**status** | **String** | Raw job status. | [optional] 
**submittedDts** | **String** | When the job was queued. | [optional] 
**success** | **Boolean** | True only when the job finished successfully.  Check complete first. | [optional] 
**targetPath** | **String** | Path the new theme was created at.  Returned when the job is started; the theme oid itself is NOT returned, because the job&#39;s product is a plain text report rather than a structured result.  Once the job completes, list themes and match on this path. | [optional] 



## Enum: StatusEnum


* `submitted` (value: `"submitted"`)

* `running` (value: `"running"`)

* `running local` (value: `"running local"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)




