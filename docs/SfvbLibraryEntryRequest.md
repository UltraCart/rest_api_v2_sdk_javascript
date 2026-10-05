# UltraCartRestApiV2.SfvbLibraryEntryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The fragment, one widget and its children.  Not a whole container. | [optional] 
**description** | **String** | What the fragment is for, at most 1024 characters. | [optional] 
**name** | **String** | Entry name, at most 100 characters. | [optional] 
**parameters** | [**[SfvbLibraryParameter]**](SfvbLibraryParameter.md) | Named values the fragment expects its installer to supply. | [optional] 
**screenshot** | [**SfvbLibraryScreenshotRequest**](SfvbLibraryScreenshotRequest.md) |  | [optional] 
**share_with_account** | **Boolean** | True to let the other users on this merchant account see the published revision. | [optional] 
**taxonomy** | [**SfvbLibraryTaxonomy**](SfvbLibraryTaxonomy.md) |  | [optional] 


