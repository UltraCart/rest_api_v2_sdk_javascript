# UltraCartRestApiV2.SfvbTrackingHtmlRenderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_sha256** | **String** | The SHA-256 of the HTML rendered, before rendering, as the slot would store it.  For a draft, the hash a tracking_html.put approval binds. | [optional] 
**html** | **String** | The rendered HTML, with order tokens filled and Velocity run, as the receipt would inject it.  Empty when the slot is empty. | [optional] 
**order_id** | **String** | The test order rendered against. | [optional] 
**provides** | **[String]** | The Velocity references the render provides.  Any other reference the receipt page has is left as written. | [optional] 
**size_bytes** | **Number** | The size of html in UTF-8 bytes. | [optional] 
**slot** | **String** | The slot rendered.  Always conversion. | [optional] 
**source** | **String** | stored when the slot&#39;s saved HTML was rendered, draft when the request&#39;s content was. | [optional] 
**warnings** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | What the render left out or could not do, such as tokens it doesn&#39;t fill. | [optional] 



## Enum: SourceEnum


* `stored` (value: `"stored"`)

* `draft` (value: `"draft"`)




