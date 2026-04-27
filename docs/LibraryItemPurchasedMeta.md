# UltraCartRestApiV2.LibraryItemPurchasedMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**most_recent_version** | **Number** | The most recent version of the item purchased | [optional] 
**my_purchased_version** | **Number** | If this is a public item and the merchant has already purchased it, this is their version.  If not yet purchased, this will be zero.  This value will only be populated during a searchPublicItems() call. | [optional] 
**upgrade_available** | **Boolean** | True if the most recent version of this purchase it greater than what was purchased | [optional] 


