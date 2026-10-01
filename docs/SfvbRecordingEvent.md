# UltraCartRestApiV2.SfvbRecordingEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The event name, such as rage click, script error, checkout error or add to cart. | [optional] 
**params** | [**[SfvbRecordingParameter]**](SfvbRecordingParameter.md) | The event&#39;s parameters as name and value pairs.  Omitted for input change events, whose values are what the visitor typed. | [optional] 
**sub_text** | **String** | A short human readable summary of the event, when the recorder produced one. | [optional] 
**timestamp** | **String** | When it happened, ISO-8601 in UTC.  Subtract the page view&#39;s first_event_timestamp for the offset into the replay. | [optional] 


