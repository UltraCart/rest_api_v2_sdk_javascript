# UltraCartRestApiV2.SfvbRecording

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_platform** | [**ScreenRecordingAdPlatform**](ScreenRecordingAdPlatform.md) |  | [optional] 
**browser** | **String** | Browser name from the user agent. | [optional] 
**browser_version** | **String** | Browser version from the user agent. | [optional] 
**converted** | **Boolean** | True when the session ended in an order. | [optional] 
**device** | **String** | Device name from the user agent. | [optional] 
**end_timestamp** | **String** | When the session ended, ISO-8601 in UTC. | [optional] 
**geolocation_country** | **String** | Country the visitor was in. | [optional] 
**geolocation_state** | **String** | State or region the visitor was in. | [optional] 
**language_iso_code** | **String** | The browser language. | [optional] 
**order_id** | **String** | The order placed during the session, when there was one. | [optional] 
**os** | **String** | Operating system from the user agent. | [optional] 
**page_view_count** | **Number** | How many pages the visitor viewed. | [optional] 
**page_views** | [**[SfvbRecordingPageView]**](SfvbRecordingPageView.md) | The pages viewed, in order. | [optional] 
**referrer_domain** | **String** | The domain that referred the visitor. | [optional] 
**rrweb_version** | **String** | The rrweb version that recorded the session.  Replay with the same version. | [optional] 
**screen_recording_uuid** | **String** | Identifies the recording. | [optional] 
**start_timestamp** | **String** | When the session started, ISO-8601 in UTC. | [optional] 
**time_on_site** | **Number** | Seconds the visitor spent on the site. | [optional] 
**utm_campaign** | **String** | utm_campaign on arrival. | [optional] 
**utm_source** | **String** | utm_source on arrival. | [optional] 
**window_height** | **Number** | Browser window height in pixels. | [optional] 
**window_width** | **Number** | Browser window width in pixels. | [optional] 


