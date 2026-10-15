# UltraCartRestApiV2.SfvbEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_dts** | **String** | When it happened, ISO 8601. | [optional] 
**event_id** | **String** | Time-ordered id.  Pass the last one seen as after to replay what came since. | [optional] 
**object_id** | **String** | The id of what changed, such as the approval_id. | [optional] 
**object_type** | **String** | What changed, such as approval or secret_sink. | [optional] 
**storefront_oid** | **Number** | The storefront it concerns.  Empty for merchant-level objects. | [optional] 
**type** | **String** | approval.decided (approved, denied, cancelled or refused by the script review), approval.ready (the review finished and the person can decide) or secret_sink.completed (a person entered the values of a secret request; object_id is the request id). | [optional] 


