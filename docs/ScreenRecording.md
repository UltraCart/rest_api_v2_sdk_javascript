# UltraCartRestApiV2.ScreenRecording

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_platform** | [**ScreenRecordingAdPlatform**](ScreenRecordingAdPlatform.md) |  | [optional] 
**analytics_client_oid** | **Number** |  | [optional] 
**analytics_session_dts** | **Number** |  | [optional] 
**analytics_session_oid** | **Number** |  | [optional] 
**communications_campaign_name** | **String** | Campaign Name | [optional] 
**communications_campaign_uuid** | **String** | Campaign UUID | [optional] 
**communications_email_subject** | **String** | Email subject | [optional] 
**communications_email_uuid** | **String** | Email UUID | [optional] 
**communications_flow_name** | **String** | Flow Name | [optional] 
**communications_flow_uuid** | **String** | Flow UUID | [optional] 
**email** | **String** |  | [optional] 
**email_domain** | **String** |  | [optional] 
**end_timestamp** | **String** | Ending timestamp | [optional] 
**esp_customer_uuid** | **String** |  | [optional] 
**events_gz_size** | **Number** |  | [optional] 
**events_json_key** | **String** |  | [optional] 
**favorite** | **Boolean** | True if the user calling the API has favorited this particular screen recording. | [optional] 
**favorites** | **[Number]** | Array of user ids that favorited this particular screen recording. | [optional] 
**geolocation** | [**GeoPoint**](GeoPoint.md) |  | [optional] 
**geolocation_country** | **String** |  | [optional] 
**geolocation_state** | **String** |  | [optional] 
**language_iso_code** | **String** | Language ISO code | [optional] 
**merchant_id** | **String** |  | [optional] 
**merchant_notes** | **String** |  | [optional] 
**missing_external_tracking** | **Boolean** | True if external page view was not tracked | [optional] 
**order_id** | **String** |  | [optional] 
**page_view_count** | **Number** |  | [optional] 
**page_views** | [**[ScreenRecordingPageView]**](ScreenRecordingPageView.md) |  | [optional] 
**preferred_language** | **String** | ISO 3 Letter language code that the customer would prefer | [optional] 
**referrer_domain** | **String** |  | [optional] 
**rrweb_version** | **String** |  | [optional] 
**screen_recording_uuid** | **String** |  | [optional] 
**signed_download_url** | **String** |  | [optional] 
**start_timestamp** | **String** | Starting timestamp | [optional] 
**storefront_oids** | **[Number]** |  | [optional] 
**storefronts** | [**[ScreenRecordingStoreFront]**](ScreenRecordingStoreFront.md) |  | [optional] 
**tags** | **[String]** |  | [optional] 
**time_on_site** | **Number** |  | [optional] 
**ucacid** | **String** |  | [optional] 
**user_agent** | [**ScreenRecordingUserAgent**](ScreenRecordingUserAgent.md) |  | [optional] 
**user_agent_raw** | **String** |  | [optional] 
**user_ip** | **String** |  | [optional] 
**user_properties** | [**[ScreenRecordingUserProperty]**](ScreenRecordingUserProperty.md) |  | [optional] 
**utm_campaign** | **String** | UTM Campaign | [optional] 
**utm_source** | **String** | UTM Source | [optional] 
**visitor_first_seen** | **String** | Timestamp this visitor was first seen | [optional] 
**visitor_number** | **Number** |  | [optional] 
**watched** | **Boolean** |  | [optional] 
**window_height** | **Number** |  | [optional] 
**window_width** | **Number** |  | [optional] 


