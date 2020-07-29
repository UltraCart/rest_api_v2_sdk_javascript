# UltraCartRestApiV2.AddLibraryItemRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | Cjson to be added to library | [optional] 
**content_type** | **String** | flow, campaign, cjson, email, transactional_email or upsell | [optional] 
**storefront_oid** | **Number** | StoreFront oid where content originates necessary for tracking down relative assets | [optional] 
**title** | **String** | title of library item, usually the name of the flow or campaign, or description of cjson | [optional] 
**uuid** | **String** | UUID of communication flow or campaign, null if this item is neither | [optional] 


