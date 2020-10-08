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
**original_object_id** | **String** | This id points to the original object that was added to the library. For flows and campaigns, this is a uuid string.  For upsells, it is an oid integer.  For transactional_emails, it is an email name. | [optional] 
**price** | **Number** | The price of the published item.  Null for any private library items. | [optional] 
**price_formatted** | **String** | The formatted price of the published item.  Null for any private library items. | [optional] 
**published** | **Boolean** | True if this library item is a published item (not source) | [optional] 
**published_from_library_item_oid** | **Number** | The source item used to publish this item.  This allows for comparisons between source and published | [optional] 
**published_version** | **Number** | The source version when this item was published.  This allows for out-of-date alerts to be shown when there is a difference between source and published | [optional] 
**purchased** | **Boolean** | True if this library item has been purchased | [optional] 
**purchased_from_library_item_oid** | **Number** | The published item that was purchased to make this item.  This allows for comparisons between published and purchased | [optional] 
**purchased_version** | **Number** | The published version when this item was purchased.  This allows for out-of-date alerts to be shown when there is a difference between published and purchased | [optional] 
**rejected** | **Boolean** | Any published library reviewed by UltraCart staff for malicious or inappropriate content will have this flag set to true.  This is always false for non-published items | [optional] 
**rejected_reason** | **String** | Any rejected published item will have this field populated with the reason. | [optional] 
**reviewed** | **Boolean** | Any published library items must be reviewed by UltraCart staff for malicious content.  This flag shows the status of that review.  This is always false for non-published items | [optional] 
**reviewed_dts** | **Object** | This is the timestamp for a published items formal review by UltraCart staff for malicious content. | [optional] 
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


