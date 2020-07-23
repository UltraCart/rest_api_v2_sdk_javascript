# UltraCartRestApiV2.CartItemMultimedia

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Code assigned to the multimedia | [optional] 
**description** | **String** | Description | [optional] 
**exclude_from_gallery** | **Boolean** | True if the image should be excluded from galleries | [optional] 
**image_height** | **Number** | Image height | [optional] 
**image_width** | **Number** | Image width | [optional] 
**is_default** | **Boolean** | True if the multimedia is the default for this type | [optional] 
**thumbnails** | [**[CartItemMultimediaThumbnail]**](CartItemMultimediaThumbnail.md) | Thumbnails of the images | [optional] 
**type** | **String** | Type of multimedia | [optional] 
**url** | **String** | URL to view multimedia at | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `image` (value: `"Image"`)

* `PDF` (value: `"PDF"`)

* `text` (value: `"Text"`)

* `unknown` (value: `"Unknown"`)

* `video` (value: `"Video"`)




