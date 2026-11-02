# UltraCartRestApiV2.SfvbPostcardProofResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**back_html** | **String** | The back as the send renders it, after the name tokens are filled. | [optional] 
**back_image_url** | **String** | The back as the PNG image the print vendor prints from.  A public url. | [optional] 
**back_thumbnail_url** | **String** | The print vendor thumbnail of the back. | [optional] 
**front_html** | **String** | The front as the send renders it, after the name tokens are filled. | [optional] 
**front_image_url** | **String** | The front as the PNG image the print vendor prints from.  A public url. | [optional] 
**front_thumbnail_url** | **String** | The print vendor thumbnail of the front. | [optional] 
**order_source** | **String** | Where the order came from.  test for the order_id given, dummy for a made up one, none for no order. | [optional] 
**postcard_uuid** | **String** | The postcard the step mails. | [optional] 
**rendered_pdf_url** | **String** | The print vendor proof PDF of both sides. | [optional] 
**vendor_rendered** | **Boolean** | True when the print vendor rendered the card, so the image and PDF urls are set. | [optional] 
**warnings** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Where the proof differs from a send, such as a placeholder coupon code or a sample address, and anything that would make a send skip the card. | [optional] 



## Enum: OrderSourceEnum


* `test` (value: `"test"`)

* `dummy` (value: `"dummy"`)

* `none` (value: `"none"`)




