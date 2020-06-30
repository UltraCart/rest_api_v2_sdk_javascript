# UltraCartRestApiV2.ApplyLibraryItemResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | Cjson from library item, only populated if this library item was a cjson snippet | [optional] 
**content_type** | **String** | flow, campaign, cjson, or upsell | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**storefront_oid** | **Number** | StoreFront oid where content originates necessary for tracking down relative assets | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**title** | **String** | title of library item, usually the name of the flow or campaign, or description of cjson | [optional] 
**uuid** | **String** | UUID of communication flow or campaign if this library item was a campaign or flow | [optional] 


