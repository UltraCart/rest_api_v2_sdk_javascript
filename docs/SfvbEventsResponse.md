# UltraCartRestApiV2.SfvbEventsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**[SfvbEvent]**](SfvbEvent.md) | Oldest first. | [optional] 
**more** | **Boolean** | True when more events follow.  Ask again with after set to the last event_id. | [optional] 
**resync_required** | **Boolean** | True when the cursor is older than the 72 hours of events kept.  Re-list what you were waiting on instead of replaying. | [optional] 


