# UltraCartRestApiV2.SfvbPageRefreshResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | A plain sentence saying what happened. | [optional] 
**path** | **String** | The page path the refresh used, after normalization. | [optional] 
**refreshed** | **Boolean** | True when a cached copy was dropped.  The next request renders the page fresh. | [optional] 
**was_cached** | **Boolean** | True when the page had a cache entry. | [optional] 
**was_valid** | **Boolean** | True when that entry was being served from cache. | [optional] 


