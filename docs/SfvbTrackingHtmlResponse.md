# UltraCartRestApiV2.SfvbTrackingHtmlResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_bytes** | **Number** | The largest HTML the API writes to a slot, in UTF-8 bytes.  The admin allows larger, but UltraCart&#39;s review must read the whole of it. | [optional] 
**slots** | [**[SfvbTrackingHtml]**](SfvbTrackingHtml.md) | tracking and conversion, each with its size and hash_sha256.  Read one slot for its content. | [optional] 
**storefront_oid** | **Number** | The storefront. | [optional] 


