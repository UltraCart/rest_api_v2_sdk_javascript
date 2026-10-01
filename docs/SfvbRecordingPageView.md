# UltraCartRestApiV2.SfvbRecordingPageView

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** | The host name of the address. | [optional] 
**events** | [**[SfvbRecordingEvent]**](SfvbRecordingEvent.md) | Named events on this page view in time order, such as rage clicks and script errors. | [optional] 
**first_event_timestamp** | **String** | When recording of this page view began, ISO-8601 in UTC. | [optional] 
**last_event_timestamp** | **String** | When recording of this page view ended, ISO-8601 in UTC. | [optional] 
**missing_events** | **Boolean** | True when no replay events were stored for this page view. | [optional] 
**params** | [**[SfvbRecordingParameter]**](SfvbRecordingParameter.md) | The query string parameters on the address. | [optional] 
**referrer** | **String** | The referring address, when there was one. | [optional] 
**screen_recording_page_view_uuid** | **String** | Identifies this page view when fetching its replay events. | [optional] 
**time_on_page** | **Number** | Seconds the visitor spent on the page. | [optional] 
**timing_dom_content_loaded** | **Number** | Milliseconds until DOMContentLoaded fired. | [optional] 
**timing_loaded** | **Number** | Milliseconds until the load event fired. | [optional] 
**truncated_events** | **Boolean** | True when the recorder stopped storing events part way through this page view. | [optional] 
**url** | **String** | The address the visitor viewed. | [optional] 


