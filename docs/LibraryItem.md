# UltraCartRestApiV2.LibraryItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**[LibraryItemAsset]**](LibraryItemAsset.md) |  | [optional] 
**categories** | **[String]** |  | [optional] 
**content** | **String** |  | [optional] 
**content_type** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**industries** | **[String]** |  | [optional] 
**library_item_oid** | **Number** |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**price** | **Number** | The price of the published item.  Null for any private library items. | [optional] 
**price_formatted** | **String** | The formatted price of the published item.  Null for any private library items. | [optional] 
**published** | **Boolean** | True if this library item is a published item (not source) | [optional] 
**published_from_library_item_oid** | **Number** | The source item used to publish this item.  This allows for comparisons between source and published | [optional] 
**published_version** | **Number** | The source version when this item was published.  This allows for out-of-date alerts to be shown when there is a difference between source and published | [optional] 
**purchased** | **Boolean** | True if this library item has been purchased | [optional] 
**purchased_from_library_item_oid** | **Number** | The published item that was purchased to make this item.  This allows for comparisons between published and purchased | [optional] 
**purchased_version** | **Number** | The published version when this item was purchased.  This allows for out-of-date alerts to be shown when there is a difference between published and purchased | [optional] 
**screenshots** | [**[LibraryItemScreenshot]**](LibraryItemScreenshot.md) |  | [optional] 
**share_with_accounts** | [**[LibraryItemAccount]**](LibraryItemAccount.md) |  | [optional] 
**share_with_other_emails** | [**[LibraryItemEmail]**](LibraryItemEmail.md) |  | [optional] 
**shared** | **Boolean** | True if this item is shared from another merchant account | [optional] 
**source** | **Boolean** | True if this library item has been published | [optional] 
**source_to_library_item_oid** | **Number** | This oid points to the published library item, if there is one. | [optional] 
**source_version** | **Number** | The version of this item.  Increment every time the item is saved. | [optional] 
**style** | **String** |  | [optional] 
**times_purchased** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


