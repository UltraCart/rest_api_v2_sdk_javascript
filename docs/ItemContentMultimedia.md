# UltraCartRestApiV2.ItemContentMultimedia

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_url** | **String** | URL where the image can be downloaded from the cloud | [optional] 
**cloud_url_expiration** | **String** | Expiration date of the cloud URL | [optional] 
**code** | **String** | Code assigned to the file | [optional] 
**description** | **String** | Description | [optional] 
**exclude_from_gallery** | **Boolean** | True to exclude from multimedia gallery | [optional] 
**file_name** | **String** | File name | [optional] 
**height** | **Number** | Height of the image | [optional] 
**merchant_item_multimedia_oid** | **Number** | Item multimedia object identifier | [optional] 
**orphan** | **Boolean** | True if the multimedia is an orphan of the active StoreFront themes | [optional] 
**placeholder** | **Boolean** | True if the object is a place holder that can be populated | [optional] 
**temp_multimedia_oid** | **Number** | Temporary multimedia object identifier assigned if uploading new multimedia | [optional] 
**thumbnails** | [**[ItemContentMultimediaThumbnail]**](ItemContentMultimediaThumbnail.md) | Thumbnails of this image | [optional] 
**type** | **String** | Type of file | [optional] 
**url** | **String** | URL to download file (on new multimedia record this can be a URL for UltraCart to fetch) | [optional] 
**width** | **Number** | Width of the image | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Image` (value: `"Image"`)

* `PDF` (value: `"PDF"`)

* `Text` (value: `"Text"`)

* `Unknown` (value: `"Unknown"`)

* `Video` (value: `"Video"`)




