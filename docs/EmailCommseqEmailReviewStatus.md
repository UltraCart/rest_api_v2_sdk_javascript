# UltraCartRestApiV2.EmailCommseqEmailReviewStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decided_dts** | **String** | Date the review was approved or rejected | [optional] 
**esp_commseq_email_review_uuid** | **String** | Review UUID | [optional] 
**esp_commseq_email_uuid** | **String** | Email communication sequence email UUID | [optional] 
**esp_commseq_uuid** | **String** | Email communication sequence UUID | [optional] 
**rejection_reason** | **String** | Why the email was rejected, and what to change. Only present when the state is rejected. | [optional] 
**requested_dts** | **String** | Date the review was requested | [optional] 
**state** | **String** | State of the review | [optional] 
**subject** | **String** | Subject of the email as it was reviewed | [optional] 



## Enum: StateEnum


* `not_submitted` (value: `"not_submitted"`)

* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `rejected` (value: `"rejected"`)




